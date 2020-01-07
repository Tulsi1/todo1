// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

 

   var spa = document.createElement("SPAN");
   var tx = document.createTextNode("Edit");
   spa.className = "edit";
   spa.appendChild(tx);
   li.appendChild(spa);
   var ed = document.getElementsByClassName("edit");
   for (j = 0; j < ed.length; j++) {
     ed[j].onclick = function() {editf(this.parentNode)};
   }
}

  //Create an Edit button
 var myNode = document.getElementsByTagName("LI");
 var j;
 for (j = 0; j < myNode.length; j++) {
   var spa = document.createElement("SPAN");
   var tx = document.createTextNode("Edit");
   spa.className = "edit";
   spa.appendChild(tx);
   myNode[j].appendChild(spa); 
}
    
// click on edit button to change
    var ed = document.getElementsByClassName("edit");
    var k;
    for( k=0; k < ed.length; k++) {
       ed[k].onclick = function() {editf(this.parentNode)};
    }

//Creating the edit function 
function editf(elmnt){
  var x = document.getElementById("myInput").value;
  elmnt.childNodes[0].nodeValue = x;
}

