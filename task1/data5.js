const fs = require("fs")
const yargs = require("yargs")
//add command
const addperson = (fname , lname , age , city , id) => {
const allData = loadInfo()
const duplicatedData = allData.filter ((obj) => {
    return obj.id === id
})
if (duplicatedData.length == 0 ){

allData.push({
    id : id,
    fname:fname,
    lname:lname,
    age:age,
    city:city
})
saveallData(allData)
}
else{
   console.log("ERROR DUPLICATEDDATA")
}
}
//////////////////////
const loadInfo = () => {
    try {
    const datajson = fs.readFileSync("data5.json").toString()
    return JSON.parse(datajson)
    }catch{
        return[]
    }
}
//////////////////////////////////////////

const saveallData =(allData)=>{
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data5.json" , saveallDataJson)
}
///////////////////////////////////////////////////////////////////////////////////
//to delete data
const deletedData =(id) => {
    const allData = loadInfo()
    const dataTokeep= allData.filter ((obj) =>{
        return obj.id != id 
    })
    saveallData(dataTokeep)
    console.log("you have succesfuly deleted data")
}
////////////////////////////////////////////////////////////////////////////////////
//to read data
const readData = (id) => {
    const allData = loadInfo()

    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })
    console.log(itemNeeded)
if(itemNeeded){
    console.log(itemNeeded)
}else{
    console.log("id needed not found")
}
}
///////////////////////////////////////////////////////////////
//to list data
const listData = () => {
    const allData = loadInfo()
    allData.forEach((obj) => {
      // console.log(obj.fname,obj.lname,obj.city) 
       //console.log(obj.fname,obj.lname,obj.age) 
       console.log(obj.fname,obj.age,obj.city) 

    })

}
console.log(yargs.argv)
 //to run app 
 module.exports = {
    addperson,
  deletedData,
  readData,
   listData
}