// You are working for an e-commerce company, and you are given an object containing product-related 
// information. Your task is to print the product-related information details as shown in the image below.

const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };

  key=Object.keys(productDetails)
  val=Object.values(productDetails)

  console.log("Below are the product detail.")
for (let i = 0; i < key.length; i++) {
 console.log(`${key[i]} : ${val[i]}`)

}

  