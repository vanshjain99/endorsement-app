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

onValue(endorsementsInDB, function(snapshot){
    if(snapshot.exists()){
        let endorsementArray = Object.entries(snapshot.val())
        publishedItemsEl.innerHTML = ""
        for(let i = 0; i<endorsementArray.length; i++){
            let currentEndorsement = endorsementArray[i]
            let currentEdorsementId = currentEndorsement[0]
            let currentEdorsementValue = currentEndorsement[1]

            let newLiEl = document.createElement("li")
            newLiEl.textContent = currentEdorsementValue
            publishedItemsEl.append(newLiEl)

            newLiEl.addEventListener("dblclick", function(){
                let exactLocationOfItemInDB = ref(database, `endorsementsList/${currentEdorsementId}`)
                remove(exactLocationOfItemInDB)
            })
        }
    }else{
        publishedItemsEl.textContent = "Be the first to Endorse!"
    }
})

publishBtnEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    if(inputValue){
        push(endorsementsInDB, inputValue)
    }
    clearInputFieldEl()
})

function clearInputFieldEl(){
    inputFieldEl.value = ""
}



