/* =========================================================
   KOMO RESTAURANT JAVASCRIPT
========================================================= */


/* =========================================================
   MENU DATA
========================================================= */

const menuData = [

    {
        id: 1,
        name: "Truffle Edamame Chestnut Dumplings",
        price: 550,
        category: "sushi-dimsum",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=90",
        desc: "Premium dumplings with rich truffle flavours, chilli oil and crispy toppings.",
        badge: "CHEF SPECIAL"
    },

    {
        id: 2,
        name: "Hunan Veggie Stuffed Dumplings",
        price: 550,
        category: "sushi-dimsum",
        img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=90",
        desc: "Japanese mayo, teriyaki mayo and chilli garlic crispy spinach.",
        badge: "POPULAR"
    },

    {
        id: 3,
        name: "Teriyaki Tempura Sushi",
        price: 600,
        category: "sushi-dimsum",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=90",
        desc: "Fresh sushi served with gari, wasabi and Japanese-inspired toppings.",
        badge: "BESTSELLER"
    },

    {
        id: 4,
        name: "Thai Pav Bhaji Ki Chaat",
        price: 350,
        category: "chaats",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        desc: "Mini pavs with delicious bhaji, herbs and tangy flavours.",
        badge: "SPECIAL"
    },

    {
        id: 5,
        name: "Palak Patte Ki Chaat",
        price: 500,
        category: "chaats",
        img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=90",
        desc: "Crispy spinach, yogurt, chutneys and aromatic spices.",
        badge: "POPULAR"
    },

    {
        id: 6,
        name: "Paneer Makhna Khatta Pyaz",
        price: 500,
        category: "paneer",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=90",
        desc: "Paneer in tomato masala with pickled onions and makhana.",
        badge: "SPECIAL"
    },

    {
        id: 7,
        name: "Delhi Style Butter Masala",
        price: 500,
        category: "paneer",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        desc: "Tandoori paneer tikka in a rich fenugreek-flavoured butter masala.",
        badge: "BESTSELLER"
    },

    {
        id: 8,
        name: "Paneer Tikka Kalimirch Masala",
        price: 520,
        category: "paneer",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=90",
        desc: "Stuffed cottage cheese served with black pepper cashew gravy.",
        badge: "SPECIAL"
    },

    {
        id: 9,
        name: "Corn Palak Masala",
        price: 520,
        category: "veggies",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=90",
        desc: "Creamy spinach puree with corn and fried garlic.",
        badge: "POPULAR"
    },

    {
        id: 10,
        name: "Spicy Kaju Curry",
        price: 520,
        category: "veggies",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=90",
        desc: "Roasted cashews cooked in a thick aromatic Indian gravy.",
        badge: "SPECIAL"
    },

    {
        id: 11,
        name: "Three Cheese Mushroom Pizza",
        price: 590,
        category: "pizza",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=90",
        desc: "Onions, mushrooms, truffle oil, fresh leaves and three delicious cheeses.",
        badge: "BESTSELLER"
    },

    {
        id: 12,
        name: "Spaghetti Marinara",
        price: 550,
        category: "pizza",
        img: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=90",
        desc: "Rustic Italian tomato sauce with basil, olives and parmesan.",
        badge: "POPULAR"
    },

    {
        id: 13,
        name: "Sriracha Paneer Tikka Pizza",
        price: 590,
        category: "pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=90",
        desc: "Charcoal roasted paneer tikka topped with cheese and spicy seasoning.",
        badge: "SPICY"
    },

    {
        id: 14,
        name: "Fiery Dragon Plate Sizzler",
        price: 750,
        category: "global",
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90",
        desc: "Wok-tossed noodles, vegetables, rice and crispy potato wedges.",
        badge: "BESTSELLER"
    },

    {
        id: 15,
        name: "Paneer Shawarma Platter",
        price: 650,
        category: "global",
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=90",
        desc: "Hummus, falafel, sautéed vegetables and fresh pita squares.",
        badge: "SPECIAL"
    },

    {
        id: 16,
        name: "Stuffed Chur Chur Naan",
        price: 100,
        category: "breads",
        img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=90",
        desc: "Crispy layered stuffed tandoori flatbread.",
        badge: "POPULAR"
    },

    {
        id: 17,
        name: "Cheese Chilli Garlic Naan",
        price: 200,
        category: "breads",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        desc: "Stuffed with cheese, garlic and green chillies.",
        badge: "SPECIAL"
    },

    {
        id: 18,
        name: "Three Fruit Fizz",
        price: 270,
        category: "soups-beverages",
        img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=90",
        desc: "Fresh kiwi, pineapple and grape juice with refreshing fizz.",
        badge: "REFRESHING"
    },

    {
        id: 19,
        name: "Passion Fruit Mint Mojito",
        price: 270,
        category: "soups-beverages",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=90",
        desc: "Mint, lemon, passion fruit and refreshing flavours.",
        badge: "POPULAR"
    }

];


