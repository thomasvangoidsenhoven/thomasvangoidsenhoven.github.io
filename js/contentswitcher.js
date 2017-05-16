/**
 * Created by Thomas on 25/04/2017.
 */
var currentPointer = 1;


$( "#switchLeft" ).click(function() {
    $("#"+currentPointer).hide();

    if(currentPointer == 1)
    {
        currentPointer = 8;
        console.log("reset")
    }else
    {
        currentPointer--;
    }
    $("#"+currentPointer).show();


});

$( "#switchRight" ).click(function() {
    $("#"+currentPointer).hide();

    if(currentPointer == 8)
    {
        currentPointer = 1;
        console.log("reset")
    }else
    {
        currentPointer++;
    }
    $("#"+currentPointer).show();
});