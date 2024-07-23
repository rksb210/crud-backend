import TeamModel from "../models/team/teamModel.js"



const teamServices = {
    getAllTeam : async (managerId) =>{
        const team = await TeamModel.findAll({
            where:{
                 registration_id : managerId
            }
        })
        return team
    },
    editTeam: async (body, id) => {      
        await TeamModel.update(body,{
            where: {
                team_id: id
            }
        })
        return { msg: "User Updated Successfully!" }
    },
    deleteTeam: async (id) => {
        await TeamModel.destroy({
            where: {
                team_id: id
            }
        })
        return { msg: "Team Deleted Successfully!" }
    },
    addTeam: async (body,id) => {
        await TeamModel.create({...body, registration_id: id});
        return { msg: 'Team Added Successfully' }
    },



}



export default teamServices