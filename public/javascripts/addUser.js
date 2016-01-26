$(document).ready(init);

function init(){
  $("#newContactForm").submit(createContact);
}

function createContact(e){
  e.preventDefault();
  var contact = {};
  contact.fullName = $("#firstName").val() + " " + $("#lastName").val();
  contact.phone = $("#phone").val();
  contact.address = $("#address").val();
  contact.email = $("#email").val();
  $.post("/addUser", contact)
  .success(function(){
    console.log("Post successful");
    window.location.href = "/";
    //add contact to the DOM
  })
  .fail(function(err){
    alert("Error – See console for details");
    console.log(JSON.stringify(err));
  })
}
