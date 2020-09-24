$(document).ready(function() {
    var date_length = 0;


    $("#appModal").modal('show');
    $(".delete_form").hide();
    $(".user_result").hide();
    $(".user_blank").show();
    $(".kikou_result").hide();
    $(".kikou_blank").show();

    // set current date
    var today = $.datepicker.formatDate('yy/mm/dd', new Date());
    $("#datepicker1").val(today);
    $("#current_date").html(today);

    $('.radio_class').click(function() {
        var inputValue = $(this).attr("value");
        if (inputValue == "new") {
            $(".new_form").show();
            $(".delete_form").hide();
            $("#user_txt_del").val('');
        } else {
            $(".new_form").hide();
            $(".delete_form").show();
        }
    });

    $('#datepicker1').keyup(function() {
        date_length = $('#datepicker1').val().length;
        if (date_length == 8) {
            $('#datepicker1').val($('#datepicker1').val(4) + '/');
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

    $('#datepicker3').keyup(function() {
        date_length = $('#datepicker3').val().length;
        if (date_length == 4) {
            $('#datepicker3').val($('#datepicker3').val() + '/');
        }
        if (date_length == 7) {
            $('#datepicker3').val($('#datepicker3').val() + '/');
        }
    });

    $('#userDelete_1').click(function() {
        $(".user_1").hide();
    });

    $('#userDelete_2').click(function() {
        $(".user_2").hide();

    });

    $('#user_search').click(function() {
        $(".user_blank").hide();
        $(".user_result").show();
    });

    $('#user_Close').click(function() {
        $(".user_result").hide();
        $(".user_blank").show();
    });

    $('#kikou_search').click(function() {
        $(".kikou_blank").hide();
        $(".kikou_result").show();
    });

    $('#kikou_Close').click(function() {
        $(".kikou_result").hide();
        $(".kikou_blank").show();
    });
});

//appModal
// Get the modal
var modal_appModal = document.getElementById("appModal");

// Get the button that opens the modal
var btn_appChose = document.getElementById("app_chose");

// When the user clicks the button, open the modal 
btn_appChose.onclick = function() {
    modal_appModal.style.display = "none";
}

// user modal
// Get the modal
var modal_user = document.getElementById("userModal");

//　新規ボタン
// Get the button that opens the modal
var btn_user = document.getElementById("userSelect");

// Get the button that closes the modal
var btn_user_cl = document.getElementById("user_Close");

// When the user clicks the button, open the modal 
btn_user.onclick = function() {
    modal_user.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_user_cl.onclick = function() {
        modal_user.style.display = "none";
    }
    //　削除ボタン
    // Get the button that opens the modal
var btn_user_del = document.getElementById("userSelect_del");

// When the user clicks the button, open the modal 
btn_user_del.onclick = function() {
    modal_user.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_user_cl.onclick = function() {
    modal_user.style.display = "none";
}

// kikou modal
// Get the modal
var modal_kikou = document.getElementById("kikouModal");

// Get the button that opens the modal
var btn_kikou = document.getElementById("kikouSelect");

// Get the button that opens the modal
var btn_kikou_cl = document.getElementById("kikou_Close");

// When the user clicks the button, open the modal 
btn_kikou.onclick = function() {
    modal_kikou.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_kikou_cl.onclick = function() {
    modal_kikou.style.display = "none";
}

// shikaku modal
// Get the modal
var modal_shikaku = document.getElementById("shikakuModal");

// 新規のボタン
// Get the button that opens the modal
var btn_shikaku = document.getElementById("shikakuSelect");

// Get the button that opens the modal
var btn_shikaku_cl = document.getElementById("shikakuClose");

// When the user clicks the button, open the modal 
btn_shikaku.onclick = function() {
    modal_shikaku.style.display = "block";
}

// When the user clicks the button, open the modal 
btn_shikaku_cl.onclick = function() {
    modal_shikaku.style.display = "none";
}

// 削除のボタン
// Get the button that opens the modal
var btn_shikaku_del = document.getElementById("shikakuSelect_del");

// When the user clicks the button, open the modal 
btn_shikaku_del.onclick = function() {
    modal_shikaku.style.display = "block";
}

// check box disable end date input
function disable_end_date() {
    var checkBox = document.getElementById("form_delete");
    if (checkBox.checked == true) {
        document.getElementById("datepicker3").disabled = true;
    } else {
        document.getElementById("datepicker3").disabled = false;
    }
}