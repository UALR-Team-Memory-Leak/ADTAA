<template>
<body>
  <div class="row">
    <div class="col-md-6 offset-md-3">
           <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
            
    </div>
    </div>
</div>

<div class="tab">
    <button id="openInstructors" class="tablinks" @click="openTab(event, 'InstructorsTab')">Instructors</button>
    <button id="openCourses" class="tablinks" @click="openTab(event, 'CoursesTab')">Courses</button>
    <button id="openSection" class="tablinks" @click="openTab(event, 'SectionsTab')">Sections</button>
</div>
<br>

<div id="InstructorsTab" class="tabcontent" style="display: none">
  <dialog id="addInstructorDialogBox">
    <p>
      Input the data for the new instructor:
    </p>
    <form method="dialog" @submit="onAddInstructor()">
      <div class="form-group">
        <label for="add_last_name">Last Name</label>
        <input type="text" class="form-control" name="add_last_name" v-model="add_last_name"/>
      </div>
      <div class="form-group">
        <label for="add_max_course_load">Max Course Load</label>
        <input type="text" class="form-control" name="add_max_course_load" v-model="add_max_course_load"/>
      </div>
      <div class="form-group">
        <label for="add_instructor_discipline_area1">Discipline Area 1</label>
        <br>
        <select v-model="add_instructor_discipline_area1" name="add_instructor_discipline_area1">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <div class="form-group">
        <label for="add_instructor_discipline_area2">Discipline Area 2</label>
        <br>
        <select v-model="add_instructor_discipline_area2" name="add_instructor_discipline_area2">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <div class="form-group">
        <label for="add_instructor_discipline_area3">Discipline Area 3</label>
        <br>
        <select v-model="add_instructor_discipline_area3" name="add_instructor_discipline_area3">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <div class="form-group">
        <label for="add_instructor_discipline_area4">Discipline Area 4</label>
        <br>
        <select v-model="add_instructor_discipline_area4" name="add_instructor_discipline_area4">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <button type="submit" value="submit">Submit</button>
    </form>
  </dialog>

  <dialog id="modifyInstructorDialogBox">
    <p>
      Modify the data for the instructor:
    </p>
    <form method="dialog" @submit="onModifyInstructor()">
      <div class="form-group">
        <label for="modify_last_name">Last Name</label>
        <input type="text" class="form-control" name="modify_last_name" id = "modify_last_name"/>
      </div>
      <div class="form-group">
        <label for="modify_max_course_load">Max Course Load</label>
        <input type="text" class="form-control" name="modify_max_course_load" id="modify_max_course_load"/>
      </div>
      <div class="form-group">
        <label for="modify_instructor_discipline_area1">Discipline Area 1</label>
        <br>
        <select id="modify_instructor_discipline_area1" name="modify_instructor_discipline_area1">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <div class="form-group">
        <label for="modify_instructor_discipline_area2">Discipline Area 2</label>
        <br>
        <select id="modify_instructor_discipline_area2" name="modify_instructor_discipline_area2">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <div class="form-group">
        <label for="modify_instructor_discipline_area3">Discipline Area 3</label>
        <br>
        <select id="modify_instructor_discipline_area3" name="modify_instructor_discipline_area3">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <div class="form-group">
        <label for="modify_instructor_discipline_area4">Discipline Area 4</label>
        <br>
        <select id="modify_instructor_discipline_area4" name="modify_instructor_discipline_area4">
          <option value="None">None</option>
          <option value="Programming-C++">Programming-C++</option>
          <option value="Programming-Python">Programming-Python</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Software Development Methodologies">Software Development Methodologies</option>
          <option value="Game Development">Game Development</option>
          <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
          <option value="Computer Organization">Computer Organization</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Networks">Networks</option>
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Parallel and Distributed Systems">Parallel and Distributed Systems</option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Hardware Designs">Hardware Designs</option>
        </select>
      </div>
      <button type="submit" value="submit">Submit</button>
    </form>
  </dialog>

  <button id="addInstructorButton">Add Instructor</button>
  <div class="instructors"></div>
  <br>
</div>

<div id="CoursesTab" class="tabcontent" style="display: none">
  <p>Courses go here!</p>

</div>
<div id="SectionsTab" class="tabcontent" style="display: none">
  <p>Sections go here!</p>

</div>

</body>
</template>

<script>
  import axios from "axios";  

  //Global Variables
  var currentInstructorID

