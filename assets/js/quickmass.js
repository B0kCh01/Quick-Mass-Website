var tokenList = [];

$("#name").on("change keyup paste", function(){
    if ($("#name").val() == ""){
    	document.getElementById("molar-mass").innerHTML="Enter Formula Here";
    } else {
    	document.getElementById("molar-mass").innerHTML="Coming soon...";
    }
});
