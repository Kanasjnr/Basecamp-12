#[starknet::interface]
pub trait ICounter<TContractState> {
    fn get_counter(self: @TContractState) -> u32;
    fn increase_counter(ref self: TContractState);
    fn decrease_counter(ref self: TContractState);
    fn reset_counter(ref self: TContractState);
}

#[starknet::contract]
pub mod Counter {
    use openzeppelin_access::ownable::OwnableComponent;
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess};
    use starknet::{ContractAddress};
    use starknet::{get_caller_address};
    use super::{ICounter};

    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        counter: u32,
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {
        Increased: Increased,
        Decreased: Decreased,
        OwnableEvent: OwnableComponent::Event,
    }

    #[derive(Drop, starknet::Event)]
    pub struct Increased {
        pub account: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct Decreased {
        pub account: ContractAddress,
    }

    #[constructor]
    fn constructor(ref self: ContractState, init_value: u32, owner: ContractAddress) {
        self.counter.write(init_value);
        self.ownable.initializer(owner);
    }

    #[abi(embed_v0)]
    impl CounterImpl of ICounter<ContractState> {
        fn get_counter(self: @ContractState) -> u32 {
            self.counter.read()
        }

        fn increase_counter(ref self: ContractState) {
            let new_value = self.counter.read() + 1;
            self.counter.write(new_value);
            // event
            self.emit(Increased { account: get_caller_address() });
        }

        fn decrease_counter(ref self: ContractState) {
            let old_value = self.counter.read();
            assert(old_value > 0, 'Counter cannot be negative');
            let new_value = old_value - 1;
            self.counter.write(new_value);
            // event
            self.emit(Decreased { account: get_caller_address() });
        }

        fn reset_counter(ref self: ContractState) {
            // only owner can reset
            self.ownable.assert_only_owner();
            self.counter.write(0);
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;
        use starknet::testing::{set_caller_address};
        use snforge_std::{declare, ContractClassTrait, start_prank, stop_prank};

        #[test]
        #[feature("deprecated-starknet-consts")]
        fn test_counter_initialization() {
            let owner = starknet::contract_address_const::<0x123>();
            let init_value = 42;
            
            let mut contract = contract_state_for_testing();
            contract.constructor(init_value, owner);
            
            let dispatcher = ICounterDispatcher { contract_address: contract.contract_address };
            let counter = dispatcher.get_counter();
            assert(counter == init_value, 'Counter should be initialized with the correct value');
        }

        #[test]
        #[feature("deprecated-starknet-consts")]
        fn test_increase_counter() {
            let owner = starknet::contract_address_const::<0x123>();
            let init_value = 0;
            
            let mut contract = contract_state_for_testing();
            contract.constructor(init_value, owner);
            
            let mut dispatcher = ICounterDispatcher { contract_address: contract.contract_address };
            dispatcher.increase_counter();
            
            let counter = dispatcher.get_counter();
            assert(counter == 1, 'Counter should be increased by 1');
        }

        #[test]
        #[feature("deprecated-starknet-consts")]
        fn test_decrease_counter() {
            let owner = starknet::contract_address_const::<0x123>();
            let init_value = 1;
            
            let mut contract = contract_state_for_testing();
            contract.constructor(init_value, owner);
            
            let mut dispatcher = ICounterDispatcher { contract_address: contract.contract_address };
            dispatcher.decrease_counter();
            
            let counter = dispatcher.get_counter();
            assert(counter == 0, 'Counter should be decreased by 1');
        }

        #[test]
        #[feature("deprecated-starknet-consts")]
        fn test_decrease_counter_below_zero() {
            let owner = starknet::contract_address_const::<0x123>();
            let init_value = 0;
            
            let mut contract = contract_state_for_testing();
            contract.constructor(init_value, owner);
            
            let mut dispatcher = ICounterDispatcher { contract_address: contract.contract_address };
            let mut success = false;
            match dispatcher.decrease_counter() {
                Ok(_) => {},
                Err(_) => { success = true; }
            }
            assert(success, 'Counter should not be able to go below zero');
        }

        #[test]
        #[feature("deprecated-starknet-consts")]
        fn test_reset_counter() {
            let owner = starknet::contract_address_const::<0x123>();
            let init_value = 42;
            
            let mut contract = contract_state_for_testing();
            contract.constructor(init_value, owner);
            
            let mut dispatcher = ICounterDispatcher { contract_address: contract.contract_address };
            
            // Set caller as owner
            start_prank(contract.contract_address, owner);
            dispatcher.reset_counter();
            stop_prank(contract.contract_address);
            
            let counter = dispatcher.get_counter();
            assert(counter == 0, 'Counter should be reset to 0');
        }

        #[test]
        #[feature("deprecated-starknet-consts")]
        fn test_reset_counter_not_owner() {
            let owner = starknet::contract_address_const::<0x123>();
            let not_owner = starknet::contract_address_const::<0x456>();
            let init_value = 42;
            
            let mut contract = contract_state_for_testing();
            contract.constructor(init_value, owner);
            
            let mut dispatcher = ICounterDispatcher { contract_address: contract.contract_address };
            
            // Set caller as not owner
            start_prank(contract.contract_address, not_owner);
            let mut success = false;
            match dispatcher.reset_counter() {
                Ok(_) => {},
                Err(_) => { success = true; }
            }
            stop_prank(contract.contract_address);
            assert(success, 'Non-owner should not be able to reset counter');
        }
    }
}
