const config = {
    version: 1,
    minYear: 1904,
    maxYearGap: 6,
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthDays: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    suffix: ["st", "nd", "rd"],
    reasons: {
        alreadySet: "You already set your birthday and you can't edit it anymore. If you accidentally set a wrong birthday, feel free to DM me: `Clara#6666`.",
        invalidDate: "The given date is invalid or cannot be used."
    }
}

/**
* All birthday information of a user
* 
* @version 1.0.0
* @class
* @constructor
* @public
*/
class birthdayData {
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
        this.leap = false
        this.set = false
        this.private = false
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
        bd.leap = data.leap
        bd.set = data.set
        bd.private = data.private
        return bd
    }

    /**
     * Sets new user birthday
     *
     * @since 1.0.0
     * @param {Number} day Day of birth
     * @param {Number} month Month of birth
     * @param {Number} year Year of birth
     * @returns {Object} if successful + further information
     */
    setBirthday(day, month, year){
        if (this.set === true){
            return {success: false, reason: config.reasons.alreadySet}
        }

        let validation = validateDate(day, month, year)
        if (validation.valid){
            this.day = day;
            this.month = month;
            if (year) this.year = year;
            this.set = true;
            this.leap = validation.leap;
            return {success: true, leap: this.leap}
        }else{
            return {success: false, reason: config.reasons.invalidDate}
        }
    }

    /**
     * Beautifies the birthdate
     *
     * @since 1.0.0
     * @returns {String} beautified birthdate
     */
    beautify(){
        let result = ""+this.day
        if (this.day % 10 >= 1 && this.day % 10 <=3 && this.day < 11 || this.day > 13){
            result += config.suffix[this.day%10 - 1]
        }else{
            result += "th"
        }
        result += " "+config.monthNames[this.month - 1]
        
        if (this.year !== 0 && this.private === false) result+=" "+this.year
        return result
    }

    /**
     * Returns the age from the set birthdate
     *
     * @since 1.0.0
     * @returns {Number} age
     */
    age(){
        let dif = new Date() - this.getDate()
        return Math.abs(new Date (dif).getUTCFullYear() - 1970)
    }

    /**
     * Returns the birthdate as a date object
     *
     * @since 1.0.0
     * @returns {Date} birthdate
     */
    getDate(){
        return new Date(this.year, this.month-1, this.day)
    }
}

/**
 * Checks if a date is valid or not
 *
 * @since 1.0.0
 * @param {Number} day Day of birth
 * @param {Number} month Month of birth
 * @param {Number} year Year of birth
 * @returns {Object} date validation object
 */
function validateDate(day, month, year = config.minYear){
    let maxYear = new Date().getFullYear() - config.maxYearGap
    let leap = (day == 29 && month == 2);
    let valid = (year >= config.minYear) && (year <= maxYear) && (day <= config.monthDays[month - 1])
    if (leap && !(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))){
        valid = false
    }
    return {valid: valid, leap: leap}
}

module.exports = {
    birthdayData: birthdayData,
    validateDate: validateDate
}