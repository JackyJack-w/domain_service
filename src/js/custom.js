$(document).ready(function() {

    console.log('document');

    $("label").click(function(){
        console.log('i label click');
        $("label").closest().addClass("checked");
      });
    


});
console.log('DOM ok');

function checkLabel(elem) {
    var a = document.getElementsByTagName('label')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('checked');
    }
    elem.classList.add('checked');
}

function menuBtn(){

    let elem = document.getElementById("main-menu");
    elem.style.display = 'block';
    let close = document.getElementById("close-menu");
    close.onclick = function(){
        elem.style.display = 'none';
    };
}


