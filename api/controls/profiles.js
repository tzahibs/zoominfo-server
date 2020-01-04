const Sql = require("../classes/sql")
class ProfilesCtrl {
    constructor(req) {
        this.sql = new Sql();
        this.data = req.query;
    }

    async request(){
       const {value,by,search}  = this.data
       var extended = this.notEmpty(search) ? ` WHERE name LIKE '%${search}%' OR title LIKE '%${search}%' OR location LIKE '%${search}%' OR hq_phone LIKE '%${search}%' OR email LIKE '%${search}%'  OR \`update\` LIKE '%${search}%'` : ""
       var query =  `SELECT * FROM profiles ${extended} ORDER BY \`${value}\` ${by} `
       console.log(query)
       return await this.sql.getQuery(query)
    }

    notEmpty(val){
        return typeof val != "undefined" && val != null  && val!=""
    }
}

module.exports = ProfilesCtrl
