const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOtpEmail = async (email, otp) => {
  await resend.emails.send({
    from: "Foodiesam <onboarding@resend.dev>",
    to: email,
    subject: "Bakery Email Verification",
    text: `Your OTP is: ${otp}`,
  });
};

module.exports = sendOtpEmail;
