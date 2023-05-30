const fs =require ('fs')

const yargs= require ("yargs")
 const data5 = require ("./data5")
//add command

yargs.command({
    command:"add",
    describe:"to add an item",
    builder:{
     fname:{
       describe:"this is the first name in add command ",
       demandOption:true,//you must choose it 
       type:"string"
     },
     lname:{
       describe:"this is the last name in add command ",
       //demandOption:true,//you must choose it 
       type:"string"
     }  
    },
    handler :(x) =>{
       data5.addperson(x.fname , x.lname , x.age , x.city , x.id)
 
    }
 })
  console.log(yargs.argv)
 
 //yargs.parse()
 /////////////////////////////////////////////////////////////////////
 //to delet command 
 yargs.command ({
    command:"delete",
    describe:"to delete an item",
    
    handler :(x) =>{
       data5.deletedData( x.id)
 
    }
 })
  console.log(yargs.argv)
/////////////////////////////////////////////////////////////////////////
//to read command  
yargs.command({
    command :"read",
    describe : "to read data",
    builder :{
       id :{
          describe :"this is id desc in read command",
          demandOption :true,
          type:"string"
       }
    },
    handler :(x) =>{
       data5.readData(x.id)
    }
 })
 //console.log(yargs.argv)
  yargs.parse()
  ////////////////////////////////////////////////////////////////////////
  //to list command
  yargs.command({
    command :"list",
    describe : "to list data",
    handler :() =>{
       data5.listData()
    }
 })
 console.log(yargs.argv)
 ///////////////////////////////////////////////////////////
 


