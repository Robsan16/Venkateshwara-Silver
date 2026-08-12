const store = {
  get(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

function money(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function getCart() { return store.get("vs_cart"); }
function getWishlist() { return store.get("vs_wishlist"); }

function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  store.set("vs_cart", cart);
  updateCounters();
  toast("Added to cart");
}

function updateCartQty(id, qty) {
  const cart = getCart().map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item);
  store.set("vs_cart", cart);
  renderCartPage();
  updateCounters();
}

function removeFromCart(id) {
  store.set("vs_cart", getCart().filter(item => item.id !== id));
  renderCartPage();
  renderCheckoutSummary();
  updateCounters();
}

function toggleWishlist(id) {
  const list = getWishlist();
  const next = list.includes(id) ? list.filter(item => item !== id) : [...list, id];
  store.set("vs_wishlist", next);
  updateCounters();
  $(`[data-wishlist="${id}"]`).toggleClass("active", next.includes(id));
  if (document.body.dataset.page === "wishlist") renderWishlistPage();
  toast(next.includes(id) ? "Saved to wishlist" : "Removed from wishlist");
}

function cartTotals() {
  const items = getCart().map(item => ({ ...products.find(product => product.id === item.id), qty: item.qty })).filter(Boolean);
  const productTotal = items.reduce((sum, item) => sum + item.metalValue * item.qty, 0);
  const making = items.reduce((sum, item) => sum + item.making * item.qty, 0);
  const gst = Math.round((productTotal + making) * GST_RATE);
  const delivery = items.length ? 150 : 0;
  return { items, productTotal, making, gst, delivery, grand: productTotal + making + gst + delivery };
}

function updateCounters() {
  $(".cart-count").text(getCart().reduce((sum, item) => sum + item.qty, 0));
  $(".wishlist-count").text(getWishlist().length);
}

function summaryHtml(totals, checkout = false) {
  return `<h2>Order Summary</h2>
    <div class="summary-line"><span>Product total</span><strong>${money(totals.productTotal)}</strong></div>
    <div class="summary-line"><span>Making charges</span><strong>${money(totals.making)}</strong></div>
    <div class="summary-line"><span>GST</span><strong>${money(totals.gst)}</strong></div>
    <div class="summary-line"><span>Delivery</span><strong>${money(totals.delivery)}</strong></div>
    <div class="summary-line grand"><span>Grand total</span><strong>${money(totals.grand)}</strong></div>
    ${checkout ? "" : `<a class="btn btn-luxury w-100" href="checkout.html">Proceed to Checkout</a><a class="btn btn-outline-dark w-100 mt-2" href="shop.html">Continue Shopping</a>`}`;
}

function renderCartPage() {
  if (!$("#cartItems").length) return;
  const totals = cartTotals();
  if (!totals.items.length) {
    $("#cartItems").html(`<div class="empty-state"><h2>Your cart is empty</h2><p>Explore premium silver products and add favourites to your cart.</p><a href="shop.html" class="btn btn-luxury">Continue Shopping</a></div>`);
  } else {
    $("#cartItems").html(totals.items.map(item => `<article class="cart-row">
      <img src="${item.image}" alt="${item.name}">
      <div><h3>${item.name}</h3><p>${item.weight}g · ${item.purity} Silver · ${item.id}</p><strong>${money(item.price)}</strong></div>
      <div class="qty-control"><button onclick="updateCartQty('${item.id}', ${item.qty - 1})">-</button><input value="${item.qty}" onchange="updateCartQty('${item.id}', Number(this.value))"><button onclick="updateCartQty('${item.id}', ${item.qty + 1})">+</button></div>
      <button class="icon-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove"><i class="bi bi-trash"></i></button>
    </article>`).join(""));
  }
  $("#cartSummary").html(summaryHtml(totals));
}

function renderCheckoutSummary() {
  if (!$("#checkoutSummary").length) return;
  const totals = cartTotals();
  $("#checkoutSummary").html(summaryHtml(totals, true) + `<div class="mini-items">${totals.items.map(item => `<p>${item.name}<span>${item.qty} × ${money(item.price)}</span></p>`).join("") || "<p>No selected products</p>"}</div>`);
}

function renderWishlistPage() {
  if (!$("#wishlistProducts").length) return;
  const ids = getWishlist();
  const saved = products.filter(product => ids.includes(product.id));
  $("#wishlistProducts").html(saved.length ? saved.map(productCard).join("") : `<div class="empty-state wide"><h2>No saved products yet</h2><p>Tap the heart on any product to save it here.</p><a href="shop.html" class="btn btn-luxury">Browse Shop</a></div>`);
}
