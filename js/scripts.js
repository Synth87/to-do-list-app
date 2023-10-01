
// function to add, cross out, move and delete ToDo list items
function newItem() {


    // jQuery code
    // 1. Adding a new item to the list of items: 

    // retrieves the value from the element with ID "input" and stores it in the inputValue variable.
    let inputValue = $("#input").val();
    // creates a new <li> element, sets its text content to inputValue, and stores it in the li variable. ??? UNTESCHEIDUNG der li-elemente??? position im DOM? woher weiß system, welches ich klicke???
    let li = $("<li></li>").text(inputValue);

    if (inputValue === '') {
        // alert if nothing is entered in the input box
        alert("You must write something!");
    } else {
        // info: jQuery doesn’t have an equivalent to createElement
        // directly select an element by its selector and perform operations without needing a separate variable for it.
        $('#list').append(li);
    }





    // jQuery code:
    // 2. Crossing out an item from the list of items:

    // optional: the functions could be given names

    // when the user doubleclicks on the list item the text is crossed out or displayed normally again
    li.on('dblclick', function (event) {
        li.toggleClass("strike");
    });

    // the selectstart event listener prevents text selection. useful in combination with the dblclick function for adding the "strike" class
    li.on('selectstart', function (event) {
        event.preventDefault();
    });





    // jQuery code
    // 3. Adding the delete button "X":
    // creates an element named <crossOutButton>, sets its text to "X", and adds the class "cross-out"
    let crossOutButton = $('<crossOutButton></crossOutButton>').text("X").addClass("cross-out");
    // appends the created crossOutButton element to the li element
    li.append(crossOutButton);

    // adds a click event to crossOutButton that, when clicked, adds the "delete" class to the li element
    crossOutButton.on('click', function (event) {
        // Adding CSS class "delete":
        li.addClass("delete");
    });





    // 4. Reordering the items:
    // Makes the '#list' items draggable and rearrangeable
    $('#list').sortable();


}