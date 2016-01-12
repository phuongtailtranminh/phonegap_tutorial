*PhoneGap Tutorial*
===================

1. Prerequisite:
----------------

-   [Visual Studio Code](<https://code.visualstudio.com/>)

-   [JScript Editor
    Extensions](<https://visualstudiogallery.msdn.microsoft.com/872d27ee-38c7-4a97-98dc-0d8a431cc2ed>)
    [used in Visual Studio Code]

-   [PhoneGap (CLI)](<http://phonegap.com/install/>)

-   [Genymotion - Android Emulator](<https://www.genymotion.com/#!/download>)

-   [Genymotio ARM
    Translation](<http://www14.zippyshare.com/v/44278764/file.html>)

-   [Google Play](<https://drive.google.com/uc?id=0B1GPk1Y1JG05dWhPWnltRHktZGs>)

-   [Nodejs](<https://nodejs.org/en/>)

 

2. Install PhoneGap CLI:
------------------------

In order to install PhoneGap via NPM, you have to install
[Nodejs](<https://nodejs.org/en/>) first.

To make sure that you’ve installed Nodejs correctly, open Command Line/ Terminal
and type:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm -version
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you see something like this, that mean you’ve installed Nodejs correctly!

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/npm_v.png>)

In next step, run this command to install PhoneGap CLI:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install -g phonegap
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To verify your installation, run this command:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
phonegap -version
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you see something like this, that mean you’ve installed PhoneGap correctly!

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/phonegap_v.png>)

 

3. Install Genymotion:
----------------------

[Genymotion](<https://www.genymotion.com/#!/download>) is an android emulator
which is fast, free for personal use and provide enough functionality for our
course.

In order to download Genymotion, you have to register an account on
http://genymotion.com

On the Installation process, It’ll require you to install VirtualBox. Just
follow the Installation Instructions.

 

4. Install JScript Editor Extension:
------------------------------------

In order to install [Jscript Editor
Extension](<https://visualstudiogallery.msdn.microsoft.com/872d27ee-38c7-4a97-98dc-0d8a431cc2ed>),
all you need is simply drag-and-drop JScriptEditorExtensions.vsix into Visual
Studio Code - VCS then restart it.

 

5. Create Android Virtual Machine:
----------------------------------

To create Android Virtual Machine, firstly start Genymotion, click **Add** then
search for: **Custom Phone - 4.1.1 API 16**

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_s.png>)

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_2.png>)

After click **Next** button, it’ll download system image and set up for you.
Take a coffe because it may take a while, depend on your internet connection.

 

6. Install Google Play:
-----------------------

Start your Android Virtual Machine by select it and click **Start** button

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_3.png>)

In order to install Google Play, firstly you need drag-and-drop
**Genymotion-ARM-Translation\_v1.1.zip** file to your virtual machine, then
restart it.

After restart, drag-and-drop **gapps-jb-20121011-signed.zip** file to your
virtual machine to install Google Play then restart.

 

7. Install PhoneGap Developer app:
----------------------------------

Accessing applications menu:

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_4.png>)

Run **Play Store** app and search for **PhoneGap Developer** and install it.

 

8. Your first PhoneGap application:
-----------------------------------

Now is the most amazing part from the beginning.

Firstly, navigate to the location you want to store your app. In here, I chose
Desktop:

Shift + Right Click [for Windows] and Open command window here

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/shift_rclick.png>)

Type:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
phonegap create HelloWorldApp
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

to create new project.

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/pg_create.png>)

Then change directory to the new folder which we’ve just created:

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/pg_cd.png>)

To run your app, type:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/pg_serve.png>)

Now come back to our Android Virtual Machine - AVM, open up PhoneGap Developer
app we’ve just installed in section 7.

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_6.png>)

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_7.png>)

Type the second one IP:Port then click **Connect**

After connected, you’ll see your very first PhoneGap app. Congratulation, your
app was up and running!

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_8.png>)

9. Let’s modify something
-------------------------

Now is the more amazing part, you’ll change something, make this like your app!

Start your **Visual Studio Code**, then **File - Open Folders...** and navigate
to your project location.

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/vs_1.png%3E>)

In the folder structure, access **www/index.html** then change:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<h1>PhoneGap</h1>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

into

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<h1>Hello Greenwich</h1>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Press **Ctrl + S** to save your change(s).

Now, as you can see, the PHONEGAP text before has changed into HELLO GREENWICH

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/geny_9.png%3E>)

Your changes affected because your app will auto reload whenever you made
changes in the code.

 

10. Take a breath and dive in deep:
-----------------------------------

This is PhoneGap folder structure:

 

├───hooks

├───platforms

├───plugins

└───www

├───css

├───img

├───js

├───res

│ ├───icon

│ │ ├───android

│ │ ├───bada

│ │ ├───bada-wac

│ │ ├───blackberry

│ │ ├───ios

│ │ ├───tizen

│ │ ├───webos

│ │ └───windows-phone

│ └───screen

│ ├───android

│ ├───bada

│ ├───bada-wac

│ ├───blackberry

│ ├───ios

│ ├───tizen

