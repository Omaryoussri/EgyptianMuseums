let currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.getElementsByTagName("body")[0].className = "dark-theme";
}

function toggleTheme() {
    let body = document.getElementsByTagName("body")[0];
    let themeState = localStorage.getItem("theme");

    if (themeState == "dark") {
        body.className = ""; 
        localStorage.setItem("theme", "light");
    } else {
        body.className = "dark-theme"; 
        localStorage.setItem("theme", "dark"); 
    }
}


function calculateTotal() {
  
    let museum = document.getElementById("museum").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;
    let price = 0;

   
    if (museum == "NMEC") {
        if (category == "EgyAdult") { price = 90; }
        if (category == "EgyStudent") { price = 45; }
        if (category == "ForAdult") { price = 500; }
        if (category == "ForStudent") { price = 250; }
        
        
        document.getElementById("visitLink").href = "https://nmec.gov.eg/";
    }

   
    if (museum == "GEM") {
        if (category == "EgyAdult") { price = 350; }
        if (category == "EgyStudent") { price = 175; }
        if (category == "ForAdult") { price = 1700; }
        if (category == "ForStudent") { price = 850; }
        
       
        document.getElementById("visitLink").href = "https://gem.eg/";
    }

    
    if (museum == "EMC") {
        if (category == "EgyAdult") { price = 60; }
        if (category == "EgyStudent") { price = 30; }
        if (category == "ForAdult") { price = 240; }
        if (category == "ForStudent") { price = 120; }
        
   
        document.getElementById("visitLink").href = "https://egyptianmuseumcairo.eg/";
    }

  
    let total = price * quantity;
    
    
    document.getElementById("totalOutput").innerHTML = "Total Price: " + total + " EGP";
}