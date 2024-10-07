function carregar(){
var msg = window.document.getElementById("msg")
var foto = window.document.getElementById('imagem')
var data = new Date()//codigo para representar os milissigundo passados deis da epoca de 1 de janeiro de 1970
var hora = data.getHours()//representa a hora em questão
msg.innerHTML = `agora são ${hora} horas`
if (hora >=6 &&  12) {
 foto.src = "foto-manha.png"   
}
else if (hora >=12 && 18) {
    foto.src = `foto-tarde.png`
} else {
foto.src = "foto-noite.png"
}
}
   
