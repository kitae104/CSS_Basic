const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button'); // plan 클래스 안에 있는 button 태그들을 모두 선택
const modalNoButton = document.querySelector('.modal button');

// backdrop.style.display = 'block';
console.dir(selectPlanButtons);

for (let button of selectPlanButtons) {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

modalNoButton.addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});