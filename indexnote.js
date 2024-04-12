let shoppingList = {
    'Groceries': [],
    'Electronics': [],
    'Clothing': [],
    'Books': [],
    'Other': []
};

function addItem() {
    let category = document.getElementById('category').value;
    let item = document.getElementById('item').value.trim();

    if (item !== '') {
        shoppingList[category].push(item);
        document.getElementById('item').value = '';
        displayList();
    }
}

function displayList() {
    let listElement = document.getElementById('list');
    listElement.innerHTML = '';

    for (let category in shoppingList) {
        if (shoppingList[category].length > 0) {
            let categoryElement = document.createElement('li');
            categoryElement.innerHTML = `<strong>${category}</strong>`;
            
            let itemList = document.createElement('ul');
            shoppingList[category].forEach(item => {
                let itemElement = document.createElement('li');
                itemElement.textContent = item;
                itemList.appendChild(itemElement);
            });

            categoryElement.appendChild(itemList);
            listElement.appendChild(categoryElement);
        }
    }
}
/*
// Initial display
displayList();

function moveItem(item) {
    const selectedItem = item.cloneNode(true);
    selectedItem.removeChild(selectedItem.lastElementChild); // Remove the add icon
    document.getElementById("selectedList").appendChild(selectedItem);
    item.remove(); // Remove the item from the original list
}
*/