const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  // Paste all 50 product objects here (the full list I gave you earlier)
  {"id":1,"name":"Apple MacBook Air M2","category":"laptops","price":"$1199","image":"https://www.apple.com/v/macbook-air-m2/images/overview/hero_macbook_air_m2__f4g0j9f5zv6u_large.jpg"},
  {"id":2,"name":"Dell XPS 13","category":"laptops","price":"$1119","image":"https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-13-9315-laptop/spi/ng/xps-13-9315-laptop-ng-pdp-gallery-504x350.jpg"},
  {"id":3,"name":"HP Pavilion 15","category":"laptops","price":"$900","image":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07784855.png"},
  {"id":4,"name":"iPhone 14","category":"phones","price":"$799","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-select-202209-6-1inch-purple_AV1"},
  {"id":5,"name":"Samsung Galaxy S23","category":"phones","price":"$899","image":"https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzkeinu/gallery/in-galaxy-s23-s911-sm-s911bzkeinu-534302368?$1300_1038_PNG$"},
  {"id":6,"name":"OnePlus 11","category":"phones","price":"$799","image":"https://image01.oneplus.net/ebp/202302/28/1-m00-4c-cf-rb8bsmqcmfwaf5jlaaahjm6s1m4465_840_840.png"},
  {"id":7,"name":"Logitech MX Master 3","category":"accessories","price":"$99","image":"https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-3-top-view.png"},
  {"id":8,"name":"Razer DeathAdder V2","category":"accessories","price":"$69.99","image":"https://assets2.razerzone.com/images/pnx.assets/9a1cdb71a4109e6b5b7b6b2c6f6d49d8/deathadder-v2-gallery-1500x1000-1.jpg"},
  {"id":9,"name":"Anker USB-C Hub","category":"accessories","price":"$35","image":"https://cdn.shopify.com/s/files/1/0066/7569/4864/products/a8362_powerexpand-6-in-1-usb-c-pd-ethernet-hub_1_1000x.png"},
  {"id":10,"name":"Apple AirPods Pro","category":"accessories","price":"$249","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2nd-generation.png"},
  {"id":11,"name":"Samsung Galaxy Buds 2","category":"accessories","price":"$149","image":"https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-buds2.png"},
  {"id":12,"name":"iPad Air","category":"tablets","price":"$599","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-5th-gen.png"},
  {"id":13,"name":"Samsung Galaxy Tab S8","category":"tablets","price":"$699","image":"https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-tab-s8.png"},
  {"id":14,"name":"Lenovo Tab P11","category":"tablets","price":"$299","image":"https://www.lenovo.com/medias/lenovo-tab-p11-hero.png"},
  {"id":15,"name":"Amazon Fire HD 10","category":"tablets","price":"$149","image":"https://m.media-amazon.com/images/I/51nViHtL+1L._AC_SL1000_.jpg"},
  {"id":16,"name":"Microsoft Surface Pro 9","category":"tablets","price":"$999","image":"https://c.s-microsoft.com/en-us/CMSImages/surface-pro-9.png"},
  {"id":17,"name":"Dell Inspiron 16","category":"laptops","price":"$1100","image":"https://i.dell.com/medias/inspiron-16.png"},
  {"id":18,"name":"HP Spectre x360","category":"laptops","price":"$1350","image":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06533450.png"},
  {"id":19,"name":"Asus ROG Zephyrus G14","category":"laptops","price":"$1450","image":"https://dlcdnwebimgs.asus.com/gain/rog-zephyrus.png"},
  {"id":20,"name":"iPhone 14 Pro","category":"phones","price":"$999","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-pro.png"},
  {"id":21,"name":"Samsung Galaxy Z Flip 5","category":"phones","price":"$1099","image":"https://images.samsung.com/is/image/samsung/p6pim/in/sm-f721bzkeinu.png"},
  {"id":22,"name":"OnePlus Nord 3","category":"phones","price":"$499","image":"https://image01.oneplus.net/ebp/202305/28/nord3.png"},
  {"id":23,"name":"Google Pixel 7a","category":"phones","price":"$449","image":"https://store.google.com/product_images/pixel_7a.png"},
  {"id":24,"name":"Logitech K380 Keyboard","category":"accessories","price":"$29","image":"https://resource.logitech.com/k380-keyboard.png"},
  {"id":25,"name":"Razer BlackWidow V3","category":"accessories","price":"$129","image":"https://assets2.razerzone.com/images/blackwidow-v3.png"},
  {"id":26,"name":"Anker PowerCore 20000","category":"accessories","price":"$49","image":"https://cdn.shopify.com/s/files/1/0066/7569/4864/products/anker-powercore-20000.png"},
  {"id":27,"name":"Apple Pencil 2","category":"accessories","price":"$129","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-pencil-2.png"},
  {"id":28,"name":"iPad Mini 6","category":"tablets","price":"$499","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-6.png"},
  {"id":29,"name":"Samsung Galaxy Tab A8","category":"tablets","price":"$229","image":"https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-tab-a8.png"},
  {"id":30,"name":"Lenovo Yoga Tab 13","category":"tablets","price":"$599","image":"https://www.lenovo.com/medias/yoga-tab-13.png"},
  {"id":31,"name":"Microsoft Surface Go 3","category":"tablets","price":"$399","image":"https://c.s-microsoft.com/en-us/CMSImages/surface-go-3.png"},
  {"id":32,"name":"Dell XPS 15","category":"laptops","price":"$1599","image":"https://i.dell.com/medias/xps-15.png"},
  {"id":33,"name":"HP Envy 13","category":"laptops","price":"$1099","image":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07123450.png"},
  {"id":34,"name":"Asus VivoBook S14","category":"laptops","price":"$850","image":"https://dlcdnwebimgs.asus.com/gain/vivobook-s14.png"},
  {"id":35,"name":"iPhone 13","category":"phones","price":"$699","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13.png"},
  {"id":36,"name":"Samsung Galaxy A54","category":"phones","price":"$399","image":"https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-a54.png"},
  {"id":37,"name":"OnePlus 10 Pro","category":"phones","price":"$799","image":"https://image01.oneplus.net/ebp/202303/28/oneplus-10-pro.png"},
  {"id":38,"name":"Logitech G502 Mouse","category":"accessories","price":"$59","image":"https://resource.logitech.com/g502-mouse.png"},
  {"id":39,"name":"Razer Naga X","category":"accessories","price":"$79","image":"https://assets2.razerzone.com/images/naga-x.png"},
  {"id":40,"name":"Anker Wireless Charger","category":"accessories","price":"$39","image":"https://cdn.shopify.com/s/files/1/0066/7569/4864/products/anker-wireless-charger.png"},
  {"id":41,"name":"Apple Magic Keyboard","category":"accessories","price":"$99","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/magic-keyboard.png"},
  {"id":42,"name":"iPad Pro 12.9","category":"tablets","price":"$1099","image":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-9.png"},
  {"id":43,"name":"Samsung Galaxy Tab S9","category":"tablets","price":"$799","image":"https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-tab-s9.png"},
  {"id":44,"name":"Lenovo Tab M10","category":"tablets","price":"$199","image":"https://www.lenovo.com/medias/tab-m10.png"},
  {"id":45,"name":"Amazon Fire 7","category":"tablets","price":"$79","image":"https://m.media-amazon.com/images/I/41zg9Z9FZ0L._AC_SL1000_.jpg"},
  {"id":46,"name":"Microsoft Surface Duo 2","category":"tablets","price":"$1499","image":"https://c.s-microsoft.com/en-us/CMSImages/surface-duo-2.png"},
  {"id":47,"name":"HP EliteBook 840","category":"laptops","price":"$1299","image":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/elitebook-840.png"},
  {"id":48,"name":"Asus ZenBook Flip 13","category":"laptops","price":"$1099","image":"https://dlcdnwebimgs.asus.com/gain/zenbook-flip-13.png"},
  {"id":49,"name":"Samsung Galaxy Note 20","category":"phones","price":"$999","image":"https://images.samsung.com/is/image/samsung/galaxy-note20.png"},
  {"id":50,"name":"Google Pixel 8","category":"phones","price":"$799","image":"https://store.google.com/product_images/pixel_8.png"}
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
