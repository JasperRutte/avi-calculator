const EASY_TEXT = `
Ik hou van programmeren. Programmeren is leuk.
Ik kan veel dingen maken met programmeren. Ik kan een website maken.
    Ik kan een spel maken. Ik kan een chatbot maken.
    Programmeren is niet moeilijk. Ik moet alleen de juiste code schrijven.
    De code moet logisch zijn. De code moet foutloos zijn. Werkende code maakt mij blij.
    Niet-werkende code chagerijnig. Programmeren is een avontuur. Ik leer elke dag iets nieuws met programmeren.
    `
const DIFFICULT_TEXT = `Programmeren is een geweldige activiteit, die je in staat stelt om je creativiteit,
logica en probleemoplossend vermogen te gebruiken, om allerlei soorten applicaties te maken,
    die nuttig, vermakelijk of zelfs levensveranderend kunnen zijn, afhankelijk van je doel en publiek.
    Het is ook een uitdagende bezigheid, die je voortdurend leert om nieuwe talen, technieken en concepten te leren,
    die je helpen om je code efficiënter, eleganter en robuuster te maken, zonder dat je je ooit hoeft te vervelen of te herhalen.
    Bovendien is het een leuke hobby, die je veel voldoening en plezier kan geven, als je ziet hoe je ideeën tot leven komen op het scherm, als je de interactie met je gebruikers ziet of
als je de reacties van je vrienden en familie ziet, als je ze verrast met je eigen creaties.
`
const ALLOWED_IN_WORD = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"

const ALLOWED_IN_SENTENCE = "?!."

const TEST_SENTENCE = "Enige regels code veranderen een stuk metaal in een vernuftig rekenwonder."

let amount_of_words = 0
let avi_score = 0


function getText(choice){
    if (choice === "easy"){
        return EASY_TEXT
    } else if (choice === "difficult"){
        return DIFFICULT_TEXT
    } else console.log("test")
}

function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        () => {
            content.innerText = reader.result;
            amount_of_words = getNumberOfWords(content.innerText)
            avi_score = aviCalculator(content.innerText)
            console.log(amount_of_words)
        },
        false
    );
    if (file) {
        reader.readAsText(file);

    }
}

function getNumberOfCharacters(text){
    let characterAmount = 0
    for (let letter in text){
        if (ALLOWED_IN_WORD.includes(text[letter])){
            characterAmount++
        }
    }
    return characterAmount
}

function getNumberOfSentences(text){
    let sentenceAmount = 0
    for (let sentence in text){
        if (ALLOWED_IN_SENTENCE.includes(text[sentence])){
            sentenceAmount++
        }
    }
    return sentenceAmount
}


function getNumberOfWords(text){
    let amountOfWords = 0
    let lettersInWord = 0
    for (let character in text){
        console.log(text[character])
        if (!ALLOWED_IN_WORD.includes(text[character])){
            console.log("Test")
            if (lettersInWord >= 2) {
                amountOfWords++
            }
            lettersInWord = 0
        } else if (ALLOWED_IN_WORD.includes(text[character])){
            lettersInWord++
        }
    }
    return amountOfWords
}

function wordAmountButton(){
    document.getElementById("wordButton").innerHTML = "amount of words: " + amount_of_words +", " +"avi score: " + avi_score

}

function aviCalculator (text){
    let amountWords = getNumberOfWords(text)
    let amountSentences = getNumberOfSentences(text)
    let averageAmount = Math.ceil((amountWords + amountSentences) / 2)
    let avi = 0

    if (averageAmount <= 7){
        avi = 5
    }else if (averageAmount === 8){
        avi = 6
    } else if (averageAmount === 9) {
        avi = 7
    } else if (averageAmount === 10){
        avi = 8
    } else if (averageAmount === 11){
        avi =  11
    } else avi = 12

    avi_score = avi
}

