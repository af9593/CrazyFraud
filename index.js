document.getElementById('profil_pic').addEventListener("mouseover" ,  () => alert ('HAHAHHAHA') );



document.getElementById("myBtn").addEventListener("click", function(){

    var newAddress = prompt("Change Address")
    var newNumber = prompt("Change Number")
    var newEmail = prompt("Change Email")

    if(newAddress){
        document.getElementById("profil_info").getElementsByTagName("p")[0].innerText = newAddress;
    }
    if(newNumber){    
        document.getElementById("profil_info").getElementsByTagName("p")[1].innerText = newNumber;
            
    }
    if(newEmail){
        document.getElementById("profil_info").getElementsByTagName("p")[2].innerText = newEmail;

    }

});
