var settingsMenu = document.querySelector('.settings-menu')
var userProfile =  document.querySelector('.nav-user-icon') 
var darkBtn = document.querySelector('.dark-btn')



userProfile.addEventListener('click', function(e){
  settingsMenu.classList.toggle('settings-menu-height')
  var settingsBorder = document.querySelector('.settings-menu')
  settingsBorder.style.borderWidth = '0px';
  

})

darkBtn.addEventListener('click', function(e){
  darkBtn.classList.toggle('on');
  document.body.classList.toggle('dark-theme');
  var settingsBorder = document.querySelector('.settings-menu')
  settingsBorder.style.borderWidth = '1px';
  settingsBorder.style.borderColor = 'white';
  settingsBorder.style.borderStyle = 'solid';
  var leftEvent = document.querySelectorAll('.left-event')
  leftEvent.forEach((el)=>{
    el.style.backgroundColor = 'white'
  })

  if(localStorage.getItem('theme') == 'light'){
    localStorage.setItem('theme', 'dark')
  }
  else{
    localStorage.setItem('theme', 'light')
  }


})


if(localStorage.getItem('theme') == 'light'){
  darkBtn.classList.remove('on')
  document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem('theme') == 'dark'){
  darkBtn.classList.add('on')
  document.body.classList.add('dark-theme');
}
else{
  localStorage.setItem('theme', 'light')
}