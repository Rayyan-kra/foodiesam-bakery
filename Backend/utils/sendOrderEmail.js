const nodemailer = require("nodemailer");

const sendOrderEmail = async (order) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsText = order.items
    .map((item) => {
      return `
Cake: ${item.name}
Weight: ${item.weight} KG
Quantity: ${item.quantity}
Delivery Date: ${item.deliveryDate}
Delivery Time: ${item.deliveryTime}
Price: ₹${item.price}
`;
    })
    .join("\n");

  const message = `
New Bakery Order

Order ID: ${order._id}

Customer: ${order.address.name}
Phone: ${order.phone}

Address:
${order.address.address}
${order.address.city}
${order.address.pincode}

Items:
${itemsText}

Total: ₹${order.totalPrice}

Payment Method: ${order.paymentMethod}
Payment Status: ${order.paymentStatus || "Pending"}

Order Status: ${order.status}
`;

const info = await transporter.sendMail({
  from: `"Foodiesam" <${process.env.EMAIL_USER}>`,
  to: process.env.FAMILY_EMAIL,
  subject: `New Bakery Order - ${order._id}`,
  text: message,
});

console.log("Email sent successfully:", info.response);
};

module.exports = sendOrderEmail;
