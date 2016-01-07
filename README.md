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

-   [Google Play]

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

![](<tutorial_img/npm_v.png>)

In next step, run this command to install PhoneGap CLI:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install -g phonegap
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To verify your installation, run this command:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
phonegap -version
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you see something like this, that mean you’ve installed PhoneGap correctly!

![](<tutorial_img/phonegap_v.png>)

 

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

![](<tutorial_img/geny_s.png>)

![](<tutorial_img/geny_2.png>)

After click **Next** button, it’ll download system image and set up for you.
Take a coffe because it may take a while, depend on your internet connection.

 

6. Install Google Play:
-----------------------

Start your Android Virtual Machine by select it and click **Start** button

![](<tutorial_img/geny_3.png>)

In order to install Google Play, firstly you need drag-and-drop
**Genymotion-ARM-Translation\_v1.1.zip** file to your virtual machine, then
restart it.

After restart, drag-and-drop **gapps-jb-20121011-signed.zip** file to your
virtual machine to install Google Play then restart.

 

7. Install PhoneGap Developer app:
----------------------------------

Accessing applications menu:

![](<tutorial_img/geny_4.png>)

Run **Play Store** app and search for **PhoneGap Developer** and install it.

 

8. Your first PhoneGap application:
-----------------------------------

Now is the most amazing part from the beginning.

Firstly, navigate to the location you want to store your app. In here, I chose
Desktop:

Shift + Right Click [for Windows] and Open command window here

![](<tutorial_img/shift_rclick.png>)

Type:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
phonegap create HelloWorldApp
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

to create new project.

![](<tutorial_img/pg_create.png>)

Then change directory to the new folder which we’ve just created:

![](<tutorial_img/pg_cd.png>)

To run your app, type:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
phonegap serve
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](<tutorial_img/pg_serve.png>)

Now come back to our Android Virtual Machine - AVM, open up PhoneGap Developer
app we’ve just installed in section 7.

![](<tutorial_img/geny_6.png>)

![](<tutorial_img/geny_7.png>)

Type the second one IP:Port then click **Connect**

After connected, you’ll see your very first PhoneGap app. Congratulation, your
app was up and running!

![](<tutorial_img/geny_8.png>)

9. Let’s modify something
-------------------------

Now is the more amazing part, you’ll change something, make this like your app!

Start your **Visual Studio Code**, then **File - Open Folders...** and navigate
to your project location.

![](<tutorial_img/vs_1.png>)

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

![](<tutorial_img/geny_9.png>)

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

│   ├───icon

│   │   ├───android

│   │   ├───bada

│   │   ├───bada-wac

│   │   ├───blackberry

│   │   ├───ios

│   │   ├───tizen

│   │   ├───webos

│   │   └───windows-phone

│   └───screen

│       ├───android

│       ├───bada

│       ├───bada-wac

│       ├───blackberry

│       ├───ios

│       ├───tizen

│       ├───webos

│       └───windows-phone

└───spec

└───lib

└───jasmine-1.2.0

1. hooks: include special scripts which could be added by application and plugin
developers or even by your own build system to customize cordova commands.
[[More
information]](<http://cordova.apache.org/docs/en/dev/guide/appdev/hooks/index.html#Hooks%20Guide.>)

2. platforms: default this is an empty folder. These only appear when you
specific a platform, such as Android by command: “phonegap platform add
android”.

3. www: this folder you will working with a lot. You include css folder - styles
your app with css file, img - stores your image file, js - stores javascript
files which used to make your app interactive, res - stores resource files, spec
- include library files.

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

![](<tutorial_img/pg_create_02.png>)

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

 
