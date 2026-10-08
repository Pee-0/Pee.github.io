const revealElements = document.querySelectorAll(".scroll-reveal");

const observer =  new IntersectionObserver(function(entries){

    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }
    });
    
});

revealElements.forEach(function(element){
        observer.observe(element);
});