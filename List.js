
//Initialize Database
const firebaseConfig = {
  apiKey: "AIzaSyCKnIn4SsMC74rTGqekjSw8OvLwWe88bbI",
  authDomain: "party-smart-tcod.firebaseapp.com",
  databaseURL: "https://party-smart-tcod.firebaseio.com",
  projectId: "party-smart-tcod",
  storageBucket: "party-smart-tcod.appspot.com",
  messagingSenderId: "332152048668",
  appId: "1:332152048668:web:9adf5fb209d803b8d4e3d9"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();



//Initialize List
//Adding a file upload to submit custom lists
var guestList = [
"Riley Griffis"
]

var inParty = new Array();




//Returns time
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getTime() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  var currentTime = h + ":" + m + ":" + s;

	return currentTime;
}

//Counter
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

//Check in
function checkIn() {
  //Grabs current guest to be added or deleted from form text box
  var name = document.getElementById('UsersName').value;
  
  //Checks to see if user is in list of guests and isn't in the list of guest in the party
  var adding = guestList.indexOf(name);

  //If not "inParty" and on guestList[], adds them to "inParty", else request rejected
	if (adding != -1){
		firebase.database().ref('inParty/' + name).set({
      TimeIn: getTime(),
	  });
    alert(name + " has been checked in.")
    clickCounter()
    inParty.push(name);
    console.log(inParty);
	}
	else
	{
		alert("Sorry, " + name + " is not on the guest list")
	}
}

//Check Out
function checkOut() {

  alert(inParty[0])
  //Grabs guest name from form text box in check out and fills "name"
  var name = document.getElementById('LeavingUsersName').value;

  //sees if guest is on the list
  var onList = guestList.indexOf(name);

  var inside = inParty.indexOf(name);

  
  
	if (onList != -1 && inside != -1){
		firebase.database().ref('inParty/' + name).set({
			TimeOut: getTime(),
	  });
		alert(name + " has been checked out.")
	}
	else
	{
		alert(name + " is not currently in the party")
	}
}
//Check Out Helper Function
function writeNewPost() {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('inParty').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
