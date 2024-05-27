const sequelize = require('../config/config')
const { Sequelize, DataTypes } = require('sequelize');
const { users } = require('./userModel') 

const notifications = sequelize.define('notifications', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    user_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: users,
            key: 'id'}
    },
    title : {
        type : DataTypes.STRING,
        allowNull: false
    },
    message:{
        type: DataTypes.TEXT,
    },
    timestamp:{
        type: DataTypes.DATE,
        defaultValue : Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    indexes : [
        {
            name : 'index_user_id',
            fields : ['user_id']
        }
    ]
}) 

module.exports = {notifications}