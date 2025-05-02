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




// about drop down


// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach(acc => {
//     acc.addEventListener("click", function () {
//         this.classList.toggle("active");

//         const panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "vw";
//         }
//     });
// });
