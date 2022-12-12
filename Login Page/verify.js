var database = openDatabase("AG_DB", "1.0", "Aux Games Database", 655355);
// var id = null;

$(function(){

    //Get Users
    $("#login").click(function(){
        var id = getUserData();
        // getUID(id)
        // getUserID(id);
    });
    //Get Users Ends  
    function getUserData(){
        database.transaction(function(transaction){
            var email = $("#e").val();
            var pass = $("#p").val();
            
            var sqlQuery = "SELECT * FROM tblUsers WHERE Email LIKE " +"'"+ email +"'"+ " AND Password LIKE " +"'"+ pass +"'";
            transaction.executeSql(sqlQuery, undefined, function(transaction, result){
                alert(result.rows.length)
                if(result.rows.length > 0){
                    for(var i = 0; i < result.rows.length; i++){
                        var row = result.rows.item(i);
                        var uid = row.UID;
                        var First_Name = row.First_Name;
                        var Last_Name = row.Last_Name;
                        var Phone_Number = row.Phone_Number;
                        var Email = row.Email;
                        var Password = row.Password;
                        if(email == Email && pass == Password){
                            alert("Welcome " + First_Name);
                            // getUserID(uid);
                            redirect();
                            return uid;
                        }
                        else if (email == "" || email == null){
                            alert("Email or Password is Invalid!");
                        }
                        else if (pass == "" || pass == null){
                            alert("Email or Password is Invalid!");
                        }
                        else{
                            alert("Email or Password is Invalid!");
                        }
                    }
                    
                }
                else{
                    alert("Email or Password is Invalid!")
                }
            },function(transaction, err){
                alert(err.message);
            })
            
        });
    }
    // function getUserID(id){
    //     alert("received...1");
    //     database.transaction(function(transaction){
    //         // var id = getUserData();
    //         var sqlQuery = "SELECT * FROM tblUsers WHERE UID = "+ id + " LIMIT 1";
    //         transaction.executeSql(sqlQuery, undefined, function(transaction, result){
    //         // alert(result.rows.length)
    //             if(result.rows.length > 0){
    //                 for(var i = 0; i < result.rows.length; i++){
    //                     var row = result.rows.item(i);
    //                     var UID = row.UID;
                        
    //                     var First_Name = row.First_Name;
                        
    //                     var Last_Name = row.Last_Name;
                        
    //                     var Phone_Number = row.Phone_Number;
                        
    //                     var Email = row.Email;
                        
    //                     var Password = row.Password;
    //                 }
    //             }
    //             const userInfo = {
    //                 uid: UID,
    //                 firstName: First_Name,
    //                 lastName: Last_Name,
    //                 phoneNumber: Phone_Number,
    //                 email: Email,
    //                 password: Password
    //             }   
    //             // var fullname = userInfo["firstName"] + " " + userInfo["lastName"]
    //             // var phone = userInfo["phoneNumber"]
    //             // var em = userInfo["email"]
    //             // document.getElementById("fn").innerHTML = fullname;
    //             // document.getElementById("pn").innerHTML = phone;
    //             // document.getElementById("e").innerHTML = em;
    //         });
    //     });
    //     // return id;
    // }
    function called(){
        alert("called...");
    }
    // function redirect(){
    //     window.location.href = "index.html";
    // }
    
    // function getUID(){
    //     alert("received...2");
    //     return 1;
    // }
    // getUID();
    // alert(getUID())
});