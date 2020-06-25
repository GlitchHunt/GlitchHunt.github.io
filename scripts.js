const addLink = document.querySelector('.add-link');
const gametagInput = document.querySelector('.link-name');
const gametags = document.querySelector('.gametags');
const alertButton = document.querySelector('#alert-button');
const deleteButton = document.querySelectorAll('.close-btn');
const articles = document.querySelectorAll('article');

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

// Hoisting pulls all functions to top of page, go through usecase with Dan
// Closures are functions within functions that can allow access to their var AFTER the function has run. Ask Dan to explain in more detail
