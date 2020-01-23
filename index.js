var noOfButtons = document.querySelectorAll(".drum").length;

// Music by the click of mouse

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonClass = this.innerHTML;
    makeSound(buttonClass);
    activeButton(buttonClass);

  });
}


//Music by pressing keys

document.addEventListener("keypress", function(e) {
  makeSound(e.key);
  activeButton(e.key);

});



//function for playing Music

function makeSound(charca) {

  switch (charca) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:
      console.log(charca);

  }
}

function activeButton(activekey){
  var activeButtonkey = document.querySelector("." + activekey);

  activeButtonkey.classList.add("pressed");
  setTimeout(function(){
    activeButtonkey.classList.remove("pressed");
  }, 100 );

}
