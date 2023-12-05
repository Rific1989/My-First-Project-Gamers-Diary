let first = document.querySelector("#kviz").addEventListener("submit", function(event){
    event.preventDefault()

    //Načtení hodnoty bodů z HTML kódu:
    let answer1 = event.target.answer1.value
    let answer2 = event.target.answer2.value
    let answer3 = event.target.answer3.value
    let answer4 = event.target.answer4.value
    let answer5 = event.target.answer5.value
    let answer6 = event.target.answer6.value
    let answer7 = event.target.answer7.value
    let answer8 = event.target.answer8.value
    let answer9 = event.target.answer9.value
    let answer10 = event.target.answer10.value
    let answer11 = event.target.answer11.value
    let answer12 = event.target.answer12.value
    let answer13 = event.target.answer13.value
    let answer14 = event.target.answer14.value
    let answer15 = event.target.answer15.value

    //Sečtení nasbíraných bodů:
    let sumarizace = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5) + parseInt(answer6) + parseInt(answer7) + parseInt(answer8) + parseInt(answer9) + parseInt(answer10) + parseInt(answer11) + parseInt(answer12) + parseInt(answer13) + parseInt(answer14) + parseInt(answer15)
    
    document.querySelector("#result").innerHTML = ""

    if(isNaN(sumarizace)){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = " "
        document.querySelector("#result").appendChild(paragraph)
    } else {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Počet bodů: "+sumarizace
        document.querySelector("#result").appendChild(paragraph)
    }
    
    //Vyčištění inputů od modrých puntíků po kliknutí na Odeslat
    if(sumarizace){
        document.querySelector('input[name="answer1"]:checked').checked = false
        document.querySelector('input[name="answer2"]:checked').checked = false
        document.querySelector('input[name="answer3"]:checked').checked = false
        document.querySelector('input[name="answer4"]:checked').checked = false
        document.querySelector('input[name="answer5"]:checked').checked = false
        document.querySelector('input[name="answer6"]:checked').checked = false
        document.querySelector('input[name="answer7"]:checked').checked = false
        document.querySelector('input[name="answer8"]:checked').checked = false
        document.querySelector('input[name="answer9"]:checked').checked = false
        document.querySelector('input[name="answer10"]:checked').checked = false
        document.querySelector('input[name="answer11"]:checked').checked = false
        document.querySelector('input[name="answer12"]:checked').checked = false
        document.querySelector('input[name="answer13"]:checked').checked = false
        document.querySelector('input[name="answer14"]:checked').checked = false
        document.querySelector('input[name="answer15"]:checked').checked = false
    }

    //Vyhodnocení výsledků na základě získaných bodů
    if(isNaN(sumarizace)){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Nejsou označeny všechny odpovědi, test nemůže být vyhodnocen!"
        document.querySelector("#result").appendChild(paragraph).style.color = "red"
        document.querySelector("#result").appendChild(paragraph).style.fontSize = "26px"

    } else if(sumarizace < 10) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Tvé znalosti jsou nic moc, měl by jsi hrát Resident Evil častěji."
        document.querySelector("#result").appendChild(paragraph)

    } else if(sumarizace >= 10 && sumarizace < 20) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Dobrý výsledek, je vidět, že Resident Evil dobře znáš."
        document.querySelector("#result").appendChild(paragraph)

    } else if(sumarizace >= 20 && sumarizace <= 29) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Skvělý výsledek, hraní Resident Evilu je tvůj život."
        document.querySelector("#result").appendChild(paragraph)

    } else if(sumarizace === 30) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Plný počet bodů! Gratulujeme, patříš mezi nejlepší hráče Resident Evilu!"
        document.querySelector("#result").appendChild(paragraph)
    }
})





