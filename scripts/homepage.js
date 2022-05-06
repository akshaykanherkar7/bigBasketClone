import { footer, navbar2 } from "../components/navbar.js";
document.getElementById("NavbarContainer").innerHTML = navbar2();
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
            mrp : mrp
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
            mrp : mrp
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
    window.location.href = "product.html";
}

