//data google
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        
        var user = firebase.auth().currentUser;
        var email_id = user.email;
        var name_id = user.displayName;

        document.getElementById("user_email").innerHTML = "Email : " + email_id;
        document.getElementById("user_name").innerHTML = "Name : " + name_id;
        
        
        
        var commentsRef = firebase.database().ref('User').orderByChild("email").equalTo(email_id);
        commentsRef.on('value', function (snapshot) {
            console.log(snapshot.val()); 
            if(snapshot.val() == null ){
               $("#myModal").modal();
            }
            snapshot.forEach(function (data) {
                console.log(data.val());
                var val = data.val();
                console.log(val.status);
                if(String (val.status) == "teacher") {
                    console.log("aaaaaaa");
                }else {
                    console.log("bbbbbbbbbb");
                }

            });
        });

    } else {
        
    }
});


//login and logout google
var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
function googleSignOut() {
    firebase.auth().signOut().then(function () {
        window.location.href = "index.html";
        console.log("Succesfull");
    }).catch(function (error) {

        console.log("Failed");
    });
}

