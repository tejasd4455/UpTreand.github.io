
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add_to_Card");
    const listCard = document.querySelector(".listCard");
    const totalElement = document.querySelector(".total");
    const cartQuantity = document.querySelector(".quantity");

    let cartItems = [
        {
            id:1,
            name:'Winter Long Sleeve Black White',
            image:'assects/women5.avif',
            price:400,
            quantity:1
        },
        {
            id:2,
            name:'women totes lady handbag',
            image:'/assects/women dress3.avif',
            price:300,
            quantity:1

        },
        {
            id:3,
            name:'Lace water soluble sexy dress',
            image:'/assects/women7.jpg',
            price:600,
            quantity:1

        },
        {
            id:4,
            name:'Women Striped Dress with Cuffed Sleeves',
            image:'/assects/dress7.avif',
            price:1500,
            quantity:1

        },
        {
            id:5,
            name:'Mini Dress Ladies Sleeve',
            image:'/assects/girl top3.avif',
            price:600,
            quantity:1

        },
        {
            id:6,
            name:'Winter Long Sleeve Black White',
            image:'/assects/top6.avif',
            price:500,
            quantity:1

        },

    ];
  
    


    function updateCart() {
        listCard.innerHTML = ""; // Clear the list before updating
        let total = 0;

        cartItems.forEach((item, index) => {
            const li = document.createElement("li");
            li.className = "d-flex align-items-center mb-3";

            const itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemImage.className = "cart-item-image";

            const itemDetails = document.createElement("div");
            itemDetails.className = "cart-item-details";

            const itemName = document.createElement("span");
            itemName.textContent = item.name;

            const itemQuantity = document.createElement("span");
            itemQuantity.textContent = ` x${item.quantity}`;

            itemDetails.appendChild(itemName);
            itemDetails.appendChild(itemQuantity);

            const itemPrice = document.createElement("span");
            itemPrice.textContent = `₹${item.price * item.quantity}`;

            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.className = "btn btn-sm btn-warning";
            decreaseButton.addEventListener("click", () => {
                updateItemQuantity(index, -1);
            });

            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.className = "btn btn-sm btn-success";
            increaseButton.addEventListener("click", () => {
                updateItemQuantity(index, 1);
            });

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "btn btn-sm btn-danger";
            removeButton.addEventListener("click", () => {
                removeItem(index);
            });

            li.appendChild(itemImage);
            li.appendChild(itemDetails);
            li.appendChild(itemPrice);
            li.appendChild(decreaseButton);
            li.appendChild(increaseButton);
            li.appendChild(removeButton);

            listCard.appendChild(li);

            total += item.price * item.quantity;
        });

        totalElement.textContent = `Total: ₹${total}`;
        cartQuantity.textContent = `(${cartItems.length})`;
    }

    function updateItemQuantity(index, delta) {
        if (cartItems[index].quantity + delta > 0) {
            cartItems[index].quantity += delta;
        } else {
            cartItems.splice(index, 1);
        }
        updateCart();
    }

    function addItemToCart(newItem) {
        const existingItemIndex = cartItems.findIndex(item => item.name === newItem.name);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            newItem.quantity = 1;
            cartItems.push(newItem);
        }
        updateCart();
    }

    function removeItem(index) {
        cartItems.splice(index, 1);
        updateCart();
    }

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productElement = button.closest(".product-list");
            const productName = productElement.querySelector(".product-name h3").textContent;
            const productPrice = parseFloat(productElement.querySelector(".amount").textContent.replace("₹", ""));
            const productImage = productElement.querySelector(".product-image-first").src;

            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            addItemToCart(product);
        });
    });
});

  


