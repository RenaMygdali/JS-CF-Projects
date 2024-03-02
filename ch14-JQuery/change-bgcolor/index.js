let bgColor = undefined

$(document).ready(function() {
   $('#btn').on('click', function() {
      onClickMeClicked()      
   })
})

function onClickMeClicked() {
   updateBg()
}

// Model

/**
 * Gets a color and updates background UI element.
 */
function updateBg() {
   bgColor = getBgColor()
   showBgColor()
}

/**
 * Returns a random color from a standard list of colors.
 * @returns    the color.
 */
function getBgColor() {
   const colors = ["red", "white", "black", "green", "blue", "yellow"]
   return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Fills the values of the corresponding UI elements
 * (changes the body's background color and the name of the color).
 */
function showBgColor() {
   $('#clr-hex').html(bgColor)
   $('body').css('background-color', bgColor);
}