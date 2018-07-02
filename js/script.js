//klasiu keitimo funkcijos
var i;
function func_none() {
    x = document.getElementsByClassName("displays");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("none");
        x[i].classList.remove("inline");
        x[i].classList.remove("block");
        x[i].classList.remove("inline-block");
    }
}
function func_flex() {
    x = document.getElementsByClassName("displays");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("block");
        x[i].classList.remove("inline");
        x[i].classList.remove("none");
        x[i].classList.remove("inline-block");
    }
}
function func_inline() {
    x = document.getElementsByClassName("displays");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("inline");
        x[i].classList.remove("block");
        x[i].classList.remove("none");
        x[i].classList.remove("inline-block");
    }
}
function func_inlineblock() {
    x = document.getElementsByClassName("displays");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("inline-block");
        x[i].classList.remove("inline");
        x[i].classList.remove("none");
        x[i].classList.remove("block");
    }
}
function func_dom() {
    var list = document.createElement("UL");
    for (i = 0; i < 5; i++) {
        var item = document.createElement("li");
        var a = document.createElement("a");
        var t = document.createTextNode("nuoroda");
        list.appendChild(item);
        item.appendChild(a);
        a.appendChild(t);
    }
    document.body.appendChild(list);
}
$(document).ready(function () {
    $("#jq").click(function () {
        // $("body").append(" <ol>");
        var a = $("<ol>");
        for (i = 0; i < 5; i++) {
            var x = $("<li>");
            x.append(" <a>nuoroda</a>");
            x.appendTo(a);
        }
        a.appendTo("body");
    });
});
