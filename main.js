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

let basket = JSON.parse(localStorage.getItem('data')) || []; // get storage from localstorage, or create a empty array

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
                    <i onclick="addToBasket('${x.id}')" class="bi bi-basket"></i>
                </div>
            </div>
        </div>
    `
    }).join(""));
};
createShop();


function addToBasket(id) {
    let selectedItem = itemsData.find((x) => x.id === id);
    let exist = basket.find((x) => x.id === selectedItem.id)

    if (selectedItem) {
        if (!exist) {
            basket.push({
                id: selectedItem.id,
                amount: 1
            });
        } else {
            exist.amount += 1;
        }
    } else {
        console.error('Item not found');
    }

    localStorage.setItem('data', JSON.stringify(basket));

    console.log(basket) // REMOVE WHEN DONE
    update(selectedItem.id);
};

function update(id) {
    let search = basket.find((x) => x.id === id);
    console.log(search);


}