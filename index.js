var arr = [
    {
        "quote": `<p><img src="css/contact1 (21).jpg" class="pic m-3"> <br>“Be yourself; everyone else is already taken.” <br></br> </p><h2>― Oscar Wilde</h2> `
    },
    {
        "quote": `<p><img src="css/contact1 (19).jpg" class="pic m-3"><br>“You only live once, but if you do it right, once is enough.”</p>  <h2>― Mae west</h2>`
    },
    {
        "quote": `<p><img src="css/contact1 (22).jpg" class="pic m-3"> <br>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p> <h2>― Marlyn Monroe</h2>`
    },
    {
        "quote": `<p><img src="css/contact1 (23).jpg" class="pic m-3"> <br>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p> <h2>― Albert Einstein</h2>`
    },
    {
        "quote": `<p><img src="css/contact1 (25).jpg" class="pic m-3"> <br>“A room without books is like a body without a soul.”
        </p> <h2>― Marcus Tullius Cicero</h2>`
    },
    {
        "quote": `<p><img src="css/contact1 (26).jpg" class="pic m-3"> <br>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p> <h2>― Bernard M. Baruch</h2>`
    },
    {
        "quote": `<p><img src="css/contact1 (24).jpg" class="pic m-3"> <br>“So many books, so little time.”
        </p> <h2>― Frank Zappa</h2>`
    },
    {
        "quote": `<p><img src="css/contact1 (27).jpg" class="pic m-3"> <br>“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”</p> <h2>― William W. Purkey</h2>`,
       
    },
    {
        "quote": `<p><img src="css/contact1 (28).jpg" class="pic m-3"> <br>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</p> <h2>― Dr. Seuss</h2>`,
       
    },
    {
        "quote": `<p><img src="css/contact1 (30).jpg" class="pic m-3"> <br>“Be the change that you wish to see in the world.”
        </p> <h2>― Mahatma Gandhi
        </h2>`,
       
    },
    {
        "quote": `<p><img src="css/contact1 (31).jpg" class="pic m-3"> <br>“In three words I can sum up everything I've learned about life: it goes on.”
        </p> <h2>― Robert Frost
        </h2>`,
       
    },
    {
        "quote": `<p><img src="css/contact1 (32).jpg" class="pic m-3"> <br>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
        </p> <h2>― J.K. Rowling, Harry Potter and the Goblet of Fire
        </h2>`,
       
    },
    {
        "quote": `<p><img src="css/contact1 (33).jpg" class="pic m-3"> <br>“Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend”
        </p> <h2>― Albert Camus

        </h2>`,
       
    },
    
];


// function display() {
//     var random_number = Math.floor(Math.random() * arr.length);
//     document.getElementById("quote").innerHTML = arr[random_number].quote;
// }


var myFavourite = [];

function display() {
  var arrCheckDistinct = [];

  do {
    var random_number = Math.floor(Math.random() * arr.length);
  } while (arrCheckDistinct.includes(random_number));

  arrCheckDistinct.push(random_number);
// local storage
  if (arrCheckDistinct.length === arr.length) {
    arrCheckDistinct.length = 0;
  } else {
    console.log("Index:", random_number);
    var selectedQuote = arr[random_number].quote;
    document.getElementById("quote").innerHTML = selectedQuote;
    return selectedQuote;
    
  }
}

function add() {
  var displayedQuote = display();
  myFavourite.push(displayedQuote);
  console.log("Favorites:", myFavourite);
}
function displayfav() {
    var cartoona = `<button class="rounded-3  " onclick= "displayfav()" this.disabled=true > show favourites<i class="fa-solid fa-heart" style="color: #ffffff;"></i></button> <h1>~~~~~~~~Your favourite quotes~~~~~~~~</h1>`   ;   
    for (var i = 0; i < myFavourite.length; i++) {
        cartoona += `   <p>${myFavourite[i]}</p>  <button class="rounded-3" onclick="delete_quote(${i})">delete</button>`;
    }
    document.getElementById("favorites").innerHTML = cartoona;
}
//function to local storage
function localStorage(){
    localStorage.setItem("myFavourite",JSON.stringify(myFavourite))
}


function delete_quote(index) {
    myFavourite.splice(index, 1);
    displayfav();
  }