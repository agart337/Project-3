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


// document.querySelectorAll('.school div').forEach(div => {
//     div.addEventListener('mouseenter', () => {
//         document.body.classList.add('hovered');
//     });

//     div.addEventListener('mouseleave', () => {
//         document.body.classList.remove('hovered');
//     });
// });
