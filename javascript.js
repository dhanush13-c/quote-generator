
function newQuotes() {
  var randNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["\"Your Time is limited. Don't Waste it living someone else's life\"<br> - Steve Jobs",
              "\"If something is important enough you should try even if the probable outcome is failure.\"<br> - Elon Musk",
              "\"The best preparation for tomorrow is doing your best today.\"<br> - H.Jackson Brown Jr",
              "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>",
              "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
              "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
              "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
              "\"If you can dream it, you can do it.\"<br>- Walt Disney",
              "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
              "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
              "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee"];
