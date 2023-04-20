// Ik hou van programmeren. Programmeren is leuk.
// Ik kan veel dingen maken met programmeren. Ik kan een website maken.
//     Ik kan een spel maken. Ik kan een chatbot maken.
//     Programmeren is niet moeilijk. Ik moet alleen de juiste code schrijven.
//     De code moet logisch zijn. De code moet foutloos zijn. Werkende code maakt mij blij.
//     Niet-werkende code chagerijnig. Programmeren is een avontuur. Ik leer elke dag iets nieuws met programmeren.

// Programmeren is een geweldige activiteit, die je in staat stelt om je creativiteit,
// logica en probleemoplossend vermogen te gebruiken, om allerlei soorten applicaties te maken,
//     die nuttig, vermakelijk of zelfs levensveranderend kunnen zijn, afhankelijk van je doel en publiek.
//     Het is ook een uitdagende bezigheid, die je voortdurend leert om nieuwe talen, technieken en concepten te leren,
//     die je helpen om je code efficiënter, eleganter en robuuster te maken, zonder dat je je ooit hoeft te vervelen of te herhalen.
//     Bovendien is het een leuke hobby, die je veel voldoening en plezier kan geven, als je ziet hoe je ideeën tot leven komen op het scherm, als je de interactie met je gebruikers ziet of
// als je de reacties van je vrienden en familie ziet, als je ze verrast met je eigen creaties.

const ALLOWED_IN_WORD = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"

const ALLOWED_IN_SENTENCE = "?!."

let avi_file = {"characters": 0, "words": 0, "sentences": 0, "avi": 0}
let avi_text = {"characters": 0, "words": 0, "sentences": 0, "avi": 0}

function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        () => {
            content.innerText = reader.result;

            avi_file["characters"] = getNumberOfCharacters(content.innerText)
            avi_file["words"] = getNumberOfWords(content.innerText)
            avi_file["sentences"] = getNumberOfSentences(content.innerText)
            avi_file["avi"] = aviCalculator(content.innerText)
            console.log(avi_file)
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

    return avi
}

function wordAmountButton(){
    document.getElementById("calculateWordButton").innerHTML = "characters: " + avi_file["characters"] + ", " + "words: " + avi_file["words"] + ", " + "sentences: " + avi_file["sentences"] + ", " + "avi score: " + avi_file["avi"]
}

function inputTextButton(){
    let text = document.getElementById("textInput").value
    avi_text["characters"] = getNumberOfCharacters(text)
    avi_text["words"] = getNumberOfWords(text)
    avi_text["sentences"] = getNumberOfSentences(text)
    avi_text["avi"] = aviCalculator(text)

    document.getElementById("calculateTextInput").innerHTML = "characters: " + avi_text["characters"] + ", " + "words: " + avi_text["words"] + ", " + "sentences: " + avi_text["sentences"] + ", " + "avi score: " + avi_text["avi"]
}