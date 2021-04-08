$(".agregar").on("click", function(e){
  e.preventDefault();
  var postvalue = $(this);
  //Estaba usando $("#newText").text() pero no lo agarra
  $(".Lista").prepend("<br> <hr> <li> <p> " + postvalue.text() + "</p>  <button class='checkbutton' type='submit'> check </button> <button class='delbutton' type='submit'> delete </button> <li>");
})

$(".Lista").on("click", ".checkbutton", function(e){
  e.preventDefault();
  alert("check");
})

$(".Lista").on("click", ".delbutton", function(e){
  e.preventDefault();
  alert("delete");
})
