const myModel=require('../model/formModel');

module.exports={
 homePage:(req,res)=>{
        res.send('home');
 },
 saveInfo:(req,res)=>{
       const name= req.params.name;
       const id=req.params.id;
       console.log('inside saveinfo');
       console.log(name);
       console.log(id);
        myModel.addName(id,name,()=>{
             res.send('saved to database');
        });
       
},
 getInfo:(req,res)=>{
       const id=req.params.id;
       console.log('inside getinfo');
       console.log(id);
     myModel.getName(id,(error,name)=>{
       if (error) {
              res.status(500).send('Error retrieving user name');
              return;
            }
            res.send(`User name: ${name}`);
          });
},
 delInfo:(req,res)=>{
       const id=req.params.id;
       console.log('inside delInfo');
       console.log(id);
       myModel.delName(id,()=>{
              res.send('data removed');
       });
},
 updateInfo:(req,res)=>{
       const name= req.params.name;
       const id=req.params.id;
       console.log('inside updateInfo');
       myModel.upName(id,name,()=>{
              res.send('data updated');
       });  
 }
};