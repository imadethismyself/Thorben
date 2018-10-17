
var a = 10;
var b = 10;

function visVariabler(){
    var a = 20; // avgjør ny lokal variabel 'a'
    var b = 20; // endre verdien av global variabel 'b'
    return "lokal variable 'a' = " + a + "\n Global variabel 'b' = " + b;
}

var message = visVariabler();
alert(message + "\n Global variabel 'a' = " + a);

