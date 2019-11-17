// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
// const mrGreen = {
//   firstName: "Jacob",
//   lastName: "Green",
//   color: "green",
//   description: "He has a lot of connections",
//   age: 45,
//   image: "assets/green.png",
//   occupation: "Entrepreneur"
// }



 function Suspect(firstName, lastName, color, description, age, occupation, image) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.color = color;
  this.description = description;
  this.age = age;
  this.occupation = occupation;
  this.image = image;
}

var mrGreen = new Suspect("Jacob", "Green", "green", "He has a lot of connections", 45, "Entrepreneur", "assets/green.png" );
var profPlum = new Suspect("Victor", "Plum", "purple", "He is a quick-witted", 40, "Professor", "assets/plum.png" );
var missScarlet = new Suspect("Cassandra", "Scarlet", "red", "She is young and attractive", 30, "Chef", "assets/scarlet.png"  );
var mrsPeacock = new Suspect("Eleanor", "Peacock", "blue", "She nearly always maintains her dignity ", 55, "Retired", "assets/peacock.png"  );
var mrMustard = new Suspect("Colonel ", "Mustard", "yellow", "He is a dangerous military man", 60, "Military man", "assets/mustard.png"  );
var mrsWhite = new Suspect("Mrs", "White", "lightgrey", "He does not have a lot of connections", 35, "Servant", "assets/white.png"  );



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.
// //const rope = {
//   name: "rope",
//  weight: 10
// }

function Weapon(name, weight, image,) {
  this.name = name;
  this.weight = weight;
  this.image = image;
} 

var rope = new Weapon("Rope",0.5, "assets/rope.png");
var knife = new Weapon("Knife",0.3, "assets/knife.png");
var candlestick = new Weapon("Candlestick",0.9, "assets/candlestick.png");
var dumbell = new Weapon("Dumbell",5, "assets/dumbell.png");
var poison = new Weapon("Poison",0.01, "assets/poison.png");
var axe = new Weapon("Axe",3, "assets/axe.png");
var bat = new Weapon("Bat",1.2, "assets/bat.png");
var trophy = new Weapon("Trophy",3, "assets/trophy.png");
var pistol = new Weapon("Pistol",0.8, "assets/pistol.png");


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]; 
console.log(suspects)

const weapons = [
  rope,
  knife,
  candlestick,
  dumbell,
  poison, 
  axe, 
  bat,
  trophy,
  pistol
];
console.log(weapons)

const rooms = [
  "Dinning room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ball room",
  "Hall",
  "Spa",
  "Living room",
  "Observatory",
  "Theatre",
  "Guesthouse",
  "Patio"
];
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later .

var Mystery = {
  killer: "",
  weapon: "",
  room: ""
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.

const pickKiller = () => {
//This will randomly select a killer from the suspects. And add that to the mystery object.
  document.getElementById("mystery").innerHTML = ""

  const theKillerTitle = document.getElementById("killerTitle")
  const theKillerColor = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  if (theKillerTitle.style.display == "none") {

    Mystery.killer = ""
    
    theKillerTitle.style.display = "block"
    theKillerColor.style.backgroundImage = "url('assets/card.png')"
    theKillerColor.style.backgroundSize = "cover"
    theKillerName.innerHTML = ""
    theKillerAge.innerHTML = ""
    theKillerOccupation.innerHTML = ""
    theKillerImage.src = ""
    theKillerDescription.innerHTML = ""

  } else {

    Mystery.killer = randomSelector(suspects)

    theKillerTitle.style.display = "none"
    theKillerColor.style.background = Mystery.killer.color
    theKillerName.innerHTML = Mystery.killer.firstName + " " + Mystery.killer.lastName
    theKillerAge.innerHTML = Mystery.killer.age
    theKillerOccupation.innerHTML = Mystery.killer.occupation
    theKillerImage.src = Mystery.killer.image
    theKillerDescription.innerHTML = Mystery.killer.description
  }
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


const pickWeapon = () => {
  
  document.getElementById("mystery").innerHTML = ""
  
  const theWeaponTitle = document.getElementById("weaponTitle")
  const theCardColor = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")

  if (theWeaponTitle.style.display == "none") {

    Mystery.weapon = ""

    theCardColor.style.backgroundImage = "url('assets/card.png')"
    theCardColor.style.backgroundSize = "cover";
    theWeaponTitle.style.display = "block"
    theWeaponName.innerHTML = ""
    theWeaponWeight.innerHTML = ""
    theWeaponImage.src = ""

  } else {

    Mystery.weapon = randomSelector(weapons)

    theWeaponTitle.style.display = "none"
    theCardColor.style.background = "rgb(10, 53, 10)"
    theWeaponName.innerHTML = Mystery.weapon.name
    theWeaponWeight.innerHTML = Mystery.weapon.weight
    theWeaponImage.src = Mystery.weapon.image
  }
}

const pickRoom = () => {

  document.getElementById("mystery").innerHTML = ""
  const theRoomTitle = document.getElementById("roomTitle")
  const theCardColor = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")


  if (theRoomTitle.style.display == "none") {

    Mystery.room = ""

    theCardColor.style.backgroundImage = "url('assets/card.png')"
    theCardColor.style.backgroundSize = "cover";
    theRoomTitle.style.display = "block"
    theRoomName.innerHTML = ""
    
  } else {

    Mystery.room = randomSelector(rooms)

    theRoomTitle.style.display = "none"
    theCardColor.style.background = "midnightblue"
    theRoomName.innerHTML = Mystery.room
  }
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {

  if (Mystery.killer == "" || Mystery.weapon == "" || Mystery.room == "") {
    document.getElementById("mystery").innerHTML = `<h2>No mystery is yet to be revealed.</h2>`

  } else {

    let firstName = Mystery.killer.firstName
    let lastName = Mystery.killer.lastName
    let room = Mystery.room
    let weapon = Mystery.weapon.name
    document.getElementById("mystery").innerHTML = `<h2>The murder was committed by ${firstName} ${lastName}, in the ${room} with a ${weapon}.</h2>`
  }
}
