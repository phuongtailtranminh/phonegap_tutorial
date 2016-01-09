var db = null;

function getConnect(dbName) {
    db = window.openDatabase(dbName, "1.0", dbName, 2000000) // 2MB database
}

function createTable(tx) {
    db.transaction(function (tx) {
        //tx.executeSql('DROP TABLE IF EXISTS Student');
        tx.executeSql('CREATE TABLE IF NOT EXISTS Student (ID Integer PRIMARY KEY, FullName, Age, Address);');
    }, function (err) {
        console.log('Error when creating table. Error code: ' + err.code);
    }, function () {
        console.log('Create table succesfully!');
    });
}

function insertStudent(student, onSuccess, onFail) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO Student(FullName, Age, Address) VALUES (?, ?, ?)', [student.name, student.age, student.address]);
    }, function (err) {
        console.log('Error when inserting student. Error code: ' + err.code);
        onFail();
    }, function () {               
        console.log('Insert student successfully!');
        onSuccess();    
    }); 
}

function updateStudent(id, name, age, address, onSuccess, onFail) {
    db.transaction(function (tx) {
        console.log('Tick');
        tx.executeSql('UPDATE Student SET FullName = ?, Age = ?, Address = ? WHERE ID = ?', [name, age, address, id]);        
    }, function (err) {
        console.log('Error when updating student. Error code: ' + err.code);
        onFail(err);
    }, function () {
        console.log('Update student successfully!');
        onSuccess();
    });
}

function searchStudentByID(id, onSuccess, onFail) {
    db.transaction(function (tx) {
        console.log('ID: ' + id);
        tx.executeSql('SELECT * FROM Student WHERE ID = ?', [id], function(tx, rs) {
            var s = new Student(rs.rows.item(0).ID, rs.rows.item(0).FullName, rs.rows.item(0).Age, rs.rows.item(0).Address);
            onSuccess(s);
        });
    }, function (err) {
        console.log('Error when searching student. Error code: ' + err.code);
        onFail(err);
    });
}

function deleteStudent(id, onSuccess, onFail) {
    db.transaction(function (tx) {
        console.log('ID: ' + id);
        tx.executeSql('DELETE FROM Student WHERE ID = ?', [id]);
    }, function (err) {
        console.log('Error when deleting student. Error code: ' + err.code);
        onFail(err);
    }, function () {
        console.log('Delete student sucessfully!');
        onSuccess();
    });
}


function listStudent(onSuccess) {
    db.transaction(function (tx) {
        var lstStudent = [];
        tx.executeSql('SELECT * FROM Student', [], function (tx, rs) {            
            var numberOfItem = rs.rows.length;
            console.log('Number of item: ' + numberOfItem);            
            for (var index = 0; index < numberOfItem; index++) {                
                var s = new Student(rs.rows.item(index).ID, rs.rows.item(index).FullName, rs.rows.item(index).Age, rs.rows.item(index).Address);
                lstStudent.push(s);
            }
            onSuccess(lstStudent);
        }, function (err) {
            console.log('Error when selecting student. Error code: ' + err.code);
        });
    });

}
