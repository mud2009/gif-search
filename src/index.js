import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import testCode from './test-code.js';

let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=5&offset=0&rating=pg-13&lang=en`

$(document).ready(function() {
  let msg = testCode();
  console.log("This page is loading correctly " + msg);
});

