
var wHTML = "";
wHTML += ('<div class="container">');
wHTML += ('<ul class="nav nav-tabs"> <li class="active"><a href="#home">Home</a></li>');
wHTML += ('<li><a href="#Delhi">Delhi</a></li> <li><a href="#Mumbai">Mumbai</a></li> <li><a href="#Hyderabad">Hyderabad</a></li> <li><a href="#Bangalore">Bangalore</a></li> <li><a href="#Chennai">Chennai</a></li> <li><a href="#Pune">Pune</a></li> <li><a href="#Kolkata">Kolkata</a></li>');
wHTML += ('</ul></div></center>');

$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        alert(this);
        $(this).tab('show');
    });
});
document.write(wHTML);