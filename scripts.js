var s = $('<div/>').addClass("south").appendTo(document.body);
var sxsw = $('<div/>').addClass("sxsouthwest").appendTo(document.body);
var sw = $('<div/>').addClass("southwest").appendTo(document.body);
var wxsw = $('<div/>').addClass("wxsouthwest").appendTo(document.body);
var w = $('<div/>').addClass("west").appendTo(document.body);
var wxnw = $('<div/>').addClass("wxnorthwest").appendTo(document.body);
var nw = $('<div/>').addClass("northwest").appendTo(document.body);
var nxnw = $('<div/>').addClass("nxnorthwest").appendTo(document.body);
var n = $('<div/>').addClass("north").appendTo(document.body);
var nxne = $('<div/>').addClass("nxnortheast").appendTo(document.body);
var ne = $('<div/>').addClass("northeast").appendTo(document.body);
var exne = $('<div/>').addClass("exnortheast").appendTo(document.body);
var e = $('<div/>').addClass("east").appendTo(document.body);
var exse = $('<div/>').addClass("exsoutheast").appendTo(document.body);
var se = $('<div/>').addClass("southeast").appendTo(document.body);
var sxse = $('<div/>').addClass("sxsoutheast").appendTo(document.body);

class Compass {
  constructor(dirScroll, divClass, hovScrollY, hovScrollX, clickScrollY, clickScrollX){
    this.dirScroll = dirScroll;
    this.divClass = $(divClass);
    this.hovScrollY = hovScrollY;
    this.hovScrollX = hovScrollX;
    this.clickScrollY = clickScrollY;
    this.clickScrollX = clickScrollX;
    this.events();
  }
  events(){
    var hovY = this.hovScrollY;
    var hovX = this.hovScrollX;
    var clickY = this.clickScrollY;
    var clickX = this.clickScrollX;
    this.divClass.hover(function(){
      this.dirScroll = setInterval(function(){
          window.scrollBy({
              top: hovY,
              left: hovX,
              behavior: 'smooth'
         });
      },40);
    },
    function(){
      clearInterval(this.dirScroll);
    }).click(function(){
      clearInterval(this.dirScroll);
      window.scrollBy({
          top: clickY,
          left: clickX,
          behavior: 'smooth'
      });
    })
  }
}

let nCompass = new Compass("nScroll", ".north", -100, 0, -document.body.scrollHeight, 0);
let nxneCompass = new Compass("nxneScroll", ".nxnortheast", -100, 50, -document.body.scrollHeight, document.body.scrollWidth);
let neCompass = new Compass("neScroll", ".northeast", -100, 100, -document.body.scrollHeight, document.body.scrollWidth);
let exneCompass = new Compass("exneScroll", ".exnortheast", -50, 100, -document.body.scrollHeight, document.body.scrollWidth);
let eCompass = new Compass("eScroll", ".east", 0, 100, 0, document.body.scrollWidth);
let exseCompass = new Compass("exseScroll", ".exsoutheast", 50, 100, document.body.scrollHeight, document.body.scrollWidth);
let seCompass = new Compass("seScroll", ".southeast", 100, 100, document.body.scrollHeight, document.body.scrollWidth);
let sxseCompass = new Compass("sxseScroll", ".sxsoutheast", 100, 50, document.body.scrollHeight, document.body.scrollWidth);
let sCompass = new Compass("sScroll", ".south", 100, 0, document.body.scrollHeight, 0);
let sxswCompass = new Compass("sxswScroll", ".sxsouthwest", 100, -50, document.body.scrollHeight, -document.body.scrollWidth);
let swCompass = new Compass("swScroll", ".southwest", 100, -100, document.body.scrollHeight, -document.body.scrollWidth);
let wxswCompass = new Compass("wxswScroll", ".wxsouthwest", 50, -100, document.body.scrollHeight, -document.body.scrollWidth);
let wCompass = new Compass("wScroll", ".west", 0, -100, 0, -document.body.scrollWidth);
let wxnwCompass = new Compass("wxnwScroll", ".wxnorthwest", -50, -100, -document.body.scrollHeight, -document.body.scrollWidth);
let nwCompass = new Compass("nwScroll", ".northwest", -100, -100, -document.body.scrollHeight, -document.body.scrollWidth);
let nxnwCompass = new Compass("nxnwScroll", ".nxnorthwest", -100, -50, -document.body.scrollHeight, -document.body.scrollWidth);



//draggable text script

draggable = document.querySelectorAll(".drag");
draggable.forEach(dragElement)

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
