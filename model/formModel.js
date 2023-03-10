const db = require('../config/database');

module.exports={
  addName:(name)=>{
    const sql = 'INSERT INTO names VALUES (?)';
    const values = [name];
        db.query(sql,values,(error,result)=>{
      if(error) console.log(error);
      else console.log(result);
    });
  }
};