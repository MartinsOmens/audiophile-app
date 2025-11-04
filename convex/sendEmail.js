import { action } from "./_generated/server";
import { Resend } from "resend";
import { v } from "convex/values";
import { orderConfirmationTemplate } from "./orderConfirmation.js"; // ✅ correct import path

export const sendOrderEmail = action({
  args: {
    to: v.string(),
    subject: v.string(),
    order: v.object({
      customer: v.object({
        name: v.string(),
        email: v.string(),
        phone: v.optional(v.string()),
      }),
      // ✅ Make shipping optional so it won't break
      shipping: v.optional(
        v.object({
          address: v.string(),
          zip: v.string(),
          city: v.string(),
          country: v.string(),
        })
      ),
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
    }),
  },

  handler: async (ctx, { to, subject, order }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      // ✅ Generate the email HTML from your external template file
      const html = orderConfirmationTemplate(order);

      // ✅ Send email using Resend
      const data = await resend.emails.send({
        from: "onboarding@resend.dev", // Change this once you verify a domain
        to,
        subject,
        html,
      });

      console.log("✅ Email sent successfully:", data);
      return { success: true, data };
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      return { success: false, error: error.message };
    }
  },
});
