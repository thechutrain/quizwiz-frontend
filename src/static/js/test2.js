document.addEventListener('DOMContentLoaded', function() {
	// alert('DOMContentLoaded')
	// variables
	var hamburgerIcon = document.querySelector('img.menu-icon')
	var exitIcon = document.querySelector('img.x-icon')
	var fsMenuContainer = document.querySelector('div.fullScreenMenuContainer')

	// Event Listeners
	function openFullMenu() {
		alert('opening full menu')
	}

	// add event listeners
	hamburgerIcon.addEventListener('click', function() {
		var classNameArray = fsMenuContainer.className.split(' ')
		var hiddenIndex = classNameArray.indexOf('hidden')
		if (hiddenIndex !== -1) {
			// remove that class name
			classNameArray.splice(hiddenIndex, 1)
			fsMenuContainer.setAttribute('class', classNameArray.join(' '))
		}
	})
	exitIcon.addEventListener('click', function() {
		var classNameArray = fsMenuContainer.className.split(' ')
		classNameArray.push('hidden')
		var classNameStr = classNameArray.join(' ')
		fsMenuContainer.setAttribute('class', classNameStr)
	})

	// fsMenuContainer.addEventListener('click', function() {
	// 	alert('fsMenuContainer was clicked!')
	// })
})
