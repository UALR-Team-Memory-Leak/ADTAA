'use strict'

const AddInstructor = use('App/Models/AddInstructor');
const AddDisciplineArea = use('App/Models/AddDisciplineArea')
const AddSection = use('App/Models/AddSection');
const Database = use('Database')

class SetupController {
    async setup({request}) {
        return 'Some test';
    }

    async addInstructor({request}) 
    {
        const {Last_Name, Max_Course_Load} = request.all();
        console.log(Last_Name, Max_Course_Load);
        const userInstructor = await AddInstructor.create(
            {
                Last_Name,
                Max_Course_Load,
            });
        //return{ userInstructor, message: 'Added ' + userInstructor.Last_Name + ' to the database'};
        const{Discipline_ID} = request.all();
        console.log(Discipline_ID);
        const userDisciplineArea = await AddDisciplineArea.create(
        {
            Instructor_ID : userInstructor.id, Discipline_ID 
        });

        return{ userInstructor, userDisciplineArea,  message: 'Thank you for your input'};  
    }  
        
    

    async addSection({request}) {
        const {
            Course_Reference_Number, 
            Section_Number,

            Meeting_Period_1_Days,
            Meeting_Period_1_Start,
            Meeting_Period_1_End,

            Meeting_Period_2_Days,
            Meeting_Period_2_Start,
            Meeting_Period_2_End,

            Meeting_Period_3_Days,
            Meeting_Period_3_Start,
            Meeting_Period_3_End
        } = request.all();

        //prints data to console
        console.log( Course_Reference_Number, Section_Number, Meeting_Period_1_Days, Meeting_Period_1_Start, Meeting_Period_1_End,
                     Meeting_Period_2_Days,Meeting_Period_2_Start,Meeting_Period_2_End, 
                     Meeting_Period_3_Days, Meeting_Period_3_Start, Meeting_Period_3_End) 

        const userSection = await AddSection.create({ //instead of creating a User, create a Request
            Course_Reference_Number, 
            Section_Number,

            Meeting_Period_1_Days,
            Meeting_Period_1_Start,
            Meeting_Period_1_End,

            Meeting_Period_2_Days,
            Meeting_Period_2_Start,
            Meeting_Period_2_End,

            Meeting_Period_3_Days,
            Meeting_Period_3_Start,
            Meeting_Period_3_End
        });
        return{ 
            userSection,
            message: 'Thank you for your input',
        };
    }

  async deleteSection({request, params}) {
        await Database
            .query()
            .from('sections')
            .where('id', params.id)
            .delete()
        console.log("The row id: "+ params.id + " has been deleted.")
        return{message: "Section_id: "+ params.id + " has been deleted."}
    }

    async deleteInstructor({request, params}) {
        await Database
            .query()
            .from('instructors')
            .where('id', params.id)
            .delete()

        await Database
            .query()
            .from('instructor_disciplines')
            .where('Instructor_ID', params.id)
            .delete()

        console.log("The row id: "+ params.id + " has been deleted.")
        return{message: "Instructor_id: "+ params.id + " has been deleted."}
    }

    async deleteCourse({request, params}) {
        await Database
            .query()
            .from('courses')
            .where('id', params.id)
            .delete()

        console.log("The row id: "+ params.id + " has been deleted.")
        return{message: "Course_id: "+ params.id + " has been deleted."}
    }

    async listSections({request}) {
        const sectionList = await Database
            .query()
            .from('sections')
            .select('id', 'Course_Reference_Number', 'Section_Number','Meeting_Period_1_Days','Meeting_Period_1_Start','Meeting_Period_1_End',
            'Meeting_Period_2_Days','Meeting_Period_2_Start','Meeting_Period_2_End','Meeting_Period_3_Days','Meeting_Period_3_Start','Meeting_Period_3_End')
        return sectionList;
    }
    
    async listInstructors({request}) {
        const instructorList = await Database
            .query()
            .from('instructors')
            .select('id', 'Last_Name', 'Max_Course_Load')

        const instructorDisciplineList = await Database
            .query()
            .from('instructor_disciplines')
            .join('discipline_areas', 'instructor_disciplines.Discipline_ID', '=', 'discipline_areas.id')
            .join('instructors', 'instructor_disciplines.Instructor_ID', '=', 'instructors.id')
            .select('Last_Name', 'Discipline_Area')

        for (let i = 0; i < instructorList.length; i++)
        {
            let disciplineNumber = 1;
            for (let j = 0; j < instructorDisciplineList.length; j++)
            {
                if (instructorList[i].Last_Name == instructorDisciplineList[j].Last_Name)
                    {
                        instructorList[i]["Discipline_Area"+(disciplineNumber)] = instructorDisciplineList[j].Discipline_Area;
                        disciplineNumber++;
                    }
            }
        }

        return instructorList;
    }

    async listCourses({request}) {
        const courseList = await Database
            .query()
            .from('courses')
            .select('id', 'Course_Reference_Number', 'Department_Code', 'Course_Number', 'Course_Title')

        const courseDisciplineList = await Database
            .query()
            .from('course_disciplines')
            .join('discipline_areas', 'course_disciplines.Discipline_ID', '=', 'discipline_areas.id')
            .select('Course_Reference_Number', 'Discipline_Area')

        for (let i = 0; i < courseList.length; i++)
        {
            let disciplineNumber = 1;
            for (let j = 0; j < courseDisciplineList.length; j++)
            {
                if (courseList[i].Course_Reference_Number == courseDisciplineList[j].Course_Reference_Number)
                    {
                        courseList[i]["Discipline_Area"+(disciplineNumber)] = courseDisciplineList[j].Discipline_Area;
                        disciplineNumber++;
                    }
            }
        }

        return courseList;
    }
}

module.exports = SetupController
