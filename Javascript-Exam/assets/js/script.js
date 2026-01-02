let products = JSON.parse(localStorage.getItem("products"));

if (!products) {
  products = [
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

function displayProduct() {
  let html = "";
  products.forEach((p, i) => {
    html += `
      <div class="col-md-3 mb-4">
        <div class="card product-card">
          <img src="${p.img}" class="card-img-top">
          <div class="card-body text-center">
            <h5>${p.pname}</h5>
            <p>₹${p.price}</p>
            <button class="btn btn-dark" onclick="addToCart(${i})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>`;
  });

  let container = document.getElementById("product-list");
  if (container) container.innerHTML = html;
}
displayProduct();

function addProduct() {
  let pname = document.getElementById("pname").value.trim();
  let price = document.getElementById("price").value.trim();
  let img = document.getElementById("img").value.trim();
  let desc = document.getElementById("desc").value.trim();

  if (!pname || !price || !img || !desc) {
    alert("Fill all fields!");
    return;
  }

  let pid = products.length
    ? products[products.length - 1].pid + 1
    : 1001;

  products.push({
    pid,
    pname,
    price: Number(price),
    img,
    desc
  });

  localStorage.setItem("products", JSON.stringify(products));
  displayProduct();

  alert("Product Added Successfully");
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let p = products[index];

  let exist = cart.find(item => item.pid === p.pid);
  if (exist) {
    exist.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let html = "";
  let total = 0;

  cart.forEach((p, i) => {
    let t = p.price * p.qty;
    total += t;

    html += `
      <tr>
        <td><img src="${p.img}" width="50"></td>
        <td>${p.pname}</td>
        <td>
          <button class="btn btn-dark btn-sm" onclick="changeQty(${i},-1)">-</button>
          ${p.qty}
          <button class="btn btn-dark btn-sm" onclick="changeQty(${i},1)">+</button>
        </td>
        <td>₹${p.price}</td>
        <td>₹${t}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removeItem(${i})">
            Remove
          </button>
        </td>
      </tr>`;
  });

  let body = document.getElementById("cart-body");
  if (body) body.innerHTML = html;

  let gt = document.getElementById("grand-total");
  if (gt) gt.innerText = total;
}
loadCart();

function changeQty(i, val) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[i].qty += val;

  if (cart[i].qty <= 0) cart.splice(i, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(i) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
