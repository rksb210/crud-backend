
import CountryModel from "../models/dropdown/countryModel.js"
import StateModel from "../models/dropdown/stateModel.js"
import DistrictModel from "../models/dropdown/districtModel.js"
import TownModel from "../models/dropdown/townModel.js"

const dropdownServices = {
   
        country: async () => {
            const countries = await CountryModel.findAll({})
            return countries
        },
        state: async (id) => {
         console.log(id)
        const states = await StateModel.findAll({
            where:{
                country_id:id
            }
        })            
        return states
        },
        district: async (id) => {
            console.log(id)
           const district = await DistrictModel.findAll({
               where:{
                   state_id:id
               }
           })            
           return district
           },
           town: async (countryId,stateId,districtId) => {

           const town = await TownModel.findAll({
               where:{
                   country_id:Number(countryId),
                   state_id:Number(stateId),
                   district_id:Number(districtId),
               }
           })            
           return town
           },
    
}

export default dropdownServices