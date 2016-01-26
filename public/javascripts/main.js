$(document).ready(init);

function init(){
  $("tbody").on("click", "tr", viewUser);
  popContacts();
}

function popContacts() {
    $.get("/contacts.js")
    .success(function(data){
      var contacts = JSON.parse(data);
      var $contacts = [];
      for(key in contacts) {
        var contact = $("<tr>").addClass("contact no-select");
        contact.append($('<td>').text(contacts[key].fullName));
        contact.data("index", key);
        $contacts.push(contact);
      }
      $("#contactList").append($contacts);
    })
    .fail(function(){
      console.log("Fucked Up!");
    })

}

function viewUser(e){
  e.stopPropagation();
  location.href = "/userinfo/"+$(this).data("index");
}
