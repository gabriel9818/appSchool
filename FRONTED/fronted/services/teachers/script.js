document.addEventListener("DOMContentLoaded", function () {
    // Listar profesores
    if (document.getElementById("teacher-list")) {
        fetch(API_TEACHERS.READ)
            .then(response => response.json())
            .then(data => {
                let rows = "";
                data.teachers.forEach(teacher => {
                    rows += `<tr><td>${teacher.id}</td><td>${teacher.name}</td><td>${teacher.email}</td><td>${teacher.subject}</td></tr>`;
                });
                document.getElementById("teacher-list").innerHTML = rows;
            })
            .catch(error => console.error("Error al obtener profesores:", error));
    }

    // Crear profesor
    document.getElementById("create-teacher-form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;

        fetch(API_TEACHERS.CREATE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, subject })
        }).then(() => alert("Profesor agregado!"))
          .catch(error => console.error("Error:", error));
    });

    // Editar profesor
    document.getElementById("edit-teacher-form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;

        fetch(API_TEACHERS.UPDATE + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, subject })
        }).then(() => alert("Profesor actualizado!"))
          .catch(error => console.error("Error:", error));
    });

    // Eliminar profesor
    document.getElementById("delete-teacher-form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const id = document.getElementById("id").value;
        
        fetch(API_TEACHERS.DELETE + id, { method: "DELETE" })
            .then(() => alert("Profesor eliminado!"))
            .catch(error => console.error("Error:", error));
    });
});
