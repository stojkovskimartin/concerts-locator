$(document).ready(function () {

    $('#search').keydown(function () {

        function call(data) {
            console.log(data);
            $('#tmp').css("background-color", "royalblue").css("border", "2px solid white").css("border-radius", "5px");
            var search = $('#search').val();
            console.log(search);
            var regex = new RegExp(search, 'i');
            var output = '';
            var flag = 0;
            $.each(data, function (key, val) {
                if (val.name.search(regex) !== -1) {
                    if (flag === 0) {
                        output += "<tr>";
                        output += "<th>Артист</th>";
                        output += "<th>Место</th>";
                        output += "<th>Датум</th>";
                        output += "<th>Опис</th>";
                        output += "</tr>";
                        flag = 1;
                    }
                    var name = val.name;
                    var link = '<a href=" ' + val.url + '">' + name + '</a>';
                    var str = val.about;
                    var tmp = str.toString();
                    tmp = tmp.substr(0, 200);
                    tmp = tmp.concat('...');
                    var par = '<p>' + tmp + '</p>';

                    output += "<tr>";
                    output += "<td>" + link + "</td>";
                    output += "<td>" + val.place + "</td>";
                    output += "<td>" + val.date + "</td>";
                    output += "<td>" + par + "</td>";
                    output += "</tr>";
                }
            });
            $('tbody').html(output);
        }

        $.ajax({
            type:'GET',
            url:"https://api.myjson.com/bins/gu9t9",
            processData: true,
            data:{},
            dataType:"json",
            success: function (data) {
                call(data)
            }
        })

    });
    /*
        $('#tmp').css("background-color","royalblue").css("border","2px solid white").css("border-radius","5px");
        $.getJSON("js/Koncerti.json",function (data) {
            var search = $('#search').val();
            var regex = new RegExp(search,'i');
            var output = '';
            var flag = 0;
            $.each(data,function (key,val) {
                if(val.name.search(regex) !== -1){
                    if(flag===0){
                        output += "<tr>";
                        output += "<th>Артист</th>";
                        output += "<th>Место</th>";
                        output += "<th>Датум</th>";
                        output += "<th>Опис</th>";
                        output += "</tr>";
                        flag = 1;
                    }
                    var name = val.name;
                    var link = '<a href=" ' + val.url + '">' + name + '</a>';
                    var str = val.about;
                    var tmp = str.toString();
                    tmp = tmp.substr(0, 200);
                    tmp = tmp.concat('...');
                    var par = '<p>' + tmp + '</p>';

                    output += "<tr>";
                    output += "<td>" + link + "</td>";
                    output += "<td>" + val.place + "</td>";
                    output += "<td>" + val.date + "</td>";
                    output += "<td>" + par + "</td>";
                    output += "</tr>";
                }
            });
            $('tbody').html(output);
        })
    })
    */



});