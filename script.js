
let myLeads = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log("leadsFromLocalStorage: ", leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    console.log("myLeads: ", myLeads)
    renderLeads(myLeads)
}

// Execute the function on click
saveBtn.addEventListener("click", function saveLead() {
    
    console.log("Button clicked!")
    myLeads.push(inputEl.value)
    
    // Clearing the text of input box
    inputEl.value = ""

    // Save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)

    // console.log(localStorage.getItem("myLeads"))
})

// ------------------------------------------------------

// for(let i = 0; i < myLeads.length; i++) {
    
    // First Method------------------------------
    // li = document.createElement("li")
    // textAnswer = document.createTextNode(myLeads[i])
    // li.textConte(textAnswer)
    // document.getElementById("ul-el").appendChild(li)

    // Second Method------------------------------
    // Creates a HTML element
//     console.log(myLeads[i])
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

// --------------------------------------------------------

// Adding a button to the html page
// let divEl = document.getElementById("div-el")
// divEl.innerHTML += "<button onclick='buy()'>Buy</button>"

// function buy() {
//     divEl.innerHTML += "<p>Thank You</p>"
//     console.log("Buyied !")
// }

function renderLeads(leads) {
    let listItems = ""
    // for (let i = 0; i < myLeads.length; i++) {
    //     listItems += "<li>" + myLeads[i] + "</li>"
    //     console.log(listItems)
    // }

    for (let i = 0; i < leads.length; i++) {
    // DOM manipulation has a cost better to use one single time 
    // ulEl.innerHTML += "<li><a target = '_blank' href='" + myLead + "'>" + myLead + "</a></li>"

    // Template String/Literals
        listItems += `
                <li>
                    <a target = '_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
                </li>`
        
    }
    ulEl.innerHTML = listItems
}

// Practicing Template Strings
const name = "Rhugweda"
const randomString = `
    Hey, 
    How are you ${name}?
    Thanks for considering me!
`
console.log(randomString)

// Local Storage 
// Webpages have local storage in inspect -> application -> local Storage
// There are key value pairs that are stored in local storage which can be accessed even after refreshing the page
// Everything should be stored as a string in localStorage
// For Storing/Retriving array in localStorage use JSON.Stringify and JSON.parse 

// Saving a key value pair in local storage
// localStorage.setItem("myLeads", myLeads)
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()


// Everything should be stored as a string in localStorage
// For Storing/Retriving array in localStorage use JSON.Stringify and JSON.parse 
// myLeads = `["abc"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("bcd")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)




// Truthy
// Falsy -:
// 0, "",
// null - how developer signalizes emptiness,
// undefined - how JS signalizes emptiness,
// NaN
// Empty array [] is not a false value

// To check a value is truthy or falsy
// console.log( Boolean("") )

// DOuble code
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

tabBtn.addEventListener("click", function() {
    
    // Grap the url of the current tab -- chrome.tabs
    // Will run in chrome extension only
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        
    })

    // chrome and tabs are the objects
    // tabs is a key in chrome object and query is a key in tabs object
    // We are asking chrome to give us a tab
    // Which tab? The one that is active and open in current window
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        // tabs is of the form : 
        // const tab = [
        //     { url: "https://github.com/RhugwedaShedge" }
        // ]

        myLeads.push(tab[0].url)

        // Save the myLeads array to localStorage
        localStorage.setItem("myLeads", JSON.stringify(tab[0].url))

        renderLeads(myLeads)

    })

})


