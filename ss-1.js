
function openNav() {
  document.getElementById("mySidebar").style.width = "80%";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("writeText").innerHTML = x;
  }

  function myFunctionTop() {
    var x = document.getElementById("textHund").value;
    document.getElementById("top-bg").innerHTML = x;
  }
  
  function myFunction1() {
    var x = document.getElementById("myTextb").value;
    document.getElementById("writeTextK").innerHTML = x;
  }


  function myFunction3() {
    var x = document.getElementById("myTextC").value;
    document.getElementById("writeTextL").innerHTML = x;
  }


  function myFunction4() {
    var x = document.getElementById("myTextD").value;
    document.getElementById("writeTextM").innerHTML = x;
  }
  function myFunction22() {
    var x = document.getElementById("myTextC3a").value;
    document.getElementById("writeTextC3a").innerHTML = x;
  }
  function myFunction23() {
    var x = document.getElementById("myTextC3b").value;
    document.getElementById("writeTextC3b").innerHTML = x;
  }


  function myFunction24() {
    var x = document.getElementById("myTextAb").value;
    document.getElementById("writeTextAb").innerHTML = x;
  }


  function myFunction6() {
    var x = document.getElementById("myTextZ").value;
    document.getElementById("writeTextY").innerHTML = x;
  }


  function myFunction10() {
    var x = document.getElementById("myTextTa").value;
    document.getElementById("writeTextTa").innerHTML = x;
  }


  function myFunction7() {
    var x = document.getElementById("myTextZa").value;
    document.getElementById("writeTextZ").innerHTML = x;
  }

  // Designation
  function myFunction8() {
    var x = document.getElementById("myTextZb").value;
    document.getElementById("writeTextZb").innerHTML = x;
  }

 //2nd company Name You Serve 
 function myFunction9() {
  var x = document.getElementById("myTextZd").value;
  document.getElementById("writeTextZc").innerHTML = x;
}

  //1st company Name You Serve 
  function myFunction11() {
    var x = document.getElementById("myTextTb").value;
    document.getElementById("writeTextTb").innerHTML = x;
  }

  //3rd time line 
  function myFunction12() {
    var x = document.getElementById("myTextTc").value;
    document.getElementById("writeTextTc").innerHTML = x;
  }
 //3rd Comp name 
  function myFunction13() {
    var x = document.getElementById("myTextTd").value;
    document.getElementById("writeTextTd").innerHTML = x;
  }
// Designation 3rd
  function myFunction14() {
    var x = document.getElementById("myTextEd").value;
    document.getElementById("writeTextEd").innerHTML = x;
  }

  function myFunction15() {
    var x = document.getElementById("myTextA").value;
    document.getElementById("writeTextA").innerHTML = x;
  }
  function myFunction18() {
    var x = document.getElementById("myTextB").value;
    document.getElementById("writeTextB").innerHTML = x;
  }
  function myFunction19() {
    var x = document.getElementById("myText1a").value;
    document.getElementById("writeText1a").innerHTML = x;
  }
  function myFunction20() {
    var x = document.getElementById("myText2a").value;
    document.getElementById("writeText2a").innerHTML = x;
  }
// Skill
  function myFunction16() {
    var x = document.getElementById("myTextSkl").value;
    document.getElementById("writeTextSkl").innerHTML = x;
  }

  //Persnoal information

  function myFunction102() {
    var x = document.getElementById("myTextX").value;
    document.getElementById("writeTextX").innerHTML = x;
  }


  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }



  