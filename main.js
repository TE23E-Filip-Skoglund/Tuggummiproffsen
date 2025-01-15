let itemsData = [
    {
        id: "produkt1",
        name: "Chocklad Chilli",
        price: 39.99,
        img: "img/produkt/p-chocklad-chili.webp",
    },
    {
        id: "produkt2",
        name: "Blbärspaj",
        price: 39.99,
        img: "img/produkt/p-blueberrypie.webp",
    },
    {
        id: "produkt3",
        name: "Disel",
        price: 69.99,
        img: "img/produkt/p-disel.webp",
    },
    {
        id: "produkt4",
        name: "Guacamole",
        price: 39.99,
        img: "img/produkt/p-guacamole.webp",
    },
    {
        id: "produkt5",
        name: "Guld",
        price: 59.99,
        img: "img/produkt/p-gold.webp",
    },
    {
        id: "produkt6",
        name: "Vitlök",
        price: 24.99,
        img: "img/produkt/p-garlic.webp"
    }
];

let basket = JSON.parse(localStorage.getItem('data')) || []; // h'mta data från local storage, eller skapa en tom array

function createShop() {
    let shopDiv = document.getElementById("shop");
    // Map functions tar varje item i arrayen ovan försig och upprepar det för x antal gånger (en gång för varje produkt)
    return (shopDiv.innerHTML = itemsData.map((x) => {
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

function createBasket() {
    let basketDiv = document.getElementById('cart-items');
    let totalPrice = 0;

    // Map functions tar varje item i arrayen ovan försig och upprepar det för x antal gånger (en gång för varje produkt)
    return (basketDiv.innerHTML = basket.map((x) => {
        let item = itemsData.find((item) => item.id === x.id);
        totalPrice += item.price * x.amount;

        return `
        <div class="cart-item">
                <img src="${item.img}" alt="">
                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <div class="cart-price-quantity">
                        <div class="cart-buttons">
                            <i onclick="removeFromBasket('${item.id}')" class="bi bi-dash-square"></i>
                            <span id="quantity">${x.amount}</span>
                            <i onclick="addToBasket('${item.id}')" class="bi bi-plus-square"></i>
                        </div>
                        <h3>${item.price}:-</h3>
                    </div>
                </div>
            </div>
    `
    }).join("") + `<div class="cart-footer">
        <h2>Totalt: ${totalPrice.toFixed(2)}:-</h2>
    </div>`
    );
}
createBasket();


function addToBasket(id) {
    event.stopPropagation();
    let selectedItem = itemsData.find((x) => x.id === id);
    let exist = basket.find((x) => x.id === selectedItem.id);

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
    // console.log(basket); // TA BORT NÄR KLAR
    createBasket();
};

function removeFromBasket(id) {
    event.stopPropagation();
    let selectedItem = itemsData.find((x) => x.id === id);
    let exist = basket.find((x) => x.id === selectedItem.id);

    if (selectedItem) {
        if (!exist) {
            return; // Gör ingenting
        } else if (exist.amount === 1) {
            basket = basket.filter((x) => x.id !== id);
        } else {
            exist.amount -= 1;
        }
    } else {
        console.error('already no of this item in basket');
    }

    localStorage.setItem('data', JSON.stringify(basket));
    // console.log(basket); // TA BORT NÄR KLART
    createBasket();
}



// ******************** Varukorgen ********************

// OM DET BARA BLIR EN CART-ICON ID: document.getElementById('cart-icon').addEventListener('click', toggleCart);

// Hanterar click på varukorgsikonen
document.querySelectorAll('.cart-icon-button').forEach(icon => {
    icon.addEventListener('click', openCart);
});

function openCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
}

// Hanterar click, sorterar ut specifikt de utanför varukorgen för att stänga varukorgen (i funktonen closeCartOrNot)
document.addEventListener('click', closeCartOrNot);

function closeCartOrNot(event) {
    const cart = document.getElementById('cart');
    const isClickInsideCart = cart.contains(event.target);
    const isClickOnCartIcon = event.target.closest('.cart-icon'); // För att inte stänga varukorgen innan den ens öppnats

    if (!isClickInsideCart && !isClickOnCartIcon) {
        cart.classList.remove('show');
    }
}