fetch('blogs.json')
    .then(response => response.json())
    .then(blogs => {
        let learningContainer = document.getElementById("learning-slider");
        let otherContainer = document.getElementById("other-slider");
        let aiContainer = document.getElementById("ai-slider");

        // Wrap the containers in slider wrappers and add navigation buttons
        [learningContainer, otherContainer, aiContainer].forEach(container => {
            const sliderWrapper = document.createElement("div");
            sliderWrapper.classList.add("slider-wrapper");
            container.parentNode.insertBefore(sliderWrapper, container);
            sliderWrapper.appendChild(container);

            const leftButton = document.createElement("button");
            leftButton.classList.add("slider-btn", "slider-btn-left");
            leftButton.innerHTML = "&#9664;"; // Left arrow
            sliderWrapper.appendChild(leftButton);

            const rightButton = document.createElement("button");
            rightButton.classList.add("slider-btn", "slider-btn-right");
            rightButton.innerHTML = "&#9654;"; // Right arrow
            sliderWrapper.appendChild(rightButton);

            // Add button functionality
            leftButton.addEventListener("click", () => {
                container.scrollLeft -= container.offsetWidth; // Scroll left by the container width
            });

            rightButton.addEventListener("click", () => {
                container.scrollLeft += container.offsetWidth; // Scroll right by the container width
            });

            // Add smooth scrolling
            container.style.scrollBehavior = "smooth";
        });

        // Populate the blog cards
        blogs.forEach(blog => {
            let blogCard = `
                <div class="blog-card">
                    <img src="${blog.image}" alt="${blog.title}">
                    <h2>${blog.title}</h2>
                    <p>${blog.description}</p>
                    <a href="${blog.link}" target="_blank">Visit</a>
                </div>
            `;

            if (blog.category === "Learning") {
                learningContainer.innerHTML += blogCard;
            } else if(blog.category === "Other"){
                otherContainer.innerHTML += blogCard;
            }else {
                aiContainer.innerHTML += blogCard;
            }
        });
    })
    .catch(error => console.error('Error loading blogs:', error));

    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.querySelector(".branding-slider");
        const sliderContainer = document.querySelector(".branding-slider-container");
    
        // Clone the branding images to create an infinite loop
        const clone = slider.cloneNode(true);
    });