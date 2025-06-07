class Todo{
    #title
    #notes
    #project
    #id 
    #priority
    #complete
    #dueDate

    constructor(title,project){
        this.#title = title
        this.#id = crypto.randomUUID()
        this.#priority = 1
        this.#project = project
        this.#complete = false
        this.#dueDate = new Date()

    }
    getId(){
        return this.#id
    }
    getTitle(){
        return this.#title
    }
    setTitle(value){
        this.#title = value
    }
    getNotes(){
        return this.#notes
    }
    setNotes(value){
        this.#notes = value
    }
    getProject(){
        return this.#project
    }
    setProject(value){
        this.#project = value
    }
    getComplete(){
        return this.#complete
    }
    toggleComplete(){
        this.#complete = ! this.#complete
    }
    getPriorirty(){
        return this.#priority
    }
    setPriority(value){
        this.#priority = value
    }
    getDueDate(){
        return this.#dueDate
    }
    setDueDate(value){
        this.#dueDate = new Date(value)
    }

    
}
export default Todo