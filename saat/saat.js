function saatguncelle(){
    var zaman = new Date();
    var saatdegeri = zaman.getHours();
    var dakikadegeri = zaman.getMinutes();
    var saniyedegeri = zaman.getSeconds();

    document.getElementById("saat").innerHTML = ekle(saatdegeri) + ":"+ ekle(dakikadegeri) + ":"+ ekle(saniyedegeri );
}

function ekle(deger){
    var stringyap  = deger.toString() ;
    var uzunluk = stringyap.length;
      if(uzunluk===1){
        return "0" + stringyap;
      }else{
        return stringyap;
      }

}


setInterval(saatguncelle,1000);