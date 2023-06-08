// Get references to the containers
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

// Enable drag events for the items in the first container
const items = container1.getElementsByClassName('item');
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Enable drop event for the second container
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Functions for drag events
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  // Add additional styling to the dragged item if needed
  event.target.classList.add('dragged');
}

function dragEnd(event) {
  // Remove any additional styling from the dragged item
  event.target.classList.remove('dragged');
}

// Functions for drop events
function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  container2.appendChild(item);
  
  // Display a success message or update the UI as required
  window.alert(itemId +" added to container2")
}

// Add a reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reset);

// function reset() {                                                     For resetting without reload 
//   // Move all items from container 2 back to container 1
//   const itemsInContainer2 = container2.getElementsByClassName('item');
//   while (itemsInContainer2.length > 0) {
//     container1.appendChild(itemsInContainer2[0]);
//   }
// }
function reset(){

    location.reload()

}