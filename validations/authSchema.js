import Joi from  "joi"

//joi is used for check type of body that comes from frontend

const authSchema = {
    register:Joi.object().keys({
        username:Joi.string().required(),
        emailid:Joi.string().required(),
        password:Joi.string().required(),
    }),
    login:Joi.object().keys({
        emailid:Joi.string().required(),
        password:Joi.string().required(),
    }),
    delete:Joi.object().keys({
        id:Joi.number().required(),
    }),
    update : Joi.object().keys({
        username:Joi.string().required(),
        emailid:Joi.string().required(),
        password:Joi.string().required(),
       }),
}

export default authSchema