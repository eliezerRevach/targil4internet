function changeHeader() {
    var txt = $("#txtInput").val();
    $("h1").text(txt);
}

var RestartGame = function() {
};


var cardClicked = function() {

};






var loadPage = function() {
    $("#cmdChange").click(changeHeader);

    $("p").mouseenter(function() {
        $("p").addClass("paragraph");
    });

    $("p").mouseleave(function() {
        $("p").removeClass("paragraph");
    });


    $("#cmdBackground").click(function() {
        $("h1").css("background-color", $("#txtInput").val());
    });


    $("#newgame").click(RestartGame);
    $("#cmdCreateManyDivs").click(createManyDivs);
};t


$("document").ready(loadPage);
