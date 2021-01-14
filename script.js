console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'galaxy.css'
	}

	if(mode == 'sky'){
		document.getElementById('theme-style').href = 'sky.css'
	}

	if(mode == 'ocean'){
		document.getElementById('theme-style').href = 'ocean.css'
	}

	if(mode == 'sunset'){
		document.getElementById('theme-style').href = 'sunset.css'
	}

	localStorage.setItem('theme', mode)
}