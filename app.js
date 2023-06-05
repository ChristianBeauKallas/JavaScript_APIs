// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.querySelector("#submitSearch");
const searchInput = document.querySelector("#searchWord");
const img = document.querySelector("#img");
const feedback = document.querySelector("#paragraph");


const apiKey= "EioowPzkpK23NP4jNbLR8442NoZxMpqL"

function fetchGiphy(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchInput.value}`)
    .then((response)=>{
        const result = response.json()
        console.log(result)
        return result;
    })
    
    .then((res)=>{
        img.src = res.data.images.original.url;
        searchInput.value = "";
    })
    .catch((err)=> {
        console.log(err)
        feedback.textContent = err.message;
    })
}

searchButton.addEventListener("click", fetchGiphy);