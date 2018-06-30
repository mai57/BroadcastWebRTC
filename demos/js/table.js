firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        var user = firebase.auth().currentUser;
        var email_id = user.email;

        //database table
        var table = document.querySelector('#table_body');
        var broad = firebase.database().ref("Broad");
        broad.on('value', function (broadsnapshot) {
            while (table.hasChildNodes()) {
                table.removeChild(table.firstChild);
            }
            if (broadsnapshot.exists()) {
                var content = '';
                broadsnapshot.forEach(function (data) {
                    var val = data.val();
                    //console.log(data);


                    content += '<tr>';
                    content += '<td>' + val.coursecode + '</td>';
                    content += '<td>' + val.course + '</td>';
                    content += '<td>' + val.instructor + '</td>';
                    content += '<td>' + val.detail + '</td>';
                    if (val.email == email_id) {
                        content += '<td><a href="joinclass.html?id=' + data.key + '" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">View</a></td>';
                    } else {
                        content += '<td><a href="joinclass.html?id=' + data.key + '#' + data.key + '" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Edit</a></td>';
                    }

                    content += '</tr>';
                    //console.log(data.key);

                });
                var theDiv = document.getElementById("table_body");
                theDiv.innerHTML += content;
                //$('#ex-table').append(content);
            }
        });

    } else {

    }
});