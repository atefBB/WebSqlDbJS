var name = document.getElementById("name"),
    addBtn = document.getElementById("addBtn"),
    db = openDatabase("Users", "0.1", "adding user", "1024*1024*1024");

db.transaction(function(transaction) {
    transaction.executeSql(
        "CREATE TABLE if not exist user(id int primarykey," + "name text)",
        []
    );
});
