

var game = {

	charactersName: [ "Wonder Woman", "Harley Quinn", "Blackwidow", "Psylocke"],
    src: [ "assets/images/wonderwoman.gif",
           "assets/images/harleyquinn.gif",
           "assets/images/blackwidow.gif",
           "assets/images/psylocke.gif",],

    characterPosition: [0, 1, 2, 3],

    //set health points
    HP: [ 570, 690 ,800, 777],

    //set attack power
    AP: [90, 100, 150, 146],

    //set counter power
    CP: [26, 20, 39, 33],


}

var charactersArray = [];
var enemiesArray = [];
var attacker = [];
var characterpicked = false;
var attackerpicked = false;
var position;
var PlayerHP = 0;
var AttackerHP= 0;
var attackpower= 0;
var counterpower=0;



$(document).ready(function() {

//load all the characters to page

   for (var i=0; i<4; i++) {
     
   	charactersArray[i] = $("<img>");
    charactersArray[i].attr("src", game.src[i]);
    charactersArray[i].data("Name",game.charactersName[i]);
    charactersArray[i].data("HP", game.HP[i]);
    charactersArray[i].data("AP", game.AP[i]);
    charactersArray[i].data("CP", game.CP[i]);
    charactersArray[i].data("Position", game.characterPosition[i]);
    $("#characters").append(charactersArray[i]);
    // charactersArray = charactersArray[i].push(character);
    console.log(charactersArray);

   }

 $("img").append("<span>THIS IS THE SPAN</span>");


      $(document).on("click", "img", function() {

if (characterpicked===false && charactersArray.length===4){
 
   	 
   	   position = $(this).data("Position");
   	   console.log(position);
   	   charactersArray.splice(($(this).data("Position")),1);
   	   $("#MyCharacter").html("<h2>You are "+$(this).data("Name")+"&hearts;</h2>");
   	   $("#enemies").html(charactersArray);
   	   $(this).addClass("player");
   	    for (var j =0; j<charactersArray.length; j++){ 
   	    	   charactersArray[j].addClass("enemies");

            	};
        characterpicked=== true;
       
  }     
        // var newEnemy= function(){
            $("#enemies img").on("click", function gamereset(){        
                $("#currentattacker").html($(this)); 
                $(this).addClass("attacker");
                $("#attackButton").toggleClass("makevisible");
                $("#attackButton").text("Click to Attack");
                $("#AttackerName").toggleClass("makevisible");
                $("#AttackerName").html("<h2>"+$(this).data("Name")+"</h2>");
              
                // });
        // }
        //   var resetHP = function(){
             
              console.log(PlayerHP);
              console.log(AttackerHP);
              
              PlayerHP= $(".player").data("HP");
              AttackerHP= $(".attacker").data("HP");
              attackpower= $(".player").data("AP");
              counterpower= $(".attacker").data("CP");
              
              PlayerHP = parseInt(PlayerHP);
              AttackerHP = parseInt(AttackerHP);
              attackpower = parseInt(attackpower);
              counterpower = parseInt(counterpower);         
        // }

        // newEnemy();
        // resetHP();

         $("#attackButton").on("click", function(){

              attackpower+6;
              PlayerHP -= counterpower;
              AttackerHP -= attackpower;


              $("#playerHP").html("<h3>Your HP: " +PlayerHP+ "</h3>");
              $("#enemyHP").html("<h3>"+$(".attacker").data("Name")+" HP: " +AttackerHP+ "</h3>");               

             
           if(playerHP < 100){
                 	$("#playerHP").toggleClass("makered");
                 }

           if(AttackerHP < 100){
                 	$("#enemyHP").toggleClass("makered");
                 } 


           if (AttackerHP < 0){
               alert("You Won! Select a New Enemy to Attack.");
               $("#currentattacker").empty();
               $("#enemyHP").empty();
               gamereset();
               AttackerHP= $(".attacker").data("HP");
               counterpower= $(".attacker").data("CP");
               AttackerHP = parseInt(AttackerHP);
               counterpower = parseInt(counterpower); 
   
           }
   
           else if(PlayerHP < 0) {
              var again = confirm("You Lost! Try Again?");
              if (again) {
              	location.reload();
                 }
                }
            });

     });

  });      
  });
