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
  
  console.log(JSON.stringify(contact));
}
