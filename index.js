const data = [
    {
      id: 1,
      title: "Main Account",
      balance: "6700.56",
      spendings: [
        { category: "Rent", spent: "1450" },
        { category: "Groceries", spent: "564" },
        { category: "Restaurants", spent: "123" },
        { category: "Transport", spent: "81" },
        { category: "Internet", spent: "50" },
      ],
    },
    {
      id: 2,
      title: "Expenses",
      balance: "5134.63",
      spendings: [
        { category: "Netflix", spent: "19.99" },
        { category: "HBO Max", spent: "14.99" },
        { category: "Setapp", spent: "9.99" },
      ],
    },
    {
      id: 3,
      title: "Savings",
      balance: "36500.12",
      spendings: [{ category: "Retiring fund", spent: "35000" }],
    },
];
   
   
const accountFeed = document.querySelector(".account-feed");

let listAccounts = ""

for (let i = 0; i < data.length; i++) {
listAccounts += `
    <div class="account-items" data-id="${data[i].id}">
    <h3>${data[i].title}</h3>
    <h3>$${data[i].balance}</h3>
    </div>`;
}

accountFeed.innerHTML = listAccounts

const spendingFeed = document.querySelector(".spending-feed")

listSpendings = ""

function renderSpendingItems(spendingData) {
    let listSpendings = "";
    for (let i = 0; i < spendingData.length; i++) {
        const widthPercentage = ((spendingData[i].spent / spendingData[0].spent) * 50 + 50 ).toFixed(2);
        listSpendings += `
        <div class="spending-items" style="width : ${widthPercentage}%";>
            <h3>${spendingData[i].category}</h3>
            <h3>$${spendingData[i].spent}</h3>
        </div>`;
    }
    spendingFeed.innerHTML = listSpendings;
}

let selectedAccountEl = null;

document.addEventListener("click", event => {
    const selectedAccountId = event.target.dataset.id;
        const selectedAccount = data.find((account) => account.id.toString() === selectedAccountId);
        
        if ( selectedAccount ){
            if (selectedAccountEl){
            selectedAccountEl.classList.remove("selected-account")
        }
        selectedAccountEl = event.target;
        selectedAccountEl.classList.add("selected-account");
            
        renderSpendingItems(selectedAccount.spendings)
        }
})
