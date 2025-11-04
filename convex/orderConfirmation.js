export function orderConfirmationTemplate(order) {
  return `
  <html>
    <body style="font-family: Arial, sans-serif; background: #fafafa; padding: 20px; margin: 0;">
      <div style="
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 0 6px rgba(0,0,0,0.1);
      ">
        <h2 style="color: #D87D4A; margin-bottom: 10px;">Hi ${order.customer.name},</h2>
        <p>Thank you for your order! We're preparing your items for shipment.</p>

        <h3 style="margin-top: 24px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${order.items
            .map(
              (item) => `
              <tr>
                <td style="padding: 6px 0;">${item.name} (x${item.quantity})</td>
                <td style="text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
              </tr>`
            )
            .join("")}

          <tr>
            <td colspan="2" style="padding-top: 10px; border-top: 1px solid #ddd;"></td>
          </tr>

          <tr>
            <td style="padding-top: 8px; font-weight: bold;">Total</td>
            <td style="padding-top: 8px; text-align: right; font-weight: bold;">
              $${order.totals.grandTotal.toFixed(2)}
            </td>
          </tr>
        </table>

        <p style="margin-top: 30px;">We’ll notify you once your order ships.</p>

        <p style="color: #888; font-size: 12px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 8px;">
          Audiophile — Premium Sound Equipment
        </p>
      </div>
    </body>
  </html>`;
}
