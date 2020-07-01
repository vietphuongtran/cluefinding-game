//alert("hey");
window.onload = pageReady;

function pageReady () {
    var btn = document.getElementsByClassName('click');
    console.log(btn);
    var clueFinds = document.getElementsByClassName('clueFinds');
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function showInfo() {
            clueFinds[i].style.display = 'block';
        }
    }
}

