window.onload=function(){
    let username=this.document.getElementById("username");
    let email=this.document.getElementById("email");
    let telefon=this.document.getElementById("telefon");
    let saveBtn=this.document.getElementById("buton-in");
    let delBtn=this.document.getElementById("buton-out");
    let hello=document.getElementById("salut");
    let msg=document.getElementById("msg");

//FORMULAR
//EXPRESII REGULATE
//LOGIN
    if(this.localStorage.getItem("user")===null){
        hello.innerHTML="Salut, host!"
    }
    else{
        let obj = this.localStorage.getItem("user");
        let nume=JSON.parse(obj);
        hello.innerHTML=`Salut, ${nume.username}!`
    }

    saveBtn.onclick=saveData;
    delBtn.onclick=deleteData;

    function saveData(){
        let val1=username.value;
        let val2=email.value;
        let val3=telefon.value;
        let ExprRegT= /^\d{10}$/;
        let ExprRegE=/^[^@]+@[^@]+\.[a-z]{2,}$/i;
        if(!ExprRegE.test(val2)){
            msg.innerHTML="Introduceti un email valid!";
            clear();
            return;
        }
        if(!ExprRegT.test(val3)){
                msg.innerHTML="Introduceti un numar de telefon valid!";
                clear();
            return;
        }
        let user={
            username: val1,
            email: val2,
            telefon: val3
        }
        localStorage.setItem("user",JSON.stringify(user));

        msg.innerHTML="Autentificare cu succes!";
        clear();
            
        hello.innerHTML=`Salut, ${user.username}!`;          

    }
    function deleteData(){
        localStorage.removeItem("user");
        hello.innerHTML=`Salut, host!`
        msg.innerHTML="Delogare cu succes!";
        clear();
    }
    function clear(){
        setTimeout(function(){
            msg.innerHTML="";
        },2000);
    }


}