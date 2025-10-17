const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const backBtn = document.querySelectorAll('.backBtn')

const crow = document.querySelector('.crow');
const owl = document.querySelector('.owl');

const navHome = document.querySelector('.navHome');
const navProject = document.querySelector('.navProject');
const navHobbies = document.querySelector('.navHobbies');

const hoverElements = [
    '.option1', '.option2', '.ig', '.fb', '.twitter', '.backBtn'
];

function hideAllViews(){
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('projectView').style.display = 'none';
    document.getElementById('hobbiesView').style.display = 'none';

    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
    });
}

function switchToView(viewId) {
    hideAllViews();
    document.getElementById(viewId).style.display = 'block';
    
    window.scrollTo({
        top: 65,
        behavior: 'smooth'
    });
}

function playSound(soundId){
    const sound = document.getElementById(soundId);
    sound.volume = 0.5;
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Audio play failed:", e));
}

function playHoverSound(){
    const sound = document.getElementById('hoverSound');
    sound.volume = 0.3;
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Audio play failed:", e));
}

document.querySelectorAll(hoverElements.join(',')).forEach(element => {
    element.addEventListener('mouseenter', playHoverSound);
});

option1.addEventListener('click', () => {
    playSound('selectSound');
    switchToView('projectView');
});

option2.addEventListener('click', () => {
    playSound('selectSound');
    switchToView('hobbiesView');
});

backBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
    playSound('exitPageSound');
    switchToView('mainView');
    });
});

navHome.addEventListener('click', (e) => {
    e.preventDefault();
    playSound('openPageSound');
    switchToView('mainView');
});

navProject.addEventListener('click', (e) => {
    e.preventDefault();
    playSound('openPageSound');
    switchToView('projectView');
});

navHobbies.addEventListener('click', (e) => {
    e.preventDefault();
    playSound('openPageSound');
    switchToView('hobbiesView');
});

crow.addEventListener('click', () => {
    playSound('crowSound');
});

owl.addEventListener('click', () => {
    playSound('owlSound');
});