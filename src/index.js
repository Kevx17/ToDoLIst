import "./style.css"
import Dom_manipulator from "./Dom";
import Project from "./Project";
import ToDo from "./toDo";

function createProject() {
    let info = dm.get_project_info();
    let project = new Project(info['title'], info['desc']);
    projects.push(project);
    let i = projects.length - 1;
    dm.add_project(projects[i]);
}

function createToDo() {
    let info = dm.get_toDo_info();
    let project = info['project'];
    let ToDo1 = new ToDo(info['title'], info['desc'], info['date']);
    project.toDos.push(ToDo1);
    let i = project.toDos.length;
    dm.add_ToDo(project, ToDo1);
}




let projects = []

projects.push(new Project('Project1', 'You can add your todos to this project'));

const dm = new Dom_manipulator();

dm.add_project(projects[0]);

const add_p = document.getElementById("add_p");
const close = document.getElementById("close");


add_p.onclick = dm.project_popup;
close.onclick = dm.closeModal;



export {createProject, createToDo, projects}



