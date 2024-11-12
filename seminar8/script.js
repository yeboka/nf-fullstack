const productData = {
  id: 2,
  title: "Sports Sneakers Off White & Red",
  description:
    "The Sports Sneakers in Off White and Red combine style and functionality, makcombine style and functionality, makcombine style and functionality, makcombine style and functionality, making them a ...",
  price: 899,
  discountPercentage: 17.94,
  rating: 4.44,
  stock: 34,
  brand: "Off White",
  category: "shoes",
  thumbnail:
    "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
  images: [
    "https://cdn.dummyjson.com/product-images/2/1.jpg",
    "https://cdn.dummyjson.com/product-images/2/2.jpg",
    "https://cdn.dummyjson.com/product-images/2/3.jpg",
    "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  ],
};

console.log("Hello");

const getProductCard = ({thumbnail, title, description, price, discountPercentage, }) => {
  return `
        <div class="col-xl-3  col-lg-6">                    
            <div class="card mb-5" style="width: 18rem; height: 40rem">
                <img class="card-img-top" src="${thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <small class="text-muted">Price: $${price} - Discount: ${discountPercentage}%</small>
                    <a href="#" class="btn btn-primary mt-3">Add to cart</a>
                </div>
            </div>
        </div> `;
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("row");
    container.innerHTML += getProductCard(productData);

    const data = fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            container.innerHTML += getProductCard(data.products[i]);            
        }
    });
})
