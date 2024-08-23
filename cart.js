let openShopping=document.querySelector('.shopping')
let closeShopping=document.querySelector('.closeShopping')
let list=document.querySelector('.list')
let listCard=document.querySelector('.listCard')
let body=document.querySelector('body')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')

openShopping.addEventListener('click',()=>{
    body.classList.add('active')
})

closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

let products=[
    {
        id:1,
        name:'Winter Long Sleeve Black White',
        image:'../assects/p1.jpg',
        des:'Nongshim Shin Ramyun Korean Style Noodles : 120 gms',
        price:400
    },
    {
        id:2,
        name:'women totes lady handing',
        image:'../assects/p2.jpg',
        des:'Nongshim Shin Ramyun Korean Style Noodles : 120 gms',
        price:300
    },

    {
        id:3,
        name:'Lace water soluble sexy dress',
        image:'../assects/p4.jpg',
        des:'Nongshim Shin Ramyun Korean Style Noodles : 120 gms',
        price:600
    },
    {
        id:4,
        name:'Elegant Formal Party Dress',
        image:'../assects/p10.jpg',
        des:'Nongshim Shin Ramyun Korean Style Noodles : 120 gms',
        price:500
    },
    {
        id:5,
        name:'Mini Dress Ladies Sleeve',
        image:'../assects/p8.jpg',
        des:'Nongshim Shin Ramyun Korean Style Noodles : 120 gms',
        price:600
    },
    {
        id:6,
        name:'Winter Long Sleeve Black white',
        image:'../assects/p1.jpg',
        des:'Nongshim Shin Ramyun Korean Style Noodles : 120 gms',
        price:400
    },

   
    
]
let listCards=[]
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML=`
        <img src="demart/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="desc">${value.des}</div>
        <div class="price">&#8377; ${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>

        `;
        list.appendChild(newDiv)
    })

}
initApp()

function addToCart(key){
    if(listCards[key]==null){
        listCards[key] = { ...products[key], quantity: 1 };
    }else{
        listCards[key].quantity +=1;
    }
    reloadCard()
}

function reloadCard(){
    listCard.innerHTML=''
    let count=0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
        totalPrice+=value.quantity*value.price;
        count=count+value.quantity;

        if(value!=null){
            let newDiv=document.createElement('li')
            newDiv.innerHTML=`
            <div><img src="dmart/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${(value.price * value.quantity).toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changequantity(${key},${value.quantity-1})">-<button>
            <div class="count">${value.quantity}</div>
            <button onclick="changequantity(${key},${value.quantity+1})">+<button>

            </div>
            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerText=totalPrice.toLocaleString();
    quantity.innerText=count;
}

function changequantity(key,quantity){
    if(quantity<=0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity=quantity
        //listCards[key].price=quantity*products[key].price
    }
    reloadCard()
}

var bttn=$('#top')

$(window).scroll(function(){
    if($(window).scrollTop()>300){
        bttn.addClass('show')
    }else{
        bttn.removeClass('show')
    }
})

bttn.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},'300')
})
