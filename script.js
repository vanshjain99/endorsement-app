import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://fir-app-c0248-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsementsList")

const inputFieldEl = document.getElementById("input-endorsement")
const publishBtnEl = document.getElementById("publish-btn")
const publishedItemsEl = document.getElementById("published-items")
const inputFromEl = document.getElementById("from-input")
const inputToEl = document.getElementById("to-input")
const inputWarningEl = document.getElementById("input-warning")

onValue(endorsementsInDB, function(snapshot){
    if(snapshot.exists()){
        let endorsementArray = Object.entries(snapshot.val())
        publishedItemsEl.innerHTML = ""
        for(let i = 0; i<endorsementArray.length; i++){
            let currentEndorsement = endorsementArray[i]
            let currentEdorsementId = currentEndorsement[0]
            let currentEdorsementValue = currentEndorsement[1]

            let newLiEl = document.createElement("li")
            newLiEl.className = "li-el"
            let likes = 0
            newLiEl.innerHTML = `
            <span class="boldspan">
                To ${currentEdorsementValue.toName},
                
            </span><br><br>
            ${currentEdorsementValue.text}<br><br>
            <span class="boldspan">
            From ${currentEdorsementValue.fromName}
            <button class="like-btn" id="like-btn">❤ ${likes}</button>
                
            </span>`


            // const likeBtn = document.getElementById("like-btn")
            // likeBtn.addEventListener("click", function(){
            //     likeBtn.innerHTML = "hello"
            // })


            publishedItemsEl.append(newLiEl)

            newLiEl.addEventListener("dblclick", function(){
                let exactLocationOfItemInDB = ref(database, `endorsementsList/${currentEdorsementId}`)
                remove(exactLocationOfItemInDB)
            })

            const likeBtn = document.getElementById("like-btn")
            likeBtn.addEventListener("click", function(){
                likes += 1
                likeBtn.innerHTML = `❤ ${likes}`
            })
        }
    }else{
        publishedItemsEl.textContent = "Be the first to Endorse!"
    }
})

publishBtnEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    let fromValue = inputFromEl.value
    let toValue = inputToEl.value

    let obj = {
        text: inputValue,
        fromName: fromValue,
        toName: toValue
    }
    if(inputValue && fromValue && toValue){

        push(endorsementsInDB, obj)
    }else{
        inputWarningEl.textContent = "⚠ Please fill all the fields."
    }
    clearInputFieldEl()
})

function clearInputFieldEl(){
    inputFieldEl.value = ""
    inputFromEl.value = ""
    inputToEl.value = ""
}