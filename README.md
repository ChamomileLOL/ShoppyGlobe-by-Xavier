# ShoppyGlobe - React E-commerce Application

A basic e-commerce application built with React and Redux.  
It displays a list of vegan products, allows users to add items to the cart, view product details, and manage their cart.

---

## Features

- Product listing with vegan filter and search functionality  
- Product detail pages with dynamic routing  
- Add to Cart and Remove from Cart functionality using Redux  
- Cart management with quantity controls  
- Responsive design with CSS styling  
- Error handling for API requests  
- Code splitting and lazy loading for performance optimization  
- 404 Not Found page for unknown routes  

---

## Tech Stack

- React  
- Redux Toolkit  
- React Router  
- JavaScript (ES6+)  
- CSS  

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ChamomileLOL/ShoppyGlobe-by-Xavier.git
   cd ShoppyGlobe-by-Xavier

2. Install dependencies:

   npm install

3. Run the development server:

   npm start

4. Open your browser and navigate to:

   http://localhost:3000

## Project Structure

```
src/
  components/
    Header.js
    ProductList.js
    ProductItem.js
    ProductDetail.js
    Cart.js
    CartItem.js
    NotFound.js
  hooks/
    useFetchProducts.js
  redux/
    cartSlice.js
    store.js
  assets/
    images/
  App.js
  index.js
  App.css
```


## Usage
Browse products on the Home page.

Search and filter vegan products.

Click “Add to Cart” to add products to your cart.

View cart contents and modify quantities.

Navigate to product detail pages for more info.

Use the navigation menu to access different pages.

## Notes
Products are fetched from https://dummyjson.com/products.

Cart state is managed globally using Redux.

Only vegan products are displayed.

## Author
Xavier Moorkattil
Email: xavier.siby777@gmail.com
Date: 5th May 2025