/* =========================================================
   STATE
========================================================= */

let cart = [];

let currentOrderMode = "Dine-In";

let currentCategory = "all";

let searchText = "";

let sortType = "default";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderMenu();

    setupHeader();

    setupSearch();

    setupSort();

    setupGallery();

    setupNavigation();

    setMinimumReservationDate();

});


/* =========================================================
   HEADER SCROLL
========================================================= */

function setupHeader() {

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        updateActiveNavigation();

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function updateActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function setupNavigation() {

    const navbar =
        document.getElementById("navbar");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileClose =
        document.getElementById("mobileClose");

    menuToggle.addEventListener("click", () => {

        navbar.classList.add("open");

        document.body.classList.add("no-scroll");

    });

    mobileClose.addEventListener("click", closeMobileMenu);

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            link.classList.add("active");

            closeMobileMenu();

        });

    });

}


function closeMobileMenu() {

    document
        .getElementById("navbar")
        .classList.remove("open");

    document.body.classList.remove("no-scroll");

}


/* =========================================================
   MENU RENDER
========================================================= */

function renderMenu() {

    const container =
        document.getElementById("menu-container");

    const noResults =
        document.getElementById("no-results");

    container.innerHTML = "";

    let filteredItems = [...menuData];


    /* CATEGORY */

    if (currentCategory !== "all") {

        filteredItems =
            filteredItems.filter(
                item =>
                    item.category === currentCategory
            );

    }


    /* SEARCH */

    if (searchText.trim() !== "") {

        const query =
            searchText.toLowerCase();

        filteredItems =
            filteredItems.filter(item =>

                item.name
                    .toLowerCase()
                    .includes(query)

                ||

                item.desc
                    .toLowerCase()
                    .includes(query)

            );

    }


    /* SORT */

    if (sortType === "low") {

        filteredItems.sort(
            (a, b) =>
                a.price - b.price
        );

    }

    else if (sortType === "high") {

        filteredItems.sort(
            (a, b) =>
                b.price - a.price
        );

    }

    else if (sortType === "name") {

        filteredItems.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    /* EMPTY */

    if (filteredItems.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    /* CARDS */

    filteredItems.forEach((item, index) => {

        const card =
            document.createElement("article");

        card.className = "menu-card";

        card.style.animationDelay =
            `${index * 0.05}s`;

        card.innerHTML = `

            <div class="menu-card-image">

                <img
                    src="${item.img}"
                    alt="${item.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'">

                <span class="food-badge">
                    ${item.badge}
                </span>

            </div>


            <div class="menu-card-body">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.desc}
                </p>


                <div class="menu-card-bottom">

                    <span class="price">
                        ₹${item.price.toFixed(2)}
                    </span>

                    <button
                        class="btn-add"
                        onclick="addToCart(${item.id})">

                        <i class="fa-solid fa-plus"></i>

                        ADD

                    </button>

                </div>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =========================================================
   FILTER MENU
========================================================= */

function filterMenu(category, button) {

    currentCategory = category;


    /* REMOVE ACTIVE */

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    /* ADD ACTIVE */

    if (button) {
        button.classList.add("active");
    }


    renderMenu();

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const search =
        document.getElementById("menuSearch");

    search.addEventListener("input", event => {

        searchText =
            event.target.value;

        renderMenu();

    });

}


/* =========================================================
   SORT
========================================================= */

function setupSort() {

    const sort =
        document.getElementById("sortMenu");

    sort.addEventListener("change", event => {

        sortType =
            event.target.value;

        renderMenu();

    });

}


/* =========================================================
   ORDER MODE
========================================================= */

function setOrderMode(mode, button) {

    currentOrderMode = mode;


    /* ACTIVE BUTTON */

    document
        .querySelectorAll(".mode-option")
        .forEach(option => {

            option.classList.remove("active");

        });


    if (button) {
        button.classList.add("active");
    }


    /* CART DISPLAY */

    const modeDisplay =
        document.getElementById(
            "current-mode-display"
        );

    modeDisplay.textContent = mode;


    /* INPUTS */

    const dineIn =
        document.getElementById(
            "dine-in-details"
        );

    const delivery =
        document.getElementById(
            "delivery-details"
        );


    if (mode === "Dine-In") {

        dineIn.style.display = "block";

        delivery.style.display = "none";

    }

    else if (mode === "Delivery") {

        dineIn.style.display = "none";

        delivery.style.display = "block";

    }

    else {

        dineIn.style.display = "none";

        delivery.style.display = "none";

    }

}


/* =========================================================
   CART
========================================================= */

function addToCart(itemId) {

    const item =
        menuData.find(
            item =>
                item.id === itemId
        );

    if (!item) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === itemId
        );


    if (existing) {

        existing.qty++;

    } else {

        cart.push({
            ...item,
            qty: 1
        });

    }


    updateCartUI();

    toggleCart(true);


    showToast(
        `${item.name} added to your order`
    );

}


/* =========================================================
   CART QUANTITY
========================================================= */

function updateQuantity(itemId, change) {

    const item =
        cart.find(
            item =>
                item.id === itemId
        );

    if (!item) {
        return;
    }


    item.qty += change;


    if (item.qty <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== itemId
            );

    }


    updateCartUI();

}


/* =========================================================
   CART UI
========================================================= */

function updateCartUI() {

    const container =
        document.getElementById(
            "cart-items"
        );

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    container.innerHTML = "";


    let subtotal = 0;

    let totalItems = 0;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add delicious dishes from our menu.
                </p>

            </div>

        `;

    }


    cart.forEach(item => {

        subtotal +=
            item.price * item.qty;

        totalItems += item.qty;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <span class="cart-item-price">
                    ₹${(
                        item.price *
                        item.qty
                    ).toFixed(2)}
                </span>

            </div>


            <div class="qty-controls">

                <button
                    onclick="updateQuantity(${item.id}, -1)">
                    −
                </button>

                <span>
                    ${item.qty}
                </span>

                <button
                    onclick="updateQuantity(${item.id}, 1)">
                    +
                </button>

            </div>

        `;

        container.appendChild(cartItem);

    });


    const tax =
        subtotal * 0.05;

    const total =
        subtotal + tax;


    cartCount.textContent =
        totalItems;

    document.getElementById(
        "cart-subtotal"
    ).textContent =
        `₹${subtotal.toFixed(2)}`;

    document.getElementById(
        "cart-tax"
    ).textContent =
        `₹${tax.toFixed(2)}`;

    document.getElementById(
        "cart-total"
    ).textContent =
        `₹${total.toFixed(2)}`;

}


/* =========================================================
   TOGGLE CART
========================================================= */

function toggleCart(forceOpen = false) {

    const modal =
        document.getElementById(
            "cart-modal"
        );


    if (forceOpen) {

        modal.classList.add("open");

        document.body.classList.add("no-scroll");

    }

    else {

        modal.classList.toggle("open");


        if (
            modal.classList.contains("open")
        ) {

            document.body.classList.add(
                "no-scroll"
            );

        } else {

            document.body.classList.remove(
                "no-scroll"
            );

        }

    }

}


/* =========================================================
   CART BUTTON
========================================================= */

document
    .getElementById("cartButton")
    .addEventListener("click", () => {

        toggleCart();

    });


/* =========================================================
   CHECKOUT
========================================================= */

let pendingOrder = null;
let selectedPaymentMethod = "UPI";

async function checkout() {

    if (cart.length === 0) {
        showSuccessModal("Your Cart Is Empty", "Please add at least one dish before placing your order.");
        return;
    }

    const name = document.getElementById("checkout-name").value.trim();
    const phone = document.getElementById("checkout-phone").value.trim();

    if (!name) {
        showSuccessModal("Name Required", "Please enter your name before placing the order.");
        return;
    }

    if (!/^[0-9+()\-\s]{7,20}$/.test(phone)) {
        showSuccessModal("Valid Phone Required", "Please enter a valid phone number.");
        return;
    }

    const table = document.getElementById("table-number").value.trim();
    const address = document.getElementById("delivery-address").value.trim();

    if (currentOrderMode === "Dine-In" && !table) {
        showSuccessModal("Table Number Required", "Please enter your table number before continuing.");
        return;
    }

    if (currentOrderMode === "Delivery" && !address) {
        showSuccessModal("Address Required", "Please enter your delivery address before continuing.");
        return;
    }

    const button = document.querySelector('#cart-modal .cart-footer .btn-primary');
    if (button) {
        button.disabled = true;
        button.innerHTML = 'CREATING ORDER <i class="fa-solid fa-spinner fa-spin"></i>';
    }

    const payload = {
        customer_name: name,
        phone: phone,
        order_type: currentOrderMode,
        table_number: currentOrderMode === "Dine-In" ? table : null,
        delivery_address: currentOrderMode === "Delivery" ? address : null,
        items: cart.map(item => ({ id: item.id, quantity: item.qty }))
    };

    try {
        const response = await fetch("backend/api/create_order.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || "Could not create order.");
        }

        pendingOrder = result.order;
        openPaymentModal();

    } catch (error) {
        showSuccessModal("Order Error", error.message || "Unable to create your order. Please try again.");
    } finally {
        if (button) {
            button.disabled = false;
            button.innerHTML = 'PLACE ORDER <i class="fa-solid fa-arrow-right"></i>';
        }
    }
}

function openPaymentModal() {
    if (!pendingOrder) return;

    document.getElementById("payment-order-number").textContent = `Order #${pendingOrder.order_number}`;
    document.getElementById("payment-order-mode").textContent = pendingOrder.order_type;
    document.getElementById("payment-item-count").textContent = pendingOrder.total_items;
    document.getElementById("payment-total").textContent = `₹${Number(pendingOrder.total).toFixed(2)}`;

    document.getElementById("payment-modal").classList.add("open");
    document.body.classList.add("no-scroll");
}

function closePaymentModal() {
    document.getElementById("payment-modal").classList.remove("open");
    if (!document.getElementById("cart-modal").classList.contains("open")) {
        document.body.classList.remove("no-scroll");
    }
}

function selectPaymentMethod(method, button) {
    selectedPaymentMethod = method;

    document.querySelectorAll(".payment-method").forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    document.getElementById("upi-payment-fields").style.display = method === "UPI" ? "block" : "none";
    document.getElementById("card-payment-fields").style.display = method === "Card" ? "block" : "none";
    document.getElementById("cash-payment-fields").style.display = method === "Cash" ? "block" : "none";

    document.getElementById("pay-now-button").innerHTML =
        method === "Cash" ? 'CONFIRM CASH ORDER <i class="fa-solid fa-check"></i>' : 'PAY NOW <i class="fa-solid fa-lock"></i>';
}

async function completePayment() {
    if (!pendingOrder) return;

    if (selectedPaymentMethod === "UPI") {
        const upi = document.getElementById("upi-id").value.trim();
        if (!/^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}$/.test(upi)) {
            showSuccessModal("UPI ID Required", "Enter a valid demo UPI ID such as name@upi.");
            return;
        }
    }

    if (selectedPaymentMethod === "Card") {
        const card = document.getElementById("card-number").value.replace(/\s/g, "");
        const expiry = document.getElementById("card-expiry").value.trim();
        const cvv = document.getElementById("card-cvv").value.trim();
        if (!/^\d{16}$/.test(card) || !/^\d{2}\/\d{2}$/.test(expiry) || !/^\d{3,4}$/.test(cvv)) {
            showSuccessModal("Invalid Demo Card", "Use 16 digits, MM/YY and a 3–4 digit CVV. Never enter a real card in demo mode.");
            return;
        }
    }

    const button = document.getElementById("pay-now-button");
    button.disabled = true;
    button.innerHTML = 'PROCESSING <i class="fa-solid fa-spinner fa-spin"></i>';

    try {
        const response = await fetch("backend/api/complete_payment.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                order_id: pendingOrder.id,
                payment_method: selectedPaymentMethod
            })
        });

        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || "Payment failed.");

        const orderNumber = pendingOrder.order_number;
        const total = Number(pendingOrder.total).toFixed(2);

        pendingOrder = null;
        cart = [];
        updateCartUI();
        document.getElementById("cart-modal").classList.remove("open");
        closePaymentModal();
        document.getElementById("checkout-name").value = "";
        document.getElementById("checkout-phone").value = "";
        document.getElementById("table-number").value = "";
        document.getElementById("delivery-address").value = "";

        showSuccessModal("Payment Successful!", `Order #${orderNumber} is confirmed. ${selectedPaymentMethod} payment recorded. Total: ₹${total}`);

    } catch (error) {
        showSuccessModal("Payment Error", error.message || "Unable to complete payment.");
    } finally {
        button.disabled = false;
        button.innerHTML = selectedPaymentMethod === "Cash" ? 'CONFIRM CASH ORDER <i class="fa-solid fa-check"></i>' : 'PAY NOW <i class="fa-solid fa-lock"></i>';
    }
}


