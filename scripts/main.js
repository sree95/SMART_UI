
$(document).ready(function(){
    
    //$("#log").innerHTML = "jQuery modified div";
    
    //$("#log").text("jQuery modified div");
    
    $("#monitoringForm").on("submit",function(e) {
                
        var serverName = $("#ServerName").val();
        var scomServerName = $("#SCOMServerName").val();
        var scomServerIPAddress = $("#SCOMServerIPAddress").val();
        var emails = $("#Emails").val();
        var serverType = $("#ServerType").val();
        var description = $("#Description").val();
        
        var body = {"ServerName": serverName,
                   "SCOMServerName":scomServerName,
                    "SCOMServerIPAddress":scomServerIPAddress,
                    "EmailAddresses":emails,
                    "ServerType":serverType,
                    "Description":description,
                    "AdditionalMessage": ""
                   };
        
        // This is the URL that is used for the service.
        var serviceUrl = "https://monitor.wolterskluwer.com/OISelfService/RequestManager.svc/AddNewServer";
                
        
        // $.ajax is the longhand ajax call in JQuery
        $.ajax({
            method: "POST",
            url: serviceUrl,
            contentType: "application/json; charset=utf-8",

            // Stringify the userInfo to send a string representation of the JSON Object
            data: JSON.stringify(body),
            dataType: "json",
            })
            .done(function(xhr){
                //document.getElementById("log").innerHTML="Success"; 
                //$("#log").append(xhr);
//                $("h3").addClass('.Success');
//                alert("Sucess");
            })
            
            .fail(function(xhr){
                //document.getElementById("log").innerHTML=xhr.responseText;
            
                $("#log").text("HTML");
                //$("#log").text("Hello");
//                $("h3").text("Helloo");
//                $("#formHeaderDiv").addClass("success");
//                alert("fail");
            });
                
    });
    
});
