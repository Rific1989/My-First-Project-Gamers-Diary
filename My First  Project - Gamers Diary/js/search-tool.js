//Pole, ze kterého filtruji:

let games = [{
    title: "Uncharted: Drake's Fortune",
    url: "unchartedOneArticle.html"
},{
    title: "Far Cry 5",
    url: "farCryFiveArticle.html"
},{
    title: "Metal Gear Solid V: Phantom Pain",
    url: "metalGearSolidFiveArticle.html"
},{
    title: "Tomb Raider: The Ten Thousand Immortals",
    url: "bookTomRaiderTenThousandImmortalsArticle.html"
},{
    title: "TOP 5 - Hrdinové herního světa",
    url: "top5KladnePostavy.html"
}]

//Uložení dat z políčka:
let gameResults = ""

//Filtrování v poli games:
let searchGame = function(gameArray){
    let pole = gameArray.filter(function(oneGame){
        return oneGame.title.toLowerCase().includes(gameResults.toLowerCase())
    })

//Odstranění vypisování výsledků pořád dokola:
document.querySelector("#games-schedule").innerHTML = ""

//Výpis výsledků do stránky:
    if(gameResults){
        pole.forEach(function(oneGame){
            let paragraph = document.createElement("p")
            paragraph.innerHTML = "<a href=" + oneGame.url + ">" + oneGame.title + "</a>" //Pro vypisování odkazů do stránky
            document.querySelector("#games-schedule").appendChild(paragraph)
        })
    }
}

//Načítání dat z políčka a spuštění funkce:
let result = document.querySelector("#look-for-input")
result.addEventListener("input", function(event){
    gameResults = event.target.value
    searchGame(games)
}) 
