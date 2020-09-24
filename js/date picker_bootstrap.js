$(document).ready(function() {
    var date_output = $('input[name="date_input"]'); // name = "入力したい場所"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "new_form"; //"body";
    var options = {
        format: 'mm/dd/yyyy', // 表示したいフォマード
        container: container,
        todayHighlight: true,
        autoclose: true,
    };

    //datepicker function　を呼んで date_output　へ　表示する。
    date_output.datepicker(options);

    var date_output1 = $('input[name="end_date_del"]'); // name = "入力したい場所"
    var container1 = $('.bootstrap-iso-test form').length > 0 ? $('.bootstrap-iso-test form').parent() : "delete_form";
    var options1 = {
        format: 'mm/dd/yyyy', // 表示したいフォマード
        container: container1,
        todayHighlight: true,
        autoclose: true,
    };

    //datepicker function　を呼んで date_output　へ　表示する。
    date_output1.datepicker(options1);
})

//$(function() {
//    $("#datepicker").datepicker();
//});