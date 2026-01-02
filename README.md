📌 Project Overview

This is a frontend Product Management & Shopping Cart system built using
HTML, CSS (Bootstrap), and JavaScript with LocalStorage.

The project allows users to:

View products

Search, sort, and filter products

Add products to cart

Manage cart quantity

Admin can add, edit, and delete products

All data is stored in the browser using LocalStorage (no backend required).

🚀 Features
🔹 Product Management

Add new products

Edit existing products

Delete products

View all products in a table

🔹 View Products Page

🔍 Search products by name

💰 Sort products by price

Low to High

High to Low

📂 Filter products by category

🖼️ Display product image & description

🔹 Cart System

Add product to cart

Increase / decrease quantity

Remove item from cart

Auto calculate total price

🔹 Data Storage

Uses LocalStorage

Data remains even after page refresh

🛠️ Technologies Used

HTML5

CSS3

Bootstrap 5

JavaScript (Vanilla JS)

Browser LocalStorage

📂 Project Structure
project-folder/
│
├── index.html          # Home / Product listing
├── view.html           # View products with search, sort & filter
├── add_product.html    # Add product page
├── cart.html           # Cart page
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
└── README.md

📋 Product Object Structure
{
  pid: 1001,
  pname: "Sony TV",
  price: 216000,
  img: "url",
  desc: "Smart Android TV",
  category: "Tv"
}

📂 Categories Used

Tv

Ps

(You can easily add more categories)

⚙️ How to Run the Project

Download or clone the repository

Open index.html in any browser

Start adding products

View products, filter, sort & add to cart

⚠️ No server or database needed.

💡 Key Learning Outcomes

DOM Manipulation

LocalStorage CRUD operations

Array methods (filter, map, sort)

Event handling

Real-world frontend logic
