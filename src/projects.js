class Project{
    _name 
    _description
    id
    constructor(name,id=crypto.randomUUID(), description=""){
        this._name = name 
        this.id = id
        this._description = description

    }
    getId(){
        return this.id
    }
    getName(){
        return this._name
    }
    getDescription(){
        return this._description
    }
    setName(value){
        this._name = value
    }
    setDescription(value){
        this._description = value
    }

   
 }

// const Project = function(projectName){
//     let name = projectName 
//     let description
//     let id = crypto.randomUUID()
    
//     const getId = () => {
//         return this.id
//     }
//     const getName =() => {
//         return this.name
//     }
//    const getDescription = () => {
//         return this.description
//     }
//     const  setName = (value) => {
//         name = this.value
//     }
//     const setDescription = (value) => {
//         description = this.value
//     }
//     return {name,description,id,getId,getName,setName,setDescription,getDescription}

// }
export default Project