/* =========================================================
   RESERVATION
========================================================= */

async function handleReservation(event) {

    event.preventDefault();

    const name = document.getElementById("reservation-name").value.trim();
    const phone = document.getElementById("reservation-phone").value.trim();
    const guests = document.getElementById("reservation-guests").value;
    const date = document.getElementById("reservation-date").value;
    const time = document.getElementById("reservation-time").value;

    if (!name || !phone || !guests || !date || !time) {
        showSuccessModal("Missing Details", "Please complete all reservation fields.");
        return;
    }

    try {
        const response = await fetch("backend/api/create_reservation.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, guests, date, time })
        });

        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || "Reservation failed.");

        showSuccessModal("Reservation Confirmed!", `Thank you ${name}. Reservation #${result.reservation_number} for ${guests} guest(s) on ${date} at ${time} has been received by Komo Restaurant.`);
        event.target.reset();

    } catch (error) {
        showSuccessModal("Reservation Error", error.message || "Unable to save reservation.");
    }
}


/* =========================================================
   MINIMUM RESERVATION DATE
========================================================= */

function setMinimumReservationDate() {

    const dateInput =
        document.getElementById(
            "reservation-date"
        );


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    dateInput.min = today;

}


/* =========================================================
   SUCCESS MODAL
========================================================= */

