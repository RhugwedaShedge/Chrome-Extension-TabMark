
let myLinks = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))

if (leadsFromLocalStorage) {
    myLinks = leadsFromLocalStorage
    renderLeads(myLinks)
}

// Execute the function on click
saveBtn.addEventListener("click", function saveLink() {
    
    myLinks.push(inputEl.value)
    
    // Clearing the text of input box
    inputEl.value = ""

    // Save the myLeads array to localStorage
    localStorage.setItem("myLinks", JSON.stringify(myLinks))

    // Rendering the links on the webpage
    renderLeads(myLinks)
})

function renderLinks(links) {
    
    let listItems = ""

    for (let i = 0; i < links.length; i++) {

    // Template String/Literals
        listItems += `
                <li>
                    <a target = '_blank' href='${links[i]}'>
                        ${links[i]}
                    </a>
                </li>`
        
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLinks = []
    renderLeads(myLinks)
})

tabBtn.addEventListener("click", function() {
    
    // Grap the url of the current tab -- chrome.tabs    
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
        // tabs is of the form : 
        // const tab = [
        //     { url: "https://github.com/RhugwedaShedge" }
        // ]

        myLinks.push(tab[0].url)

        // Save the myLeads array to localStorage
        localStorage.setItem("myLinks", JSON.stringify(tab[0].url))

        renderLeads(myLinks)

    })

})


