const SILVER_RATE = 110;
const GST_RATE = 0.03;
const WHATSAPP_NUMBER = "919080811009";

const categories = [
  ["Silver Rings", "Polished daily-wear and statement rings.", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80"],
  ["Silver Chains", "Classic links with modern finishing.", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80"],
  ["Silver Necklaces", "Graceful designs for festive looks.", "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=700&q=80"],
  ["Silver Earrings", "Elegant studs, drops and occasion pairs.", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"],
  ["Silver Bangles", "Traditional shine with premium detail.", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"],
  ["Silver Bracelets", "Refined bracelets for every wrist.", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80"],
  ["Silver Anklets", "Intricate anklets with timeless charm.", "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80"],
  ["Silver Toe Rings", "Traditional toe rings in fine silver.", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=700&q=80"],
  ["Silver Pendants", "Minimal pendants and devotional pieces.", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80"],
  ["Silver Jewellery Sets", "Coordinated pieces for complete styling.", "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=700&q=80"],
  ["Bridal Jewellery", "Statement silver ornaments for weddings.", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=700&q=80"],
  ["Kids Silver Jewellery", "Tiny keepsakes crafted with care.", "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=700&q=80"],
  ["Men's Silver Jewellery", "Chains, rings and bracelets for him.", "https://images.unsplash.com/photo-1620656798579-1984d9e87df1?auto=format&fit=crop&w=700&q=80"],
  ["Women's Silver Jewellery", "Elegant everyday and occasion styles.", "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=700&q=80"],
  ["Silver Coins", "Investment and gifting coins.", "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=700&q=80"],
  ["Silver Bars", "Premium bars for investment buyers.", "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=700&q=80"],
  ["Silver Idols", "Sacred idols in refined silver.", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=700&q=80"],
  ["Pooja Items", "Silver articles for rituals and temples.", "https://images.unsplash.com/photo-1609609830354-8f615d61b9c4?auto=format&fit=crop&w=700&q=80"],
  ["Silver Lamps", "Traditional lamps with luminous finish.", "https://images.unsplash.com/photo-1600267165728-0a7ee6d7f8b6?auto=format&fit=crop&w=700&q=80"],
  ["Silver Bowls", "Serveware for rituals and gifting.", "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80"],
  ["Silver Plates", "Premium plates for pooja and occasions.", "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=700&q=80"],
  ["Silver Tumblers", "Classic drinkware with polished finish.", "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80"],
  ["Silver Gifts", "Wedding, festive and milestone gifts.", "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=80"],
  ["Wedding Gifts", "Memorable gifts for wedding families.", "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=700&q=80"],
  ["Corporate Gifts", "Silver gifts for refined business gestures.", "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80"],
  ["Antique Silver", "Vintage-inspired oxidised detailing.", "https://images.unsplash.com/photo-1603561596112-db1d4d2e00c9?auto=format&fit=crop&w=700&q=80"],
  ["Oxidised Silver", "Bold oxidised designs with character.", "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=700&q=80"],
  ["925 Sterling Silver", "Certified sterling silver essentials.", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80"]
];

const products = [
  ["VS001", "Venkateshwara Traditional Silver Anklet", "Anklets", "Bridal", 925, 85, 1250, "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85", true],
  ["VS002", "925 Sterling Lotus Ring", "Rings", "Modern", 925, 8, 450, "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85", true],
  ["VS003", "Classic Silver Chain", "Chains", "Best Sellers", 925, 32, 850, "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85", true],
  ["VS004", "Temple Silver Necklace", "Necklaces", "Traditional", 900, 64, 1600, "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85", false],
  ["VS005", "Pearl Finish Silver Earrings", "Earrings", "New Arrivals", 925, 14, 550, "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85", true],
  ["VS006", "Antique Silver Bangle Pair", "Bangles", "Antique", 900, 72, 1300, "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85", false],
  ["VS007", "Men's Minimal Silver Bracelet", "Bracelets", "Modern", 925, 26, 700, "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85", true],
  ["VS008", "Devotional Silver Pendant", "Pendants", "Festive", 999, 12, 350, "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85", false],
  ["VS009", "Bridal Silver Jewellery Set", "Bridal", "Bridal", 925, 180, 4200, "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85", true],
  ["VS010", "Kids Silver Kada", "Kids", "Kids", 925, 18, 500, "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=900&q=85", false],
  ["VS011", "999 Silver Coin 10g", "Coins", "Investment", 999, 10, 120, "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=85", true],
  ["VS012", "Premium Silver Bar 100g", "Coins", "Investment", 999, 100, 300, "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=85", true],
  ["VS013", "Silver Lakshmi Idol", "Pooja Items", "Festive", 999, 150, 2600, "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85", false],
  ["VS014", "Traditional Silver Lamp", "Pooja Items", "Traditional", 999, 420, 4800, "https://images.unsplash.com/photo-1600267165728-0a7ee6d7f8b6?auto=format&fit=crop&w=900&q=85", true],
  ["VS015", "Silver Bowl Gift Set", "Gifts", "Gift", 999, 250, 3400, "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85", false],
  ["VS016", "Silver Plate Ceremonial", "Pooja Items", "Traditional", 999, 550, 6200, "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=85", false],
  ["VS017", "Corporate Silver Tumbler", "Gifts", "Corporate", 999, 130, 1800, "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85", true],
  ["VS018", "Oxidised Silver Choker", "Necklaces", "Antique", 925, 58, 1450, "https://images.unsplash.com/photo-1603561596112-db1d4d2e00c9?auto=format&fit=crop&w=900&q=85", true],
  ["VS019", "Sterling Silver Toe Ring Pair", "Toe Rings", "Best Sellers", 925, 7, 220, "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85", false],
  ["VS020", "Festival Silver Gift Hamper", "Gifts", "Festive", 999, 310, 3900, "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85", true]
].map((p, i) => {
  const purityFactor = p[4] / 1000;
  const metalValue = Math.round(p[5] * SILVER_RATE * purityFactor);
  const subtotal = metalValue + p[6];
  const gst = Math.round(subtotal * GST_RATE);
  return {
    id: p[0],
    name: p[1],
    category: p[2],
    collection: p[3],
    purity: p[4],
    weight: p[5],
    making: p[6],
    image: p[7],
    best: p[8],
    rate: SILVER_RATE,
    metalValue,
    gst,
    price: subtotal + gst,
    discount: i % 4 === 0 ? "8% showroom offer" : "",
    popularity: 100 - i
  };
});

const collections = [
  ["New Arrivals", "Fresh showroom selections", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"],
  ["Best Sellers", "Loved by regular customers", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85"],
  ["Bridal Collection", "Wedding-ready silver ornaments", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85"],
  ["Traditional Collection", "Heritage detailing and temple craft", "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85"],
  ["Modern Collection", "Clean profiles for daily styling", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85"],
  ["Festive Collection", "Bright pieces for celebrations", "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85"],
  ["Gift Collection", "Silver gifts with lasting value", "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=85"],
  ["925 Sterling Silver Collection", "Certified sterling favourites", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85"],
  ["Antique Collection", "Oxidised pieces with depth", "https://images.unsplash.com/photo-1603561596112-db1d4d2e00c9?auto=format&fit=crop&w=900&q=85"],
  ["Exclusive Venkateshwara Collection", "Signature handcrafted edits", "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85"]
];
