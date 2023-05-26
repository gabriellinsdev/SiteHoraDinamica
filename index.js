horaSistema = new Date
let horarioAtual = horaSistema.getHours()
let text = document.querySelector(".text")
let img = document.querySelector('.img')
let corpo = document.querySelector('.body')


function pageLoading() {
    if (horarioAtual < 13 && horarioAtual >= 05) {
        corpo.style.backgroundColor = "#fad5a5"
        text.textContent = `Agora são ${horarioAtual} horas`
        img.setAttribute('src', 'Fotos/fotomanha.png')
        

    } else if (horarioAtual < 19 && horarioAtual >= 13) {
        corpo.style.backgroundColor = "#7d5a5a"
        text.textContent = `Agora são ${horarioAtual} horas`
        img.setAttribute('src', 'Fotos/fototarde.png')
    } else {
        corpo.style.backgroundColor = "#585858"

        img.setAttribute('src', 'Fotos/fotonoite.png')

        if (horarioAtual == 0) {
            text.textContent = `Agora são meia noite`
        } else if (horarioAtual == 1) {
            text.textContent = `Agora é ${horarioAtual} hora`
        } else {
            text.textContent = `Agora são ${horarioAtual} horas`
        }
    }
}
