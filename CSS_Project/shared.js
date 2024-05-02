const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button'); // plan 클래스 안에 있는 button 태그들을 모두 선택
const modalNoButton = document.querySelector('.modal button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector(".mobile-nav");

//console.dir(backdrop);

// backdrop.style.display = 'block';
// console.dir(selectPlanButtons);

for (let button of selectPlanButtons) {
    button.addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');

};

toggleButton.addEventListener('click', () => {    
    mobileNav.classList.add('open');     
    backdrop.classList.add('open');
});