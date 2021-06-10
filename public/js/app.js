document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript here.

    const colourButton = document.getElementById("colourButton");
    const posts = document.getElementsByClassName("posts");
    const header = document.getElementById("header");

    colourButton.addEventListener("click", function () {
        for (let i = 0; i < posts.length; i++) {
            posts[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }
    });


    const hideButton = document.getElementById("hideButton");
 
    

    hideButton.addEventListener("click", function () {
        // console.log("button clicked");
        // console.log(document.getElementById("header"));
        const displayNow = document.getElementById("header").style.display;
        if (displayNow=="block") {
            document.getElementById("header").style.display = "none";
            
        }
        else {
            document.getElementById("header").style.display = "block";  
            const headerPlace = header.getBoundingClientRect();
            console.log(headerPlace);
            
        }
    });

    document.addEventListener("click", function(e){
        console.log(e.clientX);
        
    });

    
    



});