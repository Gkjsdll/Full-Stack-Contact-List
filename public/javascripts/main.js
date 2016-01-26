$(document).ready(init);

function init(){
  popContacts();
}

function popContacts() {
    $.get("/contacts.js")
    .success(function(data){
      var contacts = JSON.parse(data);
      var $contacts = [];
      for(key in contacts){
        var contact = $("<tr>").addClass("contact");
        contact.append($('<td>').text(contacts[key].fullName));
        contact.data("phone", contacts[key].phone);
        contact.data("address", contacts[key].address);
        contact.data("email", contacts[key].email);
        $contacts.push(contact);
      }
      $("#contactList").append($contacts);
    })
    .fail(function(){
      console.log("Fucked Up!");
    })

}
