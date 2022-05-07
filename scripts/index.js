import { navbar, footer} from "../components/navbar.js";
document.getElementById("NavbarContainer").innerHTML = navbar();
document.getElementById("footerContainer").innerHTML = footer();


const required = () => {
    fetch("http://localhost:4000/data")
    .then(res => res.json())
    .then(res => appendData(res))
    .catch(e => console.log(e))
}
required();

const required1 = () => {
    fetch("http://localhost:4000/sellerProduct")
    .then(res => res.json())
    .then(res => appendData2(res))
    .catch(e => console.log(e))
}
required1();


let addebagArr = JSON.parse(localStorage.getItem("cart")) || [];
let prodDetailArr = [];

let appendData = (data) =>{

    data.map(({image,type,name,price,mrpprice})=>{
       console.log(image,type,name,price);
       
        let div = document.createElement("div");
            div.setAttribute("id","product");

        let img = document.createElement("img");
        img.setAttribute("class","prodimg");
        img.src = image;

        let prodtype = document.createElement("p");
        prodtype.setAttribute("class","type")
        prodtype.innerText = type;

        let prodname = document.createElement("p")
        prodname.setAttribute("class","prodname")
        prodname.innerText = name;

        let pricediv = document.createElement("div")
        pricediv.setAttribute("id","pricediv")

        let prodprice = document.createElement("h3");
        prodprice.innerText = `Rs: ${price}`;

        let mrp = document.createElement("h4");
        mrp.setAttribute("class","mrpprice")
        mrp.innerText = `Rs: ${mrpprice}`;

        let select = document.createElement("select");
        select.setAttribute("class","hardinsasta")
        let option = document.createElement("option");
        option.innerText = "Har Din Sasta!";
        select.append(option);

        let div2 = document.createElement("div");
        div2.setAttribute("id","buttonsbag");

        let icon = document.createElement("i");
        icon.setAttribute("id","favicon")
        icon.setAttribute("class","fa-regular fa-bookmark")

        let elem = {
            image: image,
            type: type,
            name : name,
            price: price,
            mrp : mrpprice,
            product_quantity: 1
        }

        let btn = document.createElement("button");
        btn.setAttribute("class","addbtn");
        btn.innerText = "Add";
        btn.addEventListener("click",function(){
            addedToBag(elem);
        })

        pricediv.append(prodprice,mrp)
        div2.append(icon,btn);
        div.append(img, prodtype, prodname, pricediv, select, div2)
        img.addEventListener("click", ()=>{
            ProducDetail(elem);
        })
        document.getElementById("productContainer").append(div);
    })
}

let appendData2 = (data) =>{

    data.map(({image,type,name,price,mrpprice})=>{
       console.log(image,type,name,price);
       
        let div = document.createElement("div");
            div.setAttribute("id","product");

        let img = document.createElement("img");
        img.setAttribute("class","prodimg");
        img.src = image;

        let prodtype = document.createElement("p");
        prodtype.setAttribute("class","type")
        prodtype.innerText = type;

        let prodname = document.createElement("p")
        prodname.setAttribute("class","prodname")
        prodname.innerText = name;

        let pricediv = document.createElement("div")
        pricediv.setAttribute("id","pricediv")

        let prodprice = document.createElement("h3");
        prodprice.innerText = `Rs: ${price}`;

        let mrp = document.createElement("h4");
        mrp.setAttribute("class","mrpprice")
        mrp.innerText = `Rs: ${mrpprice}`;

        let select = document.createElement("select");
        select.setAttribute("class","hardinsasta")
        let option = document.createElement("option");
        option.innerText = "Har Din Sasta!";
        select.append(option);

        let div2 = document.createElement("div");
        div2.setAttribute("id","buttonsbag");

        let icon = document.createElement("i");
        icon.setAttribute("id","favicon")
        icon.setAttribute("class","fa-regular fa-bookmark")

        let elem = {
            image: image,
            type: type,
            name : name,
            price: price,
            mrp : mrpprice,
            product_quantity: 1
        }

        let btn = document.createElement("button");
        btn.setAttribute("class","addbtn");
        btn.innerText = "Add";
        btn.addEventListener("click",function(){
            addedToBag(elem);
        })

        pricediv.append(prodprice,mrp)
        div2.append(icon,btn);
        div.append(img, prodtype, prodname, pricediv, select, div2)

        img.addEventListener("click", ()=>{
            ProducDetail(elem);
        })
        document.getElementById("productContainer2").append(div);
    })
}


