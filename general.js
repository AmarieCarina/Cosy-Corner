//INPUT FUNCTIONAL
//CREARE SI STERGERE ELEMENTE
//EVENIMENTUL INPUT
//PRELUARE JSON
    let searchInput = this.document.getElementById("search");
    let resultsContainer = this.document.getElementById("search-results");
    let productsData=[];

    //fetch JSON
    fetch("search.json")
        .then(response => response.json()) 
        .then(data => {
            productsData = data;
        })
        .catch(error => console.error("Eroare la încărcarea JSON:", error));
    
    //evenimentul input
    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase().trim();
        resultsContainer.innerHTML = ""; 

        if (query === "") {
            resultsContainer.style.display = "none"; 
            return;
        }

        // filtrare produse, litera cu litera
        const matchedProducts = productsData.filter(product =>
            product.keywords.some(keyword =>
                keyword.toLowerCase().includes(query)
            )
        );

        if (matchedProducts.length === 0) {
            resultsContainer.style.display = "none";
            return;
        }

        // creează elemente sub searchbar
        matchedProducts.forEach(product => {
            const item = document.createElement("a");
            item.href="#";
            item.className = "search-item";
            item.textContent = product.name;
            resultsContainer.appendChild(item);
        });

        resultsContainer.style.display = "flex"; 
    });

    searchInput.addEventListener("blur", () => {
        setTimeout(() => { 
            resultsContainer.style.display = "none";
        }, 100);
    });



    //links pentru footer -- socials
    let img=document.querySelectorAll("#contact>img");
    for(let btn of img){
        btn.onclick=function(){
            if(btn.alt=="insta"){
                window.open("https://www.instagram.com/", "_blank");
            }
            if(btn.alt=="facebook"){
                window.open("https://www.facebook.com/", "_blank");
            }
            if(btn.alt=="mail"){
                window.open("https://mail.google.com/", "_blank");
            }
            if(btn.alt=="suport"){
                window.open("https://www.instagram.com/", "_blank");
            }
        }
    }