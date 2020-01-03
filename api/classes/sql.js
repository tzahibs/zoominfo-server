var mysql = require('mysql');

class Sql{
    constructor(){
        this.connection = mysql.createConnection({
            host     : '35.225.75.114',
            user     : 'rayman',
            password : 'rayman2841986',
            database : 'zoominfo'
        });
    }


    getQuery(query){
        return new Promise(resolve =>{
            try{
                this.connection.connect();
                
                this.connection.query(query, async (error, results, fields) => {
                    if (error) 
                        resolve(false)
                    resolve(results)
                });
                
                this.connection.end();
            }catch(ex){
                resolve(false)
            }
        })
     
    }

}
module.exports = Sql