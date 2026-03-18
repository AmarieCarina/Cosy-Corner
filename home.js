window.onload = function(){

//ADAUGARE LA FAVORITE SI IN COS
    let btnFav=document.getElementsByClassName("fav");
    for(let btn of btnFav){
        btn.onclick = favorite;
    }
    let btnCos=this.document.getElementsByClassName("cart");
    for(let btn of btnCos){
        btn.onclick = favorite;
    }
    //animatie butoane per produs individual
    function favorite(){
        const btn = this;
        this.classList.add("active");
        setTimeout(()=>{
            this.classList.remove("active");
            this.style.backgroundColor = "#edd3b8";
        },1000);
        this.style.backgroundColor = "pink";

        if(this.classList.contains("fav")){
            this.classList.toggle("is-favorite");
            if(this.classList.contains("is-favorite")){
                this.textContent = "💖";
                let icon = document.querySelector(".favorite");
                animateIcon(icon);
            }
            else{
                this.textContent = "❤︎";  
            }  
            //adaugare in favorite.html
            addToFavorites(btn);
        }
        if(this.classList.contains("cart")){
            this.classList.toggle("is-added");
            if(this.classList.contains("is-added")){
                this.textContent="🛍️";
                let icon = document.getElementsByClassName("carucior")[0];
                animateIcon(icon);
                addToCart(btn);
            }
            else{
                this.textContent = "🛒";
            }
        }

    }
    //animatie header
    function animateIcon(icon){  
        icon.style.backgroundColor = "white";
        icon.classList.add("activeOpt");
        if(icon.classList.contains("favorite"))
            icon.textContent = "💖";
        if(icon.classList.contains("carucior"))
            icon.textContent = "🛍️";
        setTimeout(()=>{
            icon.style.backgroundColor = "#edd3b8";
            icon.classList.remove("activeOpt");
            if(icon.classList.contains("favorite"))
                icon.textContent = "❤︎"; 
            if(icon.classList.contains("carucior"))
                icon.textContent = "🛒";
        },700);
    }
    function addToFavorites(btn){
        let container = btn.parentNode;
        while (container && container.tagName.toLowerCase() !== "article") {
            container = container.parentNode;
        }
        if(!container) 
            return;
        let img=container.getElementsByClassName("produs")[0].src;
        let name = container.getElementsByTagName("li")[0].textContent;
        let price = container.getElementsByClassName("pret")[0].textContent;

        let product ={
            imgSrc: img,
            name: name,
            price: price
        };

        let favorites = localStorage.getItem("favorites");
        if(favorites == null){
            favorites = [];
        }
        else{
            favorites = JSON.parse(favorites);
        }
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    function addToCart(btn){
        let container = btn.parentNode;
        while (container && container.tagName.toLowerCase() !== "article") {
            container = container.parentNode;
        }
        if(!container) 
            return;
        let img=container.querySelector(".produs").src;
        let name = container.querySelector("li").textContent;
        let price = container.querySelector(".pret").textContent;
        let product = {
            imgSrc: img,
            name: name,
            price: price
        };
        let cart = localStorage.getItem("cart");
        if(cart == null){
            cart = [];
        }
        else{
            cart = JSON.parse(cart);
        }
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

    }


    let latime=window.innerWidth;
    let produse=document.getElementsByTagName("article");
    if(latime<1000){
        for(let produs of produse){
            produs.onclick=function(){
                // 
            };
        }
    }
    pozaBanner=document.querySelector("#reduceri img")
    pozaBanner.onclick=function(){
        window.location.href="oferta.html";
    }
}


    
