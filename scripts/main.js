// an array of products obejcts for a cart

const products = [
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/6363651/1.jpg?0570",  
        price: 600000,
        productName: 'DELL Latitude 3420-14"',
        quantity: 3,
        description:'FHD-11th Gen Intel Core I5-1135G7 Quad-Core-16GB RAM-512GB SSD-Win 10 Pro'
       
        
    },
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/3448872/1.jpg?1091",
        price: 260000,
        productName: 'Samsung Galaxy A15 6.5',
        quantity: 10,
        description: '6GB RAM/128GB ROM Android 14 - Light Blue'
        
    },
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/3448872/1.jpg?1091",
        price: 260000,
        productName: 'Samsung Galaxy A15 6.5',
        quantity: 10,
        description: '6GB RAM/128GB ROM Android 14 - Light Blue'
        
    },
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/3448872/1.jpg?1091",
        price: 260000,
        productName: 'Samsung Galaxy A15 6.5',
        quantity: 10,
        description: '6GB RAM/128GB ROM Android 14 - Light Blue'
        
    },
];

 let cartListElem = document.getElementById('cartlist');

 function renderProducts() {
    for (let product of products) {
        let productElem = document.createElement('div');
        productElem.setAttribute('class', 'product');

        let imgElem = document.createElement('img');
        imgElem.src = product.imgUrl;
        imgElem.alt = width="200";
        imgElem.setAttribute("class", "img");
        productElem.appendChild(imgElem);

        let nameElem = document.createElement('h3');
        nameElem.textContent = product.productName;
        productElem.appendChild(nameElem);

        let priceElem = document.createElement('p');
        priceElem.textContent = product.price;
        productElem.appendChild(priceElem);

        let quantityElem = document.createElement('p');
        quantityElem.textContent = product.quantity;
        productElem.appendChild(quantityElem);

        let descriptionElem = document.createElement('p');
        descriptionElem.textContent = product.description;
        productElem.appendChild(descriptionElem);


        // Buttons 

        let incrementBtn = document.createElement('button');
        incrementBtn.textContent ="+";
        incrementBtn.setAttribute("id", "product.poductName");
        incrementBtn.addEventListener('click', function(eventObj) {
            increaseQtn(eventObj);
            
        });

        let decrementBtn = document.createElement('button');
        decrementBtn.textContent ="-";
        decrementBtn.setAttribute("id", "product.poductName");
        decrementBtn.addEventListener('click', function(eventObj) {
            decreaseQtn(eventObj);
            
        });

        let quantities = document.createElement('p');
        quantities.textContent = product.quantity;
        quantities.setAttribute("id", `quantity.${product.productName}`);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent ="Remove";
        deleteBtn.setAttribute("id", "product.poductName");
        deleteBtn.addEventListener('click', function(eventObj) {
            removeQtn(eventObj);
            
        });

        // let leftBox = document.createElement('div');
        // leftBox.setAttribute('class', 'leftbox');
        // leftBox.appendChild(decrementBtn);
        // leftBox.appendChild(quantities);
        // leftBox.appendChild(incrementBtn);
        

        // let rightBox = document.createElement('div');
        // rightBox.setAttribute('class', 'action-box');
        // actionBox.appendChild(leftBox);
        // actionBox.appendChild(deleteBtn);
        // productElem.appendChild(actionBox);







        // productElem.innerHTML = `
        //     <img src="${product.imgUrl}" alt="${product.productName}" width="200">
        //     <p>${product.productName}</p>
        //     <p>${product.price}</p>
        //     <p>${product.quantity}</p>
        //     <p>${product.description}</p>

        //     <button onclick="addToCart(${product.price})">Add </button>

        //     <button onclick="removeFromCart(${product.price})">Remove </button>  
        // `;

        // productElem.setAttribute('class', 'product');
        cartListElem.appendChild(productElem);
    }
 };

 renderProducts();

