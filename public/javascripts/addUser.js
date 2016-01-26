$(document).ready(init);

function init(){
  $("#newContactForm").find("button").click("createContact");
}

function createContact(){
  var contact = {};
  contact.name = $("#firstName") + " " + $("#lastName");
  contact.phone = $("#phone");
  contact.address = $("#address");
  contact.email = $("#email");
}
