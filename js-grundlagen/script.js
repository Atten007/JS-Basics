// Variablen

var name = "Torsten";
var alter = 43;
var zufall = 77;
var liste = ["Matthias", 150, 5+5, "Das ist ein Test!", "abc", 1111, name, alter, zufall];

//console.log("vorher: " + liste[6]);

//name = "Inga";

//console.log("nachher: " + liste[6]);

// Schleife
for (var i = 0; i < liste.length; i++) {
//	console.log(  liste[i]  );
}


/*
console.log(typeof name);
console.log(typeof alter);
console.log(typeof zufall);
console.log(typeof liste);
console.log(   liste.length   );
*/


// Objekte
var mitarbeiter = [{
	status: false,
	name: "Torsten",
	alter: 43,
	arbeitgeber: "//SEIBERT/MEDIA"
}, {
	status: true,
	name: "Matthias",
	alter: 30,
	arbeitgeber: "//SEIBERT/MEDIA"
}];

//console.log(mitarbeiter);

for (var i = 0; i < mitarbeiter.length; i++) {
	//if (   mitarbeiter[i].status === false  ) {
		console.log(  mitarbeiter[i].name  );
	//}
}









