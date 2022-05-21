'use strict'

const AddInstructor = use('App/Models/AddInstructor');
const AddDisciplineArea = use('App/Models/AddDisciplineArea')
const AddSection = use('App/Models/AddSection');
const Database = use('Database')

class SetupController {
    async setup({request}) {
        return 'Some test';
    }

    async addInstructor({request, response}) 
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

        return response.status(200).json({ 
            userInstructor,
            userDisciplineArea,
            message: 'Thank you for your input'
        });  
    }  
        
    

    async addSection({request, response}) {
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
        return response.status(200).json({ 
            userSection,
            message: 'Thank you for your input',
        });
    }

  async deleteSection({request, params, response}) {
        await Database
            .query()
            .from('sections')
            .where('id', params.id)
            .delete()
        console.log("The row id: "+ params.id + " has been deleted.")
        return response.status(200).json({
            message: "Section_id: "+ params.id + " has been deleted."
        })
    }

    async deleteInstructor({request, params, response}) {
        await Database
            .query()
            .from('instructors')
            .where('id', params.id)
            .delete()
        console.log("The row id: "+ params.id + " has been deleted.")
        return response.status(200).json({
            message: "Instructor_id: "+ params.id + " has been deleted."
        })
    }

    async listSections({request, response}) {
        const sectionList = await Database
            .query()
            .from('sections')
            .select('Course_Reference_Number', 'Section_Number','Meeting_Period_1_Days','Meeting_Period_1_Start','Meeting_Period_1_End',
    'Meeting_Period_2_Days','Meeting_Period_2_Start','Meeting_Period_2_End','Meeting_Period_3_Days','Meeting_Period_3_Start','Meeting_Period_3_End')
        return response.status(200).json({sectionList});
    }

    
    async listInstructors({request, response}) {
        const instructorList = await Database
            .query()
            .from('instructors')
            .select('id', 'Last_Name', 'Max_Course_Load')
        return response.status(200).json({instructorList});
    }
}


module.exports = SetupController
