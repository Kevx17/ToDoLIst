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
        arrow.onclick = () => {
            this.showToDos(obj.name);
        }
        bin.classList.add('fa-solid', 'fa-trash-can');
        bin.onclick = () => {
            let delte_this = bin.closest('.project');
            let div_id = delte_this.id;
            delte_this.remove();
            projects = projects.filter(item => item.name !== div_id)
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
        dueDate.classList.add('date');
        
        let bin = document.createElement('i');
        bin.id = toDoObj.name + "_bin";
        bin.onclick = () => {
            this.delete_toDo(toDoDiv.id);
        };
        let check = document.createElement('input');
        check.type = 'checkbox';
        bin.classList.add('fa-solid', 'fa-trash-can');
        check.classList.add('check');
        
        toDoDiv.appendChild(title);
        toDoDiv.appendChild(desc);
        toDoDiv.appendChild(dueDate);
        toDoDiv.appendChild(bin);
        toDoDiv.appendChild(check);
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

    showToDos(id) {
        // buzi vagy
        if (document.getElementById(id + '_toDo').style.display == 'block') {
            document.getElementById(id + '_toDo').style.display = 'none';
        }
        else{
         document.getElementById(id + '_toDo').style.display = 'block';
        }

    }

    delete_toDo(id) {
        let bin = document.getElementById(id + "_bin");
        let ToDo = bin.parentElement;
        let project = ToDo.closest('.project');
        projects.forEach(element => {
            if (element.name == project.id) {
                element.toDos.filter(item => item.name !== id)
            }
        });
        ToDo.remove();
    }

}

export default Dom_manipulator;