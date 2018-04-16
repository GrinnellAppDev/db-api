LastName="Gupta"
LNameSearch=""
FirstName=""
FNameSearch=""
Email=""
CampusPhoneNumber=""
CampusAddress=""
HomeAddress=""
Department=""
Major=""
Concetration=""
SGA=""
Hiatus=""
GradYear="2020"

var json = ""

var url = "https://itwebapps.grinnell.edu/classic/asp/campusdirectory/GCdefault.asp?transmit=true&blackboardref=true&LastName="+LastName+"&LNameSearch="+LNameSearch+"&FirstName="+FirstName+"&FNameSearch="+FNameSearch+"&email="+Email+"&campusphonenumber="+CampusPhoneNumber+"&campusquery="+CampusAddress+"&Homequery="+HomeAddress+"&Department="+Department+"&Major="+Major+"&conc="+Concetration+"&SGA="+SGA+"&Hiatus="+Hiatus+"&Gyear="+GradYear+"&submit_search=Search"
var tabletojson = require("tabletojson")
var tableAsJson = tabletojson.convertUrl(url, {useFirstRowForHeadings: true, stripHtmlFromCells: false }, function(tablesAsJson) {console.log(tablesAsJson[2]);});
// var json = tableAsJson[2];
// console.log(json);
