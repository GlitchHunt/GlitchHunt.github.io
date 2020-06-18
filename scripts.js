const addLink = document.querySelector('.add-link');
const gametagInput = document.querySelector('.link-name');
const gametags = document.querySelector('.gametags');

console.log(gametagInput)

var articles = document.querySelectorAll("article")

articles.forEach(function(elem) {
    elem.addEventListener('click', function() {
    alert("This is " + elem.dataset.name)
    });
});


var alertButton = document.querySelector("#alert-button")
    alertButton.addEventListener("click", function() {
    alert("What are you doing... They were simple instructions.")
    });


var deleteButton = document.querySelectorAll(".close-btn"); 
console.log(deleteButton)
// grabbing all buttons   
        deleteButton.forEach(button =>
            button.addEventListener('click', handleDeleteArticle)
          );
// assigning all buttons event listener to wait for "click"

function handleDeleteArticle(event) {

    var buttonD = event.currentTarget;
    console.log(buttonD);
    // grabbing button
    var deletedArticle = buttonD.closest('.profileCard');
    console.log(deletedArticle)
    // grabbing closest "profileCard" to the button
    deletedArticle.remove();
    // removes article of button clicked
}

function handleCardButtonClick(event) {
    event.preventDefault();
    // const validStreamerInput = streamerInput.value;
    const validGametagInput = gametagInput.value;

    console.log(validGametagInput)

    if (validGametagInput) {
        const newGametagArticle = `
        <article class="profileCard" data-name="gametagInput">
            <button class="close-btn" type="button">X</button>
            <h2>${validGametagInput}</h2>
            <p> API NEEDED</p>
        `;
        gametags.insertAdjacentHTML("beforeend", newGametagArticle);
    }
}

addLink.addEventListener('click', handleCardButtonClick);


//     if (validStreamerInput) {
//         const newStreamDetails = `
//         <div class="streamer">
//         <p class="streamerName">${validStreamerInput}</p>
//         <a href="https://twitch.tv/${validStreamerInput}" target="_blank">Twitch</a>
//     </div>
//         `;
//         streamers.insertAdjacentHTML("beforeend", newStreamDetails);    
//     }

// 