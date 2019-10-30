// Variables

const showTweet= document.getElementById("showTweet");


// Event Listeners
    eventListener();
    
    function eventListener(){
        // submit form
        document.querySelector('#form').addEventListener('submit',newTweet);
        
        //Remove tweet from list
        showTweet.addEventListener('click',removeTweet);

        //Documents auto load from local storage

        document.addEventListener('DOMContentLoaded',localStorageOnLoad);
    }   


// Functions

function newTweet(e){
    e.preventDefault();

    // Read input value
    const tweet = document.getElementById('tweetInput').value;

    // Create remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList.add('remove-tweet');
    removeBtn.textContent='x';


    //create <li> element
    const li = document.createElement('li');
    
    li.classList.add("tweet-list");
    li.textContent=tweet;
    
    // Append li
    showTweet.appendChild(li);
    
    //add the remove button  in each tweet

    li.appendChild(removeBtn);

    // add to local storage
    addtolocalstorage(tweet);
}

//// remove tweet from the dom

function removeTweet(e){
        if(e.target.classList.contains('remove-tweet')){
            /// target the parents bcz need to delete li
            e.target.parentElement.remove();
        }

        //remove from local storage
        removeFromLocalStorage(e.target.parentElement.textContent);
}

// add to local storage

function addtolocalstorage(tweet){
   let tweets = getTweetFromStorage();

    ///  add all tweet into array
    tweets.push(tweet);

    //convert array to string

    localStorage.setItem('tweets',JSON.stringify(tweets));
}
function getTweetFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if(tweetsLS === null){
        tweets = [];
    }else{
        tweets = JSON.parse( tweetsLS ) ;
    }
    return tweets;
}

// print local storage on load

function localStorageOnLoad(){
    let tweets = getTweetFromStorage();

    tweets.forEach(function(tweet) {
    
    const removeBtn = document.createElement('a');
    removeBtn.classList.add('remove-tweet');
    removeBtn.textContent='x';


    //create <li> element
    const li = document.createElement('li');
    
    li.classList.add("tweet-list");
    li.textContent=tweet;
    
    // Append li
    showTweet.appendChild(li);
    
    //add the remove button  in each tweet

    li.appendChild(removeBtn);
    });

}

// remove from storage

function removeFromLocalStorage(tweet){
    let tweets = getTweetFromStorage();

    //removee the x  from the tweet

    const tweetdelete  = tweet.substring(0,tweet.length-1); 

    tweets.forEach(function(tweetLS, index){
        if(tweetdelete === tweetLS){
            tweets.splice(index,1);
        }
    });
    localStorage.setItem('tweets',JSON.stringify(tweets));

}