const db = require('../config/database');

module.exports={
  addName:(id,name,callback)=>{
    const sql = 'INSERT INTO info (id,name) VALUES (?, ?)';
    const values = [id,name];
        db.query(sql,values,(error,result)=>{
      if(error) console.log(error);
      else console.log(result);
      callback();
    });
  },
  getName:(id,callback)=>{
    const sql = 'SELECT name FROM info WHERE id = ?';
    const values = [id];
      db.query(sql,values,(error,result)=>{
        if (error) {
          console.log(error);
          callback(error, null);  // Call the callback function with the error
          return;
        }
        const name =result[0].name;
        callback(null, name);   // Call the callback function with the name
      });
  },
  delName:(id,callback)=>{
    const sql=`DELETE FROM info WHERE id = ?`;
    const values=[id];
    db.query(sql,values,(error,result)=>{
      if(error) console.log(error);
      else callback();
    });
  },
  upName:(id,name,callback)=>{
    const sql='UPDATE info SET name = ? WHERE id = ?';
    const values=[name,id];
    db.query(sql,values,(error,result)=>{
      if(error) console.log(error);
      else callback();
    })
  }
};

