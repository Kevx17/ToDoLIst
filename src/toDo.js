class ToDo {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.name = title.toLowerCase();
        this.finished =false;
    }


}

export default ToDo;