//var dataM = require(KafeList.js)


function choosePlace() {
  var myObj, myJSON, text, myData, randomItem;

  myObj = { 
    "first": {
    "name": "Under Kastanjen",
    "site": "http://www.underkastanjen.se/en/",
    "place": "Gamla stan"
    }
    "second": {
    "name": "Kaffekoppn",
    "site": "Stortorget 20",
    "place": "Gamla stan"
    }
  // "Caffe Ugo": ["Scheelegatan 6", "Kungsholmen"],
    // "Lisas Cafe": ["Skånegatan 68", "Sodermalm"],
  // "Konditori Valand": ["Surbrunnsgatan 48", "Vasastan"]
  };


  //Storing data:
 
  myJSON = JSON.stringify(myObj);
  //console.log("myJSON", myJSON)
  localStorage.setItem("testJSON", myJSON);

  //Retrieving data:
  //text = localStorage.getItem("testJSON");
  //myData = JSON.parse(text);
  //console.log("text", text, "mydata",myData)
  var leng = myObj.length
  randomItem = pickRandom(myObj)
  document.getElementById("kafe").innerHTML = randomItem
  console.log("randomIt",randomItem)
}

function pickRandom(obj) {
  var result
  var count = 0
  for (var prop in obj) {
    if (Math.random() < 1/++count) {
      result = prop
    }
  }
  return result
}
