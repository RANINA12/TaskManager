const API = "http://localhost:3000";

loadTasks = async () => {
    let container = document.getElementById("tasks");

    try {
        let res = await fetch(API + "/tasks");

        if (!res.ok) {
            container.innerText = "Error in loading";
            return;
        }

        let tasks = await res.json();
        container.innerHTML = "";

        // Here the response come in the form of Object from the backend , so I have to handle in that way Nikunj 

        if (Object.keys(tasks).length === 0) {
            container.innerText = "No tasks found";
            return;
        }

        Object.values(tasks).forEach((task) => {
            let div = document.createElement("div");
            div.className = "task";

            div.innerHTML = `
    <h3>Title : ${task.title}</h3>
    <p>${task.description}</p>
    <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 12px; color: #A1A1AA;">ID: ${task.id}</span>
        <button class="btn-danger" onclick="deleteTask(${task.id})">Delete</button>
    </div>
`;

            container.appendChild(div);
        });

    } catch (error) {
        container.innerText = "Error in loading";
    }
};

addTask = async () => {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    try {
        let res = await fetch(API + "/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                description: description
            })
        });

        if (res.ok) {
            alert("Task added");
            document.getElementById("title").value = "";
            document.getElementById("desc").value = "";
            loadTasks();
        } else {
            alert("Something went wrong");
        }

    } catch (error) {
        alert("Something went wrong");
    }
};

deleteTask = async (id) => {
    try {
        let res = await fetch(API + "/tasks/" + id, {
            method: "DELETE"
        });

        if (res.ok) {
            alert("Task deleted");
            loadTasks();
        } else {
            alert("Delete failed");
        }

    } catch (error) {
        alert("Delete failed");
    }
};

deleteById = () => {
    let id = document.getElementById("deleteId").value;
    deleteTask(id);
};

loadTasks();
