const addLink = document.querySelector('.add-link');
const gametagInput = document.querySelector('.link-name');
const gametags = document.querySelector('.gametags');
const alertButton = document.querySelector("#alert-button")
const deleteButton = document.querySelectorAll(".close-btn"); 
const articles = document.querySelectorAll("article")

articles.forEach(function(elem) {
    elem.addEventListener('click', function() {
    alert("This is " + elem.dataset.name)
    });
});

alertButton.addEventListener("click", function() {
    alert("What are you doing... They were simple instructions.")
    });
  

deleteButton.forEach(button =>
        button.addEventListener('click', handleDeleteArticle)
              );

function handleDeleteArticle(event) {
    var buttonD = event.currentTarget;
    console.log(buttonD);
    var deletedArticle = buttonD.closest('.profileCard');
    console.log(deletedArticle)
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
        
        gametags.insertAdjacentHTML("beforeend", newGametagArticle);

        const updatedDeleteButtons = document.querySelectorAll(".close-btn");
        const justAdded = updatedDeleteButtons[updatedDeleteButtons.length - 1];
        console.log({ justAdded })

        justAdded.addEventListener('click', handleDeleteArticle)
}
}