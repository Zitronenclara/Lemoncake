const config = {
    version: 1
}

/**
* All birthday information of a user
* 
* @class
* @constructor
* @public
*/
module.exports.birthdayData = class {
    /**
     * Creates an instace of birthdayData
     *
     * @since 1.0.0
     */
    constructor(){
        this.version = config.version
        this.day = 0
        this.month = 0
        this.year = 0
        this.private = true
    }

    /**
     * Loads already existing birthdayData into a new instance
     *
     * @since 1.0.0
     * @param {Object} data The birthdayData
     * @returns {ThisParameterType} birthdayData instance
     */
    static load(data){
        const bd = new this()
        bd.version = data.version
        bd.day = data.day
        bd.month = data.month
        bd.year = data.year
        bd.year = data.year
        return bd
    }
}