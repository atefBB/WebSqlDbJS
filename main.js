var name = document.getElementById("name"),
    addBtn = document.getElementById("addBtn"),
    deleteBtn = document.getElementById("deleteBtn"),
    afficheBtn = document.getElementById("afficheBtn"),
    db = openDatabase("addUser", "0.1", "adding user", "1024*1024*1024");
addBtn.onclick = function() {
    db.transaction(function(tx) {
        tx.executeSql(
            "CREATE TABLE if not exist user(id int primarykey," + "name text)",
            []
        );
    });
    db.transaction(function(tx) {
        var name = document.getElementById("name");
        tx.executeSql("INSERT INTO user(id , name)" + "VALUES(?,?)", [
            55,
            name.value
        ]);
    });
};
deleteBtn.onclick = function() {
    var name = document.getElementById("name").value;
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM user where name = ?", [name]);
    });
};
afficheBtn.onclick = function() {
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM user", [], function(tx, res) {
            var p = document.getElementById("names");
            var names = "";

            for (i = 1; i < res.rows.length; i++) {
                names += "<p>" + res.rows[i].name + "</p>";
            }
            p.innerHTML = names;
        });
    });
};