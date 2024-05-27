const {countrys} = require('../model/countryModel')

const getCountrysList = (res) => {
    try {
        const countryList = countrys.findAll({
            order : [['name', 'ASC']]
        })
        res.status(200).json(countryList)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const getCountryNameById = async (req, res, next) => {
    try {
        const countryId = req.userdata.country
        const country_name = await countrys.findByPK(countryId)
        req.userdata.country = country_name
        return next()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})   
    }
}

module.exports = {getCountrysList, getCountryNameById}