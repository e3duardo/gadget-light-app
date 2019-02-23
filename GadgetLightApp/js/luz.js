////////////////////////////////////////////////////////////////////////////////
//
// GMail reader javascript library 
//
////////////////////////////////////////////////////////////////////////////////
//var OneSecond = 1000 * 60;  // Represents one second.
//var frequency = 0;  // Feed refresh rate in minutes
//var timeout;
//var userID = "";    // GMail email address
//var password = "";  // GMail password

var luz = 0;  // estado da luz


// Instance of the GadgetBuilder to load/unload .NET assemblies.  See GadgetInterop.js
var builder = new GadgetBuilder();
// Initialize the adapter to call the .NET GMail assembly
builder.Initialize();


// .NET instance of the GMail GmailReader.GmailClient object.
var luzClient;


////////////////////////////////////////////////////////////////////////////////
//
// Set up the gadget and subscribe to events
//
////////////////////////////////////////////////////////////////////////////////
function LoadLuz()
{
    //System.Gadget.Flyout.file = "Flyout.html";
    //System.Gadget.Flyout.onShow = OnShowFlyout;
    //System.Gadget.settingsUI = "settings.html";
    //System.Gadget.onSettingsClosed = SettingsClosed;
    //System.Gadget.onUndock = CheckDock;
    //System.Gadget.onDock = CheckDock;
    
    // Resize based on dock state
    //
    //CheckDock();
    
    self.focus;
    document.body.focus();
}
////////////////////////////////////////////////////////////////////////////////
//
// Call the GetUnreadMail method of the .NET object to read the user's 
// GMail account.  The number of items is displayed on top of the background
// image, and the image is changed based on whether there is new unread mail.
//
////////////////////////////////////////////////////////////////////////////////
function ReadMail() 
{
	/*
    // Exit if no credentials exist
    if(userID == "" || password == ""){ return; }

    // Call this method every N seconds
    timeout = setTimeout('ReadMail()', frequency);
    
    // Use the builder to add the user name and password as constructor argument vlaues.
    builder.AddConstructorParam(userID);
    builder.AddConstructorParam(password);
    
    // Load the GmailReader.dll assembly and create an instance of the GmailReader.GmailClient type
    luzClient = builder.LoadType(System.Gadget.path + "\\bin\\GmailReader.dll", "GmailReader.GmailClient");
 
    // If there was no error, the luzClient object now references the GmailClient
    // .NET type.  Call the GetUnreadMail method of the .NET object
    luzClient.GetUnreadMail();
    
    // Get the number of unread mail items.
    var count = luzClient.UnreadMailCount;
    
    var mailLink = document.getElementById('mailCountLink');
    // Display the number of unread items on the gadget UI
    mailLink.innerText = count;
    
    // Change the image based on the number of unread items
    var background = (count > 0) ? 'images/gmailNew.png' : 'images/gmailNo.png';
    backgroundImage.src = background;
    */
    //SetLinkClass();
	
    var background = (luz == 0) ? 'images/tomada_ON.png' : 'images/tomada_OFF.png';
    backgroundImage.src = background;

    if(luz == 0){ luz = 1; }else{ luz = 0;}




    luzClient = builder.LoadType(System.Gadget.path + "\\bin\\GadgetLightApp.dll", "GadgetLightApp.InpOut");
	
}
////////////////////////////////////////////////////////////////////////////////
//
// Shows or hides the flyout
//
////////////////////////////////////////////////////////////////////////////////
/*
function ShowHideMail()
{
    System.Gadget.Flyout.show = !System.Gadget.Flyout.show;
}
////////////////////////////////////////////////////////////////////////////////
//
// Display the list of unread mail and details in the flyout window.  The code
// must be here and not in the ShowHideMail since the flyout page isn't
// available to find document elements until it's finished loading.
//
////////////////////////////////////////////////////////////////////////////////
/*
function OnShowFlyout()
{
    var output = "";
    // Get the number of unread items
    var count = luzClient.UnreadMailCount;
    
    // Loop through each mail item and build the HTML layout.
    for(var i = 0; i < count; i++)
    {
        var mailItem = luzClient.GetMailItem(i);
        
        output += "<div id='mailHolder' class='mailHolder'>";
        output += "<div id='mailHeader' class='mailHeader' onclick='ShowHide(" + i + ")'>";
        output += mailItem.AuthorName + "&nbsp; &nbsp;" + mailItem.Title + "</div>";
        output += "<div id='mailBody" + i + "' class='mailBody'>";
        output += "<b>Subject:&nbsp;</b>" + mailItem.Title + "<br />";
        output += "<b>From:&nbsp;</b> " + mailItem.AuthorName + "&nbsp;[" + mailItem.AuthorEmail + "]<br /><br />";
        output += mailItem.Summary + "<br /><br />";
        output += "<a target='nw' href='" + mailItem.Link + "'>Click here to see the full message</a><br>";
        output += "</div></div>";
    }
       
    // Get the flyout document's element and add the HTML
    var mail = System.Gadget.Flyout.document.getElementById('mailOutput');
    
    // Clear the existing UI
    mail.innerHTML = "";
    // Update the UI with the current unread mail list
    mail.insertAdjacentHTML("beforeEnd", output);
}
////////////////////////////////////////////////////////////////////////////////
//
// Read the saved settings
//
////////////////////////////////////////////////////////////////////////////////
/*
function SettingsClosed(event)
{
    if (System.Gadget.Settings.read("SettingExist") == true) 
    {
        userID = System.Gadget.Settings.read("userName");
	    password = System.Gadget.Settings.read("password");
	    
	    var minutes = System.Gadget.Settings.read("frequency");
	   
	    if(minutes == 0){ minutes = 0.5; }
	    
	    frequency = (OneSecond * minutes);
	    
	    backgroundImage.src = 'images/gmailno.png';
	    config.style.visibility = 'hidden';
	    
	    // Call ReadMail since settings have been changed.  
	    ReadMail();
	}
	else
	{
	    backgroundImage.src = 'images/gmailbw.png';
	    config.style.visibility = 'visible';
	}
	
	event.cancel = false;
}
////////////////////////////////////////////////////////////////////////////////
//
// Check if the gadget is docked or undocked.  Change images and CSS based on 
// the current docked state.
//
////////////////////////////////////////////////////////////////////////////////
/*
function CheckDock()
{
    if(!System.Gadget.docked) 
    {
        GadgetUndocked();
    } 
    else if (System.Gadget.docked)
    {
        GadgetDocked(); 
    }
    
    SetLinkClass();
}
////////////////////////////////////////////////////////////////////////////////
//
// styles for gadget when undocked
//
////////////////////////////////////////////////////////////////////////////////
/*
function GadgetUndocked()
{
    with(document.body.style)
        width=256, 
        height=256;
        
    with(backgroundImage.style)
         width=256, 
        height=256;
        
    config.className = 'configUndocked';
    mailCountLink.style.fontSize = '30pt';
}
////////////////////////////////////////////////////////////////////////////////
//
// styles for gadget when docked
// 
////////////////////////////////////////////////////////////////////////////////
/*
function GadgetDocked()
{   
    with(document.body.style)
        width=130,
        height=130;

    with(backgroundImage.style)
        width=130,
        height=130;
        
    config.className = 'config';
    mailCountLink.style.fontSize = '18pt';
}*/
////////////////////////////////////////////////////////////////////////////////
//
// Set the mail count link CSS class based on the number of unread items.  This
// keeps the numbers centered on the 'button' area of the image, and fixes
// what the CSS text-align: center doesn't do.
//
///////////////////////////////////////////////////////////////////////////////

function SetLinkClass()
{
//    var count = luzClient.UnreadMailCount;
    var count = 5000;
    var mailCnt = document.getElementById('mailCount');
    
    var linkClass = "";
    
    if(count < 10) // 0-9 unread items link css style
    {
        linkClass = 'ones';
    }
    else if (count < 100) // 10-99 unread items link css style
    {
        linkClass = 'tens';
    }
    else // // 100 or more unread items link css style
    { 
        linkClass = 'hundreds';
    }
    
    if(!System.Gadget.docked) // Add "undocked" based on the gadget's docked state
    {
        linkClass += 'undocked';
    }
    
    mailCnt.className = linkClass;
}



////
function AlternarLuz()
{
    alert("gelo");

    var background = (luz == 0) ? 'images/tomada_ON.png' : 'images/tomada_OFF.png';
    backgroundImage.src = background;


    if(luz == 0){ luz = 1; }else{ luz = 0;}

    luzClient.AlternateLuzStatus(luz);

}