export default ({
    name: "Setup-Page",

    //Methods to call at page creation
    mounted: function() {
      
      const addInstructorButton = document.getElementById('addInstructorButton')
      const addInstructorDialogBox = document.getElementById('addInstructorDialogBox')

      addInstructorButton.onclick = function()
      {
        addInstructorDialogBox.showModal()
      }

      this.$nextTick(function ()
      {
        this.getInstructors()
        this.openTab(event, 'InstructorsTab')
      })
    },
    methods:
    {
      //Tab Management
      openTab(evt, dataName)
      {
        console.log("wow")
        var i, tabcontent, tablinks
        tabcontent = document.getElementsByClassName("tabcontent")
        for (i = 0; i < tabcontent.length; i++)
        {
          tabcontent[i].style.display = "none"
        }
        tablinks = document.getElementsByClassName("tablinks")
        for (i = 0; i < tablinks.length; i++)
        {
          tablinks[i].className = tablinks[i].className.replace(" active", "")
        }
        document.getElementById(dataName).style.display = "block"
        evt.currentTarget.className += "active"
      },

      //Functions to convert data to database format
      convertDisciplineToId(disciplineArea)
      {
        switch(disciplineArea)
        {
          case "None":
            return undefined;
          case "Programming-C++":
            return 1;
          case "Programming-Python":
            return 2;
          case "Software Engineering":
            return 3;
          case "Software Development Methodologies":
            return 4;
          case "Game Development":
            return 5;
          case "Data Structures and Algorithms":
            return 6;
          case "Computer Organization":
            return 7;
          case "Operating Systems":
            return 8;
          case "Programming Languages":
            return 9;
          case "Cybersecurity":
            return 10;
          case "Mobile Applications":
            return 11;
          case "Artificial Intelligence":
            return 12;
          case "Networks":
            return 13;
          case "Theory of Computation":
            return 14;
          case "Parallel and Distributed Systems":
            return 15;
          case "Virtual Reality":
            return 16;
          case "Hardware Designs":
            return 17;
          default:
            return undefined;
        }
      },

      //Instructor Functions
      onAddInstructor()
      {
        console.log(this.add_last_name, this.add_max_course_load, this.add_instructor_discipline_area1, this.add_instructor_discipline_area2, this.add_instructor_discipline_area3, this.add_instructor_discipline_area4)
        let disciplineID1 = this.convertDisciplineToId(this.add_instructor_discipline_area1)
        let disciplineID2 = this.convertDisciplineToId(this.add_instructor_discipline_area2)
        let disciplineID3 = this.convertDisciplineToId(this.add_instructor_discipline_area3)
        let disciplineID4 = this.convertDisciplineToId(this.add_instructor_discipline_area4)

        axios.post('http://localhost:3333/api/v0/setup/addInstructor', 
        {
          Last_Name: this.add_last_name, 
          Max_Course_Load: this.add_max_course_load, 
          Discipline_ID_1: disciplineID1, 
          Discipline_ID_2: disciplineID2, 
          Discipline_ID_3: disciplineID3, 
          Discipline_ID_4: disciplineID4
        })
        .then((response) => 
        {
          console.log(response)
        })

       
      },
      onModifyInstructor()
      {
      const lastName = document.getElementById("modify_last_name").value
      const maxCourseLoad = document.getElementById("modify_max_course_load").value
      const disciplineArea1 = document.getElementById("modify_instructor_discipline_area1").value
      const disciplineArea2 = document.getElementById("modify_instructor_discipline_area2").value
      const disciplineArea3 = document.getElementById("modify_instructor_discipline_area3").value
      const disciplineArea4 = document.getElementById("modify_instructor_discipline_area4").value
      console.log(lastName, maxCourseLoad, disciplineArea1, disciplineArea2, disciplineArea3, disciplineArea4)

      let disciplineID1 = this.convertDisciplineToId(disciplineArea1)
      let disciplineID2 = this.convertDisciplineToId(disciplineArea2)
      let disciplineID3 = this.convertDisciplineToId(disciplineArea3)
      let disciplineID4 = this.convertDisciplineToId(disciplineArea4)
      
      axios.post('http://localhost:3333/api/v0/setup/modify-instructor/' + currentInstructorID,
      {
        Last_Name: lastName, 
        Max_Course_Load: maxCourseLoad, 
        Discipline_ID_1: disciplineID1, 
        Discipline_ID_2: disciplineID2, 
        Discipline_ID_3: disciplineID3, 
        Discipline_ID_4: disciplineID4
      })
      .then((response) =>
      {
        console.log(response)
      })

      },

      createInstructorTable() {
        const instructorDiv = document.querySelector('div.instructors')
        let tableHeaders = ["ID", "Last Name", "Max Course Load", "Discipline Area 1", "Discipline Area 2", "Discipline Area 3", "Discipline Area 4"]
        while (instructorDiv.firstChild)
        {
          instructorDiv.removeChild(instructorDiv.firstChild);
        }

          let instructorTable = document.createElement('table')
          instructorTable.className = 'instructorTable'

          let instructorTableHead = document.createElement('thead')
          instructorTableHead.className = 'instructorTableHead'

          let instructorTableHeaderRow = document.createElement('tr')
          instructorTableHeaderRow.className = 'instructorTableHeaderRow'

        tableHeaders.forEach(header => {
          let instructorHeader = document.createElement('th')
          instructorHeader.innerText = header
          instructorTableHeaderRow.append(instructorHeader)
        })
        
        instructorTableHead.append(instructorTableHeaderRow)
        instructorTable.append(instructorTableHead)

        let instructorTableBody = document.createElement('tbody')
        instructorTableBody.className = 'instructorTable-Body'
        instructorTable.append(instructorTableBody)

        instructorDiv.append(instructorTable)
      },

      appendInstructors(singleInstructor) {
        const instructorTable = document.querySelector('.instructorTable')

        let instructorTableByBodyRow = document.createElement('tr')
        instructorTableByBodyRow.className = 'instructorTableByBodyRow'

        let instructorID = document.createElement('td')
        instructorID.innerText = singleInstructor.id;

        let instructorLastName = document.createElement('td')
        instructorLastName.innerText = singleInstructor.Last_Name

        let instructorMaxLoad = document.createElement('td')
        instructorMaxLoad.innerText = singleInstructor.Max_Course_Load

        let instructorDisciplineArea1 = document.createElement('td')
        if (singleInstructor.Discipline_Area1 == undefined)
        {
            instructorDisciplineArea1.innerText = ""
        }
        else
        {
        instructorDisciplineArea1.innerText = singleInstructor.Discipline_Area1
        }

        let instructorDisciplineArea2 = document.createElement('td')
        if (singleInstructor.Discipline_Area2 == undefined)
        {
            instructorDisciplineArea2.innerText = ""
        }
        else
        {
          instructorDisciplineArea2.innerText = singleInstructor.Discipline_Area2
        }

        let instructorDisciplineArea3 = document.createElement('td')
        if (singleInstructor.Discipline_Area3 == undefined)
        {
            instructorDisciplineArea3.innerText = ""
        }
        else
        {
          instructorDisciplineArea3.innerText = singleInstructor.Discipline_Area3
        }

        let instructorDisciplineArea4 = document.createElement('td')
        if (singleInstructor.Discipline_Area4 == undefined)
        {
            instructorDisciplineArea4.innerText = ""
        }
        else
        {
          instructorDisciplineArea4.innerText = singleInstructor.Discipline_Area4
        }

        let modifyInstructorButton = document.createElement("button")
        modifyInstructorButton.innerText = "Modify Instructor " + singleInstructor.id
        modifyInstructorButton.onclick = function () 
        {
          const modifyInstructorDialogBox = document.getElementById('modifyInstructorDialogBox')

          const lastNameField = document.getElementById("modify_last_name")
          lastNameField.value = singleInstructor.Last_Name

          const maxCourseLoadField = document.getElementById("modify_max_course_load")
          maxCourseLoadField.value = singleInstructor.Max_Course_Load

          const disciplineAreaField1 = document.getElementById("modify_instructor_discipline_area1")
          disciplineAreaField1.value = singleInstructor.Discipline_Area1

          const disciplineAreaField2 = document.getElementById("modify_instructor_discipline_area2")
          disciplineAreaField2.value = singleInstructor.Discipline_Area2

          const disciplineAreaField3 = document.getElementById("modify_instructor_discipline_area3")
          disciplineAreaField3.value = singleInstructor.Discipline_Area3

          const disciplineAreaField4 = document.getElementById("modify_instructor_discipline_area4")
          disciplineAreaField4.value = singleInstructor.Discipline_Area4

          currentInstructorID = singleInstructor.id

          modifyInstructorDialogBox.showModal()
        }

        let deleteInstructorButton = document.createElement("button")
        deleteInstructorButton.innerText = "Delete Instructor " + singleInstructor.id
        deleteInstructorButton.onclick = function () {
          alert("Instructor " + singleInstructor.id + " deleted")
          axios.delete('http://localhost:3333/api/v0/setup/delete-instructor/' + singleInstructor.id)
        }

        instructorTableByBodyRow.append(instructorID, instructorLastName, instructorMaxLoad, instructorDisciplineArea1, instructorDisciplineArea2, instructorDisciplineArea3, instructorDisciplineArea4, modifyInstructorButton, deleteInstructorButton)
        instructorTable.append(instructorTableByBodyRow)
      },

      getInstructors() {
        fetch('http://localhost:3333/api/v0/setup/instructors')
        .then(res => res.json())
        .then(instructors => {
          this.createInstructorTable()

          for (const instructor of instructors) {
            let instructorIndex = instructors.indexOf(instructor) + 1
            console.log(instructor)
            this.appendInstructors(instructor, instructorIndex)
          }
        })
      } 
    }


})

</script>