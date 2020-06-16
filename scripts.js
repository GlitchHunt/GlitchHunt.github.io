
var articles = document.querySelectorAll("article")

articles.forEach(function(elem) {
    elem.addEventListener("click", function() {
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

    var deletedArticle = buttonD.closest('.profileCard');
    console.log(deletedArticle)

    deletedArticle.remove();

}