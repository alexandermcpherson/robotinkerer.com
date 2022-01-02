$(function() {

    $("#btn1").click( function() {
        sendCommand("1");
    });

    $("#btn2").click( function() {
        sendCommand("2");
    });

    $("#btn3").click( function() {
        sendCommand("3");
    });

    $("#btn4").click( function() {
        sendCommand("4");
    });

    $("#btn5").click( function() {
        sendCommand("5");
    });

    $("#btn6").click( function() {
        sendCommand("6");
    });

    $("#btnAllOn").click( function() {
        sendCommand("btnAllOn");
    });

    $("#btnAllOff").click( function() {
        sendCommand("btnAllOff");
    });

});
