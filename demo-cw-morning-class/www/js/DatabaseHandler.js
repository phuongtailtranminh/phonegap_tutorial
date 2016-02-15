var db = null;

function connectDB() {
    db = window.openDatabase("MadDiscovery", 1.0, "Mad Discovery", 2000000);
    if (db != null) {
        console.log("CONNECT DATABASE OK");
    }
}

function createTable() {
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS TBLEvent(ID INTEGER PRIMARY KEY, EventName, EventLocation, EventDate, EventStartTime, EventOrgName);");
    }, function(err) {
        console.log("CREATE TABLE ERROR " + err.code);
    }, function() {
        console.log("CREATE TABLE OK");
    });
}

function insertEvent(eventName, eventLocation, eventDate, eventStartTime, eventOrgName, onSuccessful) {
    db.transaction(function(tx) {
        tx.executeSql("INSERT INTO TBLEvent(EventName, EventLocation, EventDate, EventStartTime, EventOrgName) VALUES(?, ?, ?, ?, ?);", 
                        [eventName, eventLocation, eventDate, eventStartTime, eventOrgName]);
    }, function(err) {
        console.log("INSERT EVENT ERROR " + err.code);
    }, function() {
        onSuccessful();
    });
}

function getListEvent(onSuccessful) {
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM TBLEvent;", [], function(tx, rs) {
            
            var numberOfEvent = rs.rows.length;
            var listEvents = [];
            for (var i = 0; i < numberOfEvent; i++) {
                
                listEvents.push({"ID": rs.rows.item(i).ID, "EventName": rs.rows.item(i).EventName, 
                "EventLocation": rs.rows.item(i).EventLocation, "EventDate": rs.rows.item(i).EventDate, 
                "EventStartTime": rs.rows.item(i).EventStartTime, "EventOrgName": rs.rows.item(i).EventOrgName});
                
            }
                        
            onSuccessful(listEvents);
            
        });
    }, function(err) {
        console.log("GET LIST EVENT ERROR " + err.code);
    });
}

function deleteEvent(eventID) {
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM TBLEvent WHERE ID = ?", [eventID]);
    }, function(err) {
        console.log("DELETE EVENT ERROR " + err.code);
    }, function() {
        console.log("DELETE EVENT OK");
    });
}

function editEvent(eventName, eventLocation, eventDate, eventStartTime, eventOrgName, eventID, onSuccessful) {
    db.transaction(function(tx) {
        tx.executeSql("UPDATE TBLEvent SET EventName = ?, EventLocation = ?, EventDate = ?, EventStartTime = ?, EventOrgName = ? WHERE ID = ?", 
        [eventName, eventLocation, eventDate, eventStartTime, eventOrgName, eventID]);
    }, function(err) {
        console.log("EDIT EVENT ERROR " + err.code);
    }, function() {
        onSuccessful();
    });
}

function searchEvent(eventID, onSuccessful) {
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM TBLEvent WHERE ID = ?", [eventID], function(tx, rs) {
            if (rs.rows.length == 0) {
                onSuccessful(null);
            } else {
                onSuccessful({"ID": rs.rows.item(0).ID, "EventName": rs.rows.item(0).EventName, 
                                "EventLocation": rs.rows.item(0).EventLocation, "EventDate": rs.rows.item(0).EventDate, 
                                "EventStartTime": rs.rows.item(0).EventStartTime, "EventOrgName": rs.rows.item(0).EventOrgName});
            }
        });
    }, function(err) {
        console.log("SEARCH EVENT ERROR " + err.code);
    });
}