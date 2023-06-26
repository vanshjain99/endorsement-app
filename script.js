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

publishBtnEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    
    push(endorsementsInDB, inputValue)
})



