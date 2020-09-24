//　kanryo modal
// Get the modal
var modal_kanryo = document.getElementById("kanryoModal");

// Get the button that opens the modal
var btn_kanryo = document.getElementById("kanryo");

// Get the button that opens the modal
var btn_kanryo_cl = document.getElementById("kanryoClose");

// When the user clicks the button, open the modal 
btn_kanryo.onclick = function() {
  modal_kanryo.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_kanryo_cl.onclick = function() {
  modal_kanryo.style.display = "none";
}