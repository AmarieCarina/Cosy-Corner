window.onload=function(){
    const container = document.getElementsByClassName("produse-favorite")[0];
    let favorites = this.localStorage.getItem("favorites");
    const count = document.getElementById("favorites-count");
    if(favorites ==null){
        return;
    }
    favorites=JSON.parse(favorites);

    for(var i=0; i<favorites.length; i++){
        var div=this.document.createElement("div");
        div.innerHTML=
            "<img src='" + favorites[i].imgSrc + "' width='150em'>" +
            "<p>" + favorites[i].name + "</p>" +
            "<p>" + favorites[i].price + " </p>";
        container.appendChild(div);
    }
    count.textContent = `Produse favorite: ${favorites.length}`;
};