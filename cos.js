window.onload = function(){

    const container = document.getElementById("continut-cos");
    let cart = this.localStorage.getItem("cart");
    const summary=this.document.getElementById("cost-cos");
    if(cart ==null){
        return;
    }
    cart=JSON.parse(cart);
    let total=0;
    for(var i=0; i<cart.length; i++){
        let div=this.document.createElement("div");
        div.classList.add("produs-cos");
        div.innerHTML=
            "<img src='" + cart[i].imgSrc + "' width='150em'>" +
            "<p>" + cart[i].name + " </p>" +
            "<p>" + cart[i].price + " </p>";
        container.appendChild(div);

        let p=this.document.createElement("p");
        p.innerHTML =
            "<p>" + cart[i].name + "</p>" +
            "<p>" + cart[i].price + " </p>";
        
        let priceStr = cart[i].price;      
        let price = Number(priceStr.replace("RON", "").trim());
        total+=price;
        
        summary.appendChild(p);
    }   
    let costTotal=this.document.getElementById("cost-total");
    costTotal.innerHTML=`Total: ${total} RON`;


//SVG
//selectare RANDOM
//stopPropagation
    const shapes = document.querySelectorAll("#tombola svg > circle, #tombola svg > polygon, #tombola svg > rect");
    const ctnTombola = document.getElementById("tombola");
    let clicked = false; // flag pentru o singură alegere
    let currentPrize = null; // păstrează reducerea curentă

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].addEventListener("click", function(e) {
            if (clicked) return; 
            clicked = true;

            const prize = Math.floor(Math.random() * 46) + 5; // 5-50%
            currentPrize = prize; 

            const msg = document.getElementById("msg");
            msg.textContent = `Felicitari! Ati obtinut o reducere de ${prize}%!!`;
            msg.style.color = "white";

            this.setAttribute("fill", "white");
            this.setAttribute("stroke", "darkred");
            ctnTombola.style.backgroundColor="darkred";

            e.stopPropagation();
        });
    }
    let done=0;
    ctnTombola.addEventListener("click", function() {
        if (currentPrize !== null && done==0) {
            let newPrice=document.getElementById("cost-total").innerHTML;
            promoPrice=newPrice.replace("Total: ", "").trim();
            promoPrice=Number(promoPrice.replace("RON","").trim());

            const discounted =Math.round((promoPrice - currentPrize * (promoPrice / 100)) * 100) / 100;
            newPrice = `Total: ${promoPrice} RON - ${currentPrize}% = ${discounted} RON`;
            
            let pretBloc=document.getElementById("cost-total");
            pretBloc.innerHTML=newPrice;
            pretBloc.style.color="darkred";
            pretBloc.style.marginLeft="10em";
            done=1;
        } 
});
    

}