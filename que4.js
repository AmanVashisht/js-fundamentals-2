// You are working for an e-commerce client, and they provide you with an array of objects containing product 
// names and their prices. Your task is to create a function that finds the product with the maximum amount 
// (the highest price) and the product with the minimum amount (the lowest price) and prints them to the 
// console.

const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
  ];

  function amount(){

    let max = { 
        name: "", 
        price: 0 
    };
    let min = { 
        name: "", 
        price: Number.MAX_VALUE 
    };

    for (let product of products) {
        
    if (product.price > max.price) {
        max = product;
    }
    if (product.price < min.price) {
        min = product;
    }
    }

    console.log(`The product with maximum amount is ${max.name} which is priced at Rs. ${max.price}`);
    console.log(`The product with minimum amount is ${min.name} which is priced at Rs. ${min.price}`);
  }

  amount()