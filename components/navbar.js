let navbar = () =>{
    return `<div id="navbartop">
    <img class="navbarImage" src="https://play-lh.googleusercontent.com/EuiZnkT8aEKjXDLX74DTp1VRIwWaeRa8Dvo-LOGAxy1FPQ8GzABTIRenksiM-A7Oz48g" alt="">
    <i class="fa-solid fa-magnifying-glass" id="searchicon" ></i><input class="searchBox" type="text" placeholder="Search for Products...">
        <p id="delivery">Delivery in 1 Day
            5666441,Banglore
      </p>
      <button><a href="" id="btna">Login/Sign Up</a></button>
      <a href=""><i id="bagicon" class="fa-solid fa-bag-shopping"></i></a>
      <p id = "bagcount"></p>
</div>
<div id="navbarbottom">
    <select name="" id="select">
        <option value="">Shop by Category</option>
        <option value="">Fruits & Vegetables</option> 
        <option value="">Foodgrains,Oil & Masala</option>
        <option value="">Bakery, Cakes & Dairy</option>
        <option value="">Beverages</option>
        <option value="">Snacks & Brandes Foods</option>
        <option value="">Beauty & Hygiene</option>
        <option value="">Cleaning & Household</option>
        <option value="">Kitchen, Garden & Pets</option>
        <option value="">Eggs,Meat & Fish</option>
        <option value="">Gourmet & World Food</option>
        <option value="">Baby Care</option> 
    </select>
    <a href=""><p>Exotic Fruits & Vegg...</p></a>
    <a href=""><p>Tea</p></a>
    <a href=""><p>Ghee</p></a>
    <a href=""><p>Nandhini</p></a>
    <a href=""><p>Fresh Vegetables</p></a>
    <img src="http://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_bbstar_28_220921_all.png" alt="">
    <img src="http://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png" alt="">
</div>`
}


let navbar2 = () => {
    return `<div id="navbartop">
    <img class="navbarImage" src="https://play-lh.googleusercontent.com/EuiZnkT8aEKjXDLX74DTp1VRIwWaeRa8Dvo-LOGAxy1FPQ8GzABTIRenksiM-A7Oz48g" alt="">
    <i class="fa-solid fa-magnifying-glass" id="searchicon" ></i><input class="searchBox" type="text" placeholder="Search for Products...">
        <p id="delivery">Delivery in 1 Day
            5666441,Banglore
      </p>
      <div id="navbaricon">
       <a href=""> <i class="fa-regular fa-user" id="usericon"></i></a>
        <a href=""><i id="bagicon" class="fa-solid fa-bag-shopping"></i></a>
        <p id = "bagcount"></p>
      </div>
</div>
<div id="navbarbottom">
    <select name="" id="select">
        <option value="">Shop by Category</option>
        <option value="">Fruits & Vegetables</option> 
        <option value="">Foodgrains,Oil & Masala</option>
        <option value="">Bakery, Cakes & Dairy</option>
        <option value="">Beverages</option>
        <option value="">Snacks & Brandes Foods</option>
        <option value="">Beauty & Hygiene</option>
        <option value="">Cleaning & Household</option>
        <option value="">Kitchen, Garden & Pets</option>
        <option value="">Eggs,Meat & Fish</option>
        <option value="">Gourmet & World Food</option>
        <option value="">Baby Care</option> 
    </select>
    <a href=""><p>Exotic Fruits & Vegg...</p></a>
    <a href=""><p>Tea</p></a>
    <a href=""><p>Ghee</p></a>
    <a href=""><p>Nandhini</p></a>
    <a href=""><p>Fresh Vegetables</p></a>
    <img src="http://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_bbstar_28_220921_all.png" alt="">
    <img src="http://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png" alt="">
</div>`
}


