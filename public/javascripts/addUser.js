$(document).ready(init);

function init(){
  $("#newContactForm").find("button").click(createContact);
}

function createContact(e){
  var contact = {};
  contact.fullName = $("#firstName").val() + " " + $("#lastName").val();
  contact.phone = $("#phone").val();
  contact.address = $("#address").val();
  contact.email = $("#email").val();
  $.post("/addUser", contact)
  .success(function(){
    //add contact to the DOM
  })
  .fail(function(err){
    alert("Error – See console for details");
    console.log(JSON.stringify(err));
  })
}
