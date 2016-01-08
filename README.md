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

1. Execute these commands to create new PhoneGap project:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap create demo-crud
$cd demo-crud
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

2. After download Rachet Bootstrap, please unzip it, go to /dist folder.

You need to:

Copy **ratchet-theme-android.css** in **rachet bootstrap’s css** **folder **to
our project’s** css folder**.

Copy **ratchet.min.css** in **rachet bootstrap’s css** **folder **to our
project’s** css folder**.

Copy **ratchet.min.js** in **rachet bootstrap’s js** **folder **to our
project’s** js folder**.

Copy **fonts** folder in **rachet bootstrap’s folder** to our project’s **www**
folder.

 

3. Open up **index.html** file in **/www** folder:

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

 

4. Create **Student.js** (in /js folder) file for your Student model with these
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

 

5. Create **DatabaseHandler.js** file (in /js folder) to handle your database
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

 

6. Change your **www/index.js** file into this:

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

 

7. Copy **loading.gif** and **uog\_logo.png** (from
[here](<https://github.com/phuongtailtranminh/phonegap_tutorial/tree/master/demo-crud/www/img>))
into your **/www/img** folder.

 

8. Run your project and connect with your phone by PhoneGap Developer app: (make
sure that you’re in right project app folder before run this command).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

9. If you follow the instruction, this is what you will see:

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
