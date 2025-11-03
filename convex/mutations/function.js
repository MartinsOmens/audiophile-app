/**
 * Stubbed email sender for development.
 * This version does NOT use SendGrid and will not actually send an email.
 * It simply logs to the console so you can confirm the mutation works.
 */

export async function sendOrderConfirmationEmail(order) {
  const { customer, items, totals, shipping, createdAt, _id } = order;

  const orderDate = new Date(createdAt).toLocaleString();

  const itemsSummary = items
    .map(
      (item) => `${item.quantity} × ${item.name} ($${item.price.toFixed(2)})`
    )
    .join(", ");

  console.log("===========================================");
  console.log("📦 Simulated order confirmation email sent!");
  console.log(`To: ${customer.email}`);
  console.log(`Customer: ${customer.name}`);
  console.log(`Order ID: ${_id}`);
  console.log(`Order Date: ${orderDate}`);
  console.log("Items:", itemsSummary);
  console.log(`Total: $${totals.grandTotal.toFixed(2)}`);
  console.log("Shipping to:", `${shipping.address}, ${shipping.city}`);
  console.log("===========================================");
}
