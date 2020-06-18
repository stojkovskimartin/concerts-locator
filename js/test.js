$(document).ready(function (){



    $('#search').keydown(function () {
        $.getJSON("js/Koncerti.json",function (data) {
            var search = $('#search').val();
            var regex = new RegExp(search,'i');
            $.each(data,function (key,val) {
                if(val.name.search(regex) !== -1){
                    var name = val.name;
                    var link = '<a href=" ' + val.url + '">' + name + '</a>';
                    var tmp = val.picture;
                    var img = '<img class="card-img" src="'+tmp+'">';

                    $("#deck").append(
                        "<div class='card border-white'>" + img +
                        "<div class='card-body'>" + link +
                        "</div></div>"
                    )
                }
            });
        })
    })

});