function showSuccessModal(title, message) {

    document.getElementById(
        "success-title"
    ).textContent = title;


    document.getElementById(
        "success-message"
    ).textContent = message;


    document
        .getElementById("success-modal")
        .classList.add("show");


    document.body.classList.add(
        "no-scroll"
    );

}


function closeSuccessModal() {

    document
        .getElementById("success-modal")
        .classList.remove("show");


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }


    const toast =
        document.createElement("div");

    toast.className = "toast";


    toast.innerHTML = `

        <i class="fa-solid fa-check"></i>

        <span>
            ${message}
        </span>

    `;


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.classList.add("show");

    }, 50);


    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}


/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

function setupGallery() {

    document
        .querySelectorAll(".gallery-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const image =
                        item.querySelector("img");

                    openLightbox(
                        image.src,
                        image.alt
                    );

                }
            );

        });

}


function openLightbox(src, alt) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightbox-image"
        );


    image.src = src;

    image.alt = alt;


    lightbox.classList.add(
        "show"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeLightbox() {

    document
        .getElementById("lightbox")
        .classList.remove("show");

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

            closeSuccessModal();

            document
                .getElementById("cart-modal")
                .classList.remove("open");

            document.body.classList.remove(
                "no-scroll"
            );

            closeMobileMenu();

        }

    }
);


/* =========================================================
   TOAST CSS
   Injected using JavaScript so no extra file is required.
========================================================= */

const toastStyle =
    document.createElement("style");

toastStyle.textContent = `

    .toast {
        position: fixed;

        right: 25px;
        bottom: 25px;

        z-index: 5000;

        display: flex;
        align-items: center;

        gap: 12px;

        max-width: 350px;

        padding: 15px 20px;

        background: #111;

        color: white;

        border-left: 3px solid #c9973e;

        box-shadow: 0 10px 30px rgba(0,0,0,0.2);

        transform: translateY(30px);

        opacity: 0;

        transition: 0.3s ease;

        font-size: 11px;
    }

    .toast.show {
        transform: translateY(0);

        opacity: 1;
    }

    .toast i {
        color: #c9973e;
    }

    @media(max-width:600px) {

        .toast {
            left: 20px;
            right: 20px;
            bottom: 20px;

            max-width: none;
        }

    }

`;

document.head.appendChild(
    toastStyle
);