import { mutation } from "../_generated/server";
import { sendOrderConfirmationEmail } from "./function";

/**
 * Create a new order in Convex and (optionally) send a confirmation email
 */
export const createOrder = mutation(async ({ db }, order) => {
  // Insert the order into the "orders" table
  const newOrder = await db.insert("orders", {
    customer: order.customer,
    shipping: order.shipping,
    items: order.items,
    totals: order.totals,
    status: "Pending",
    createdAt: Date.now(),
  });

  // Call the (stubbed) email function
  await sendOrderConfirmationEmail(newOrder);

  // Return the new order document
  return newOrder;
});
