var database = openDatabase("AG_DB", "1.0", "Aux Games Database", 655355);

database.transaction(function(transaction){
    var id = 1
    var sqlQuery = "SELECT * FROM tblUsers WHERE UID = "+ id + " LIMIT 1";
    transaction.executeSql(sqlQuery, undefined, function(transaction, result){
    // alert(result.rows.length)
        if(result.rows.length > 0){
            for(var i = 0; i < result.rows.length; i++){
                var row = result.rows.item(i);
                var UID = row.UID;
                
                var First_Name = row.First_Name;
                
                var Last_Name = row.Last_Name;
                
                var Phone_Number = row.Phone_Number;
                
                var Email = row.Email;
                
                var Password = row.Password;
            }
        }
        const userInfo = {
            uid: UID,
            firstName: First_Name,
            lastName: Last_Name,
            phoneNumber: Phone_Number,
            email: Email,
            password: Password
        }   
        var fullname = userInfo["firstName"] + " " + userInfo["lastName"]
        var phone = userInfo["phoneNumber"]
        var em = userInfo["email"]
        document.getElementById("fn").innerHTML = fullname;
        document.getElementById("pn").innerHTML = phone;
        document.getElementById("e").innerHTML = em;
    });
});

// function getUser(user){
//     const userInfo = {
//         uid: user[0],
//         fisrtName: user[1],
//         lastName: user[2],
//         phoneNumber: user[3],
//         email: user[4],
//         password: user[5]
//     }
//     return userInfo;
// }
// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', isLogged)
// } else {
//     isLogged()
// }


// //Get Users Ends  
// function getUserData(){
//     database.transaction(function(transaction){
//         var email = $("#e").val();
//         var pass = $("#p").val();
        
//         var sqlQuery = "SELECT * FROM tblUsers WHERE Email LIKE " +"'"+ email +"'"+ " AND Password LIKE " +"'"+ pass +"'";
//         transaction.executeSql(sqlQuery, undefined, function(transaction, result){

//             if(result.rows.length > 0){
//                 for(var i = 0; i < result.rows.length; i++){
//                     var row = result.rows.item(i);
//                     var First_Name = row.First_Name;
//                     var Last_Name = row.Last_Name;
//                     var Phone_Number = row.Phone_Number;
//                     var Email = row.Email;
//                     var Password = row.Password;
//                     if(email == Email && pass == Password){
//                         user.append(First_Name);
//                         user.append(Last_Name);
//                         user.append(Phone_Number);
//                         user.append(Email);
//                         user.append(Password);
//                         getUser(user);
//                         alert("Welcome " + First_Name);
//                         window.location.href = "index.html";
//                         return true;
//                     }
//                     else if (email == "" || email == null){
//                         alert("Email or Password is Invalid!");
//                     }
//                     else if (pass == "" || pass == null){
//                         alert("Email or Password is Invalid!");
//                     }
//                     else{
//                         alert("Email or Password is Invalid!");
//                     }
//                 }
                
//             }
//             else{
//                 alert("Email or Password is Invalid!")
//             }
//         },function(transaction, err){
//             alert(err.message);
//         })
//     });
// }

