
for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {


    console.log(this.innerHTML);
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  });

}

document.addEventListener("keypress", function(event){
  //console.log(event);
  console.log(event.key);

  makeSound(event.key);

  buttonAnimation(event.key);


})

function makeSound(key){
  switch(key){
    case "w":
      var tom1 = new Audio('sounds/h.mp3');
      tom1.play();
      break;

      case "a":
        var tom2 = new Audio('sounds/b.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('sounds/d.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('sounds/t.mp3');
        tom4.play();
        break;

      case "j":
        var crash = new Audio('sounds/y.mp3');
        crash.play();
        break;

      case "k":
        var kick = new Audio('sounds/tune.mp3');
        kick.play();
        break;

      case "l":
        var snare = new Audio('sounds/music.mp3');
        snare.play();
        break;


      default:
        console.log(event.key);
        alert("Please enter right key!");
  }
}

function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+ currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
	activeButton.classList.remove("pressed");
	}, 200);


}
