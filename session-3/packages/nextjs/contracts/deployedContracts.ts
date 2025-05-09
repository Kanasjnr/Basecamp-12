/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    Counter: {
      address:
        "0x738f9040356ab4f1c6f5e02ed9959f77ea8b43afb0893730676ddea0cceaac5",
      abi: [
        {
          type: "impl",
          name: "CounterImpl",
          interface_name: "contracts::Counter::ICounter",
        },
        {
          type: "interface",
          name: "contracts::Counter::ICounter",
          items: [
            {
              type: "function",
              name: "get_counter",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "increase_counter",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "decrease_counter",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "reset_counter",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableImpl",
          interface_name: "openzeppelin_access::ownable::interface::IOwnable",
        },
        {
          type: "interface",
          name: "openzeppelin_access::ownable::interface::IOwnable",
          items: [
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_ownership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "init_value",
              type: "core::integer::u32",
            },
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Counter::Counter::Increased",
          kind: "struct",
          members: [
            {
              name: "account",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "value",
              type: "core::integer::u32",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Counter::Counter::Decreased",
          kind: "struct",
          members: [
            {
              name: "account",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "value",
              type: "core::integer::u32",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
              kind: "nested",
            },
            {
              name: "OwnershipTransferStarted",
              type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Counter::Counter::Event",
          kind: "enum",
          variants: [
            {
              name: "Increased",
              type: "contracts::Counter::Counter::Increased",
              kind: "nested",
            },
            {
              name: "Decreased",
              type: "contracts::Counter::Counter::Decreased",
              kind: "nested",
            },
            {
              name: "OwnableEvent",
              type: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
              kind: "nested",
            },
          ],
        },
      ],
      classHash:
        "0x11e6f440787033f19ed2a4a452f3a7176e9003d9644fbb575e8524174bb2957",
    },
  },
} as const;

export default deployedContracts;
