
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
  "Aaron Blackerby",
"Abbey Dombrowski",
"Abigail Blackwell",
"Abigail Lumbrezer",
"Addison Bank",
"Adrianna Vega",
"Aiden Decoste",
"Alayna Stewart",
"Alec Durbin",
"Alejandro White",
"Alex Huntermark",
"Alex Meridith",
"Alex Ondrus",
"Alexander Yokley",
"Alexis Farquharson",
"Alicia Palmer",
"Alivia Peplinski",
"Allie Minor",
"Allissa Wight",
"Ally Christina Hansen",
"Ally Winkle",
"Allyssa White",
"Alyssa Kleinow",
"Amber Bartolet",
"Amber Konopacki",
"Amy Rubiera",
"Amy Tran",
"Andrew Howerton",
"Andrew Zahedinoori",
"Angela Egmon",
"Angela Sebald",
"Anna Mehall",
"Annalee Neiger",
"Annaliese Bensinger",
"Anthony Copley",
"Araya Lacy Hutchison",
"Ari Patterson",
"Ariana Gonzales",
"Armando N. Calvillo",
"Ashlee Engstrom",
"Austin Danek",
"Austin Erickson",
"Austin Kirkendall",
"Austin Kollar",
"Austin Loomis",
"Austin Owens",
"Austin Sheppard",
"Ava Humphrey",
"Avery Sheibels",
"Ayla Louden",
"Bailey Houle",
"Bianca Blackburn",
"Bradley Birkle",
"Brady Spisz",
"Braeden Fae Wescott",
"Breanna Jones",
"Brendan Wrobel",
"Brendon Ferenczy",
"Brendon Page",
"Brennan Hochrein",
"Bri Harris",
"Briana Zegler",
"Brianna Bueno",
"Brianna Rhoad",
"Caden Staggs",
"Caiden Welter",
"Caio Avanzini",
"Caitlin O'Banion",
"Caitlyn Copenhagen",
"Caleb Hawkins",
"Caleb Lorenzo",
"Callie Pasma",
"Cam Lloyd",
"Caprice Radcliffe",
"Carl Byxbee",
"Carlos Campos",
"Carlos Mellado Fritz",
"Carmen Orlich",
"Carrie Karp",
"Carter Smeader",
"Casey Broxterman",
"Cassidy Lepore",
"Cassie Widmaier",
"Cecilia Santos",
"Celeste Van Winkle",
"Chassidy Turrill",
"Chaz Vander Horst",
"Chelsea Shouse",
"Chris Sarb",
"Christian Foreman",
"Christina Salice",
"Cindy Anim",
"Claire Rokicki-Counterman",
"Clayton Kovath",
"Clayton Sigmann",
"Cody Engberg",
"Cody Miller",
"Collin Clem",
"Colton Lowry",
"Connor Fancett",
"Connor McCown",
"Connor Messina",
"Corey Lesson",
"Corinne Cadle",
"Curtis Dinwiddie",
"Cynthia Chapman",
"Cynthia Labor",
"Damian Ewald",
"Dani Kroll",
"Danielle Cheney",
"Danielle Fillmore",
"Darien Dyer",
"David Scheurer",
"Derek Koester",
"Deshawn Cornett",
"Deven Kozinski",
"Devin Hammond",
"Dillon Shelton",
"Donny Edwards",
"Drew Thompson",
"Drew Warnecke",
"Dylan Deschaine",
"Dylan Roe",
"Eddie Sarnecky",
"Elijah Bal",
"Elijah Kusky",
"Elizabeth Hoxie",
"Elizabeth Perry",
"Ella Pyke",
"Ellie Clough",
"Ellie Jarvis",
"Emilio Rodriguez",
"Emily Girard",
"Emily Hueckstaedt",
"Emily Judkins",
"Emily Lavey",
"Emily Spaedt",
"Emily Wagner",
"Emma Coberley",
"Emma Kretchmer",
"Emma Parks",
"Emma Platte",
"Emma Tucker",
"Eric Brooks",
"Erica Geml",
"Erin Bissett",
"Ethan Crabtree",
"Evan Flohr",
"Evelyn Fender",
"Evie Scharer",
"Faith Aeillo",
"Francisco Uribe",
"Frank Majewski",
"Frankie Boyd",
"Frannie Fenelon",
"Gabby Kelly",
"Gabriel Stephenson",
"Garrett Shenuski",
"Gia Mudreyko",
"Grace Carleton",
"Grason Dixon",
"Gus Hermes",
"Hailey Shereda",
"Hamza Milhem",
"Hanna Hoffman",
"Hannah Bracken",
"Hannah Copi",
"Hannah Kay Coon",
"Hannah O'Donoghue",
"Hannah Zetterholm",
"Hayden Flynn",
"Heather Furmanski",
"Heidi Link",
"Helen Wonsowski",
"Holly Siefert",
"Hunter Nielsen",
"Hunter Wurster",
"Isaac Robertson",
"Isabella Trevisan",
"Isaiah Brockschmidt",
"J.p. Schanck",
"Jack Kolonich",
"Jack Perry",
"Jacob Duncan",
"Jacob Johnson",
"Jacob Neyhart",
"Jacob Thacker",
"Jake Chesney",
"Jake Lackey",
"Jake Vangilder",
"Jalen Wellons",
"Jamie VanLoocke",
"Jan Fonseca",
"Jared Blum",
"Jarett Ochel",
"Jasmine Broton",
"Jasmine Elaine",
"Jasmine Fitzgerald",
"Jay Martiano",
"Jayden Haines",
"Jaylin Clark",
"Jenessa Woodrich",
"Jenna Reynolds",
"Jennifer Hollinrake",
"Jerrod Rabb Jr.",
"Jessalyn Titus",
"Jessica Glitz",
"Jessica Noruk",
"Jessica Pierce",
"Jessica Reich",
"Jessica Riley",
"Jillian O'Neal",
"Jocee Rose McEldowney",
"Joe Cioccio",
"Joey Kliza",
"Johnny Verellen",
"Jon Durkin",
"Jordan Bruce",
"Jordan Scheuer",
"Joshua Jamssens",
"Joye Gose",
"Justin Allen",
"Justin Bosonetto",
"Justin Cross",
"Kaitlyn Bricker",
"Kaitlyn Harris",
"Kaitlyn O'Connor",
"Kaitlyn Werth",
"Kaitlynn Ortner",
"Kara Thornberry",
"Kari Klavon",
"Karin Hartmaier",
"Kasey Baker",
"Kassandra Tanana",
"Kassie Thornton",
"Kate Taylor",
"Katelynn Parish",
"Katie Edmunds",
"Katie Nagy",
"Katie Ruff",
"Katlyn Hall",
"Kaylee Comai",
"Kayra Gaston",
"Ke'Shon Remmer",
"Keito Pifer",
"Kelly Lause",
"Kelsey Kmita",
"Kendall Pekar",
"Khen Slagle",
"Kiley Albert",
"Kirsti Beaudoin",
"Korrine Stevens",
"Kristin Madaj",
"Kyle Hartmann",
"Kylie Quinn",
"Lauren Antle",
"Lauren Didion",
"Lauren Holtz",
"Leah Clough",
"Lexi Christoff",
"Lexi Ott",
"Lexi Pardiac",
"Lexie Markowitz",
"Liliana Ortega",
"Lily Hoskins",
"Linda Boulos",
"Lindsey Brown",
"Luke Luttinen",
"Luke Winstead",
"Mackenzie Knight",
"Mackenzie Quigley",
"Mackenzie Wiser",
"Maddie Bindus",
"Madelynn Adkins",
"Madi Lowes",
"Madison Dagenais",
"Madison Wilt",
"Madysen LaPointe",
"Maggie Kirchner",
"Marcus Price",
"Maria Light",
"Mariah Hendricks",
"Mariah O'Donoghue",
"Marie Jaster",
"Marisa Smith",
"Martial Mouton",
"Mary Cook",
"Matheus Martins",
"Matthew Bellas",
"Matthew Katz",
"Matthew Parise",
"Maya VanBuskirk",
"Mckenna Magda",
"McKenzie Pytlak",
"Megan Devries",
"Megan Duby",
"Megan Quick",
"Megan Scherer",
"Meghan Briana Stewart",
"Melissa Miller",
"Melissa Siemen",
"Mia Scicluna",
"Micah Roble",
"Michael Coats",
"Michael Low",
"Michael Taylor",
"Mikayla Heagy",
"Molly Price",
"Molly Wlotkowski",
"Monira Fayad",
"Morgan McCowan",
"Morgan Sputa",
"Morgan Werner",
"Natalie Wlotkowski",
"Nate Holmgren",
"Nick Gill",
"Nick Hart",
"Nick Holme",
"Nick Riley",
"Nicole Mudge",
"Nikki McCuaig",
"Noah Ickes",
"Noah Outman",
"Noah Poore",
"Noelle Asker",
"Nolan Escobar",
"Nushare Irwin",
"Olivia Blackmer",
"Olivia Byrd",
"Olivia Dillon",
"Olivia Hewitt",
"Paige Flowers",
"Payton Osentoski",
"Peyton Elizabeth Jacobs",
"Phillip Edmonds",
"Preston Grew",
"Quanzelle Naje Wyatt",
"Quentin Genaw",
"Rachael Heilman",
"Rachel Blonde",
"Rachel Busch",
"Rachel Hovermale",
"Rachel Krotzer",
"Rachel Neil",
"Rahaf Barghouthy",
"Rebecca Mctaggart",
"Richard Fauble",
"Riley Griffis",
"Riley Shine",
"RJ Banfield",
"Rolli Charpentier",
"Romell Rogers",
"Rosa Leopardi",
"Ryan Hawley",
"Ryan Larson",
"Rylee Martin",
"Sabrina Renee Rockwood",
"Sadie Hampel",
"Sadie Kaiser",
"Sailee Stephenson",
"Sam Hunt",
"Sam Marzonie",
"Samantha Cohen",
"Samantha Darrell",
"Samantha Marlatt",
"Sami Rose Liebig",
"Sarah Breaz",
"Sarah Bulatovic",
"Sarah Clement",
"Sarah Finkiewicz",
"Sarah Gunter",
"Sarah Schultz",
"Sarah Woolley",
"Savannah Roberts",
"Selena Lasorda",
"Seth Ackler",
"Shayne Hapney",
"Shelbie Biernacki",
"Sky Frazer",
"Skyler Michael",
"Sophie Rose",
"Stacie Shaw",
"Stephanie Steinbauer",
"Stevie Bobash",
"Sydney Balkon",
"Sydney Wallace",
"Sydney Wilson",
"Sydni Johnson",
"Tala Cowan",
"Tally Knopp",
"Talynn Hemmele",
"Tara Bashi",
"Tatum Medendorp",
"Taylor Lang",
"Thad Shewman",
"Thomas Puhl",
"Tommy Bosio",
"Trevor Spangler",
"Tricia Quick",
"Tyler Gidley",
"Tyler Joseph",
"Veronica Izzo",
"Victor Avanzini",
"Vinnie Patteri",
"Whitney Bilger",
"William Starks",
"Wyatt Harden",
"Zachary Watkins",
"Zack Gossiaux",
"Zak Kroell",
"Zoey Lutz"]

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
