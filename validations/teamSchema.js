import Joi from  "joi"

const teamSchema = {
        team:Joi.object().keys({
        member_name:Joi.string().required(),
        designation:Joi.string().required(),
        phonenumber:Joi.string().required(),
        salary:Joi.number().required(),
        team_id:Joi.number(),
        registration_id:Joi.number(), 
        }),
        delete:Joi.object().keys({
            id:Joi.number()
        }),
        addteam:Joi.object().keys({
            member_name:Joi.string().required(),
            designation:Joi.string().required(),
            phonenumber:Joi.string().required(),
            salary:Joi.number().required(),
            team_id:Joi.number(),
            registration_id:Joi.number(), 
            }),
}
export default teamSchema