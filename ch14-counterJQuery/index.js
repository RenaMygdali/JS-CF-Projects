// Initial State of the app
const DEFAULT = 0
let counter = DEFAULT

// Event Listeners

$(document).ready(function() {
   $('#btnDecr').on('click', function() {
      onDecreaseClicked()
   })

   $('#btnReset').on('click', function() {
      onResetClicked()
   })

   $('#btnIncr').on('click', function() {
      onIncreaseClicked()
   })
})

// Controllers

/**
 * Actions taken after 'Decrease' button was clicked.
 * Actions include decreasing the counter.
 */

function onDecreaseClicked() {
   decreaseCounter()
}

/**
 * Actions taken after 'Reset' button was clicked.
 * Actions include reseting the counter.
 */

function onResetClicked() {
   resetCounter()
}

/**
 * Actions taken after 'Increase' button was clicked.
 * Actions include increasing the counter.
 */

function onIncreaseClicked() {
   increaseCounter()
}

// Model

/**
 * Decreases the counter and syncs the UI
 */
function decreaseCounter() {
   counter--
   showCounter()
}


/**
 * Resets the counter and syncs the UI
 */
function resetCounter() {
   counter = DEFAULT
   showCounter()
}


/**
 * Increases the counter and syncs the Ui
 */
function increaseCounter() {
   counter++
   showCounter()
}

// View

/**
 * Assigns the counter to the corresponding UI element.
 * And gives styling accordingly.
 */
function showCounter() {
   const counterDOM = $('#counter')
   counterDOM.html(counter)
   styleCounter(counterDOM)
}

function styleCounter(counterDOM) {
   const counterValue = parseInt(counterDOM.text())

   counterDOM.toggleClass('color-green', counterValue > 0)
   counterDOM.toggleClass('color-red', counterValue < 0)
   counterDOM.toggleClass('color-black', counterValue === 0)


   // if (counter > 0) {
   //    counterDOM.style.color = "green"
   // } else if (counter < 0) {
   //    counterDOM.style.color = "red"
   // } else {  //if (counter === 0)
   //    counterDOM.style.color = "black"
   // }
}

