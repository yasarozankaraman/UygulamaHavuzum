const ekleButonu = document.getElementById("buton");
const girilenGorev = document.getElementById("isim");
const gorevListeKutusu = document.getElementById("tasklistbox");
let elemanSilmeButonu = document.querySelectorAll(".fa-times");
const temizleButonu = document.querySelector("#hepsinisil");
 
 
ekleButonu.addEventListener("click", elemanEkle);
temizleButonu.addEventListener("click", elemanlariSil);
 
function elemanEkle() {
 
    
    if (girilenGorev.value == "")      
        alert("lutfen değer giriniz");
    
    else {
        var li = document.createElement("li");
        
        li.innerText = girilenGorev.value
        
        var i = document.createElement("i");
        
        i.classList = "fas fa-times";
        
        li.appendChild(i);
 
        gorevListeKutusu.appendChild(li);
        
        girilenGorev.value = "";
        

        elemanSilmeButonu = document.querySelectorAll(".fa-times");
 
        for (var i = 0; i < elemanSilmeButonu.length; i++) {
            elemanSilmeButonu[i].addEventListener("click", elemansil);
        }
    }
}
 
function elemansil() {
    var secim = confirm("Silmek istediğinizden emin Misiniz?");
    if (secim == true) {
        
        var silinecek = this.parentElement;
        silinecek.remove();
    }
}
 
function elemanlariSil() {
    var secim = confirm("Hepsini Kalıcı Olarak Silmek İstediğinize Emin Misiniz?");
    if (secim == true) {
        
        var silinecekler = document.querySelectorAll("li");
 
        for (var j = 0; j < silinecekler.length; j++) {
            silinecekler[j].remove();
        }
    }
}