// Select the filter input and the list of items
const filter = document.querySelector('#filter');
const items = document.querySelector('#items');

// Add event listener to filter input
filter.addEventListener('keyup', filterItems);

// Function to filter the items based on search string
function filterItems(e) {
    // Get search string and convert to lowercase
    const searchText = e.target.value.toLowerCase();
    // Get all items
    const items = itemList.getElementsByTagName('li');
    // Convert to array and loop through each item
    Array.from(items).forEach(function(item) {
      const itemName = item.firstChild.textContent;
      const itemDesc = item.lastChild.textContent;
      // Check if search string is found in item name or description
      if(itemName.toLowerCase().indexOf(searchText) !== -1 || itemDesc.toLowerCase().indexOf(searchText) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  

// Add event listener to addForm
const addForm = document.querySelector('#addForm');
addForm.addEventListener('submit', addItem);

// Function to add an item to the list
function addItem(e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the name and description of the new item from the input fields
  const itemName = addForm.querySelector('#item').value;
  const itemDescription = addForm.querySelector('#description').value;

  // Create a new list item with the name and description
  const newItem = document.createElement('li');
  newItem.className = 'list-group-item';
  newItem.innerHTML = `${itemName} - <span class="description">${itemDescription}</span> <button class="btn btn-danger btn-sm float-right delete">X</button>`;

  // Add the new item to the list
  items.appendChild(newItem);

  // Clear the input fields
  addForm.querySelector('#item').value = '';
  addForm.querySelector('#description').value = '';
}

// Add event listener to items list
items.addEventListener('click', deleteItem);

// Function to delete an item from the list
function deleteItem(e) {
  // Check if the delete button was clicked
  if (e.target.classList.contains('delete')) {
    // Remove the item from the list
    const listItem = e.target.parentElement;
    items.removeChild(listItem);
  }
}
