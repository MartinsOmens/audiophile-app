/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as mutations_function from "../mutations/function.js";
import type * as mutations_mutation from "../mutations/mutation.js";
import type * as orderConfirmation from "../orderConfirmation.js";
import type * as orders from "../orders.js";
import type * as sendEmail from "../sendEmail.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "mutations/function": typeof mutations_function;
  "mutations/mutation": typeof mutations_mutation;
  orderConfirmation: typeof orderConfirmation;
  orders: typeof orders;
  sendEmail: typeof sendEmail;
}>;
declare const fullApiWithMounts: typeof fullApi;

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "internal">
>;

export declare const components: {};