│ ├───webos

│ └───windows-phone

└───spec

└───lib

└───jasmine-1.2.0

1.  hooks: include special scripts which could be added by application and
    plugin developers or even by your own build system to customize cordova
    commands. [[More
    information]](<http://cordova.apache.org/docs/en/dev/guide/appdev/hooks/index.html#Hooks%20Guide.>)

2.  platforms: default this is an empty folder. These only appear when you
    specific a platform, such as Android by command: “phonegap platform add
    android”.

3.  www: this folder you will working with a lot. You include css folder -
    styles your app with css file, img - stores your image file, js - stores
    javascript files which used to make your app interactive, res - stores
    resource files, spec

-   include library files.

Important file:

\\config.xml: stores application configuration, such as plugin is used.

\\www\\index.html: user interface of your app.

\\www\\js\\index.js: back-end code of your app.

 

11. Make a simple take picture app:
-----------------------------------

In this section, we’ll create an app can take your picture and show it right
after that.

Starting by create your project folder then change directory into it:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create DemoCameraApp
$cd DemoCameraApp
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/pg_create_02.png%3E>)

Make your app up and running:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Change your \<body\> html code in **\\www\\index.html** file into these:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <body>
        <div class="app">
            <img id="profile" src="#" height="100" width="100"/>
            <h1>PhoneGap</h1>
            <button id="btnTakePicture">Take a picture</button>
            <div id="deviceready" class="blink">
                <p class="event listening">Connecting to Device</p>
                <p class="event received">Device is Ready</p>
            </div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
        <script type="text/javascript">
            app.initialize();
        </script>
    </body>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Change your onDeviceReady function in **\\www\\js\\index.js** into these code:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var btnTakePicture = document.getElementById("btnTakePicture");
        btnTakePicture.addEventListener("click", function() {            
            navigator.camera.getPicture(app.onSuccess, app.onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        });
    },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add 2 more functions:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    onSuccess: function(imageData) {
        var profile = document.getElementById("profile");
        profile.src = "data:image/jpeg;base64," + imageData;
        console.log(imageData);
    },
    
    onFail: function(message){
        console.log(message);
    },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Save your changes and use AVM to connect your app.

Turn on Dummy Camera (for testing):

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/camera_dummy_camera.png%3E>)

This is what you’ll see:

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/camera_app.png%3E>)

Click **Take a picture** button to get a picture.

This is what you’ll see:

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/camera_app_02.png%3E>)

 

12. Simple List Image View:
---------------------------

In this section, we’ll create an app can take your picture and show it right
after that.

Starting by create your project folder then change directory into it:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create DemoListImageView
$cd DemoListImageView
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

Make your app up and running:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

Change your **\\www\\index.html** file into these:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
    <title>Hello World</title>
</head>

<body>
    <div data-role="page" id="pageone">
        <div data-role="main" class="ui-content">
            <h2>Click On The Gear Icons!</h2>
            <ul data-role="listview" data-inset="true">
                <li data-role="divider">Browsers</li>
                <li>
                    <a href="#">
                        <img src="http://icons.iconarchive.com/icons/google/chrome/256/Google-Chrome-icon.png">
                        <h2>Google Chrome</h2>
                        <p>Google Chrome is a free, open-source web browser. Released in 2008.</p>
                    </a>
                    <a href="#download" data-transition="pop" data-icon="gear">Download Browser</a>
                </li>
                <li>
                    <a href="#">
                        <img src="http://people.mozilla.org/~faaborg/files/shiretoko/firefoxIcon/firefox-512.png">
                        <h2>Mozilla Firefox</h2>
                        <p>Firefox is a web browser from Mozilla. Released in 2004.</p>
                    </a>
                    <a href="#download" data-transition="pop" data-icon="gear">Download Browser</a>
                </li>
            </ul>
        </div>
        <button>Click me</button>
    </div>

    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <script type="text/javascript">
        app.initialize();
    </script>
