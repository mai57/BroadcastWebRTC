
//login and logout google
var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
function googleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function (result) {

        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location.href = "main.html";

        //console.log(token);
        //console.log(user);
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
function googleSignOut() {
    firebase.auth().signOut().then(function () {

        console.log("Succesfull");
    }).catch(function (error) {

        console.log("Failed");
    });
}

