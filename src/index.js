import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Gif from './gif.js';

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
      $('#output').html(`<img class="result-img" src="${body.data[0].images.original.url}">`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});