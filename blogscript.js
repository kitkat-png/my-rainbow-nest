// tagging system (I am so excited that this works)

const allPostsButton = document.querySelectorAll(".tag-button")[0];
const longPostsButton = document.querySelectorAll(".tag-button")[1];
const shortPostsButton = document.querySelectorAll(".tag-button")[2];
const imagePostsButton = document.querySelectorAll(".tag-button")[3];
const catPostsButton = document.querySelectorAll(".tag-button")[4];
const webDevelopmentPostsButton = document.querySelectorAll(".tag-button")[5];
const thisWebsitePostsButton = document.querySelectorAll(".tag-button")[6];

const allPosts = document.querySelectorAll(".post");
const longPosts = document.querySelectorAll(".long-post");
const shortPosts = document.querySelectorAll(".short-post");
const imagePosts = document.querySelectorAll(".image");
const catPosts = document.querySelectorAll(".cats");
const webDevelopmentPosts = document.querySelectorAll(".web-development");
const thisWebsitePosts = document.querySelectorAll(".this-website");

allPostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
       post.style.display = "block";
    })
});

longPostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
        if (post.classList.contains("long-post") == false) {
            post.style.display = "none";
        }

        if (post.classList.contains("long-post") == true) {
            post.style.display = "block";
        }
    })
});

shortPostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
        if (post.classList.contains("short-post") == false) {
            post.style.display = "none";
        }

        if (post.classList.contains("short-post") == true) {
            post.style.display = "block";
        }
    })
});

imagePostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
        if (post.classList.contains("image") == false) {
            post.style.display = "none";
        }

        if (post.classList.contains("image") == true) {
            post.style.display = "block";
        }
    })
});

catPostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
        if (post.classList.contains("cats") == false) {
            post.style.display = "none";
        }

        if (post.classList.contains("cats") == true) {
            post.style.display = "block";
        }
    })
});

webDevelopmentPostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
        if (post.classList.contains("web-development") == false) {
            post.style.display = "none";
        }

        if (post.classList.contains("web-development") == true) {
            post.style.display = "block";
        }
    })
});

thisWebsitePostsButton.addEventListener("click", function(){
    allPosts.forEach((post) => {
        if (post.classList.contains("this-website") == false) {
            post.style.display = "none";
        }

        if (post.classList.contains("this-website") == true) {
            post.style.display = "block";
        }
    })
});
