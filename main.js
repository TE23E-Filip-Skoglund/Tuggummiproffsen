let shop = document.getElementById("shop");

let createShop = () => {
    return shop.innerHTML = `
        <div class="item">
            <img src="img/produkt/p-chocklad-chili.webp" alt="Produkt: Tuggumi med smak av Chocklad och Chilli">
            <div class="details">
                <h3>Chocklad Chilli</h3>
                <div class="price">
                    <h2>39.90:-</h2>
                    <i class="bi bi-basket"></i>
                </div>
            </div>
        </div>
    `;
}

createShop();