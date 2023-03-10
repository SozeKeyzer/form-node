const formModel=require('../model/formModel');

module.exports={
    showForm:(req,res)=>{
           res.render('myForm');
    },
    saveInfo:(req,res)=>{
       const name= req.body.name;
       console.log('inside saveinfo');
       console.log(req.body.name);
       console.log(req.body);
        // formModel.addName(name,()=>{
        //     console.log('name added');
        //     res.render('myForm');
        // });

 }
   };