function elecpages() {
    var test = document.querySelectorAll(".identify");
    var cli = "cli.html";
    var avi = "avi.html";
    var page = "page.html";
    var dedi = "dedi.html";
    for (var i = 0; i < test.length; i++) {
        test[i].addEventListener("click", function () {
            if (this.id == "clinica") {
                document.location.href = cli;
            } else if (this.id == "aviador") {
                document.location.href = avi;
            } else if (this.id == "pages") {
                document.location.href = page;
            } else if (this.id == "dedication") {
                document.location.href = dedi;
            } else {
                alert("ERROR ")
            }
        });
    }
}