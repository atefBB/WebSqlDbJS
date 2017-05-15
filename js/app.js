var name = document.getElementById("name"),
    addBtn = document.getElementById("addBtn"),
    db = openDatabase("Users", "0.1", "Adding user", "1024*1024*1024");

db.transaction(function(transaction) {
    transaction.executeSql(
        "CREATE TABLE if not exist user(id int primarykey," 
        + "name text)",
        []
    );
});

addBtn.onclick = function() {
	db.transaction(function(tx) {
        tx.executeSql(
        	"INSERT INTO user(id , name)" + "VALUES(?,?)", 
        	[55, name.value]
        );
    });
};