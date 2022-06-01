<template>
<body>
  <div style="background-color:#640309;">
        <img alt="UALRlogo" src="../assets/ualr.png">
    </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">
    </div>
</div>
<center>
<div style="padding-top: 50px;" class='schedule'></div>
<br>
</center>
</body>
</template>

<script>

const createScheduleTable = ()  => {
  const scheduleDiv = document.querySelector('div.schedule')
  let tableHeaders = ["CRN", "Section Number", "Course Title", "Instructor"]
  
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

 const appendSections = (singleSection) => {//singleSectionIndex
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
  var url = ''
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:3333'
    } else {
      url = 'https://test-adoni.herokuapp.com'
    }
  fetch(`${url}/api/v0/assistant/scheduler`)
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
export default ({
  name: "MySchedule",
  data() {
      return {
      };
  },
  mounted: function() {
      this.$nextTick(function () 
      {
        const token = localStorage.getItem('user')
        if (!token)
        {
          this.$router.push({path:'./login'})
        }
        console.log("HI")
        this.schedule()
      })
  },
  methods: {
      schedule() {
          getSchedules()
          }
      },
  })

</script>