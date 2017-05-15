var name = document.getElementById("name"),
    addBtn = document.getElementById("addBtn"),
    db = openDatabase("addUser", "0.1", "adding user", "1024*1024*1024");

db.transaction(function(transaction) {
    transaction.executeSql(
        "CREATE TABLE user(id int primarykey," + "name text)",
        []
    );
});
