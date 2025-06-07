class Project{
    #name 
    #description
    id
    constructor(name){
        this.#name = name 
        this.id = crypto.randomUUID()

    }
    getId(){
        return this.id
    }
    getName(){
        return this.#name
    }
    getDescription(){
        return this.#description
    }
    setName(value){
        this.#name = value
    }
    setDescription(value){
        this.#description = value
    }

   
}
export default Project