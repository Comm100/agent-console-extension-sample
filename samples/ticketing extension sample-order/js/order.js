var updateContact = function () {
  Comm100AgentConsoleAPI.get("agentconsole.ticketing.currentTicket").then(
    function (response) {
      var ticket = response.data;
      if (ticket) {
        var contact = ticket.contactOrVisitor || {};
        updateContactName(contact.name);
        updateContactIdentity(findIdentity(contact));
      }
    }
  );
};

var updateContactName = (name) => {
  getElement("contact-name").innerText = name || "";
};
var updateContactIdentity = (identity) => {
  getElement("contact-identity").innerText = identity || "";
};
var findIdentity = (contactOrVisitor) => {
  if (contactOrVisitor.contactIdentities) {
    var identity = contactOrVisitor.contactIdentities.find(function (id) {
      return id === "email";
    });
    if (!identity) {
      identity = contactOrVisitor.contactIdentities[0] || {};
    }
    return identity.value;
  }
  return contactOrVisitor.email;
};
var getElement = function (id) {
  return document.getElementById(id);
};

Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.selectChanged",
  updateContact
);

updateContact();
