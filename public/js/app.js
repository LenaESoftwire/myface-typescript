document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript here.

    const colourButton = document.getElementById("colourButton");
    const posts = document.getElementsByClassName("posts");
    const header = document.getElementById("header");
    const blurme = document.getElementById("body");
    const nav = document.getElementById("nav");
    colourButton.addEventListener("click", function () {
        for (let i = 0; i < posts.length; i++) {
            posts[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }
    });


    const hideButton = document.getElementById("hideButton");



    hideButton.addEventListener("click", function (event) {
        // console.log("button clicked");
        // console.log(document.getElementById("header"));
        const displayNow = nav.style.display;
        if (displayNow === "flex") {
            nav.style.display = "none";
            blurme.style.filter = "blur(0px)";
            

        } else {
            nav.style.display = "flex";
            const headerPlace = header.getBoundingClientRect();
            console.log(headerPlace);
            blurme.style.filter = "blur(5px)";
            
        }
        // if (blurme.style.filter==="blur(5px)") {
        //     nav.style.filter="blur(0px)"
        // }

    

    });

    document.addEventListener("click", function (e) {
        if (e.target === hideButton){
            return;
        }
        console.log(e.clientX);
        if (nav.style.display !== "none") {
            const navPlace = nav.getBoundingClientRect();
            console.log(`${e.clientX}, ${navPlace.x}, ${navPlace.width}`);
            if (e.clientX < navPlace.x || e.clientX > (navPlace.x+navPlace.width)) {
                nav.style.display = "none";
                console.log(e.clientX);
            }
        }

    });






});