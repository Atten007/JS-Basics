let teilnehmer = [{
	nachname: "Groß",
	vorname: "Torsten",
	geburtstag: "28.09.1977",
	beruf: "Entwickler",
	hobbies: ["Videospiele", "Gartenarbeit", "Katzen", "Fußball"]
}, {
	nachname: "Clasen",
	vorname: "Matthias",
	geburtstag: "01.01.1986",
	beruf: "Entwickler",
	hobbies: ["Videospiele", "Reisen", "Outdoor", "Kochen"]
}, {
	nachname: "Musterfrau",
	vorname: "Martina",
	geburtstag: "12.07.1980",
	beruf: "Designerin",
	hobbies: ["Kreativität", "Musik", "Wald & Wiesen"]
}, {
	nachname: "Test",
	vorname: "Tanja",
	geburtstag: "29.10.1995",
	beruf: "Testerin",
	hobbies: ["Software", "Hardware", "Fische"]
}, {
	nachname: "Goeke",
	vorname: "Nils",
	geburtstag: "30.11.2004",
	beruf: "Schüler",
	hobbies: ["Programmieren", "Klavier", "Tanzen", "Zauberwürfel"]
}, {
	nachname: "Beyer",
	vorname: "David",
	geburtstag: "01.09.2005",
	beruf: "Schüler (unbezahlt)",
	hobbies: ["Tennis", "Klavier", "Vorm Pc sitzen"]
}, {
	nachname: "Beispiel",
	vorname: "Example",
	geburtstag: "1.1.1980",
	beruf: "Beispiel",
	hobbies: ["Beispiel"]
}];


//console.log(   jQuery("tr.test").remove()    );

for (let i = 0;   i < teilnehmer.length;   i++) {
	jQuery("table").append("<tr>" +
		"<td>" + teilnehmer[i].vorname + "</td>" +
		"<td>" + teilnehmer[i].nachname + "</td>" +
		"<td>" + teilnehmer[i].geburtstag + "</td>" +
		"<td>" + teilnehmer[i].beruf + "</td>" +
		"<td>" + teilnehmer[i].hobbies.join(" und ") + "</td>" +
		"</tr>");
}


jQuery(teilnehmer).each(function(j, value) {
	jQuery("table").append("<tr>" +
		"<td>" + value.vorname + "</td>" +
		"<td>" + value.nachname + "</td>" +
		"<td>" + value.geburtstag + "</td>" +
		"<td>" + value.beruf + "</td>" +
		"<td>" + value.hobbies.join(" und ") + "</td>" +
		"</tr>");
});










