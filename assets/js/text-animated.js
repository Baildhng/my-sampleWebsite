// function([string1, string2],target id,[color1,color2])    
//  consoleText(['Driving Growth Business,', ' Enriching Future Solution.'], 'text',['White','White']);

// function consoleText(words, id, colors) {
//   if (colors === undefined) colors = ['#fff'];
//   var visible = true;
//   var con = document.getElementById('console');
//   var letterCount = 1;
//   var x = 1;
//   var waiting = false;
//   var target = document.getElementById(id)
//   target.setAttribute('style', 'color:' + colors[0])
//   window.setInterval(function() {

//     if (letterCount === 0 && waiting === false) {
//       waiting = true;
//       target.innerHTML = words[0].substring(0, letterCount)
//       window.setTimeout(function() {
//         var usedColor = colors.shift();
//         colors.push(usedColor);
//         var usedWord = words.shift();
//         words.push(usedWord);
//         x = 1;
//         target.setAttribute('style', 'color:' + colors[0])
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (letterCount === words[0].length + 1 && waiting === false) {
//       waiting = true;
//       window.setTimeout(function() {
//         x = -1;
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (waiting === false) {
//       target.innerHTML = words[0].substring(0, letterCount)
//       letterCount += x;
//     }
//   }, 120)
//   window.setInterval(function() {
//     if (visible === true) {
//       con.className = 'console-underscore hidden'
//       visible = false;

//     } else {
//       con.className = 'console-underscore'

//       visible = true;
//     }
//   }, 400)
// }

  const typingText = document.getElementById('typing-text');
  const textContent = typingText.innerText;
  
  // Function to reset typing effect
  function startTypingEffect() {
    typingText.innerText = ''; // Clear the text before typing again
    typingText.style.animation = 'none'; // Reset animation
    void typingText.offsetWidth; // Trigger reflow to restart animation
    typingText.innerText = textContent; // Set the original text
    typingText.style.animation = 'typing 6s steps(' + textContent.length + ') 0s infinite normal, blink-caret 6s step-end infinite'; // Restart typing animation
  }

  // Trigger typing effect after page load
  window.onload = function() {
    startTypingEffect(); // Start typing effect when page loads
  };

