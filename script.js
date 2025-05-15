let dark = false;
document.getElementById("")

function theme() {
if (dark) {
 document.body.style.backgroundColor = "white";
 document.body.style.color = "black";
 document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/geometric-background-vector-white-cube-patterns_53876-126683.jpg')";
 dark = false;
}

else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "url('https://wallpapers.com/images/featured-small/black-and-grey-background-8vp9euqfblpd9ot2.webp')";
    dark = true;
}
}