</body>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](<https://github.com/phuongtailtranminh/phonegap_tutorial/blob/master/tutorial_img/limgv.png>)

13. Simple Student Management App:
----------------------------------

Hi, welcome back! In this tutorial I’ll guide you to do a simple student
management app:

But first, You need to setup something:

-   [Rachet Bootstrap (for building UI)](<http://goratchet.com/>)

Preference: [Simple Student Management App source
code](<https://github.com/phuongtailtranminh/phonegap_tutorial/tree/master/demo-crud>)

1.  Execute these commands to create new PhoneGap project:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create demo-crud
$cd demo-crud
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  After download Rachet Bootstrap, please unzip it, go to /dist folder.

You need to:

Copy **ratchet-theme-android.css** in **rachet bootstrap’s css folder** to our
project’s\*\* css folder\*\*.

Copy **ratchet.min.css** in **rachet bootstrap’s css folder** to our
project’s\*\* css folder\*\*.

Copy **ratchet.min.js** in **rachet bootstrap’s js folder** to our project’s\*\*
js folder\*\*.

Copy **fonts** folder in **rachet bootstrap’s folder** to our project’s **www**
folder.

 

1.  Open up **index.html** file in **/www** folder:

Replace this line:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<link rel="stylesheet" type="text/css" href="css/index.css" />
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

by these line:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<link rel="stylesheet" href="css/ratchet.min.css">
<link rel="stylesheet" href="css/ratchet-theme-android.min.css">
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add these line:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script type="text/javascript" src="js/Student.js"></script>
<script type="text/javascript" src="js/ratchet.min.js"></script>
<script type="text/javascript" src="js/DatabaseHandler.js"></script>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

right above this line:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script type="text/javascript">
   app.initialize();
</script>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **Student.js** (in /js folder) file for your Student model with these
    following code:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constructor
function Student(id, name, age, address){
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.setName = setName;
}

// Override toString()
Student.prototype.toString = function() {
    return "ID: " + this.id + "Name: " + this.name + ", Age: " + this.age + ", Address: " + this.address;
}

// Methods
function setName(name) {
    this.name = name;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **DatabaseHandler.js** file (in /js folder) to handle your database
    work with these following code:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

function insertStudent(student) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO Student(FullName, Age, Address) VALUES (?, ?, ?)', [student.name, student.age, student.address]);
    }, function (err) {
        console.log('Error when inserting student. Error code: ' + err.code);
    }, function () {
        console.log('Insert student successfully!');
        listStudent(app.updateListStudentUI);
    });
}

function updateStudent(name, age, address, id) {
    db.transaction(function (tx) {
        tx.executeSql('UPDATE Student SET FullName = ?, Age = ?, Address = ? WHERE ID = ?', [name, age, address, id]);
    }, function (err) {
        console.log('Error when updating student. Error code: ' + err.code);
    }, function () {
        console.log('Update student successfully!');
        listStudent(app.updateListStudentUI);
    });
}

function searchStudentByID(id) {
    for (var i = 0; i < lstStudent.length; i++) {
        if (lstStudent[i].id == id) {
            return lstStudent[i];
        }
    }
}

function deleteStudent(id) {
    db.transaction(function (tx) {
        console.log('ID: ' + id);
        tx.executeSql('DELETE FROM Student WHERE ID = ?', [id]);
    }, function (err) {
        console.log('Error when deleting student. Error code: ' + err.code);
    }, function () {
        console.log('Delete student sucessfully!');
        alert('Deleted successful');
        listStudent(app.updateListStudentUI);
    });
}

var lstStudent = [];
function listStudent(updateListStudentUI) {
    db.transaction(function (tx) {
        lstStudent = [];
        tx.executeSql('SELECT * FROM Student', [], function (tx, rs) {
            var numberOfItem = rs.rows.length;
            console.log('Number of item: ' + numberOfItem);

            for (var index = 0; index < numberOfItem; index++) {
                var s = new Student(rs.rows.item(index).ID, rs.rows.item(index).FullName, rs.rows.item(index).Age, rs.rows.item(index).Address);
                lstStudent.push(s);
            }

            updateListStudentUI(lstStudent);

        }, function (err) {
            console.log('Error when selecting student. Error code: ' + err.code);
        });
    });

}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Change your **www/index.js** file into this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var detailView = document.getElementById('detailView');
var ulList = document.getElementById('list');
var updateView = document.getElementById('updateView');

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    
    updateListStudentUI: function () {
        ulList.style.display = "block";
        ulList.innerHTML = "";
        var divLoadingImg = document.getElementById('loadingImg');
        for (var i = 0; i < lstStudent.length; i++) {
            var li = document.createElement('li');
            li.className = "table-view-cell";
            var aTag = document.createElement('a');
            aTag.className = "navigate-right";
            aTag.innerText = lstStudent[i].name;
            var buttonDelete = document.createElement('button');
            buttonDelete.className = "btn btn-negative";
            buttonDelete.innerText = "Delete";
            buttonDelete.id = lstStudent[i].id;
            buttonDelete.onclick = app.deleteConfirm;
            var buttonDetail = document.createElement('button');
            buttonDetail.className = "btn btn-primary";
            buttonDetail.innerText = "Detail";
            buttonDetail.style.marginRight = "10%";
            buttonDetail.onclick = app.showDetail;
            buttonDetail.id = lstStudent[i].id;
            var buttonUpdate = document.createElement('button');
            buttonUpdate.className = "btn btn-primary";
            buttonUpdate.innerText = "Update";
            buttonUpdate.style.marginRight = "20%";
            buttonUpdate.id = lstStudent[i].id;
            buttonUpdate.onclick = app.showUpdate;
            li.appendChild(aTag);
            li.appendChild(buttonDetail);
            li.appendChild(buttonUpdate);
            li.appendChild(buttonDelete);
            ulList.appendChild(li);
        }
        divLoadingImg.style.display = "none";
        detailView.style.display = "none";
        updateView.style.display = "none";
    },

    showUpdate: function (event) {
        var studentID = event.target.id;
        updateView.style.display = "block";
        ulList.style.display = "none";
        var updateFullName = document.getElementById('updateFullName');
        var updateAge = document.getElementById('updateAge');
        var updateAddress = document.getElementById('updateAddress');
        var updateID = document.getElementById('updateID');
        var foundStudent = searchStudentByID(studentID);
        if (foundStudent != null) {
            updateFullName.value = foundStudent.name;
            updateAge.value = foundStudent.age;
            updateAddress.value = foundStudent.address;
            updateID.value = studentID;
        }
    },

    showDetail: function (event) {
        var studentID = event.target.id;
        detailView.style.display = "block";
        ulList.style.display = "none";
        var nameDisplay = document.getElementById('nameDisplay');
        var ageDisplay = document.getElementById('ageDisplay');
        var addressDisplay = document.getElementById('addressDisplay');
        var foundStudent = searchStudentByID(studentID);
        if (foundStudent != null) {
            nameDisplay.innerText = foundStudent.name;
            ageDisplay.innerText = foundStudent.age;
            addressDisplay.innerText = foundStudent.address;
        }

    },

    deleteConfirm: function (event) {
        // Get student id
        var studentID = event.target.id;
        var rs = confirm('Are you sure to delete this student?');
        if (rs == true) {
            deleteStudent(studentID);
        }
    },

    onDeviceReady: function () {
        console.log('Device is ready!');
        getConnect('Student');

        var btnCreate = document.getElementById('btnCreate');
        var btnList = document.getElementById('btnList');
        var btnUpdate = document.getElementById('btnUpdate');
        var txtFullName = document.getElementById('txtFullName');
        var txtAge = document.getElementById('txtAge');
        var txtAddress = document.getElementById('txtAddress');
        var divLoadingImg = document.getElementById('loadingImg');

        btnCreate.addEventListener('click', function () {
            console.log('btnCreate clicked');

            var fullName = txtFullName.value;
            var age = txtAge.value;
            var address = txtAddress.value;

            if (fullName != "" && age != "" && address != "") {
                if (!isNaN(age)) {
                    var student = new Student(0, fullName, age, address);
                    createTable();
                    insertStudent(student);
                } else {
                    alert('Age should be numberic');
                }
            } else {
                alert('All fields are required');
            }

        });

        btnList.addEventListener('click', function () {
            console.log('btnList clicked');
            listStudent(app.updateListStudentUI);
            divLoadingImg.style.display = "block";
        });

        btnUpdate.addEventListener('click', function () {
            console.log('btnUpdate clicked');

            var updateFullName = document.getElementById('updateFullName').value;
            var updateAge = document.getElementById('updateAge').value;
            var updateAddress = document.getElementById('updateAddress').value;
            var updateID = document.getElementById('updateID').value;
            
            updateStudent(updateFullName, updateAge, updateAddress, updateID);

        });
    }
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Copy **loading.gif** and **uog\_logo.png** (from
    [here](<https://github.com/phuongtailtranminh/phonegap_tutorial/tree/master/demo-crud/www/img>))
    into your **/www/img** folder.

 

1.  Run your project and connect with your phone by PhoneGap Developer app:
    (make sure that you’re in right project app folder before run this command).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  If you follow the instruction, this is what you will see:

Main screen:

![](<tutorial_img/crud_app_01.png>)

After create new student:

![](<tutorial_img/crud_app_02.png>)

Detail screen:

![](<tutorial_img/crud_app_03.png>)

Delete screen:

![](<tutorial_img/crud_app_04.png>)

Update screen:

![](<tutorial_img/crud_app_05.png>)

 

14. Simple CRUD (Create-Read-Update-Delete) App:
------------------------------------------------

Hi! In this tutorial I’ll show you how to create a simple CRUD app that working
with SQLite.

Firstly, you need to create your app using PhoneGap CLI:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create simple-crud
$cd simple-crud
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Then, Let’s change our **www/index.html** file to make links to other page such
as: create.html, list.html, update.html and delete.html

1.  Change your **www/index.html** body into this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<body>
    <h1>DEMO CRUD</h1>
    <br/>
    <div style="text-align: center">
        <h1><a href="create.html">Create new student</a></h1>
        <h1><a href="update.html">Update student</a></h1> 
        <h1><a href="list.html">List student</a></h1>
        <h1><a href="delete.html">Delete student</a></h1>
    </div>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/DatabaseHandler.js"></script>
        
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
            function onDeviceReady() {                
                console.log("Device is ready");
                getConnect("StudentDB");
                // create table if it doens't exist
                createTable();   
            }
    </script>
</body>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As you can see, I **deleted** link to **js/index.js** file because we can just
simply write our back-end code in \<script\> tag.

The line:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.addEventListener('deviceready', onDeviceReady, false);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

to make sure that device is ready for use, and execute onDeviceReady() function
after it got ready.

All your functions should run after device is ready.

 

1.  Create new **/www/js/DatabaseHandler.js** file with those code:

Reference to [PhoneGap Storage
API](<http://docs.phonegap.com/en/3.1.0/cordova_storage_storage.md.html#Storage>).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **www/js/Student.js** file to store Student model:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constructor
function Student(id, name, age, address){
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.setName = setName;
}

// Override toString()
Student.prototype.toString = function() {
    return "ID: " + this.id + "Name: " + this.name + ", Age: " + this.age + ", Address: " + this.address;
}

// Methods
function setName(name) {
    this.name = name;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **www/create.html** file:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>DEMO CRUD - CREATE</title>
</head>

<body>
    <h1>DEMO CRUD - CREATE</h1>
    <div style="text-align: center">
        <a href="index.html">Home</a>
        <table align="center">
            <tr>
                <td>Name: </td>
                <td>
                    <input type="text" id="name">
                </td>
            </tr>
            <tr>
                <td>Age: </td>
                <td>
                    <input type="text" id="age">
                </td>
            </tr>
            <tr>
                <td>Address: </td>
                <td>
                    <textarea id="address" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="btnCreate">Create</button>
                </td>
            </tr>
        </table>
    </div>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/Student.js"></script>
    <script type="text/javascript" src="js/DatabaseHandler.js"></script>
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
            
            function onDeviceReady() {
                console.log("Create page is ready");
                var btnCreate = document.getElementById('btnCreate');
                btnCreate.addEventListener('click', onCreate);
            }
            
            function onCreate(){                 
                var name = document.getElementById('name').value;
                var age = document.getElementById('age').value;
                var address = document.getElementById('address').value;
                if (name != "" && age != "" && address != "") {
                    if (!isNaN(age)) { // age should be numberic             
                        getConnect("StudentDB");              
                        var student = new Student(0, name, age, address);        
                        insertStudent(student, function(){
                            alert('Create student successfully!');
                        }, function() {
                            alert('Error when creating student');
                        });
                    } else {
                        alert('Age should be numberic');
                    }                    
                } else {
                    alert("All fields are required");
                }
            }
    </script>
</body>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **www/update.html** file:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>DEMO CRUD - Update</title>
</head>

<body>
    <h1>DEMO CRUD - Update</h1>
    <div style="text-align: center">
        <a href="index.html">Home</a>
        <table align="center">
            <tr>
                <td>ID: </td>
                <td>
                    <input id="txtID" type="text">
                </td>
                <td>
                    <button id="btnFind">Find</button>
                </td>
            </tr>
            <tr>
                <td>Name: </td>
                <td>
                    <input type="text" id="txtName">
                </td>
            </tr>
            <tr>
                <td>Age: </td>
                <td>
                    <input type="text" id="txtAge">
                </td>
            </tr>
            <tr>
                <td>Address: </td>
                <td>
                    <textarea id="txtAddress" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="btnUpdate">Update</button>
                </td>
            </tr>
        </table>
    </div>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/Student.js"></script>
    <script type="text/javascript" src="js/DatabaseHandler.js"></script>
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
            
            var txtName = null;
            var txtAge = null;
            var txtAddress = null;
            var txtID = null;
            
            function onDeviceReady() {
                console.log("Update page is ready");
                
                getConnect('StudentDB');
                
                var btnUpdate = document.getElementById('btnUpdate');
                btnUpdate.addEventListener('click', onUpdate);
                
                var btnFind = document.getElementById('btnFind');
                btnFind.addEventListener('click', onFind);
                
                // get passed url from list.html
                var passedUrl = window.location.href;
                console.log('URL: ' + passedUrl);
                var id = extractInfo(passedUrl);
                // load student information if found id in url                                
                txtName = document.getElementById('txtName');
                txtAge = document.getElementById('txtAge');
                txtAddress = document.getElementById('txtAddress');                
                txtID = document.getElementById('txtID');
                     
                if (id != null) {
                    
                    console.log('Student ID: ' + id[1]);
                    console.log('Student Name: ' + id[2]);
                    console.log('Student Age: ' + id[3]);
                    console.log('Student Address: ' + id[4]);
                    
                    txtID.value = id[1];
                    txtName.value = id[2];
                    txtAge.value = id[3];
                    txtAddress.value = id[4];
                    
                    
                }
            }
            
            function extractInfo(url) {
                var decodedUrl = decodeURI(url);
                var pattern = /\?id=(\d+)&name=(.*)&age=(\d+)&address=(.*)/; // get student id, name, age, address
                return pattern.exec(decodedUrl);
            }
            
            function onUpdate() {
                updateStudent(txtID.value, txtName.value, txtAge.value, txtAddress.value, function() {
                    alert('Update student successfully!');
                }, function(err){
                    alert('Error when updating student. Error code: ' + err.code);
                });
            }
            
            function onFind() {
                var id = document.getElementById('txtID').value;
                searchStudentByID(id, function(student) {
                    var id = document.getElementById('txtID');
                    var name = document.getElementById('txtName');
                    var age = document.getElementById('txtAge');
                    var address = document.getElementById('txtAddress');
                    id.value = student.id;
                    name.value = student.name;
                    age.value = student.age;
                    address.value = student.address;
                }, function(err){
                    alert('Student not found');
                })
            }
    </script>
</body>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **www/list.html** file:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
    <title>DEMO CRUD - List Student</title>
</head>

<body>
    <h1>DEMO CRUD - List Student</h1>
    <div style="text-align: center">
        <a href="index.html">Home</a>
        <br/>
        <br/>

        <table id="tblListStudent" align="center" style="border: 1px solid black">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>01</td>
                <td>PhuongTM</td>
                <td>22</td>
                <td>Hanoi</td>
                <td>
                    <button id="btnDelete">Delete</button>
                    <button id="btnUpdate">Update</button>
                </td>
            </tr>
        </table>
    </div>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/DatabaseHandler.js"></script>
    <script type="text/javascript" src="js/Student.js"></script>
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
            function onDeviceReady() {
                console.log("List page is ready");
                getConnect('StudentDB');
                showStudent(); 
            }
            
            function showStudent(){
                listStudent(function(lstStudent) {
                    var tblListStudent = document.getElementById('tblListStudent');
                    // refresh table
                    tblListStudent.innerHTML = "";
                    var tr = document.createElement('tr');
                    var thID = document.createElement('th');                    
                    var thName = document.createElement('th');
                    var thAge = document.createElement('th');
                    var thAddress = document.createElement('th');
                    var thAction = document.createElement('th');
                    
                    thID.innerHTML = "ID";
                    thName.innerHTML = "Name";
                    thAge.innerHTML = "Age";
                    thAddress.innerHTML = "Address";
                    thAction.innerHTML = "Action";
                    
                    tr.appendChild(thID);
                    tr.appendChild(thName);
                    tr.appendChild(thAge);
                    tr.appendChild(thAddress);
                    tr.appendChild(thAction);
                    
                    tblListStudent.appendChild(tr);
                    
                    for (var i = 0; i < lstStudent.length; i++) {

                        var tr = document.createElement('tr');
                        var tdID = document.createElement('td');
                        var tdName = document.createElement('td');
                        var tdAge = document.createElement('td');
                        var tdAddress = document.createElement('td');
                        var tdAction = document.createElement('td');
                        var btnDelete = document.createElement('button');
                        btnDelete.id = lstStudent[i].id;
                        btnDelete.innerHTML = "Delete";
                        btnDelete.onclick = onDelete;
                        var btnUpdate = document.createElement('button');
                        btnUpdate.id = lstStudent[i].id;
                        btnUpdate.innerHTML = "Update";
                        btnUpdate.onclick = onUpdate;
                        btnUpdate.setAttribute('data-student', '&name=' + lstStudent[i].name + '&age=' + lstStudent[i].age + '&address=' + lstStudent[i].address);
                        tdID.innerHTML = lstStudent[i].id;
                        tdName.innerHTML = lstStudent[i].name;
                        tdAge.innerHTML = lstStudent[i].age;
                        tdAddress.innerHTML = lstStudent[i].address;
                                                
                        tdAction.appendChild(btnDelete); 
                        tdAction.appendChild(btnUpdate); 
                        tr.appendChild(tdID);
                        tr.appendChild(tdName);
                        tr.appendChild(tdAge);
                        tr.appendChild(tdAddress);
                        tr.appendChild(tdAction);
                        tblListStudent.appendChild(tr);
                  }    
                });
            }
            
            function onDelete(event) {
                var studentID = event.target.id;
                console.log('Delete id: ' + studentID);
                var result = confirm('Are you sure to delete student with id = ' + studentID);
                if (result == true) {
                    deleteStudent(studentID, function() {
                        alert('Delete student successfully');
                        showStudent();
                    }, function(err) {
                        alert('Error when delete student. Error code: ' + err.code);
                    });
                }
                
            }
            
            function onUpdate(event) {
                var studentID = event.target.id;
                var studentInfo = event.target.getAttribute('data-student');
                console.log('Update id: ' + studentID);
                window.location = 'update.html?id=' + studentID + studentInfo;
            }
    </script>
</body>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Create **www/delete.html** file:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>DEMO CRUD - Delete Student</title>
</head>

<body>
    <h1>DEMO CRUD - Delete Student</h1>
    <div style="text-align: center">
        <a href="index.html">Home</a>
        <table align="center">
            <tr>
                <td>Student ID: </td>
                <td>
                    <input type="text" id="txtStudentID" />
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="btnDelete">Delete</button>
                </td>
            </tr>
        </table>
    </div>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/Student.js"></script>
    <script type="text/javascript" src="js/DatabaseHandler.js"></script>
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
        
            var txtStudentID = null;
            
            function onDeviceReady() {
                console.log("Delete page is ready");
                getConnect('StudentDB');
                txtStudentID = document.getElementById('txtStudentID');
                
                var btnDelete = document.getElementById('btnDelete');
                btnDelete.addEventListener('click', onDelete);
            }
            
            function onDelete() {
                var studentID = txtStudentID.value;
                searchStudentByID(txtStudentID.value, function(student){
                    // confirm before delete student
                    var result = confirm('Are you sure to delete student id = ' + studentID);
                    if (result == true) {
                        // delete student
                        deleteStudent(student.id, function(){
                            alert('Student ' + student.id + ' has been deleted');
                        }, function(err) {
                            alert('Error when deleting student. Error code: ' + err.code);
                        });
                    } 
                }, function(err) {
                    alert('Student not found');
                });
            }
    </script>
</body>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  After create our necessary files, run and connect to our app using PhoneGap
    Developer app:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Screenshots:

Main screen:

![](<tutorial_img/simple_crud_main.png>)

Create student screen:

![](<tutorial_img/simple_crud_create.png>)

List students screen:

![](<tutorial_img/simple_crud_list.png>)

Delete screen:

![](<tutorial_img/simple_crud_delete.png>)

15. Local Notification
----------------------

In this tutorial I’ll show you how to create a local notification using
**cordova-plugin-local-notifications**

 

References: [cordova-plugin-local-notifications
doc](<https://github.com/katzer/cordova-plugin-local-notifications>)

 

1.  Execute following commands to create and install plugin:

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create notification-demo
$cd notification-demo
$phonegap platforms add android
$phonegap plugin add https://github.com/katzer/cordova-plugin-local-notifications
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

The command:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap platforms add android
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

is used to add android platform into your project. You can check yourself by go
to **platforms** folder and see the new **android** folder in here.

 

The command:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap plugin add https://github.com/katzer/cordova-plugin-local-notifications
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

is used to add plugin into your project. You can check yourself by go to
**plugins** folder and see the new folder named
**de.appplant.cordova.plugin.local-notification** in here.

 

1.  Next step, go to **index.html** and change source code into this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />

    <title>Hello World</title>
</head>

<body>
    <div style="text-align: center">
        <table align=center>
            <tr>
                <td>Choose repeat date (use up/down arrow)</td>
                <td>
                    <input type="date" id="txtDate">
                </td>
                <td>
                    <input type="text" placeholder="Hour" id="txtHour">
                </td>
                <td>
                    <input type="text" placeholder="Minute" id="txtMinute">
                </td>
            </tr>
            <tr>
                <td>Title of notification: </td>
                <td>
                    <input type="text" id="txtTitle">
                </td>
            </tr>
            <tr>
                <td>Content of notification: </td>
                <td>
                    <input type="text" id="txtContent">
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="btnSet">Set notification</button>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="btnUnset">Unset notification</button>
                </td>
            </tr>
        </table>
    </div>
    <script type="text/javascript" src="cordova.js"></script>
    <!--<script type="text/javascript" src="js/index.js"></script>-->
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
            
            function onDeviceReady() {
                var btnSet = document.getElementById('btnSet');
                btnSet.addEventListener('click', onSetNotify);
                
                document.getElementById('btnUnset').addEventListener('click', onUnset);
            }
            
            function onUnset() {
                cordova.plugins.notification.local.cancel(1, function() {
                    alert('Unsubcrible done');         
                }, this);                
            }
            
            function onSetNotify() {
                 
                var _title = document.getElementById('txtTitle').value;
                var pattern = /(\d{4})-(\d{2})-(\d{2})/;
                var txtDate = document.getElementById('txtDate');
                if (txtDate.value) {
                    var information = pattern.exec(txtDate.value);                    
                    var year = information[1];
                    var month = information[2] - 1;
                    var day = information[3];                
                    var hour = document.getElementById('txtHour').value;
                    var minute = document.getElementById('txtMinute').value;
                    var _date = new Date(year, month, day, hour, minute);
                    var _content = document.getElementById('txtContent').value;
                    
                    if (hour != "" && minute != "" && _content != "") {
                        alert('Notification has been setted to: ' + _date);
                        cordova.plugins.notification.local.schedule({
                            id: 1,
                            title: _title,
                            at: _date,
                            text: _content,
                            sound:  'res://ios_ringtone.mp3',
                            icon: 'res://gw_icon.png',
                            data: { secretKey: 'oh-my-god'}
                        });
                        
                        cordova.plugins.notification.local.on('click', function(notification) {
                            var data = JSON.parse(notification.data);
                            //alert(data.secretKey);
                        });
                    } else {
                        alert('All fields are required');
                    }                    
                } else {
                    alert('Date should be specify');
                }

            }
    </script>
</body>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Copy 2 files named:
    [gw\_icon.jpg](<notification-demo/platforms/android/res/drawable-hdpi/gw_icon.jpg>)
    and
    [ios\_ringtone.mp3](<notification-demo/platforms/android/res/drawable-hdpi/ios_ringtone.mp3>)
    to your **platforms/android/res/drawable-hdpi** folder.

 

1.  Open up your emulator.

2.  Run these commands:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap build android
$phonegap run android
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This will deploy our app to the emulator

1.  Screenshot

-   Setting

![](<tutorial_img/local_notification_demo_01.png>)

![](<tutorial_img/local_notification_demo_02.png>)

-   Notifcation

![](<tutorial_img/local_notification_demo_03.png>)

 

16. Working with Google Map API:
--------------------------------

In this tutorial We’ll create an simple app using Google Map API to get our
current position.

**Note: I tested with android emulator (Genymotion) but it doesn’t work. You
need real device in this tutorial.**

1.  Firstly, you need to go to Google Developer Console to **enable Google MAP
    API Javascript service** and **create new Browser Key** (If you never do it
    before).

Access: https://console.developers.google.com/apis

Sign in with your Google account.

![](<tutorial_img/google_map_01.png>)

Enable Google Map API:

![](<tutorial_img/google_map_02.png>)

![](<tutorial_img/google_map_03.png>)

![](<tutorial_img/google_map_04.png>)

![](<tutorial_img/google_map_05.png>)

 

1.  Create new project:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create google-map-api-demo
$cd google-map-api-demo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Change your **index.html** into this code:

Note that you need to change this line at bottom, replace YOUR\_API\_KEY to your
Google Map API Key.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY=initMap" async defer></script>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <!--<link rel="stylesheet" type="text/css" href="css/index.css" />-->
        <style>
        html, body {
            height: 80%;
            margin: 0;
            padding: 0;
        }
        #map {
            height: 100%;
        }
        </style>        
        <title>PhoneGap Google Map API Demo</title>
    </head>
    <body>
            <div id="map"></div>
            <div style="text-align: center">
                <button id="btnGetCurrentPosition">Current Position</button>
            </div> 
        <script>
            
            document.addEventListener('deviceready', onDeviceReady, false);
            
            function onDeviceReady() {
                
                console.log('Geolocation object: ' + navigator.geolocation);
                
                document.getElementById('btnGetCurrentPosition').addEventListener('click', onGetCurrentPosition);

            }
            
            function onGetCurrentPosition() {
                
                navigator.geolocation.getCurrentPosition(onSuccess, onError);                
                
            }
            
            function onSuccess(position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                initMap(lat, long);
            };
            
            function onError(err) {
                alert('Error when get current location. Error code: + ' + err.code);
            }
            
            
            var map;
            function initMap(_lat, _long) {
                if (_lat == undefined && _long == undefined) {
                    _lat = 21.0283631;
                    _long = 105.779485;
                }
                map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: _lat, lng: _long},
                zoom: 16
                });
            }
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY=initMap"
        async defer></script>

        <script type="text/javascript" src="cordova.js"></script>
    </body>
</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Run your app through PhoneGap Developer App:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Screenshots:

![](<tutorial_img/google_map_06.png>)

 

17. Working with Facebook:
--------------------------

 

In this tutorial We’ll create an app that take and save picture and we can also
post status to facebook.

**This tutorial require Facebook App installed on your device.**

 

1.  Go to: https://developers.facebook.com/apps/

Add new app:

![](<tutorial_img/facebook_plugin_01.png>)

![](<tutorial_img/facebook_plugin_02.png>)

![](<tutorial_img/facebook_plugin_03.png>)

 

![](<tutorial_img/facebook_plugin_04.png>)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
**Write down your App ID and App Name for next step.    **
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1.  Create new project and add plugins:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create facebook-share-demo
$cd facebook-share-demo
$phonegap platforms add android
$phonegap plugin add https://github.com/Wizcorp/phonegap-facebook-plugin/ --variable APP_ID="replace_with_your_appid" --variable APP_NAME="replace_with_your_appname"
$phonegap plugin add cordova-plugin-camera
$phonegap plugin add cordova-plugin-x-socialsharing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

 

1.  Change your index.html into this code:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
    />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>Hello World</title>
</head>

<body style="text-align: center">
    <img src="#" alt="#" id="myImage" width="200" height="200">

    <div style="text-align: center">
        <button id="btnTakeSelfie">Take a selfie</button>
        <br>
        <button id="btnPost">Post to new feed</button>
        
    </div>

    <div id="fb-root"></div>
    
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript">
        document.addEventListener('deviceready', onDeviceReady, false);
            
            
            function onDeviceReady() {
                console.log('Device is ready');
                
                document.getElementById('btnTakeSelfie').addEventListener('click', onTakeSelfie);

                document.getElementById('btnPost').addEventListener('click', onPost);
            }
            
            function onTakeSelfie() {
                navigator.camera.getPicture(onSuccess, null, { 
                    quality: 100,
                    destinationType: Camera.DestinationType.FILE_URI,
                    encodingType: Camera.EncodingType.PNG,
                    targetWidth: 200,
                    targetHeight: 200,
                    saveToPhotoAlbum: true
                });

                function onSuccess(imagePath) {
                    var image = document.getElementById('myImage');
                    image.src = imagePath;
                    
                    var rs = confirm('Do you want to share your feeling to facebook?');
                    
                    if (rs == true) {
                        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', imagePath, null, function() {
                            console.log('Facebook share done');
                        }, 
                        function (errormsg) {
                            alert(errormsg)
                        });                        
                    }
                    
                }
                           
            }
            
            
            function onPost() {
                facebookConnectPlugin.login(["user_posts"], onLoginSuccess, null);
            }
            
            function onLoginSuccess() {
                publishPhoto();
            }
            
            function publishPhoto(_caption) {
                facebookConnectPlugin.showDialog( 
                    {
                        method: "feed",
                        caption: _caption
                    });           
            }
    </script>
</body>

</html>

</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

1.  Deploy your app: (Open up your emulator before run this command)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap run android
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

5 Screenshots:

![](<tutorial_img/facebook_plugin_05.png>)

![](<tutorial_img/facebook_plugin_06.png>)
