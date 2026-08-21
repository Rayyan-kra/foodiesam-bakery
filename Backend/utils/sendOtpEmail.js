const sendOtpEmail = async (email, otp) => {
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
          email: email,
        },
      ],
      subject: "Bakery Email Verification",
      textContent: `Your OTP is: ${otp}`,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData);
  }
};

module.exports = sendOtpEmail;
