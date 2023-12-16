const menu=document.querySelector(".settings-menu");
const profile = document.querySelector('#profile');
const modeButton=document.getElementById('dark-btn');

profile.addEventListener('click',function(){
    menu.classList.toggle('settings-menu-height');
})
document.querySelector('main').addEventListener('click',function(){
    menu.classList.remove('settings-menu-height');
})

modeButton.onclick=function(){
    modeButton.classList.toggle("dark-btn-on")
    document.body.classList.toggle('dark-theme'); 
    if(localStorage.getItem('theme')==='dark'){
        localStorage.setItem('theme','light');
    }else{
        localStorage.setItem('theme','dark')
    }
}

if(localStorage.getItem('theme')==='light'){
    modeButton.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}else if(localStorage.getItem('theme')==='dark'){
    modeButton.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}else{
    localStorage.setItem('theme','light');
}