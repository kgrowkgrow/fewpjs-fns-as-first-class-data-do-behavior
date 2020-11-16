/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time) {
  let time2 = parseInt(time.split(":"))
  if (time2 < 12) {
    return "Good Morning"
  } else if (time2 < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
  
}

function displayMessage(str) {
  let greeting = document.getElementById("greeting");
   greeting.innerText = str
}
