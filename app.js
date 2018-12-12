if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then((registration) => {
    console.log("service worker has been REGISTERED", registration.scope)
  }).catch((error)=> {
    console.log("Error occured in REG serviceWorker", error)
  })
}

let BookList = document.getElementById('AllBooks')

fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
.then(function(response){
  return response.json();
})
.then(function(myJson){

  let bookLiteral = myJson.map(function(bookObject){
    return `<li>
    <img src="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${bookObject.imageLink}"/>
    <p>${bookObject.title}</p>
    <p> ${bookObject.author}</p>
    </li>`
  })
  BookList.innerHTML = bookLiteral.join('')
})
