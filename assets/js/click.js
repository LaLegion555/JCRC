document.oncontextmenu = function(){return false};
document.write(unescape('body'));
console.log("Que miras pendejo?");
window.oncontextmenu = function () {
    return false;
};
function closeCurrentWindow()
{
  window.close();
}
document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;

    if ((event.ctrlKey && event.shiftKey && ("i" || "I" || key == 73)) || (event.ctrlKey && event.shiftKey && ("i" || "I" || key == 74))||(event.altKey && event.F12)) {
        return false;
    } else if (key == 123) {
        return false;
    }
}, false);