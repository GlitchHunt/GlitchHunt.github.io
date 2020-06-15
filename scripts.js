var articles = document.querySelectorAll("article")

articles.forEach(function(elem) {
    elem.addEventListener("click", function() {
    alert("This is " + elem.dataset.name)
    });
});


var alertButton = document.querySelector("#alert-button")
// console.log(alertButton) - use these to check you've grabbed the right element
    alertButton.addEventListener("click", function() {
    alert("What are you doing... They were simple instructions.")
    });

