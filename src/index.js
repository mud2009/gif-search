import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Gif from './gif.js';

// $("#search-btn").on("click", function(event) {
//   event.preventDefault();
//   const query = $("#searchbox").val();

//   let request = new XMLHttpRequest();
//   let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=5&offset=0&rating=pg-13&lang=en`;

//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log("If statement is true");
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   function getElements(response){
//     let gifArr = []; 
//     for (let index = 0; index <= 4; index += 1) {
//       gifArr.push(response.data[index].images.original.url);
//     }
//     gifArr.forEach(function(gif) {
//       $('#output').append(`<img class="result-img" src="${gif}">`);
//     });
//   }
// });

// random logic

// $('#random-btn').on("click",function(event){
//   event.preventDefault();

//   request.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   function getElements(response) {
//     $('#output').html(`<img class="result-img" src="${response.data.images.original.url}">`);
//   }
// });

$(document).ready(function(){
  $('#random-btn').click(function(event){
    event.preventDefault();
    let promise = Gif.getRandom();
    promise.then(function(response){
      const body = JSON.parse(response);
      $('#output').html(`<img class="result-img" src="${body.data.images.original.url}">`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
  $("#search-btn").click(function(event){
    event.preventDefault();
    const query = $("#searchbox").val();
    let promise = Gif.gifSearch(query);
    promise.then(function(response){
      const body = JSON.parse(response);
      $('#output').html(`<img class="result-img" src="${body.data[0].images.original.url}">`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
  $("#trending-btn").click(function(event){
    event.preventDefault();
    let promise = Gif.gifTrending();
    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(body);
      $('#output').html(`<img class="result-img" src="${body.data.images.original.url}">`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

// $('#trending-btn').on("click",function(event){
//   event.preventDefault();

//   let request = new XMLHttpRequest();
//   let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=5&offset=0&rating=pg-13&lang=en`;

//   request.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   function getElements(response){
//     let gifArr = []; 
//     for (let index = 0; index <= 4; index += 1) {
//       gifArr.push(response.data[index].images.original.url);
//     }
//     gifArr.forEach(function(gif) {
//       $('#output').append(`<img class="result-img" src="${gif}">`);
//     });
//   }

// })