let count = 0;
let addedToBag = (elem) =>{
    count++;
    document.getElementById("bagcount").innerText = count;
    addebagArr.push(elem);
    localStorage.setItem("cart",JSON.stringify(addebagArr));
}

let ProducDetail = (elem) =>{
    prodDetailArr.push(elem);
    localStorage.setItem("product", JSON.stringify(prodDetailArr));
    window.location.href = "email.html";
}


























// best seller 

/* <div id="product">
<img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/264003_12-johnsons-baby-buds.jpg" alt="">
<p>Buds</p>
<h3>Rs:90</h3>
<select name="" class="hardinsasta">
    <option value="">Har Din Sasta!</option>
</select>
<div id="buttonsbag">
    <i class="fa-regular fa-bookmark" id="favicon"></i>
    <button class="addbtn">Add</button>
</div>
</div>
<div id="product">
<img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/20002821_3-himalaya-baby-baby-lotion.jpg" alt="">
<p>Baby Lotion</p>
<h3>Rs:90</h3>
<select name="" class="hardinsasta">
    <option value="">Har Din Sasta!</option>
</select>
<div id="buttonsbag">
    <i class="fa-regular fa-bookmark" id="favicon"></i>
    <button class="addbtn">Add</button>
</div>
</div>
<div id="product">
<img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/40013518_6-himalaya-baby-baby-soap-extra-moisturizing.jpg" alt="">
<p>Baby Soap - Extra Moisturizing</p>
<h3>Rs:90</h3>
<select name="" class="hardinsasta">
    <option value="">Har Din Sasta!</option>
</select>
<div id="buttonsbag">
    <i class="fa-regular fa-bookmark" id="favicon"></i>
    <button class="addbtn">Add</button>
</div>
</div>
<div id="product">
<img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/40020805_4-himalaya-baby-shampoo-gentle-baby.jpg" alt="">
<p>Shampoo - Gentle Baby</p>
<h3>Rs:90</h3>
<select name="" class="hardinsasta">
    <option value="">Har Din Sasta!</option>
</select>
<div id="buttonsbag">
    <i class="fa-regular fa-bookmark" id="favicon"></i>
    <button class="addbtn">Add</button>
</div> */























/* <div id="product">
                    <img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/264003_12-johnsons-baby-buds.jpg" alt="">
                    <p>Buds</p>
                    <h3>Rs:90</h3>
                    <select name="" class="hardinsasta">
                        <option value="">Har Din Sasta!</option>
                    </select>
                    <div id="buttonsbag">
                        <i class="fa-regular fa-bookmark" id="favicon"></i>
                        <button class="addbtn">Add</button>
                    </div>
                </div>
                <div id="product">
                    <img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/20002821_3-himalaya-baby-baby-lotion.jpg" alt="">
                    <p>Baby Lotion</p>
                    <h3>Rs:90</h3>
                    <select name="" class="hardinsasta">
                        <option value="">Har Din Sasta!</option>
                    </select>
                    <div id="buttonsbag">
                        <i class="fa-regular fa-bookmark" id="favicon"></i>
                        <button class="addbtn">Add</button>
                    </div>
                </div>
                <div id="product">
                    <img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/40013518_6-himalaya-baby-baby-soap-extra-moisturizing.jpg" alt="">
                    <p>Baby Soap - Extra Moisturizing</p>
                    <h3>Rs:90</h3>
                    <select name="" class="hardinsasta">
                        <option value="">Har Din Sasta!</option>
                    </select>
                    <div id="buttonsbag">
                        <i class="fa-regular fa-bookmark" id="favicon"></i>
                        <button class="addbtn">Add</button>
                    </div>
                </div>
                <div id="product">
                    <img class="prodimg" src="https://www.bigbasket.com/media/uploads/p/m/40020805_4-himalaya-baby-shampoo-gentle-baby.jpg" alt="">
                    <p>Shampoo - Gentle Baby</p>
                    <h3>Rs:90</h3>
                    <select name="" class="hardinsasta">
                        <option value="">Har Din Sasta!</option>
                    </select>
                    <div id="buttonsbag">
                        <i class="fa-regular fa-bookmark" id="favicon"></i>
                        <button class="addbtn">Add</button>
                    </div> */















