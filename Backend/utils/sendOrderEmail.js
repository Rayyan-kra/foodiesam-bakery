const sendOrderEmail = async (order) => {
  const itemsText = order.items
    .map((item) => {
      return `
Product: ${item.name}
Weight: ${item.weight} KG
Quantity: ${item.quantity}
Delivery Date: ${item.deliveryDate}
Delivery Time: ${item.deliveryTime}
Price: ₹${item.price}
`;
    })
    .join("\n");

  const message = `
New Foodiesam Order

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

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: "Foodiesam",
        email: process.env.EMAIL_USER,
      },
      to: [
        {
          email: process.env.FAMILY_EMAIL,
        },
      ],
      subject: `New Foodiesam Order - ${order._id}`,
      textContent: message,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData);
  }

  console.log("Order email sent successfully");
};

module.exports = sendOrderEmail;
