
const quotes = [
    "In time, you will know what it's like to lose. To feel so desperately that you're right, yet to fail all the same. Dread it. Run from it. Destiny arrives all the same. And now, it's here. Or should I say, I am.",
    "The end is near.",
    "I know what it's like to lose. To feel so desperately that you're right, yet to fail nonetheless. It's frightening, turns the legs to jelly. I ask you, to what end? Dread it. Run from it. Destiny arrives all the same. And now, it's here. Or should I say, I am.",
    "I finally rest and watch the sun rise on a grateful universe.",
    "I thought by eliminating half of life, the other half would thrive, but you have shown me... that's impossible. As long as there are those that remember what was, there will always be those that are unable to accept what can be. They will resist.",
    "I used the stones to destroy the stones. It nearly killed me, but the work is done. It always will be. I am inevitable.",
    "I am... inevitable.",
    "I ignored my destiny once. I can't do that again. Even for you.",
    "When I'm done, half of humanity will still exist. Perfectly balanced, as all things should be.",
    "I'm the only one who knows that. At least I'm the only who has the will to act on it.",
    "You're strong. But I could snap my fingers, and you'd all cease to exist.",
    "The universe required correction. After that, the stones served no purpose beyond temptation.",
    "The hardest choices require the strongest wills.",
    "The privilege of a lifetime is being who you are."
  ];
//   const getNewQuote = async () =>
//   {
//   var url="https://type.fit/api/quotes";    

//   // fetch the data from api
//   const response=await fetch(url);
//   console.log(typeof response);
//   //convert response to json and store it in quotes array
//     const allQuotes = await response.json();
//     return allQuotes;
// }

// console.log(getNewQuote());

// var category = 'happiness'
// ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
// const url = "https://api.quotable.io/random";
// function generateQuote(){
//    fetch(url)
//   .then(function(data) {
//          return data.json();
//     })
//     .then(function(data){    
//     document.getElementById("quote").innerHTML = data.content; document.querySelector(".author").innerHTML = "- " + data.author;
//    })
//  .catch(function(err) {
//     console.log(err); 
//     });
//  }
 // Repeat generateQuote() every 10 seconds





// console.log(new Date().getTime());
const content = document.getElementById('content');
var message = document.getElementById('message');
const currentWord = document.getElementById('current-word');

// function myFunction(){
//     const messageIndex = Math.floor(Math.random() * quotes.length);
//     var currentMessage;
//     $.ajax({
//       method: 'GET',
//       url: 'https://api.api-ninjas.com/v1/quotes',
//       headers: { 'X-Api-Key': 'hgLdefTld20KuS/1sYoL6w==Kvdoxvt71AoQWKz1'},
//       contentType: 'application/json',
//       success: function(result) {
//           console.log(result[0].quote);
//           currentMessage = result[0].quote;
//       },
//       error: function ajaxError(jqXHR) {
//           console.error('Error: ', jqXHR.responseText);
//       }
//     });
//     words = currentMessage.split(' ');
//     console.log(words.length);
//     wordIndex=0;

//     const spanWords = words.map(function(word){return`<span>${word}</span>`});

    
//     content.innerHTML = spanWords.join(" ");
    
//     content.childNodes[0].className = 'highlight';
   
//     message.innerText = '';
//     currentWord.value = '';
//     // currentWord.focus();
    
//     startTime = new Date().getTime();
// }

