function productCard(product) {
  const wished = getWishlist().includes(product.id) ? "active" : "";
  return `<article class="product-card" data-aos="fade-up">
    <a class="product-img" href="product-details.html?id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
    <button class="wish-btn ${wished}" data-wishlist="${product.id}" onclick="toggleWishlist('${product.id}')" aria-label="Wishlist"><i class="bi bi-heart-fill"></i></button>
    <div class="product-body">
      <span>${product.category} · SKU ${product.id}</span>
      <h3><a href="product-details.html?id=${product.id}">${product.name}</a></h3>
      <p>${product.purity} Silver · ${product.weight} grams · ₹${product.rate}/g</p>
      <div class="product-meta"><small>Metal ${money(product.metalValue)}</small><small>Making ${money(product.making)}</small></div>
      ${product.discount ? `<em>${product.discount}</em>` : ""}
      <strong>${money(product.price)}</strong>
      <div class="product-actions"><button class="btn btn-sm btn-outline-dark" onclick="quickView('${product.id}')">Quick View</button><button class="btn btn-sm btn-dark-luxury" onclick="addToCart('${product.id}')">Add to Cart</button><button class="btn btn-sm btn-luxury" onclick="buyNow('${product.id}')">Buy Now</button></div>
    </div>
  </article>`;
}

function headerHtml() {
  const mega = categories.slice(0, 16).map(cat => `<a href="shop.html?category=${encodeURIComponent(cat[0].replace("Silver ", "").replace("'s Silver Jewellery", ""))}">${cat[0]}</a>`).join("");
  return `<header class="site-header">
    <div class="topbar"><div class="container"><span>Today's Silver Rate: ₹110/g</span><a href="tel:+919080811009"><i class="bi bi-telephone"></i> +91 90808 11009</a><a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp</a><span>Free consultation for custom and bulk orders</span></div></div>
    <nav class="navbar navbar-expand-xl navbar-light">
      <div class="container"><a class="navbar-brand" href="index.html"><span>VS</span><strong>Venkateshwara Silver</strong></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav mx-auto"><li><a class="nav-link" href="index.html">Home</a></li><li><a class="nav-link" href="shop.html">Shop</a></li><li class="nav-item dropdown mega-parent"><a class="nav-link dropdown-toggle" href="categories.html" data-bs-toggle="dropdown">Categories</a><div class="dropdown-menu mega-menu">${mega}</div></li><li><a class="nav-link" href="shop.html?collection=New">Collections</a></li><li><a class="nav-link" href="services.html">Services</a></li><li><a class="nav-link" href="silver-rate.html">Silver Rate</a></li><li><a class="nav-link" href="about.html">About</a></li><li><a class="nav-link" href="contact.html">Contact</a></li></ul>
      <div class="nav-icons"><button class="icon-btn search-toggle" aria-label="Search"><i class="bi bi-search"></i></button><a class="icon-btn" href="wishlist.html" aria-label="Wishlist"><i class="bi bi-heart"></i><b class="wishlist-count">0</b></a><a class="icon-btn" href="cart.html" aria-label="Cart"><i class="bi bi-bag"></i><b class="cart-count">0</b></a><a class="icon-btn" href="#" aria-label="Account"><i class="bi bi-person"></i></a><a class="icon-btn whatsapp-mini" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a></div></div></div>
    </nav><div class="search-panel"><div class="container"><input id="globalSearch" class="form-control" placeholder="Search rings, anklets, coins, gifts..."><div id="searchResults"></div></div></div>
  </header>`;
}

