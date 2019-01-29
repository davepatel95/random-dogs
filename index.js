'use strict';

function getDogImages(numberOfDogs = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
        .then(response => response.json())
        .then(data =>
            renderResults(data))
        .catch(error => alert('An error occurred, please try again later'));
}

function renderResults(data) {
    console.log(data);
    $('.results').html(`<h2>Take a look at these dogs!</h2>`);

    for (let dog of data.message) {
        $('.results').append(
            `<img src="${dog}" class="results-img" width"200" height="auto">`);
        
        }
    $('.results').removeClass('hidden');
}

function watchSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let NumberOfDogImages = $('input[name="NumberOfDogImages"]').val();
        getDogImages(NumberOfDogImages);
    });
}

$(function() {
    console.log('App Loaded! Waiting on submission');
    watchSubmit();
});