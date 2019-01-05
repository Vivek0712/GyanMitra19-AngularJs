$(document).ready(function () {
    var date = new Date();
    date.setDate(date.getDate());

    $('.datepicker').datepicker({
        startDate: date
    });

});