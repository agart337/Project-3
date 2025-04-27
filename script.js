// mouse interaction
let colors = ["#D32C33", "#EE8734", "#FDCE45", "#4ED58F", "#90CFC6", "#6D7BEC"];
let i = 0;

document.addEventListener('click', function (e) {
    i++;
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("follower");
    span.style.top = y + "px";
    span.style.left = x + "px";
    span.style.backgroundColor = colors[i % colors.length];
    document.body.appendChild(span);

    // Remove after animation completes (10s)
    setTimeout(() => {
        span.remove();
    }, 10000);
});

// home page gradient spread
const schoolLinks = document.querySelectorAll(".school a");
for (let link of schoolLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // ADD CODE HERE - code before the oage changes

        setTimeout(function () {
            window.location.href = link.href;
        }, 1000) //1000 indicates delay in miliseconds
    })
}


// about drop down
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "vw";
        }
    });
});

// background gradient
// step 1 - percentage the user has scrolled so far
// step 2 - in your css define the background image of a gradient - ta its bigget size possible
// step 3 - everytime the uer scrolls use the value from step 1 to determine the size of the gradient that grows

document.addEventListener('scroll', function () {
    let scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
});

