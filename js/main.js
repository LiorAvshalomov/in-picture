'use strict'

var gQuests
var gCurrQuestIdx = 0




function onInit() {
    gQuests = createQuests()
}


function playGame() {
    renderQuest()
    document.querySelector(".btn").style.display = "none"
}


function createQuests() {
    var gQuests = [
        { id: 1, opts: ['Israel', 'Argentina', 'Iran'], correctOptIndex: 0 },
        { id: 2, opts: ['Japan', 'greece', 'Netherlands'], correctOptIndex: 2 },
        { id: 3, opts: ['Poland', 'Mexico', 'Denmark'], correctOptIndex: 1 },
        { id: 4, opts: ['Finland', 'Thailand', 'Vietnam'], correctOptIndex: 2 },
        { id: 5, opts: ['United-states', 'Turkey', 'Italy'], correctOptIndex: 0 }
    ]

    return gQuests
}


function renderQuest() {
    var elImg = document.querySelector('img')
    elImg.src = `img/${gCurrQuestIdx + 1}.jpg`

    var strHTML = ''
    var currQuestion = gQuests[gCurrQuestIdx]

    if (gCurrQuestIdx < 5) {
        for (var i = 0; i < currQuestion.opts.length; i++) {
            var currOpts = gQuests[gCurrQuestIdx].opts
            strHTML += `<div onclick='onAnswerClicked(${i})' class='(question question ${i + 1})'>${currOpts[i]} </div>`
        }
        var elQuest = document.querySelector('.questions')
        elQuest.innerHTML = strHTML
    }

}


function onAnswerClicked(optIdx) {
    var correctAnswer = gQuests[gCurrQuestIdx].correctOptIndex

    if (optIdx === correctAnswer) {
        gCurrQuestIdx++
        renderQuest()
    }

    if (gCurrQuestIdx === 5) {
        showWinner()
    }
}


function showWinner() {
    gCurrQuestIdx = 0
    var strHTML = ''

    strHTML += '<div class="cheer">Great knowledge, you WON the game!</div>'
    var elQuest = document.querySelector('.questions')
    elQuest.innerHTML = strHTML

    document.querySelector(".btn").style.display = ""
    document.querySelector(".btn").innerText = 'Restart Game'
}










