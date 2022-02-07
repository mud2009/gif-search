import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$("#search-btn").on("click", function(event) {
  event.preventDefault();
  const query = $("#searchbox").val();

  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=5&offset=0&rating=pg-13&lang=en`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log("If statement is true");
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();

  function getElements(response){
    let gifArr = []; 
    for (let index = 0; index <= 4; index += 1) {
      gifArr.push(response.data[index].images.original.url);
    }
    gifArr.forEach(function(gif) {
      $('#output').append(`<img class="result-img" src="${gif}">`);
    });
  }
});
