
let currentTheme = localStorage.getItem("theme");
let body = document.getElementsByTagName("body")[0];
let themeBtn = document.getElementById("dark-theme-button");

if (currentTheme === "light") {
    body.className = "light-theme";
    themeBtn.innerHTML = "Dark Theme";
} else {
    body.className = ""; 
    themeBtn.innerHTML = "Light Theme";
}

function changeTheme() {
    let body = document.getElementsByTagName("body")[0];
    let themeBtn = document.getElementById("dark-theme-button");
    let themeState = localStorage.getItem("theme");

    if (themeState === "light") {
        body.className = ""; 
        localStorage.setItem("theme", "dark"); 
        themeBtn.innerHTML = "Light Theme";
    } else {
        body.className = "light-theme"; 
        localStorage.setItem("theme", "light"); 
        themeBtn.innerHTML = "Dark Theme";
    }
}


function calculateTotal() {
    let museum = document.getElementById("museum").value;
    let category = document.getElementById("category").value;
    let quantity = parseInt(document.getElementById("quantity").value) || 0;
    let price = 0;
    let link = "#";

     if (museum === "NMEC") {
        link = "https://nmec.gov.eg/";
        if (category === "EgyAdult") { price = 90; }
        else if (category === "EgyStudent") { price = 45; }
        else if (category === "ForAdult") { price = 500; }
        else if (category === "ForStudent") { price = 250; }
    }

    
    else if (museum === "GEM") {
        link = "https://gem.eg/";
        if (category === "EgyAdult") { price = 350; }
        else if (category === "EgyStudent") { price = 175; }
        else if (category === "ForAdult") { price = 1700; }
        else if (category === "ForStudent") { price = 850; }
    }

    
    else if (museum === "EMC") {
        link = "https://egyptianmuseumcairo.eg/";
        if (category === "EgyAdult") { price = 60; }
        else if (category === "EgyStudent") { price = 30; }
        else if (category === "ForAdult") { price = 240; }
        else if (category === "ForStudent") { price = 120; }
    }

    
    let total = price * quantity;
    document.getElementById("visitLink").href = link;
    document.getElementById("total").innerHTML = "Total Price: " + total + " EGP";
}