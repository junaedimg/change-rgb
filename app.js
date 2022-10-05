updt();

//btn random
var btnRandom = document.querySelector("div.container input[type=button]");

btnRandom.addEventListener("click", function () {
  var ranR = Math.round(Math.random() * 255);
  var ranG = Math.round(Math.random() * 255);
  var ranB = Math.round(Math.random() * 255);
  document.body.style.backgroundColor =
    "rgb(" + ranR + "," + ranG + "," + ranB + ")";
  updt();
});

//slider
const slider = document.querySelectorAll("div.groupSlider .sliderRGB");

slider.forEach((sld) => {
  sld.addEventListener("input", function () {
    var currentSld = sld.id;
    if (currentSld == "sliderR") {
      document.body.style.backgroundColor =
        "rgb(" + sld.value + "," + greenPart + "," + bluePart + ")";
    } else if (currentSld == "sliderG") {
      document.body.style.backgroundColor =
        "rgb(" + redPart + "," + sld.value + "," + bluePart + ")";
    } else {
      document.body.style.backgroundColor =
        "rgb(" + redPart + "," + greenPart + "," + sld.value + ")";
    }
    updt();
  });
});

//Get rgb
var rgbVal = document.body.style.backgroundColor;
var redPart, greenPart, bluePart;
function getRgb() {
  rgbVal = document.body.style.backgroundColor;

  //find red from rgb
  var red1 = rgbVal.indexOf("(");
  var red2 = rgbVal.indexOf(" ");
  redPart = rgbVal.substr(red1 + 1, red2 - red1 - 2);

  //find green from rgb
  var green1 = red2;
  var green2 = rgbVal.indexOf(",", red2);
  greenPart = rgbVal.substring(green1 + 1, green2);

  //find blue from rgb
  var blue1 = rgbVal.indexOf(",", green2);
  var blue2 = rgbVal.indexOf(")");
  bluePart = rgbVal.substring(blue1 + 2, blue2);
}

//update for slider needs
function updt() {
  getRgb();
  updateLabelSlider();
  updateSliderRange();
  updtColorSubRgb();
}

//update slider
function updateSliderRange() {
  document.getElementById("lblRed").innerText = "Red = " + redPart;
  document.getElementById("lblGreen").innerText = "Green = " + greenPart;
  document.getElementById("lblBlue").innerText = "Blue = " + bluePart;
}

//update label slider
function updateLabelSlider() {
  document.getElementById("sliderR").value = redPart;
  document.getElementById("sliderG").value = greenPart;
  document.getElementById("sliderB").value = bluePart;
}

// updt sub rgb color
function updtColorSubRgb() {
  document.getElementById("cRed").style.backgroundColor =
    "rgb(" + redPart + "," + 000 + "," + 000 + ")";
  document.getElementById("cGreen").style.backgroundColor =
    "rgb(" + 000 + "," + greenPart + "," + 000 + ")";
  document.getElementById("cBlue").style.backgroundColor =
    "rgb(" + 000 + "," + 000 + "," + bluePart + ")";
}
