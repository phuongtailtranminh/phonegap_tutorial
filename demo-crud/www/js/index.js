/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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
