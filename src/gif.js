export default class Gif {
  static getRandom() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&limit=5&offset=0&rating=pg-13&lang=en`;
      request.onload = function() {
        if (this.status === 200) {
          resolve (request.response);
        } else {
          reject (request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  static gifSearch(query) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=5&offset=0&rating=pg-13&lang=en`;
      request.onload = function() {
        if (this.status === 200) {
          resolve (request.response);
        } else {
          reject(request.resonse);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  static gifTrending() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=5&offset=0&rating=pg-13&lang=en`;
      request.onload = function() {
        if (this.status === 200) {
          resolve (request.respone);
        } else {
          reject (request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}