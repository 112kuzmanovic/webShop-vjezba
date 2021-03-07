var current = document.getElementById('current');
var slike = document.getElementsByClassName('slike');

for (var i = 0; i < slike.length; i++) {
    slike[i].addEventListener('click', display);
}
function display() {
    var sl = this.getAttribute('src');
    current.setAttribute('src', sl);
}
var current1 = document.getElementById('current1');
    var slike1 = document.getElementsByClassName('slike1');
    
    for (var i = 0; i < slike1.length; i++) {
        slike1[i].addEventListener('click', display1);
    }
    function display1() {
        var sl = this.getAttribute('src');
        current1.setAttribute('src', sl);
    }
    var current2 = document.getElementById('current2');
    var slike2 = document.getElementsByClassName('slike2');
    
    for (var i = 0; i < slike2.length; i++) {
        slike2[i].addEventListener('click', display2);
    }
    function display2() {
        var sl = this.getAttribute('src');
        current2.setAttribute('src', sl);
    }
    var current3 = document.getElementById('current3');
    var slike3 = document.getElementsByClassName('slike3');
    
    for (var i = 0; i < slike3.length; i++) {
        slike3[i].addEventListener('click', display3);
    }
    function display3() {
        var sl = this.getAttribute('src');
        current3.setAttribute('src', sl);
    }
    var current4 = document.getElementById('current4');
    var slike4 = document.getElementsByClassName('slike4');
    
    for (var i = 0; i < slike4.length; i++) {
        slike4[i].addEventListener('click', display4);
    }
    function display4() {
        var sl = this.getAttribute('src');
        current4.setAttribute('src', sl);
    }
    var current5 = document.getElementById('current5');
    var slike5 = document.getElementsByClassName('slike5');
    
    for (var i = 0; i < slike5.length; i++) {
        slike5[i].addEventListener('click', display5);
    }
    function display5() {
        var sl = this.getAttribute('src');
        current5.setAttribute('src', sl);
    }
    var current6 = document.getElementById('current6');
    var slike6 = document.getElementsByClassName('slike6');
    
    for (var i = 0; i < slike6.length; i++) {
        slike6[i].addEventListener('click', display6);
    }
    function display6() {
        var sl = this.getAttribute('src');
        current6.setAttribute('src', sl);
    }