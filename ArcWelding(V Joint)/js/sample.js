function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}


//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

//stop blinking arrow
function myStopFunction()
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}


//function to move to next canvas
function navNext()
{
	for(temp=0;temp<=8;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//magic function for animation in each canvas
function magic() {
  if(simsubscreennum == 1) {
    //Write code for canvas 1 animations
     myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
     animateArrowATPosition(550,400,-90);//specify the left top and deg of arrow
     document.getElementById("grinder").onclick = function() {
     document.getElementById("grinder").onclick = " "//To stop further click on pattern
     myStopFunction();//stops blinking arrow
     document.getElementById("grinder").style.animation = "movePattern 2.2s linear forwards ";
     setTimeout(function() {
          document.getElementById("metal1").style.visibility = "visible";
          document.getElementById("workpiece").style.visibility = "hidden";
          setTimeout(function() {
               document.getElementById("grinder").style.visibility = "hidden";
               document.getElementById("brush").style.visibility = "visible";
               document.getElementById("brush").style.animation = "movebrush 1.2s linear forwards ";
               setTimeout(function() {
                    document.getElementById("brush").style.visibility = "hidden";
                    document.getElementById("nextButton").style.visibility = "visible";
                 },1250);

           },1250);

       },1850);

   }

 }else if(simsubscreennum == 2) {

      document.getElementById("metal1").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
      document.getElementById("w2").onclick = function() {
      document.getElementById("w2").onclick =" "
      myStopFunction();
      document.getElementById("w1").style.animation = "movew1 1.2s ease-out forwards";
      document.getElementById("w2").style.animation = "movew2 1.2s   ease-out forwards";
      setTimeout(function() {
           document.getElementById("w1").style.visibility = "hidden";
           document.getElementById("w2").style.visibility = "hidden";
           document.getElementById("lj").style.visibility = "visible";
           setTimeout(function() {
               document.getElementById("nextButton").style.visibility = "visible";
           },1250);

        },250);

     }

 }else if(simsubscreennum == 3) {

      document.getElementById("lj").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(270,250,-90);//specify the left top and deg of arrow
      document.getElementById("p1").onclick = function() {
      document.getElementById("p1").onclick = " "
      myStopFunction();
      document.getElementById("p1").style.animation = "movepiece 1.2s ease-out forwards";
      document.getElementById("p2").style.animation = "movepiece 1.2s ease-out forwards";
      setTimeout(function() {
          document.getElementById("p1").style.visibility = "hidden";
          document.getElementById("p2").style.visibility = "hidden";
          document.getElementById("final").style.visibility = "visible";
          setTimeout(function() {
              document.getElementById("nextButton").style.visibility = "visible";
           },1250);

       },500);

   }

} else if(simsubscreennum == 4) {

      document.getElementById("final").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(630,330,-90);//specify the left top and deg of arrow
      document.getElementById("mac").onclick = function() {
      document.getElementById("mac").onclick = " "
      myStopFunction();
      document.getElementById("knob").style.visibility = "visible";
      document.getElementById("dial").style.visibility = "visible";
      document.getElementById("dial").style.animation = "movedial 1.2s ease-out forwards";
      setTimeout(function() {
          document.getElementById("knob").style.visibility = "hidden";
          document.getElementById("dial").style.visibility = "hidden";
          document.getElementById("nextButton").style.visibility = "visible";
       },1250);

    }

}if(simsubscreennum == 5) {

     myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
     animateArrowATPosition(130,170,-90);//specify the left top and deg of arrow
     document.getElementById("electrode").onclick = function() {
     document.getElementById("electrode").onclick = " "//To stop further click on pattern
     myStopFunction();//stops blinking arrow
     document.getElementById("electrode").style.animation = "moveelectrode1 3.2s linear forwards ";
     document.getElementById("spark").style.animation = "movespark1 3.2s linear forwards ";
     setTimeout(function() {
         document.getElementById("spark").style.animation = "movespark2 3.2s linear forwards ";
         document.getElementById("s1").style.visibility = "visible";
         document.getElementById("electrode").style.animation = "moveelectrode2 3.2s linear forwards ";
         setTimeout(function() {
              document.getElementById("spark").style.animation = "movespark3 3.2s linear forwards ";
              document.getElementById("s2").style.visibility = "visible";
              document.getElementById("electrode").style.animation = "moveelectrode3 3.2s linear forwards ";
              setTimeout(function() {
                  document.getElementById("spark").style.animation = "movespark4 3.2s linear forwards ";
                  document.getElementById("s3").style.visibility = "visible";
                  document.getElementById("electrode").style.animation = "moveelectrode4 3.2s linear forwards ";
                  setTimeout(function() {
                      document.getElementById("spark").style.animation = "movespark5 3.2s linear forwards ";
                      document.getElementById("s4").style.visibility = "visible";
                      document.getElementById("electrode").style.animation = "moveelectrode5 3.2s linear forwards ";
                      setTimeout(function() {
                          document.getElementById("nextButton").style.visibility = "visible";
                    },4250);

                },5000);

            },5000);

        },5000);

    },5000);

  }

}else if(simsubscreennum == 6) {

      document.getElementById("s1").style.visibility = "hidden";
      document.getElementById("s2").style.visibility = "hidden";
      document.getElementById("s3").style.visibility = "hidden";
      document.getElementById("s4").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(260,350,-90);//specify the left top and deg of arrow
      document.getElementById("metal4").onclick = function() {
      document.getElementById("metal4").onclick =" "
      myStopFunction();
      document.getElementById("metal4").style.transformOrigin = "65% 30%";
      document.getElementById("metal4").style.animation = "metalrotate 1.2s linear forwards";
      setTimeout(function() {
           document.getElementById("metal4").style.visibility = "hidden";
           document.getElementById("metal2").style.visibility = "visible";
           setTimeout(function() {
               document.getElementById("nextButton").style.visibility = "visible";
          },1250);

      },1150);

   }

}else if(simsubscreennum == 7) {

      document.getElementById("metal2").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(130,160,-90);//specify the left top and deg of arrow
      document.getElementById("electrode1").onclick = function() {
      document.getElementById("electrode1").onclick = " "
      myStopFunction();
      document.getElementById("spark1").style.visibility = "visible";
      document.getElementById("spark1").style.animation = "movespark 2.5s linear forwards";
      document.getElementById("electrode1").style.animation = "moveelectrode 5.1s linear forwards";
      document.getElementById("weld").style.animation = "moveweld 2.6s linear forwards";
      setTimeout(function() {
           document.getElementById("weld1").style.visibility = "visible";
           setTimeout(function() {
               document.getElementById("nextButton").style.visibility = "visible";
             },1250);

        },2500);

    }

}else if(simsubscreennum == 8) {

      document.getElementById("weld1").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(610,140,-90);//specify the left top and deg of arrow
      document.getElementById("hammer").onclick = function() {
      document.getElementById("hammer").onclick = " "
      myStopFunction();
      document.getElementById("hammer").style.animation = "movehammer 5.3s linear forwards";
      setTimeout(function() {
          document.getElementById("brush1").style.animation = "movebrush1 5.3s linear forwards";
          setTimeout(function() {
              document.getElementById("dust1").style.visibility = "hidden";
              setTimeout(function() {
                   document.getElementById("reButton").style.visibility = "visible";
                },1500);

             },3500);

          },5300);

      }

   }

}