function myFunction() {
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 'X-Api-Key': 'hgLdefTld20KuS/1sYoL6w==Kvdoxvt71AoQWKz1'},
      contentType: 'application/json',
      success: function(result) {
          // const messageIndex = Math.floor(Math.random() * result.length);
          const currentMessage = result[0].quote;
          // console.log(currentMessage);
          // var words = [];
          const words = currentMessage.split(' ');
          
          let wordIndex = 0;

          const spanWords = words.map(function(word) {
              return `<span>${word}</span>`;
          });
          
          console.log(spanWords);
          content.innerHTML = spanWords.join(" ");

          for (const wordElement of content.childNodes) {
            wordElement.className = '';
            
          }
          content.childNodes[0].className = 'highlight';
          console.log(content.childNodes);
          message.innerText = '';
          currentWord.value = '';
          
          let startTime = new Date().getTime();

          currentWord.addEventListener("input", () => {
            for (const wordElement of content.childNodes) {
              wordElement.className = '';
              
            }
            content.childNodes[wordIndex*2].className = "highlight";
            console.log(content.childNodes);
            const current = words[wordIndex];
            const typedValue = currentWord.value;
            // console.log(wordIndex);
            // console.log(typedValue);
            // console.log(current);
            if (typedValue === current && wordIndex === words.length - 1) {
              const elapsedTime = (new Date().getTime() - startTime)/600000;
              var wpm = (words.length/5)/elapsedTime;
              const result = `CONGRATULATIONS! You finished with speed of ${wpm.toFixed()} words per minute.`;
              console.log(result);
              message.innerHTML = result;
        
            } else if (typedValue.endsWith(" ") && typedValue.trim() === current) {
                console.log(wordIndex);
            //   content.childNodes[wordIndex].className = "";
              currentWord.value = '';
              
              wordIndex++;
              
              for (const wordElement of content.childNodes) {
                wordElement.className = '';
                
              }
              
              
              
              content.childNodes[wordIndex*2].className = "highlight";}
              
            //  else if (current.startsWith(typedValue)) {
            //   currentWord.className = '';
            // } 
            else if(!current.includes(typedValue)) {
              content.childNodes[wordIndex*2].className="error";
              console.log(content.childNodes);
            }
        })
      
      // error: function ajaxError(jqXHR) {
      //     console.error('Error: ', jqXHR.responseText);
      // }
  }});
}


document.getElementById('start').addEventListener("click",myFunction);


// function myFunction() {
//   $.ajax({
//       method: 'GET',
//       url: 'https://api.api-ninjas.com/v1/quotes',
//       headers: { 'X-Api-Key': 'hgLdefTld20KuS/1sYoL6w==Kvdoxvt71AoQWKz1'},
//       contentType: 'application/json',
//       success: function(result) {
//           const currentMessage = result[0].quote;

//           const words = currentMessage.split(' ');
//           let wordIndex = 0;

//           const spanWords = words.map(function(word) {
//               return `<span>${word}</span>`;
//           });

//           content.innerHTML = spanWords.join(" ");
//           content.childNodes[wordIndex].className = 'highlight'; // Highlight the first word
//           message.innerText = '';
//           currentWord.value = '';

//           startTime = new Date().getTime();

//           currentWord.addEventListener("input", () => {
//               const typedValue = currentWord.value.trim();
//               const current = words[wordIndex];
              
//               if (typedValue === current && wordIndex === words.length - 1) {
//                   const elapsedTime = (new Date().getTime() - startTime) / 1000;
//                   const totalCharactersTyped = currentMessage.length;
//                   const wpm = (totalCharactersTyped / 5) / (elapsedTime / 60);
//                   const result = `CONGRATULATIONS! You finished with a speed of ${wpm.toFixed()} words per minute.`;
//                   message.innerHTML = result;
//               } else if (typedValue.endsWith(" ") && typedValue === current) {
//                   wordIndex++;
//                   content.childNodes[wordIndex - 1].className = ''; // Remove highlight from previous word
//                   content.childNodes[wordIndex].className = 'highlight'; // Highlight the next word
//                   currentWord.value = '';
//               } else if (!current.startsWith(typedValue)) {
//                   content.childNodes[wordIndex].className = 'error';
//               }
//           });
//       },
//       error: function ajaxError(jqXHR) {
//           console.error('Error: ', jqXHR.responseText);
//       }
//   });
// }

// document.getElementById('start').addEventListener("click", myFunction);




