let products = {
    data: [
        {
            productname: "Dickies Men's Heavyweight Crew Neck Short Sleeve Tee",
            category: "Shirts",
            price: "16",
            cart: "Add to cart",
            image: "img/61Ep+91fCCL._AC_SX679._SX._UX._SY._UY_.jpg"
        },
        {
            productname: "Amazon Essentials Men's Classic-Fit Casual Stretch",
            category: "Trousers",
            price: "44",
            cart: "Add to cart",
            image: "img/71Em6nho+JL._AC_UX569_.jpg"
        },
        {
            productname: "Amazon Essentials Men's Hooded Fleece Sweatshirt",
            category: "Hoodies",
            price: "18",
            cart: "Add to cart",
            image: "img/71vV02rloNL._AC_UY741_.jpg"
        },
        {
            productname: "Haggar Men's Cool 18 Pro Straight Fit Flat Front",
            category: "Trousers",
            price: "37",
            cart: "Add to cart",
            image: "img/61tm4WT9JNL._AC_UX679_.jpg"
        },
        {
            productname: "Outdoor Cap Mountain Dad Hat - Unstructured Soft",
            category: "Headwear",
            price: "13",
            cart: "Add to cart",
            image: "img/81Y5SylHdYL._AC_UX679_.jpg"
        },
        {
            productname: "Dickies Men's Heavyweight Crew Neck Short Sleeve Tee",
            category: "Shirts",
            price: "23",
            cart: "Add to cart",
            image: "img/5183zo0U+2L._AC_UX679_.jpg"
        },
        {
            productname: "Lucky Brand Men's 181 Relaxed Straight Jean",
            category: "Trousers",
            price: "57",
            cart: "Add to cart",
            image: "img/91VRRD4DLdL._AC_UX569_.jpg"
        },
        {
            productname: "Nike Youth Air Jordan 1 Mid Se GS Electro Orange",
            category: "Shoes",
            price: "180",
            cart: "Add to cart",
            image: "img/61Mj6sNzQJL._AC_UY575_.jpg"
        },
        {
            productname: "BOSS Men's Cotton Twill Small Logo Cap",
            category: "Headwear",
            price: "23",
            cart: "Add to cart",
            image: "img/81DO7sFb31L._AC_UX679_.jpg"
        },
        {
            productname: "Nike Air Jordan 1 Mid Pre School Shoes",
            category: "Shoes",
            price: "159",
            cart: "Add to cart",
            image: "img/51lAjVqM7dL._AC_UY575_.jpg"
        },
        {
            productname: "Razer Xanthus Tote Bag: Dedicated Padded Laptop",
            category: "Bags",
            price: "89",
            cart: "Add to cart",
            image: "img/815VouNV98L._AC_SX679_.jpg"
        },
        {
            productname: "PS by Paul Smith Mens Unlined Coach Jacket",
            category: "Jackets",
            price: "450",
            cart: "Add to cart",
            image: "img/71pefASy-CL._AC_UX679_.jpg"
        },
        {
            productname: "Pete The Cat Giant Stickers, 120 Pieces on sale",
            category: "Stickers",
            price: "6",
            cart: "Add to cart",
            image: "img/81c2RWSh7zL._AC_SX466_.jpg"
        },
        {
            productname: "PUMA Kids' Evercat Transformation Duffel",
            category: "Bags",
            price: "20",
            cart: "Add to cart",
            image: "img/A1dgKQwBs2L._AC_UX679_.jpg"
        },
        {
            productname: "Nike Men's Air Force 1 '07 Basketball Shoe",
            category: "Shoes",
            price: "132",
            cart: "Add to cart",
            image: "img/41l1iOm08+L._AC_UY575_.jpg"
        }
    ]
};

for (let i of products.data) {
    //Lấy hình ảnh
    let card = document.createElement("div");
    card.classList.add("card");
    let img_container = document.createElement("div");
    img_container.classList.add("img_container");
    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    img_container.appendChild(img);
    card.appendChild(img_container);
    const products = document.querySelector("#products");
    if (products) {
        products.appendChild(card);
    }
    //Lấy tên sản phẩm
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("p");
    name.classList.add("name");
    name.innerText = i.productname.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);
    //Lấy giá và add dỏ hàng
    let cart_price = document.createElement("div");
    cart_price.classList.add("cart_price");
    let price = document.createElement("p");
    price.classList.add("price");
    price.innerText ='$'+i.price;
    let cart = document.createElement("button");
    cart.classList.add("cart");
    cart.innerText = i.cart;
    cart_price.appendChild(price);
    cart_price.appendChild(cart);
    card.appendChild(cart_price);
}

//sidebar
let bar = document.querySelector('.bar');
let sidebar = document.querySelector('.sidebar');
let closed = document.querySelector('.closed');
bar.addEventListener("click", function() {
    sidebar.classList.toggle('left-[-100%]');
})

closed.addEventListener("click", function() {
    sidebar.classList.toggle('left-[-100%]');
})

// var clickdown = document.querySelector('.clickdown');
// var dropdown = document.querySelector('.dropdown');
// var list = document.querySelector('.list');
// clickdown.onclick = function() {
//     list.classList.toggle('hidden');
//     dropdown.classList.toggle('rotate-180');
// }

var clickdown_2 = document.querySelector('.clickdown_2');
var dropdown_2 = document.querySelector('.dropdown_2');
var list_2 = document.querySelector('.list_2');
clickdown_2.onclick = function() {
    list_2.classList.toggle('hidden');
    dropdown_2.classList.toggle('rotate-180');
}