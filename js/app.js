var addBtn = document.getElementById("addBtn"),
    db = openDatabase("Users", "0.1", "Adding user", "1024*1024*1024");
console.log(name);

db.transaction(function(transaction) {
    transaction.executeSql(
        "CREATE TABLE if not exist user(id int primarykey," 
        + "name text)",
        []
    );
});

addBtn.onclick = function() {
	db.transaction(function(tx) {
		var name = document.getElementById("name");
    
        tx.executeSql(
        	"INSERT INTO user(id , name)" + "VALUES(?,?)", 
        	[Math.trunc(Math.random() * 100), name.value]
        );
    });
};