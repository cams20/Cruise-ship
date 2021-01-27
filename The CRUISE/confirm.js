
function confirmUser(){
    var ask=confirm("You are about to leave this page, are you sure you want to leave?");
    if(ask){
      window.location="/delete";
     }else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}