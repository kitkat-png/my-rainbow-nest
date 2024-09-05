// box links on main page

const box1 = document.querySelectorAll(".cards")[0];
const box2 = document.querySelectorAll(".cards")[1];
const box3 = document.querySelectorAll(".cards")[2];

box1.addEventListener("click", function(){
    window.location.href = "blog.html";
});

box2.addEventListener("click", function(){
    window.location.href = "about.html";
});
