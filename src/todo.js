class Todo{
    _title
    _notes
    _project
    _id 
    _priority
    _complete
    _dueDate

    constructor(title,project,id = crypto.randomUUID(),priority = 1,complete = false,dueDate = new Date().toISOString().split("T")[0],notes){
        this._title = title
        this._id = id
        this._priority = priority
        this._project = project
        this._complete = complete
        this._dueDate =dueDate
        this._notes = ""

    }
    getId =() =>{
        return this._id
    }
   getTitle =() =>{
        return this._title
    }
    setTitle(value){
        this._title = value
    }
   getNotes =() =>{
        return this._notes
    }
    setNotes(value){
        notes = value
    }
   getProject =() =>{
        return this._project
    }
    setProject(value){
        this._project = value
    }
    getComplete =() =>{
        return this._complete
    }
    toggleComplete =() =>{
        this._complete = ! this._complete
    }
    getPriority =() =>{
        return this._priority
    }
    setPriority(value){
        this._priority = value
    }
   getDueDate =() =>{
        return this._dueDate
    }
    setDueDate(value){
        this._dueDate = new Date(value).toISOString().split("T")[0]
    }

    
}
// Todo = (function(todoTitle,todoProject) {
//     let title = todoTitle
//     let id = crypto.randomUUID()
//     let priority = 1
//     let project = todoProject
//     let notes = ""
//     let complete = false
//     let dueDate = new Date().toISOString().split("T")[0]


// getId =() =>{
//         return this.id
//     }
//  getTitle =() =>{
//         return this.title
//     }
//    setTitle = (value) =>{
//         this.title = value
//     }
//    getNotes =() =>{
//         return this.notes
//     }
//    setNotes = (value)=>{
//         this.notes = value
//     }
//    getProject =() =>{
//         return this.project
//     }
//     setProject =(value) => {
//         this.project = value
//     }
//     getComplete =() =>{
//         return this.complete
//     }
//     toggleComplete =() =>{
//         this.complete = ! complete
//     }
//     getPriority =() =>{
//         return this.priority
//     }
//     setPriority = (value) => {
//         this.priority = value
//     }
//    getDueDate =() =>{
//         return this.dueDate
//     }
//     setDueDate = (value) => {
//         this.dueDate = new Date(value).toISOString().split("T")[0]
//     }
   

//     return {title,notes,project,dueDate,complete,id,priority,getId,getComplete,toggleComplete,getDueDate,setDueDate,setNotes,getNotes,setPriority,getPriority,setProject,getProject,getTitle,setTitle}
// })
export default Todo