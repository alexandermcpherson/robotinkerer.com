$(function() {

    $("#btn1").click( function() {
        sendCommand("0x1");
    });

    $("#btn2").click( function() {
        sendCommand("0x2");
    });

    $("#btn3").click( function() {
        sendCommand("0x3");
    });

    $("#btn4").click( function() {
        sendCommand("0x4");
    });

    $("#btn5").click( function() {
        sendCommand("0x5");
    });

    $("#btn6").click( function() {
        sendCommand("0x6");
    });

    $("#btnAllOn").click( function() {
        sendCommand("btnAllOn");
    });

    $("#btnAllOff").click( function() {
        sendCommand("btnAllOff");
    });

});
