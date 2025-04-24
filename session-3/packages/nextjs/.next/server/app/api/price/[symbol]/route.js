/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/price/[symbol]/route";
exports.ids = ["app/api/price/[symbol]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/price/[symbol]/route.ts":
/*!*****************************************!*\
  !*** ./app/api/price/[symbol]/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nasync function GET(_, props) {\n    const params = await props.params;\n    const { symbol } = params;\n    let apiUrl = \"\";\n    if (symbol === \"ETH\") {\n        apiUrl = \"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd\";\n    } else if (symbol === \"STRK\") {\n        apiUrl = \"https://api.coingecko.com/api/v3/simple/price?ids=starknet&vs_currencies=usd\";\n    } else {\n        return Response.json({\n            ethereum: {\n                usd: 0\n            },\n            starknet: {\n                usd: 0\n            }\n        });\n    }\n    try {\n        const response = await fetch(apiUrl);\n        if (!response.ok) {\n            throw new Error(`coingecko response status: ${response.status}`);\n        }\n        const json = await response.json();\n        return Response.json(json);\n    } catch (e) {\n        return Response.json({\n            ethereum: {\n                usd: 0\n            },\n            starknet: {\n                usd: 0\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByaWNlL1tzeW1ib2xdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSxJQUNwQkMsQ0FBVSxFQUNWQyxLQUE4QztJQUU5QyxNQUFNQyxTQUFTLE1BQU1ELE1BQU1DLE1BQU07SUFFakMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Q7SUFFbkIsSUFBSUUsU0FBUztJQUNiLElBQUlELFdBQVcsT0FBTztRQUNwQkMsU0FDRTtJQUNKLE9BQU8sSUFBSUQsV0FBVyxRQUFRO1FBQzVCQyxTQUNFO0lBQ0osT0FBTztRQUNMLE9BQU9DLFNBQVNDLElBQUksQ0FBQztZQUNuQkMsVUFBVTtnQkFBRUMsS0FBSztZQUFFO1lBQ25CQyxVQUFVO2dCQUFFRCxLQUFLO1lBQUU7UUFDckI7SUFDRjtJQUNBLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU1QO1FBQzdCLElBQUksQ0FBQ00sU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFSCxTQUFTSSxNQUFNLEVBQUU7UUFDakU7UUFDQSxNQUFNUixPQUFPLE1BQU1JLFNBQVNKLElBQUk7UUFDaEMsT0FBT0QsU0FBU0MsSUFBSSxDQUFDQTtJQUN2QixFQUFFLE9BQU9TLEdBQUc7UUFDVixPQUFPVixTQUFTQyxJQUFJLENBQUM7WUFDbkJDLFVBQVU7Z0JBQUVDLEtBQUs7WUFBRTtZQUNuQkMsVUFBVTtnQkFBRUQsS0FBSztZQUFFO1FBQ3JCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2thbmFzL0Rlc2t0b3Avd2ViMy9CYXNlY2FtcC0xMi9zZXNzaW9uLTMvcGFja2FnZXMvbmV4dGpzL2FwcC9hcGkvcHJpY2UvW3N5bWJvbF0vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChcbiAgXzogUmVxdWVzdCxcbiAgcHJvcHM6IHsgcGFyYW1zOiBQcm9taXNlPHsgc3ltYm9sOiBzdHJpbmcgfT4gfSxcbikge1xuICBjb25zdCBwYXJhbXMgPSBhd2FpdCBwcm9wcy5wYXJhbXM7XG5cbiAgY29uc3QgeyBzeW1ib2wgfSA9IHBhcmFtcztcblxuICBsZXQgYXBpVXJsID0gXCJcIjtcbiAgaWYgKHN5bWJvbCA9PT0gXCJFVEhcIikge1xuICAgIGFwaVVybCA9XG4gICAgICBcImh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL3NpbXBsZS9wcmljZT9pZHM9ZXRoZXJldW0mdnNfY3VycmVuY2llcz11c2RcIjtcbiAgfSBlbHNlIGlmIChzeW1ib2wgPT09IFwiU1RSS1wiKSB7XG4gICAgYXBpVXJsID1cbiAgICAgIFwiaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvc2ltcGxlL3ByaWNlP2lkcz1zdGFya25ldCZ2c19jdXJyZW5jaWVzPXVzZFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcbiAgICAgIGV0aGVyZXVtOiB7IHVzZDogMCB9LFxuICAgICAgc3RhcmtuZXQ6IHsgdXNkOiAwIH0sXG4gICAgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb2luZ2Vja28gcmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihqc29uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcbiAgICAgIGV0aGVyZXVtOiB7IHVzZDogMCB9LFxuICAgICAgc3RhcmtuZXQ6IHsgdXNkOiAwIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHRVQiLCJfIiwicHJvcHMiLCJwYXJhbXMiLCJzeW1ib2wiLCJhcGlVcmwiLCJSZXNwb25zZSIsImpzb24iLCJldGhlcmV1bSIsInVzZCIsInN0YXJrbmV0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/price/[symbol]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kanas_Desktop_web3_Basecamp_12_session_3_packages_nextjs_app_api_price_symbol_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/price/[symbol]/route.ts */ \"(rsc)/./app/api/price/[symbol]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/price/[symbol]/route\",\n        pathname: \"/api/price/[symbol]\",\n        filename: \"route\",\n        bundlePath: \"app/api/price/[symbol]/route\"\n    },\n    resolvedPagePath: \"/Users/kanas/Desktop/web3/Basecamp-12/session-3/packages/nextjs/app/api/price/[symbol]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kanas_Desktop_web3_Basecamp_12_session_3_packages_nextjs_app_api_price_symbol_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcmljZSUyRiU1QnN5bWJvbCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJpY2UlMkYlNUJzeW1ib2wlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcmljZSUyRiU1QnN5bWJvbCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmthbmFzJTJGRGVza3RvcCUyRndlYjMlMkZCYXNlY2FtcC0xMiUyRnNlc3Npb24tMyUyRnBhY2thZ2VzJTJGbmV4dGpzJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmthbmFzJTJGRGVza3RvcCUyRndlYjMlMkZCYXNlY2FtcC0xMiUyRnNlc3Npb24tMyUyRnBhY2thZ2VzJTJGbmV4dGpzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQztBQUM1SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2thbmFzL0Rlc2t0b3Avd2ViMy9CYXNlY2FtcC0xMi9zZXNzaW9uLTMvcGFja2FnZXMvbmV4dGpzL2FwcC9hcGkvcHJpY2UvW3N5bWJvbF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ByaWNlL1tzeW1ib2xdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJpY2UvW3N5bWJvbF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByaWNlL1tzeW1ib2xdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2thbmFzL0Rlc2t0b3Avd2ViMy9CYXNlY2FtcC0xMi9zZXNzaW9uLTMvcGFja2FnZXMvbmV4dGpzL2FwcC9hcGkvcHJpY2UvW3N5bWJvbF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkanas%2FDesktop%2Fweb3%2FBasecamp-12%2Fsession-3%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();