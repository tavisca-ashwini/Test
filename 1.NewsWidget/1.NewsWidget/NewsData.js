
document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">')
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>')
document.write('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>')

var wHTML = "", json = "";
wHTML += ('<div id="myDiv">');
wHTML += ('<div class="container">');
wHTML += ('<ul class="nav nav-tabs" role="tablist"> <li class="active" role="presentation"><a href="#delhi" role="tab" data-toggle="tab">Delhi</a></li>');
wHTML += ('<li role="tablist"><a href="#hyderabad" role="tab" data-toggle="tab">hyderabad</a></li><li role="tablist"><a href="#banglore" role="tab" data-toggle="tab">banglore</a></li> <li role="tablist"><a href="#chennai" role="tab" data-toggle="tab">chennai</a></li>');
wHTML += ('<li role="tablist"><a href="#pune" role="tab" data-toggle="tab">pune</a></li> <li role="tablist"><a href="#mumbai" role="tab" data-toggle="tab">mumbai</a></li> <li role="tablist"><a href="#kolkata" role="tab" data-toggle="tab">kolkata</a></li>');
wHTML += ('</ul></div>');
wHTML += ('<div role="tabpanel" class="tab-pane active" id="delhi"> </div> <div role="tabpanel" class="tab-pane" id="hyderabad"> </div>');
wHTML += ('<div role="tabpanel" class="tab-pane" id="banglore"> </div> <div role="tabpanel" class="tab-pane" id="chennai"> </div>');
wHTML += ('<div role="tabpanel" class="tab-pane" id="pune"> </div> <div role="tabpanel" class="tab-pane" id="mumabi"> </div> <div role="tabpanel" class="tab-pane" id="kolkata"></div>');


document.write(wHTML);

$(document).ready(function () {
    $(".nav-tabs a").click(function (e) {
        //e.preventDefault();
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
