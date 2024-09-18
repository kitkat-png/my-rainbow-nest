// font changer

if (localStorage.getItem("h1font") == "Jetbrains Mono") {
    document.querySelector("h1").style.fontFamily = "'Jetbrains Mono', monospace";
} else if (localStorage.getItem("h1font") == "Roboto") {
    document.querySelector("h1").style.fontFamily = "'Roboto', system-ui, sans-serif";
} else if (localStorage.getItem("h1font") == "Georgia") {
    document.querySelector("h1").style.fontFamily = "Georgia, serif";
} else if (localStorage.getItem("h1font") == "OpenDyslexic") {
    document.querySelector("h1").style.fontFamily = "'OpenDyslexic', system-ui, sans-serif";
}

document.getElementById("selecth1font").addEventListener("change", function(){
    switch (document.getElementById("selecth1font").value) {
        case "1": 
            document.querySelector("h1").style.fontFamily = "'Jetbrains Mono', monospace";
            localStorage.setItem("h1font", "Jetbrains Mono");
            break;
        case "2": 
            document.querySelector("h1").style.fontFamily = "'Roboto', system-ui, sans-serif";
            localStorage.setItem("h1font", "Roboto");
            break;
        case "3": 
            document.querySelector("h1").style.fontFamily = "Georgia, serif";
            localStorage.setItem("h1font", "Georgia");
            break;
        case "4": 
            document.querySelector("h1").style.fontFamily = "'OpenDyslexic', system-ui, sans-serif";
            localStorage.setItem("h1font", "OpenDyslexic");
            break;
    }
});
document.getElementById("selectgeneralfont").addEventListener("change", function(){
    switch (document.getElementById("selectgeneralfont").value) {
        case "1":
            document.body.style.fontFamily = "'Roboto', system-ui, sans-serif";

            document.querySelectorAll("select").forEach((select) => {
                select.style.fontFamily = "'Roboto', system-ui, sans-serif";
            });
            localStorage.setItem("generalfont", "Roboto");
            break;
        case "2":
            document.body.style.fontFamily = "'Jetbrains Mono', monospace";

            document.querySelectorAll("select").forEach((select) => {
                select.style.fontFamily = "Jetbrains Mono, monosapce";
            });
            localStorage.setItem("generalfont", "Jetbrains Mono");
            break;
        case "3":
            document.body.style.fontFamily = "Georgia, serif";

            document.querySelectorAll("select").forEach((select) => {
                select.style.fontFamily = "Georgia, serif";
            });
            localStorage.setItem("generalfont", "Georgia");
            break;
        case "4":
            document.body.style.fontFamily = "'OpenDyslexic', system-ui, sans-serif";

            document.querySelectorAll("select").forEach((select) => {
                select.style.fontFamily = "'OpenDyslexic', system-ui, sans-serif";
            });
            localStorage.setItem("generalfont", "OpenDyslexic");
            break;
    }
});

// making the navigation better (aka, the whole 'button' works as a link)

document.getElementById("navli-1").addEventListener("click", function(){
    window.location.href = "index.html";
});

document.getElementById("navli-2").addEventListener("click", function(){
    window.location.href = "about.html";
});

document.getElementById("navli-3").addEventListener("click", function(){
    window.location.href = "blog.html";
});

document.getElementById("navli-4").addEventListener("click", function(){
    window.location.href = "contact.html";
});

