import RegistrationModel from "../models/user/registrationModel.js"
import BadRequestError from "../errors/badRequest.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const authService = {
    register: async (body) => {
        const { username, emailid, password } = body;
        const isUserExist = await RegistrationModel.findOne({ where: { emailid }, raw: true })
        if (isUserExist) {
            throw new BadRequestError("User already exists")
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await RegistrationModel.create({
            username, emailid, password: hashedPassword
        });
        return { msg: 'User Created Successfully' }
    },
    login: async (body) => {
        const { emailid, password } = body
        const user = await RegistrationModel.findOne({ where: { emailid }, raw: true })
        if (!user) {
            throw new BadRequestError("Account does not exists")
        }
        const hashedPassword = user.password
        const isMatched = await bcrypt.compare(password, hashedPassword)
        if (!isMatched) {
            throw new BadRequestError("Email/Password is incorrect!")
        }

        const token = jwt.sign({ username: user.username, emailid }, process.env.JWT_SECRET, { expiresIn: "30m" });
        return { ...user, token };
    },

    getUsers: async (page,size) => {

        const offset = (page - 1) * size              //skip number of pages
        const total = await RegistrationModel.count()
        const users = await RegistrationModel.findAll({
            offset:offset,
            limit:size
        })
        return {users,total,page,size}
    },
    editUsers: async (body, id) => {
        const { username,emailid, password } = body
        const hashedPassword = await bcrypt.hash(password, 10)
        await RegistrationModel.update({
            username,
            emailid,
            password:hashedPassword
        }, {
            where: {
                registration_id: id
            }
        })
        return { msg: "User Updated Successfully!" }
    },
    deleteUsers: async (id) => {
        await RegistrationModel.destroy({
            where: {
                registration_id: id
            }
        })
        return { msg: "User Deleted Successfully!" }
    }
}

export default authService