let footer = () => {
    return ` <div id="firstBox">
    <div>
        <div id="firstLink">
            <div>
                <p>Bigbasket</p>
                <a href=""><p>About Us</p></a>
                <a href=""><p>In News</p></a>
                <a href=""><p>Green bigbasket</p></a>
                <a href=""><p>Privacy Policy</p></a>
                <a href=""><p>Affiliate</p></a>
                <a href=""><p>Terms and Conditions</p></a>
                <a href=""><p>bb Daily</p></a>
            </div>
            <div>
                <p>Help</p>
                <a href=""><p>FAQs</p></a>
                <a href=""><p>Contact Us</p></a>
                <a href=""><p>bb Wallet FAQs</p></a>
                <a href=""><p>bb Wallet T&Cs</p></a>
                <a href=""><p>Vendor Connect</p></a>
            </div>
        </div>
    </div>

   <div id="socoalContainer">
       <img class="bigbasketImg" src="https://play-lh.googleusercontent.com/EuiZnkT8aEKjXDLX74DTp1VRIwWaeRa8Dvo-LOGAxy1FPQ8GzABTIRenksiM-A7Oz48g" alt="">
       <div class="download">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM6O9zXklYkSQxeE2SsygpTkkdwOwQcjAGg&usqp=CAU" alt="">
            <img src="data:image/png;base64,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" alt="">
        </div>
        <div id="social">
            <img src="https://w7.pngwing.com/pngs/152/951/png-transparent-social-media-discovery-canyon-campus-school-computer-icons-facebook-desktop-small-fresh-background-thumbnail.png" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz5_zr5bhtmyvwC2T0BO9N8R9fgk3I79SyLzDZR1hVYl6JhAc7qIYVYv1AEc_m_gWdwM&usqp=CAU" alt="">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" alt="">
        </div>
        <div>
            <p>Vendor Connect</p>
            <button>Become a Seller</button>
        </div>
   </div>

</div>


    <hr id="hrdashed1">
    <div id="tags">
        <h4 class="cityhead">Cities We Serve</h4>
        <p>Ujjain
            |
            Madurai
            |
            Shambhu
            |
            Sircilla District
            |
            Pratapgarh District
            |
            South 24 Parganas District
            |
            Muzaffarnagar District
            |
            Meerut District
            |
            Ludhiana District
            |
            Hooghly District
            |
            Gonda District
            |
            Fatehgarh Sahib District
            |
            Baghpat District
            |
            Amroha District
            |
            Amravati
            |
            Jamshedpur
            |
            Kolhapur
            |
            Kalaburagi
            |
            Guwahati
            |
            Bhubaneshwar-Cuttack
            |
            Bhiwadi
            |
            Sonipat
            |
            Bahadurgarh
            |
            Raichur
            |
            Sindudurg
            |
            Sangareddy
            |
            Khammam
            |
            Jadcherla
            |
            Tiruppur
            |
            Hubli
            |
            Puducherry
            |
            Tumakuru
            |
            Udham-Singh-Nagar
            |
            Nellore
            |
            Ambala
            |
            Agra
            |
            Rajkot
            |
            Sikar
            |
            Nadia
            |
            Bardoli
            |
            Sultanpur District
            |
            Thrissur
            |
            Raebareli District
            |
            Raipur
            |
            Sambhal District
            |
            Siddipet District
            |
            Faridabad
            |
            Prakasam
            |
            Nalgonda
            |
            Karnal
            |
            Panipat
            |
            Rohtak
            |
            Renigunta
            |
            Patiala
            |
            Trichy
            |
            Bulandshahr
            |
            Prakasam District
            |
            Surat
            |
            Mysore
            |
            Vadodara
            |
            Pune
            |
            Hyderabad
            |
            Kolkata
            |
            Chennai
            |
            Patan
            |
            Siddhpur
            |
            Mumbai
            |
            Nashik
            |
            Kalol
            |
            Kadi
            |
            Himatnagar
            |
            Mehsana
            |
            Raipur
            |
            Amaravathi
            |
            Allahabad
            |
            Jodhpur
            |
            Palakkad
            |
            Palwal
            |
            Kalinga Nagar
            |
            Mahabubnagar
            |
            Korba
            |
            Vijayawada-Guntur
            |
            Pilakhua District
            |
            Bhopal
            |
            Jaipur
            |
            Ahmedabad-Gandhinagar
            |
            Noida-Ghaziabad
            |
            Meerut
            |
            Vizianagaram
            |
            Medak District
            |
            East Godavari District
            |
            Nizamabad District
            |
            Kamareddy District
            |
            Lucknow Rural
            |
            Noida Rural
            |
            Chennai Rural
            |
            Vizag Rural
            |
            Nagpur
            |
            Kochi
            |
            Visnagar
            |
            Itarsi
            |
            Khordha
            |
            Dewas
            |
            kolar
            |
            Patna
            |
            Mandideep
            |
            Coimbatore
            |
            Kurnool
            |
            Suryapet District
            |
            Hosur
            |
            Eluru
            |
            Ghaziabad
            |
            Muzzafarpur
            |
            Delhi
            |
            Gurgaon
            |
            Bangalore
            |
            Chikkaballapura District
            |
            Srikakulam Disctrict
            |
            Vizianagaram Disctrict
            |
            Yanam District
            |
            Modinagar District
            |
            Puri
            |
            Gautam Buddha Nagar District
            |
            Anantapur District
            |
            Unjha
            |
            Dhone
            |
            Halflong
            |
            Parwanoo
            |
            Jajpur
            |
            Krishna District
            |
            Ashta
            |
            West-Godavari
            |
            Guntur-Rural
            |
            Kota
            |
            Barabanki District
            |
            Visakhapatnam District
            |
            Indore
            |
            Mhow
            |
            Visakhapatnam
            |
            Ludhiana
            |
            Hapur
            |
            Chandigarh Tricity
            |
            East-Godavari-2
            |
            Chittoor District
            |
            Tiruvallur District
            |
            Bidar District
            |
            Sangareddy District
            |
            Ayodhya District
            |
            Hoshangabad
            |
            Madanapalli
            |
            Tirupati
            |
            Miryalaguda
            |
            Kalwakurthy
            |
            Hajipur
            |
            Kadapa
            |
            Bhadrak
            |
            Gurugram Rural
            |
            Indore Rural
            |
            Guwahati Rural
            |
            Bhopal Rural
            |
            Hyderabad Rural
            |
            Coimbatore Rural
            |
            Bhubaneswar Rural
            |
            Bangalore Rural
            |
            Kolkata Rural
            |
            Kochi Rural
            |
            Kanpur
            |
            Lucknow
            |
            Anand
            |
            Saran
            |
            Nagpur Rural
            |
            Patna Rural
            |
            Mumbai Rural
            |
            Mysore Rural
            |
            Vadodara Rural
            |
            Jaipur Rural
            |
            Pune Rural
            |
            Surat Rural
            |
            Aligarh District
            |
            Amethi District
            |
            Jammu Kashmir
            |
            Katihar
            |
            Kottayam
            |
            Rajamahendravaram
            |
            Kakinada
            |
            Kundli
            |
            Sahibganj
            |
            Salcete
            |
            Allahabad
            |
            DehraDun
            |
            Chittor District
            |
            Saharanpur District
            |
            Aligarh</p>
    </div>

   <hr id="hrdashed">
   <div id="bigSeccondLinkContainer">
    <div id="seccondBox">
        <div>
            <p>Popular Categories</p>
            <div id="seccondLink">
                <div>
                    <a href=""><p>Sunflower Oils</p></a>
                    <a href=""><p>Milk</p></a>
                    <a href=""><p>Organic F&V</p></a>
                    <a href=""><p>Floor Cleaners</p></a>
                    <a href=""><p>Frozen Veg Food</p></a>
                </div>
                <div>
                    <a href=""><p>Wheat Atta</p></a>
                    <a href=""><p>Health Drinks</p></a>
                    <a href=""><p>Namkeen</p></a>
                    <a href=""><p>Other Juices</p></a>
                    <a href=""><p>Diapers & Wipes</p></a>
                </div>
                <div>
                    <a href=""><p>Ghee</p></a>
                    <a href=""><p>Flakes</p></a>
                    <a href=""><p>Eggs</p></a>
                    <a href=""><p>Leafy Vegetables</p></a>
                </div>
        </div>
            </div>
    
            <div id="seccondBox">
                <div>
                    <p>Popular Brands</p>
                    <div id="seccondLink">
                        <div>
                            <a href=""><p>Amul</p></a>
                            <a href=""><p>Red Bull</p></a>
                            <a href=""><p>Yummiez</p></a>
                            <a href=""><p>Britannia</p></a>
                            <a href=""><p>Haldirams</p></a>
                        </div>
                        <div>
                            <a href=""><p>Nescafe</p></a>
                            <a href=""><p>elite cake</p></a>
                            <a href=""><p>Yera</p></a>
                            <a href=""><p>Wow Momo</p></a>
                            <a href=""><p>Ferrero</p></a>
                        </div>
                        <div>
                            <a href=""><p>MTR</p></a>
                            <a href=""><p>Pediasure</p></a>
                            <a href=""><p>Yakult</p></a>
                            <a href=""><p>Fortune</p></a>
                            <a href=""><p>Lays</p></a>
                        </div>
                    </div>
                </div>
               </div>
       </div>
       <a class="showmore" href="">Show more+</a>`
}
export {navbar, navbar2, footer};