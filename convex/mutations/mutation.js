// import { mutation } from "../_generated/server";
// import { sendOrderConfirmationEmail } from "../../src/utils/function";

// export const createOrder = mutation(async ({ db }, order) => {
//   const newOrder = await db.insert("orders", {
//     customer: order.customer,
//     shipping: order.shipping,
//     items: order.items,
//     totals: order.totals,
//     status: "Pending",
//     createdAt: Date.now(),
//   });

//   // await sendOrderConfirmationEmail(newOrder);

//   return newOrder;
// });
