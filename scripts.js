const addLink = document.querySelector('.add-link');
const gametagInput = document.querySelector('.link-name');
const gametags = document.querySelector('.gametags');
const alertButton = document.querySelector('#alert-button');
const deleteButton = document.querySelectorAll('.close-btn');
const articles = document.querySelectorAll('article');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const easter = document.querySelector('#easter');

alertButton.addEventListener('click', function() {
  alert('What are you doing... They were simple instructions.');
});

deleteButton.forEach(button =>
  button.addEventListener('click', handleDeleteArticle)
);

function handleDeleteArticle(event) {
  const buttonD = event.currentTarget;
  console.log(buttonD);
  const deletedArticle = buttonD.closest('.profileCard');
  console.log(deletedArticle);
  deletedArticle.remove();
}

addLink.addEventListener('click', handleCardButtonClick);

function handleCardButtonClick(event) {
  event.preventDefault();
  const validGametagInput = gametagInput.value;
  if (validGametagInput) {
    const newGametagArticle = `
        <article class="profileCard" data-name="gametagInput">
            <button class="close-btn" type="button"></button>
            <h2>${validGametagInput}</h2>
            <p> API NEEDED</p>
        `;

    gametags.insertAdjacentHTML('beforeend', newGametagArticle);

    const updatedDeleteButtons = document.querySelectorAll('.close-btn');
    const justAdded = updatedDeleteButtons[updatedDeleteButtons.length - 1];
    console.log({ justAdded });

    justAdded.addEventListener('click', handleDeleteArticle);
  }
}

const picList = document.querySelectorAll('.profile-image');
picList.forEach(eachPic => eachPic.addEventListener('click', toggleRound));

function toggleRound(event) {
  event.currentTarget.classList.toggle('round');
  // const targetPic = picList.closest('.profile-image');
  console.log(event.currentTarget);
}

easter.addEventListener(`click`, easterModalClick);

function easterModalClick(event) {
  modalInner.innerHTML = `
  <img width="600" height="600" src="https://picsum.photos/600" alt="welcome"/>
  <p>Congratultions! You found it!</p>
`;
  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
