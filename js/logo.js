$(document).ready(function () {
    var flag =0;
    $(".navbar-brand").mouseenter(function () {
        $("#logo").hide();
        if (flag === 0) {
            $(this).append(
                "<img src='img/logo1.jpg' class='h-100' id='logo1'>");
            flag = 1;
        }
        else{
            $("#logo1").show()
        }
    }).mouseleave(function () {
        $("#logo1").hide();
        $("#logo").show();
    })
});