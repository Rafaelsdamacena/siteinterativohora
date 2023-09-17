function carregar(){
    var msg = window.document.getElementById('msg')
    var time = window.document.getElementById('time')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 3 //-> teste do if
    var minutos = data.getMinutes()
    time.innerHTML = `${hora} : ${minutos}`

    //condição
    if (hora > 4 && hora < 12){
        msg.innerHTML = 'BOM DIA!!!'
        img.src = 'img/dia.jpg'
    } else if (hora > 12 && hora < 18){
        msg.innerHTML = 'BOA TARDE!!!'
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = 'BOA NOITE!!!'
        img.src = 'img/noite.jpg'
        document.body.style.background = '#5158'
    }

}

