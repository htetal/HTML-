$(document).ready(function() {
    $(".kikou_blank").show();
    var date_length = 0;
    $(".kikou_result").hide();
    //	$(".search_result").hide();         *　結果一覧　表示

    $('#kikou_search').click(function() {
        $(".kikou_blank").hide();
        $(".kikou_result").show();
    });

    $('#datepicker1').keyup(function() {
        date_length = $('#datepicker1').val().length;
        if (date_length == 4) {
            $('#datepicker1').val($('#datepicker1').val() + '/');
        }
        if (date_length == 7) {
            $('#datepicker1').val($('#datepicker1').val() + '/');
        }
    });

    $('#datepicker2').keyup(function() {
        date_length = $('#datepicker2').val().length;
        if (date_length == 4) {
            $('#datepicker2').val($('#datepicker2').val() + '/');
        }
        if (date_length == 7) {
            $('#datepicker2').val($('#datepicker2').val() + '/');
        }
    });

    $('#kikou_Close').click(function() {
        $(".kikou_result").hide();
        $(".kikou_blank").show();
    });

    //	$('#list_search_btn').click(function(){
    //		$(".search_result").show();
    //	});
});

//　kanryo modal
// Get the modal
var modal_dwn = document.getElementById("dwnModal");

// Get the button that opens the modal
var btn_dwn = document.getElementById("CSV_dwn");

// Get the button that opens the modal
var btn_csv_dwn = document.getElementById("csv_dwn");

// Get the <span> element that closes the modal
var span = document.getElementById("dwn_close");

// When the user clicks the button, open the modal 
btn_dwn.onclick = function() {
    modal_dwn.style.display = "block";
}

// When the user clicks the button, close the modal 
btn_csv_dwn.onclick = function() {
    modal_dwn.style.display = "none";
}

// When the user clicks the button, close the modal 
span.onclick = function() {
    modal_dwn.style.display = "none";
}

// kikou modal
// Get the modal
var modal_kikou = document.getElementById("kikouModal");

// Get the button that opens the modal
var btn_kikou1 = document.getElementById("user_address_select");

// Get the button that opens the modal
var btn_kikou2 = document.getElementById("applicant_address_select");

// Get the button that opens the modal
var btn_kikou_cl = document.getElementById("kikou_Close");

// When the user clicks the button, open the modal 
btn_kikou1.onclick = function() {
    modal_kikou.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_kikou2.onclick = function() {
    modal_kikou.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_kikou_cl.onclick = function() {
    modal_kikou.style.display = "none";
}