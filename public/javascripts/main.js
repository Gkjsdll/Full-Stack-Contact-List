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
        contact.data("contactData", contacts[key])
        $contacts.push(contact);
      }
      $("#contactList").append($contacts);
    })
    .fail(function(){
      console.log("Fucked Up!");
    })

}
