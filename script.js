const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");
const submitBtn = document.querySelector(".submitBtn");



submitBtn.addEventListener('click', ()=> {
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
    const input = document.getElementsByName("rating");
    
    for(let i=0; i < input.length; i++) {
        if(input[i].checked) {
            document.getElementById("rated").innerHTML = input[i].value;
        }
    }
    rating.innerHTML = selected.value;

});


