<template>

<div class='schedule'></div>

<div class="row">
    <div class="col-md-6 offset-md-3">
           <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
        
       <form>
           <table class="table">
  <thead>
    <tr>
      <th scope="col">Course Reference #</th>
      <th scope="col">Course Section #</th>
      <th scope="col">Class</th>
      <th scope="col">Instructor</th>
      <th scope="col">Time Period</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
  </tbody>
</table>
           <div class="my-3">
               <div class="my-3">
               <button v-on:click="getSchedules" type="submit" class="btn btn-primary" buttonText="Edit">Edit</button>
           </div>
               <router-link class="nav-link" to="/homepage">
               <button type="submit" class="btn btn-primary" buttonText="Submit"></button>
           </router-link>
           </div>
       </form>
    </div>
    </div>
</div>
</template>

<script>

const scheduleDiv = document.querySelector('div.schedule')
let tableHeaders = ["Section CRN", "Section Number, Section Course Title", "Instructor Last Name"]

const createScheduleTable = ()  => {
  while (scheduleDiv.firstChild)
  {
    scheduleDiv.removeChild(scheduleDiv.firstChild);
  }

    let scheduleTable = document.createElement('table')
    scheduleTable.className = 'scheduleTable'

    let scheduleTableHead = document.createElement('thead')
    scheduleTableHead.className = 'scheduleTableHead'

    let scheduleTableHeaderRow = document.createElement('tr')
    scheduleTableHeaderRow.className = 'scheduleTableHeaderRow'

  tableHeaders.forEach(header => {
    let scheduleHeader = document.createElement('th')
    scheduleHeader.innerText = header
    scheduleTableHeaderRow.append(scheduleHeader)
  })
  
  scheduleTableHead.append(scheduleTableHeaderRow)
  scheduleTable.append(scheduleTableHead)

  let scheduleTableBody = document.createElement('tbody')
  scheduleTableBody.className = 'scheduleTable-Body'
  scheduleTable.append(scheduleTableBody)

  scheduleDiv.append(scheduleTable)
}

const appendSections = (singleSection, singleSectionIndex) => {
  const scheduleTable = document.querySelector('.scheduleTable')

  let scheduleTableByBodyRow = document.createElement('tr')
  scheduleTableByBodyRow.className = 'scheduleTableByBodyRow'

  let sectionCRN = document.createElement('td')
  sectionCRN.innerText = singleSection.section.course.courseReferenceNumber;

  let section_Number = document.createElement('td')
  section_Number.innerText = singleSection.section.sectionNumber

  let sectionCourseTitle = document.createElement('td')
  sectionCourseTitle.innerHTML = singleSection.section.course.courseTitle

  let instructorName = document.createElement('td')
  instructorName.innerHTML = singleSection.instructor.lastName

  scheduleTableByBodyRow.append(sectionCRN, section_Number, sectionCourseTitle, instructorName)
  scheduleTable.append(scheduleTableByBodyRow)
}

const getSchedules = () => {
  axios.get('http://localhost:3333/api/v0/assistant/scheduler')
  .then(res => res.json())
  .then(sections => {
    createScheduleTable()

    for (const section of sections) {
      let sectionIndex = sections.indexOf(section) + 1
      console.log(section)
      appendSections(section, sectionIndex)
    }
  })
}

import axios from "axios"

export default {
    data() {
    return {
        schedule: null
    }
    },
    methods: {
      onScheduling: function(event) {
        axios.get(
            'http://localhost:3333/api/v0/assistant/scheduler',
        ).then((response) => {
          this.schedule = response;
          console.log(response);
        });
      },
  },
}
</script>