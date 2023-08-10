var resimsirasi = 1;
var toplamresim = 4;


var zaman = window.setInterval(function calistir(){
var resim = document.getElementById("resim1")
    resimsirasi = resimsirasi+1
     if(resimsirasi>toplamresim){
        resimsirasi = 1;
     }
     if(resimsirasi<1){
        resimsirasi = toplamresim;
     }
     resim.src = "slayt" + resimsirasi +".jpg"
},2000);


function resimdegistir(deger){
  var resim = document.getElementById("resim1");
  resimsirasi = resimsirasi+deger;
  if(resimsirasi>toplamresim){
    resimsirasi = 1;
 }
  if(resimsirasi<1){
    resimsirasi = toplamresim;
 }
 resim.src = "slayt" + resimsirasi +".jpg";
 clearInterval(zaman)
zaman = window.setInterval(function calistir(){
    var resim = document.getElementById("resim1")
    resimsirasi = resimsirasi+1
     if(resimsirasi>toplamresim){
        resimsirasi = 1;
     }
     if(resimsirasi<1){
        resimsirasi = toplamresim;
     }
     resim.src = "slayt" + resimsirasi +".jpg"

  },2000);
}
