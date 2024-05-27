const {contactus} = require('../model/contactusModel')

const createForm = async (req, res) => {
    try {
        const { name, email, message } = req.query
        if (!name || !email || !message) {
            return res.status(400).json({message : 'name or email or message is required'})
        }
        const result = await contactus.create({
            id : '',
            name : name,
            email : email,
            message : message
        })
        res.status(201).json({})
    } catch (error) {
        
    }   
}

const getForm = async (req, res) => {
    try {
        const {idForm, email} = req.query
        if (!idForm) {
            return res.status(400).json({message : "idForm is required"})
        } 
        const result = await contactus.findAll({
            where : {
                id : idForm
            }
        })
    } catch (error) {
        
    }
}

module.exports = {createForm, getForm}