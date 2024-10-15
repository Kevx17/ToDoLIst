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

let projects = []

projects.push(new Project('Project1', 'You can add your todos to this project'));

const dm = new Dom_manipulator();

dm.add_project(projects[0]);

let ToDo1 = new ToDo("ToDo1", "You need to do this befor the due date", new Date(2024, 9, 8) );
let ToDo2 = new ToDo("ToDo2", "You need to do this befor the due date", new Date(2024, 9, 8) );

dm.add_ToDo(projects[0], ToDo1);
dm.add_ToDo(projects[0], ToDo2);


const add_p = document.getElementById("add_p");
const close = document.getElementById("close");


add_p.onclick = dm.project_popup;
close.onclick = dm.closeModal;



export {createProject, projects}



