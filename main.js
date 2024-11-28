let shop = document.getElementById("shop");

let itemsData = [
    {
        id: "produkt1",
        name: "Chocklad Chilli",
        price: 39.90,
        img: "img/produkt/p-chocklad-chili.webp",
    },
    {
        id: "produkt2",
        name: "Blbärspaj",
        price: 39.90,
        img: "img/produkt/p-blueberrypie.webp",
    },
    {
        id: "produkt3",
        name: "Disel",
        price: 69.90,
        img: "img/produkt/p-disel.webp",
    },
    {
        id: "produkt4",
        name: "Guacamole",
        price: 39.90,
        img: "img/produkt/p-guacamole.webp",
    },
    {
        id: "produkt5",
        name: "Guld",
        price: 59.90,
        img: "img/produkt/p-gold.webp",
    },
    {
        id: "produkt6",
        name: "Vitlök",
        price: 24.90,
        img: "img/produkt/p-garlic.webp"
    }
];

function createShop() {
    // Map functions tar varje item i arrayen ovan försig och upprepar det för x antal gånger (en gång för varje produkt)
    return (shop.innerHTML = itemsData.map((x) => {
        return `
        <div class="item">
            <img src="${x.img}" alt="Produkt: Tuggumi med smak av ${x.namn}">
            <div class="details">
                <h3>${x.name}</h3>
                <div class="price">
                    <h2>${x.price}:-</h2>
                    <i class="bi bi-basket"></i>
                </div>
            </div>
        </div>
    `
    }).join(""));
};

createShop();