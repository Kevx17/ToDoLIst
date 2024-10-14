import ToDo from "./toDo.js";
import Project from "./Project.js";
import { createProject, projects } from "./index.js";

class Dom_manipulator {
    constructor() {
        
    }


    add_project(obj) {
        const main = document.querySelector('main');
        let project = document.createElement('div');
        project.id = obj.name;
        project.classList.add('project');
        let title = document.createElement('h2');
        title.innerHTML = obj.title;
        let desc = document.createElement('p');
        desc.innerHTML = obj.description;
        let arrow = document.createElement('i')
        let bin = document.createElement('i')
        let add = document.createElement('i')
        arrow.classList.add('fa-solid', 'fa-arrow-down');
        bin.classList.add('fa-solid', 'fa-trash-can');
        bin.onclick = () => {
            let delte_this = bin.closest('.project');
            let div_id = delte_this.id;
            delte_this.remove();
        };
        add.classList.add('fa-solid', 'fa-plus');

        let content = document.createElement('div');
        content.id = obj.name + "_toDo";
        content.classList.add('content');

        project.appendChild(title);
        project.appendChild(desc);
        project.appendChild(add);
        project.appendChild(arrow);
        project.appendChild(bin);
        main.appendChild(project);
        project.appendChild(content);
    }


    add_ToDo(project, toDoObj) {
        const projectDiv = document.getElementById(project.name + "_toDo");
        
        let toDoDiv = document.createElement('div');
        toDoDiv.id = toDoObj.name;
        toDoDiv.classList.add('toDo');
        let title = document.createElement('h2');
        title.innerHTML = toDoObj.title;
        let desc = document.createElement('p');
        desc.innerHTML = toDoObj.description;
        let dueDate = document.createElement('p');
        dueDate.innerHTML = `Due: ${toDoObj.dueDate.toLocaleDateString()}`;
        
        let arrow = document.createElement('i');
        let bin = document.createElement('i');
        let add = document.createElement('i');
        arrow.classList.add('fa-solid', 'fa-arrow-down');
        bin.classList.add('fa-solid', 'fa-trash-can');
        add.classList.add('fa-solid', 'fa-plus');
        
        toDoDiv.appendChild(title);
        toDoDiv.appendChild(desc);
        toDoDiv.appendChild(dueDate);
        toDoDiv.appendChild(add);
        toDoDiv.appendChild(arrow);
        toDoDiv.appendChild(bin);
        projectDiv.appendChild(toDoDiv);
    }

    project_popup() {
        const form = document.getElementById('form');
        form.innerHTML = '';
        let title = document.createElement('input');
        title.type = 'text';
        title.name = 'title';
        title.id = 'title';
        title.placeholder = 'Title';
        let desc = document.createElement('input');
        desc.type = 'text';
        desc.name = 'desc';
        desc.id = 'desc';
        desc.placeholder = 'Description';
        let add = document.createElement('button');
        add.innerHTML = "Create"
        add.id = "create"
        add.onclick =  (event) => {
            event.preventDefault();
            createProject();
            document.getElementById('pop_up').style.display = "none";
        };
        form.appendChild(title);
        form.appendChild(desc);
        form.appendChild(add);
        document.getElementById('pop_up').style.display = "block";
    }

    get_project_info() {
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;
        if (title == "") {
            title = "Project" + (projects.length + 1);
        }
        let info = {
            title: title,
            desc: desc
        };
        return info;
    }

    closeModal() {
        document.getElementById('pop_up').style.display = "none";
    }

}

export default Dom_manipulator;