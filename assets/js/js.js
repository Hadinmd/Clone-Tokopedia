
function on() {
    var menunbar = document.getElementById( "menuBar");
    var onverlayitem = document.getElementById("overlay-hitam")
    menunbar.classList.toggle("menyBarStyle");


    onverlayitem.classList.toggle("overlaystyling")
}

function off(){
    var menubarmati = document.getElementById("menuBar");
    menubarmati.classList.toggle("menuBarOff")
}

function pulsaclick(){
    var itemdiclick = document.getElementById("pulsar");
    itemdiclick.classList.toggle("pulsaijo");
    
}

function kuotaclick(){
    var kuta = document.getElementById("kuota");
    kuta.classList.toggle("pulsaijo")
    
    var offlainnya = document.getElementById("pulsar");
    offlainnya.classList.toggle("pulsaijo")
}