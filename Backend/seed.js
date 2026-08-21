const mongoose = require("mongoose");
require("dotenv").config();

const Cake = require("./models/Cake");

const cakes = [
  {
    name: "Almond Cake",
    price: 350,
    image: "/products/Almond Cake.jpg",
    description: "Soft homemade almond cake topped with sliced almonds.",
  },
  {
    name: "Banana Bread",
    price: 350,
    image: "/products/Banana Bread.jpg",
    description: "Soft and moist homemade banana bread.",
  },
  {
    name: "Choco Banana Walnut Cake",
    price: 400,
    image: "/products/Choco Banana Walnut Cake.jpg",
    description: "Rich banana cake with chocolate and crunchy walnuts.",
  },
  {
    name: "Coconut Muffins",
    price: 250,
    image: "/products/Coconut muffins.jpg",
    description: "Soft coconut muffins with a light coconut topping.",
  },
  {
    name: "Eggless Vanilla Muffins",
    price: 250,
    image: "/products/Eggless Vanilla Muffins.jpg",
    description:
      "Soft eggless vanilla muffins with chocolate chips and sprinkles.",
  },
  {
    name: "Elegant White Vintage Cake",
    price: 700,
    image: "/products/Elegant white vintage cake.jpg",
    description: "Elegant white cream cake with classic vintage piping.",
  },
  {
    name: "Football White Vintage Cake",
    price: 850,
    image: "/products/Football white vintage cake.jpg",
    description:
      "Football themed celebration cake with a beautiful white finish.",
  },
  {
    name: "Lemon Cake Loaf",
    price: 350,
    image: "/products/Lemon Cake loaf.jpg",
    description: "Fresh lemon loaf finished with a sweet lemon glaze.",
  },
  {
    name: "Nankhatai",
    price: 250,
    image: "/products/Nankhatai.jpg",
    description: "Traditional buttery Nankhatai topped with dry fruits.",
  },
  {
    name: "Oats & Jaggery Cookies",
    price: 250,
    image: "/products/Oats n jaggery Cookies.jpg",
    description: "Homemade crunchy cookies made with oats and jaggery.",
  },
  {
    name: "Orange Pound Cake",
    price: 350,
    image: "/products/Orange Pound Cake.jpg",
    description: "Soft pound cake with a refreshing orange flavour.",
  },
  {
    name: "Osmania Biscuit",
    price: 220,
    image: "/products/Osmania Biscuit.jpg",
    description:
      "Classic buttery Osmania biscuits with a lightly sweet flavour.",
  },
  {
    name: "Tutti Frutti Cake",
    price: 350,
    image: "/products/Tutti Frutti Cake.jpg",
    description: "Soft loaf cake filled with colourful tutti frutti.",
  },
  {
    name: "Vintage Piping Cake",
    price: 750,
    image: "/products/Vintage Piping Cake.jpg",
    description:
      "Beautiful celebration cake decorated with vintage floral piping.",
  },
  {
    name: "Walnut & Raisin Cake",
    price: 400,
    image: "/products/Walnut n Raisin Cake.jpg",
    description: "Soft homemade cake loaded with walnuts and raisins.",
  },
  {
    name: "White & Gold Vintage Cake",
    price: 800,
    image: "/products/white and gold vintage cake.jpg",
    description:
      "Premium white cream cake decorated with nuts and elegant gold details.",
  },
  {
    name: "Zeera Biscuit",
    price: 220,
    image: "/products/Zeera Biscuit.jpg",
    description: "Crispy homemade biscuits with the classic flavour of cumin.",
  },
];


const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Cake.deleteMany();

    await Cake.insertMany(cakes);

    console.log("Cakes added to MongoDB");

    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

seedDatabase();
