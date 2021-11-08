// IMPORTANT IMPORTS
const Birthday = require('./Birthday.js')

/**
 * Loads already existing birthdayData into a new instance
 *
 * @since 1.0.0
 * @param {Object} data The module data of a user
 * @returns {Object} The module data with all module class instances
 */
module.exports.loadData = function (data){
    let res;
    if (!data){
        res = {birthdayData: new Birthday.birthdayData()}
    }else{
        res = {birthdayData: Birthday.birthdayData.load(data.birthdayData)}
    }
    return res
}