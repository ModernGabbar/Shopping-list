var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var delbuttons = document.querySelectorAll("remove-item");
var ul = document.getElementById("list");

function addListElement() {
    var li = document.createElement("li");
    var makebutton = document.createElement("button");
    //Making delete button for new list element.
    makebutton.appendChild(document.createTextNode("X"));
    makebutton.classList.add("remove-item");
    makebutton.onclick = deleteParentNode;
    //making list element and adding delete button.
    li.appendChild(makebutton);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    //Making input box value to nil after adding in list.
    input.value = "";
}

function addListAfterClick() {
    if(input.value.length > 0) {
        addListElement();
    }
}

function addListAfterKeypress() {
    if(input.value.length > 0 && event.keyCode === 13) {
        addListElement();
    }
}

function deleteParentNode(event) {
    event.target.parentNode.remove();
}

ul.addEventListener("click", function(event) {
    event.target.classList.toggle("done");
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

delbuttons.forEach(function(element) {
    element.addEventListener("click", deleteParentNode);
});