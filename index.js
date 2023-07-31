const data = [
    {
        id: 1,
        title: "Main Account",
        balance: "6700.56",
        spendings: [
            {
                category: "Rent",
                spent: "1450"
            },
            {
                category: "Groceries",
                spent: "564"
            },
            {
                category: "Restaurants",
                spent: "123"
            },
            {
                category: "Transport",
                spent: "81"
            },
            {
                category: "Internet",
                spent: "50"
            }
        ]
    },
    {
        id: 2,
        title: "Expenses",
        balance: "5134.63",
        spendings: [
            {
                category: "Netflix",
                spent: "19.99"
            },
            {
                category: "HBO Max",
                spent: "14.99"
            },
            {
                category: "Setapp",
                spent: "9.99"
            }
        ]
    },
    {
        id: 3,
        title: "Savings",
        balance: "36500.12",
        spendings: [
            {
                category: "Retiring fund",
                spent: "35000"
            }
        ]
    }
]

const accountFeed = document.querySelector(".account-feed");

let listAccounts = ""

for(let i=0; i<data.length; i++){
    listAccounts += `
    <div class="account-items" data-id ="${data[i].id}" id = "${data[i].id}" >
        <h3>${data[i].title}</h3>
        <h3>$${data[i].balance}</h3>
    </div>
    `
}
accountFeed.innerHTML = listAccounts

const spendingItems = document.querySelector(".spending-items")
const spendingFeed = document.querySelector(".spending-feed")

listSpendings = ""

document.addEventListener("click", event => {
    if(event.target.dataset.id == 1) {

        for(let i=0; i<data[0].spendings.length; i++){
            listSpendings += `
            <div class="spending-items">
                <h3>${data[0].spendings[i].category}</h3>
                <h3>$${data[0].spendings[i].spent}</h3>
            </div>`
        }

        spendingFeed.innerHTML = listSpendings
        listSpendings = ""

    } 
    if (event.target.dataset.id == 2) {

        for(let i=0; i<data[1].spendings.length; i++){
            listSpendings += `
            <div class="spending-items">
                <h3>${data[1].spendings[i].category}</h3>
                <h3>$${data[1].spendings[i].spent}</h3>
            </div>
            `
        }

        spendingFeed.innerHTML = listSpendings
        listSpendings = ""

    } 
    if (event.target.dataset.id == 3) {

        for(let i=0; i<data[2].spendings.length; i++){
            listSpendings += `
            <div class="spending-items">
                <h3>${data[2].spendings[i].category}</h3>
                <h3>$${data[2].spendings[i].spent}</h3>
            </div>
            `
        }

        spendingFeed.innerHTML = listSpendings
        listSpendings = ""

    }
})
