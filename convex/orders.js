// import { v } from "convex/values";
// import { mutation, action } from "./_generated/server";
// import { internal } from "./_generated/api";

// export const create = mutation({
//   args: {
//     customer: v.object({
//       name: v.string(),
//       email: v.string(),
//       phone: v.optional(v.string()),
//     }),
//     shipping: v.object({
//       address: v.string(),
//       city: v.string(),
//       zip: v.string(),
//       country: v.string(),
//     }),
//     items: v.array(
//       v.object({
//         id: v.string(),
//         name: v.string(),
//         price: v.number(),
//         quantity: v.number(),
//       })
//     ),
//     totals: v.object({
//       subtotal: v.number(),
//       shipping: v.number(),
//       taxes: v.number(),
//       grandTotal: v.number(),
//     }),
//   },
//   handler: async (ctx, args) => {
//     const orderId = await ctx.db.insert("orders", {
//       customer: args.customer,
//       shipping: args.shipping,
//       items: args.items,
//       totals: args.totals,
//       status: "Pending",
//       createdAt: Date.now(),
//     });

//     // ✅ Trigger email sending asynchronously
//     await ctx.scheduler.runAfter(0, internal.sendEmail.sendOrderEmail, {
//       to: args.customer.email,
//       subject: "Order Confirmation - Thank you for shopping!",
//       order: {
//         customer: args.customer,
//         items: args.items,
//         totals: args.totals,
//       },
//     });

//     return orderId;
//   },
// });


import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const create = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      zip: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      customer: args.customer,
      shipping: args.shipping,
      items: args.items,
      totals: args.totals,
      status: "Pending",
      createdAt: Date.now(),
    });

    // Schedule the email sending asynchronously (non-blocking)
    await ctx.scheduler.runAfter(0, internal.sendEmail.sendOrderEmail, {
      to: args.customer.email,
      subject: `Order Confirmation - ${args.customer.name}`,
      order: {
        customer: args.customer,
        items: args.items,
        totals: args.totals,
      },
    });

    console.log("📦 Order created and email scheduled for:", args.customer.email);
    return orderId;
  },
});
