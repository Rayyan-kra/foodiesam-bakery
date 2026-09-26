# 🍰 FoodieSam Bakery - Full Stack E-Commerce Website

FoodieSam Bakery is a full-stack bakery ordering web application that allows customers to browse bakery products, view product details, customize their orders, verify their email using OTP, and place orders online.

The project is built using **React, Node.js, Express.js, and MongoDB** and is deployed for real-world use.

## 🌐 Live Demo

https://foodiesam-bakery.vercel.app/

## 📸 Screenshots

### Home Page

![FoodieSam Home Page](screenshots/homepage.png)

### Products Page

![FoodieSam Products Page](screenshots/products.png)

### Checkout Page

![FoodieSam Checkout Page](screenshots/checkout.png)

## ✨ Features

- Browse bakery products and cakes
- View detailed product information
- Select cake weight and quantity
- Choose delivery date and time slot
- Add products to cart
- Prevent duplicate cart items
- Customer address and checkout system
- Email OTP verification
- Multiple payment method selection
- Place and store customer orders
- Automatic order email notification
- Dynamic product pricing
- Responsive user interface
- Loading skeletons while products are fetched

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

### Services & Deployment
- Brevo Email API
- MongoDB Atlas
- Vercel
- Render

## 📁 Project Structure

```text
foodiesam-bakery/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── package.json
│
└── README.md
```

## 🔄 Application Flow

```text
Browse Products
      ↓
View Product
      ↓
Select Weight & Quantity
      ↓
Choose Delivery Date & Time
      ↓
Add to Cart
      ↓
Checkout
      ↓
Email OTP Verification
      ↓
Select Payment Method
      ↓
Place Order
      ↓
Order Stored in MongoDB
      ↓
Order Notification Email
```

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
MONGO_URI=your_mongodb_connection_string
BREVO_API_KEY=your_brevo_api_key
FAMILY_EMAIL=your_order_notification_email
```

Never commit your `.env` file or API keys to GitHub.

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/Rayyan-kra/foodiesam-bakery.git
cd foodiesam-bakery
```

### Backend

```bash
cd Backend
npm install
npm start
```

### Frontend

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

## 🔌 API

The backend provides REST APIs for operations such as:

- Fetching bakery products
- Fetching individual product details
- OTP verification
- Creating customer orders
- Storing orders in MongoDB

## 🎯 Purpose

This project was developed as a practical full-stack application for a bakery business. It demonstrates frontend development, backend API development, database integration, authentication/verification flow, order management, email integration, and production deployment.

## 👨‍💻 Developer

**Rayyan Chaman Ansari**

B.Tech Computer Science & Engineering

GitHub: https://github.com/Rayyan-kra
