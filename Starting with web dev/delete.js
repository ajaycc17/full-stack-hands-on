var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById("item").value;
    var newItemDesc = document.getElementById("desc").value;

    // Create new li element
    var li = document.createElement("li");
    // Add class
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItemDesc));

    // Create del and edit button element
    var deleteBtn = document.createElement("button");
    var editBtn = document.createElement("button");

    // Add classes to del and edit button
    deleteBtn.className = "btn btn-danger btn-sm delete";
    editBtn.className = "btn btn-success btn-sm edit mx-1";

    // Append text node
    editBtn.appendChild(document.createTextNode("Edit"));
    deleteBtn.appendChild(document.createTextNode("X"));

    // add btns to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You Sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get list
    var items = itemList.getElementsByTagName("li");

    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var itemDesc = item.firstChild.nextSibling.textContent;
        if (
            itemName.toLowerCase().indexOf(text) != -1 ||
            itemDesc.toLowerCase().indexOf(text) != -1
        ) {
            item.style.display = "block";
            console.log("match");
        } else {
            item.style.display = "none";
            console.log("no match");
        }
    });
}
