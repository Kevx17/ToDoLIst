class Project {
    constructor(title, description) {
        this.title = title;
        this.name = title.toLowerCase();
        this.description = description;
        this.toDos = [];

    }


    add_ToDo(obj) {
        this.toDos.push(obj);
    }

}

export default Project;
