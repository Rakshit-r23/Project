const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LT PERFUME",
    price: 1199,
    colors: [
      {
        code: "black",
        img: "images/ai-generated-8759674_1280.jpg",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "DUVAI SMELL",
    price: 999,
    colors: [
      {
        code: "lightgray",
        img: "images/perfume-6899766_1280.jpg",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blanko",
    price: 799,
    colors: [
      {
        code: "lightgray",
        img: "images/6cb84682581c5ebac980c74822f5c8d25af7ed07_1024_1024.jpeg",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "images/قولدي-ميني-800x800.jpg",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Chanel",
    price: 1399,
    colors: [
      {
        code: "gray",
        img: "images/6515f3a2034667588c4a369a-chanel-coco-mademoiselle-intense-eau-de.jpg",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".productColors .color");
const currentProductSizes = document.querySelectorAll(".productSizes .size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Function to update the product details
function updateProductDetails(product) {
  currentProductTitle.textContent = product.title;
  currentProductPrice.textContent = "Rs " + product.price;
  currentProductImg.src = product.colors[0].img;

  currentProductColors.forEach((colorElement, index) => {
    colorElement.style.backgroundColor = product.colors[index].code;
  });
}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    chosenProduct = products[index];

    // Update product details
    updateProductDetails(chosenProduct);
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Initial update to set the first product details
updateProductDetails(chosenProduct);