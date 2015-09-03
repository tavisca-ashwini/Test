
var wHTML = "", json = "";

wHTML += ('<div class="container">');
wHTML += ('<ul class="nav nav-tabs"> <li class="active"><a href="#Delhi">delhi</a></li>');
wHTML += ('<li><a href="#hyderabad">hyderabad</a></li><li><a href="#banglore">banglore</a></li> <li><a href="#chennai">chennai</a></li> <li><a href="#pune">pune</a></li> <li><a href="#mumbai">mumbai</a></li> <li><a href="#kolkata">kolkata</a></li>');
wHTML += ('</ul></div></center>');
document.write(wHTML);

$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        
        $(this).tab('show');
        $.getJSON("http://training.appyoda.io/api/news/" + this.innerText, function (data) {
            console.log(data);
            jQuery.each(data.responseData.feed.entries, function (i, entries)
            {
                json += ('<div id=><a href=" ' + entries.link + '"" id ="#link">' + entries.title + '</a> </br> </div>')
            });
            document.write(json);
        });
    });
});