function footerHtml() {
  return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><h2>Venkateshwara Silver</h2><p>Premium silver jewellery, bridal ornaments, gifts, coins and pooja articles with transparent pricing and trusted service.</p><form class="newsletter-mini needs-validation" novalidate><input type="email" class="form-control" placeholder="Email address" required><button class="btn btn-luxury">Join</button></form></div><div><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About</a><a href="shop.html">Shop</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div><div><h3>Categories</h3><a>Rings</a><a>Chains</a><a>Anklets</a><a>Bangles</a><a>Bridal</a><a>Silver Gifts</a><a>Coins</a><a>Pooja Items</a></div><div><h3>Customer Support</h3><a href="faq.html">FAQ</a><a>Shipping</a><a>Returns</a><a>Privacy Policy</a><a>Terms & Conditions</a></div><div><h3>Contact</h3><p>+91 90808 11009<br>Main road, Santhai ullpuram<br>Block M, No 7,8<br>Valliyur 627117</p><div class="socials"><i class="bi bi-instagram"></i><i class="bi bi-facebook"></i><i class="bi bi-youtube"></i><i class="bi bi-whatsapp"></i></div></div></div><div class="footer-bottom">© 2026 Venkateshwara Silver. All Rights Reserved.</div></div></footer>
  <a class="floating-whatsapp" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a><a class="mobile-call" href="tel:+919080811009"><i class="bi bi-telephone"></i></a><button id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button><nav class="mobile-bottom"><a href="index.html"><i class="bi bi-house"></i><span>Home</span></a><a href="categories.html"><i class="bi bi-grid"></i><span>Categories</span></a><a href="https://wa.me/${WHATSAPP_NUMBER}"><i class="bi bi-whatsapp"></i><span>WhatsApp</span></a><a href="wishlist.html"><i class="bi bi-heart"></i><span>Wishlist</span></a><a href="cart.html"><i class="bi bi-bag"></i><span>Cart</span></a></nav>`;
}

function renderCards() {
  $("#homeCategories").html(categories.slice(0, 12).map(categoryCard).join(""));
  $("#allCategories").html(categories.map(categoryCard).join(""));
  $("#collectionsGrid").html(collections.map(c => `<a class="collection-card" href="shop.html?collection=${encodeURIComponent(c[0])}" data-aos="fade-up"><img src="${c[2]}" alt="${c[0]}"><div><span>${c[1]}</span><h3>${c[0]}</h3></div></a>`).join(""));
  $("#featuredProducts").html(products.slice(0, 8).map(productCard).join(""));
  $("#occasionChips").html(["Wedding", "Engagement", "Birthday", "Anniversary", "Housewarming", "Baby Shower", "Festival", "Corporate Gift", "For Her", "For Him", "For Kids", "For Couple", "Under ₹2,000", "₹2,000 - ₹5,000", "₹5,000 - ₹10,000", "Above ₹25,000"].map(x => `<a href="shop.html?search=${encodeURIComponent(x)}">${x}</a>`).join(""));
  $("#trustGrid").html(["Authentic Silver", "Certified Purity", "Transparent Pricing", "Expert Craftsmanship", "Custom Designs", "Secure Packaging", "Pan-India Delivery", "Easy Customer Support", "Trusted Service", "Bulk Order Support"].map((x, i) => `<div class="trust-card" data-aos="fade-up"><i class="bi bi-${["patch-check","award","receipt","gem","pencil-square","box-seam","truck","headset","shield-check","boxes"][i]}"></i><h3>${x}</h3></div>`).join(""));
  $("#galleryGrid").html(products.slice(0, 8).map(p => `<a class="gallery-item" href="product-details.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"><i class="bi bi-instagram"></i></a>`).join(""));
  $("#processGrid").html(["Select Product", "Confirm Weight & Price", "Place Order", "Secure Payment", "Delivery"].map((x, i) => `<div class="process-card"><b>${i + 1}</b><i class="bi bi-${["search","calculator","bag-check","credit-card","truck"][i]}"></i><h3>${x}</h3></div>`).join(""));
}

function categoryCard(cat) {
  return `<article class="category-card" data-aos="fade-up"><img src="${cat[2]}" alt="${cat[0]}"><div><h3>${cat[0]}</h3><p>${cat[1]}</p><a href="shop.html?category=${encodeURIComponent(cat[0].replace("Silver ", ""))}" class="btn btn-sm btn-outline-dark">Explore</a></div></article>`;
}

function renderShop() {
  if (!$("#shopProducts").length) return;
  const params = new URLSearchParams(location.search);
  const categoryOptions = [...new Set(products.map(p => p.category))].map(c => `<option ${params.get("category") === c ? "selected" : ""}>${c}</option>`).join("");
  $("#categoryFilter").append(categoryOptions);
  if (params.get("search")) $("#shopSearch").val(params.get("search"));
  function apply() {
    let list = [...products];
    const q = $("#shopSearch").val().toLowerCase(), cat = $("#categoryFilter").val(), purity = $("#purityFilter").val(), price = $("#priceFilter").val(), weight = $("#weightFilter").val(), sort = $("#sortFilter").val();
    if (q) list = list.filter(p => `${p.name} ${p.id} ${p.category} ${p.collection}`.toLowerCase().includes(q));
    if (cat) list = list.filter(p => p.category === cat);
    if (purity) list = list.filter(p => String(p.purity) === purity);
    if (price) { const [min, max] = price.split("-").map(Number); list = list.filter(p => p.price >= min && p.price <= max); }
    if (weight) { const [min, max] = weight.split("-").map(Number); list = list.filter(p => p.weight >= min && p.weight <= max); }
    if (sort === "price-low") list.sort((a,b) => a.price - b.price);
    if (sort === "price-high") list.sort((a,b) => b.price - a.price);
    if (sort === "popular") list.sort((a,b) => b.popularity - a.popularity);
    if (sort === "best") list = list.filter(p => p.best);
    $("#resultCount").text(`${list.length} products found`);
    $("#shopProducts").html(list.map(productCard).join("") || `<div class="empty-state wide"><h2>No products found</h2><p>Try changing the filters.</p></div>`);
  }
  $("#shopSearch,#categoryFilter,#purityFilter,#priceFilter,#weightFilter,#sortFilter").on("input change", apply);
  $("#resetFilters").on("click", () => { $(".filters-panel input").val(""); $(".filters-panel select").val(""); $("#sortFilter").val("latest"); apply(); });
  apply();
}

function renderProductDetail() {
  if (!$("#productDetail").length) return;
  const id = new URLSearchParams(location.search).get("id") || "VS001";
  const p = products.find(product => product.id === id) || products[0];
  const thumbs = [p.image, ...products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 3).map(x => x.image)];
  $("#productDetail").html(`<div class="product-detail-grid"><div><img id="mainProductImage" class="detail-image" src="${p.image}" alt="${p.name}"><div class="thumb-row">${thumbs.map(src => `<img src="${src}" alt="${p.name} thumbnail" onclick="$('#mainProductImage').attr('src','${src}')">`).join("")}</div></div><div class="detail-info"><span class="eyebrow dark">${p.collection}</span><h1>${p.name}</h1><div class="stars">★★★★★ <small>4.8 customer rating</small></div><p>SKU: ${p.id}</p><h2>${money(p.price)}</h2><div class="detail-table"><p><span>Silver purity</span><strong>${p.purity} Silver</strong></p><p><span>Weight</span><strong>${p.weight} grams</strong></p><p><span>Silver rate</span><strong>₹${p.rate}/gram</strong></p><p><span>Metal value</span><strong>${money(p.metalValue)}</strong></p><p><span>Making charges</span><strong>${money(p.making)}</strong></p><p><span>GST</span><strong>${money(p.gst)}</strong></p><p><span>Estimated total</span><strong>${money(p.price)}</strong></p></div><div class="qty-control detail-qty"><button>-</button><input id="detailQty" value="1"><button>+</button></div><div class="detail-actions"><button class="btn btn-dark-luxury" onclick="addToCart('${p.id}', Number($('#detailQty').val()))">Add to Cart</button><button class="btn btn-luxury" onclick="buyNow('${p.id}')">Buy Now</button><a class="btn btn-whatsapp" target="_blank" rel="noopener" href="${whatsAppUrl(p)}"><i class="bi bi-whatsapp"></i> WhatsApp Enquiry</a><button class="btn btn-outline-dark" onclick="toggleWishlist('${p.id}')">Wishlist</button></div></div></div><div class="detail-tabs"><h2>Product Description</h2><p>A premium Venkateshwara Silver piece crafted for refined styling, gifting and special celebrations.</p><h3>Silver Purity Details</h3><p>Purity is shown clearly with estimated rate-based pricing. Certification can be supplied where applicable.</p><h3>Dimensions, Care, Shipping & Returns</h3><p>Dimensions vary by handmade finish. Store dry, polish softly, and keep away from harsh chemicals. Secure packaging and Pan-India delivery available. Returns depend on product condition and customization.</p><h3>Customer Reviews</h3><p>★★★★★ Beautiful finishing and clear pricing. Purchased by demo customer.</p></div>`);
  $("#relatedProducts").html(products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4).map(productCard).join(""));
  $("#recentProducts").html(products.slice(4, 8).map(productCard).join(""));
}

function whatsAppUrl(p) {
  const msg = `Hi Venkateshwara Silver,\nI am interested in this product:\n\nProduct: ${p.name}\nCode: ${p.id}\nWeight: ${p.weight}g\nQuantity: 1\nPrice: ${money(p.price)}\n\nPlease share availability and further details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function buyNow(id) { addToCart(id); location.href = "checkout.html"; }
function quickView(id) {
  const p = products.find(product => product.id === id);
  $("#quickViewMount").html(`<div class="modal fade" id="quickViewModal" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><button class="btn-close ms-auto m-3" data-bs-dismiss="modal"></button><div class="row g-0"><div class="col-md-6"><img class="modal-img" src="${p.image}" alt="${p.name}"></div><div class="col-md-6 p-4"><h2>${p.name}</h2><p>${p.purity} Silver · ${p.weight}g · SKU ${p.id}</p><h3>${money(p.price)}</h3><button class="btn btn-dark-luxury" onclick="addToCart('${p.id}')">Add to Cart</button><a class="btn btn-luxury" href="product-details.html?id=${p.id}">View Details</a></div></div></div></div></div>`);
  new bootstrap.Modal("#quickViewModal").show();
}

function renderOtherPages() {
  $("#servicesGrid").html(["Custom Silver Jewellery", "Bridal Jewellery", "Silver Gift Solutions", "Corporate Gifting", "Silver Coins & Bars", "Custom Engraving", "Jewellery Repair", "Silver Polishing", "Exchange / Buyback", "Bulk Orders", "Temple & Pooja Silver"].map((x, i) => `<article class="service-card" data-aos="fade-up"><i class="bi bi-${["gem","flower1","gift","briefcase","coin","pen","tools","stars","arrow-repeat","boxes","lamp"][i]}"></i><h3>${x}</h3><p>${["Design jewellery based on customer requirements.","Complete silver jewellery solutions for weddings.","Wedding, anniversary and festival gifting.","Bulk premium silver gifts for companies.","Silver investment products.","Personalized names, messages or branding.","Repair, polish and maintenance services.","Restore old silver jewellery and products.","Silver exchange and buyback enquiry.","Special pricing for large orders.","Silver items for temples and religious ceremonies."][i]}</p></article>`).join(""));
  $("#aboutValues").html(["Our Story", "Our Craftsmanship", "Our Promise", "Quality & Purity", "Vision", "Mission"].map(x => `<article class="value-card"><h3>${x}</h3><p>We blend Indian tradition, careful hand-finishing and transparent service to make silver buying graceful and trustworthy.</p></article>`).join(""));
  $("#rateCards").html([["1 Gram Silver Price", 110], ["10 Gram Silver Price", 1100], ["100 Gram Silver Price", 11000], ["500 Gram Silver Price", 55000], ["1 Kg Silver Price", 110000]].map(r => `<div class="rate-card"><span>${r[0]}</span><strong>${money(r[1])}</strong><small>Demo silver rates - connect with live API or admin panel later.</small></div>`).join(""));
  const faqs = ["What purity of silver do you sell?", "Is your jewellery 925 certified?", "How is silver jewellery price calculated?", "Do you accept custom jewellery orders?", "Do you provide bulk silver orders?", "Is Cash on Delivery available?", "Do you provide shipping across India?", "Can I order jewellery through WhatsApp?", "Do you provide silver polishing?", "Do you offer silver exchange?", "What are the making charges?", "Can prices change based on the daily silver rate?"];
  $("#faqAccordion").html(faqs.map((q, i) => `<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" data-bs-toggle="collapse" data-bs-target="#faq${i}">${q}</button></h2><div id="faq${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#faqAccordion"><div class="accordion-body">Yes. Our team shares clear purity, weight, silver rate, making charge and GST details before order confirmation. Demo content can be connected to live showroom policies later.</div></div></div>`).join(""));
  $("#testimonialSlides").html(["Priya Raman", "Arjun Mehta", "Kavya S", "Nirmala Devi", "Rohit Iyer"].map((n, i) => `<div class="swiper-slide"><article class="testimonial-card"><img src="https://i.pravatar.cc/120?img=${i + 21}" alt="${n}"><div class="stars">★★★★★</div><p>Elegant finish, patient guidance and transparent pricing. The product felt premium from selection to delivery.</p><h3>${n}</h3><span>Purchased ${products[i].name}</span></article></div>`).join(""));
}

function initCalculator() {
  $("#silverCalculator").on("submit", function(e) {
    e.preventDefault();
    const rate = +$("#calcRate").val(), weight = +$("#calcWeight").val(), making = +$("#calcMaking").val(), gstPercent = +$("#calcGst").val(), qty = +$("#calcQty").val();
    const purityRaw = $("#calcPurity").val();
    const purity = purityRaw === "custom" ? (+$("#customPurity").val() / 100) : +purityRaw;
    const silverValue = Math.round(weight * rate * purity * qty);
    const makingTotal = Math.round(making * qty);
    const subtotal = silverValue + makingTotal;
    const gst = Math.round(subtotal * gstPercent / 100);
    $("#calcResult").html(`<h2>Estimated Amount</h2><div class="summary-line"><span>Silver Value</span><strong>${money(silverValue)}</strong></div><div class="summary-line"><span>Making Charge</span><strong>${money(makingTotal)}</strong></div><div class="summary-line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>GST</span><strong>${money(gst)}</strong></div><div class="summary-line grand"><span>Final Amount</span><strong>${money(subtotal + gst)}</strong></div>`).addClass("pulse");
  });
}

function toast(message) {
  const el = $(`<div class="toast-lite">${message}</div>`).appendTo("body");
  setTimeout(() => el.addClass("show"), 10);
  setTimeout(() => el.remove(), 1800);
}

$(function() {
  $("#siteHeader").html(headerHtml());
  $("#siteFooter").html(footerHtml());
  updateCounters();
  renderCards();
  renderShop();
  renderProductDetail();
  renderOtherPages();
  renderCartPage();
  renderCheckoutSummary();
  renderWishlistPage();
  initCalculator();
  if (window.AOS) AOS.init({ duration: 750, once: true, offset: 80 });
  if ($(".hero-slider").length) new Swiper(".hero-slider", { loop: true, effect: "fade", autoplay: { delay: 4200 }, pagination: { el: ".hero-slider .swiper-pagination", clickable: true }, navigation: { nextEl: ".hero-slider .swiper-button-next", prevEl: ".hero-slider .swiper-button-prev" } });
  if ($(".testimonial-slider").length) new Swiper(".testimonial-slider", { loop: true, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 3500 }, pagination: { el: ".testimonial-slider .swiper-pagination", clickable: true }, breakpoints: { 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } } });
  $(".search-toggle").on("click", () => $(".search-panel").slideToggle(180));
  $("#globalSearch").on("input", function() {
    const q = this.value.toLowerCase();
    $("#searchResults").html(q ? products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 5).map(p => `<a href="product-details.html?id=${p.id}">${p.name}<span>${money(p.price)}</span></a>`).join("") : "");
  });
  $(window).on("scroll", () => $("#backToTop").toggleClass("show", scrollY > 400));
  $("#backToTop").on("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  $(".needs-validation").on("submit", function(e) {
    if (!this.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
    else if (!$(this).is("#checkoutForm,#silverCalculator")) { e.preventDefault(); toast("Thank you. Our team will contact you."); }
    $(this).addClass("was-validated");
  });
  $("#checkoutForm").on("submit", function(e) {
    e.preventDefault();
    if (!this.checkValidity()) return;
    $("#orderConfirmation").html(`<div class="alert alert-success mt-4"><strong>Demo order confirmed.</strong><br>Our showroom team will contact you to verify price, availability and payment.</div>`);
  });
});
