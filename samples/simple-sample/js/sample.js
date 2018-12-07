Comm100AgentConsoleAPI.onReady(function(){
    Comm100AgentConsoleAPI.init();
});

var $visitorId = document.getElementById('visitorId');
var $visitorName = document.getElementById('visitorName');
var $visitorEmail = document.getElementById('visitorEmail');
var $visitorLandingPage = document.getElementById('visitorLandingPage');
var $visitorCountry = document.getElementById('visitorCountry');

// get the current selected visitor info.
function getCurrentChatVisitor(){
    Comm100AgentConsoleAPI.get('agentconsole.currentChat.visitor').then(function(rep){
        if (rep.data) {
            var visitor = rep.data;
            $visitorId.innerText = visitor.id;
            $visitorName.innerText = visitor.name;
            $visitorEmail.innerText = visitor.email;
            $visitorCountry.innerText = visitor.location.country === '' ? '(unknown)' : visitor.location.country;
            $visitorLandingPage.innerHTML = '<a href="' + visitor.landingPage.url + '" target="_blank">'
                + visitor.landingPage.title + '</a>';
        }
    });
}

// update the visitor details when visitor status changes
Comm100AgentConsoleAPI.on('agentconsole.currentChat.visitor.status.change', function(visitor) {
    getCurrentChatVisitor();
});

// update the details of the selected visitor 
Comm100AgentConsoleAPI.on('agentconsole.currentChat.selectChange', function(chat) {
    getCurrentChatVisitor();
});

// initialize the page
getCurrentChatVisitor();
