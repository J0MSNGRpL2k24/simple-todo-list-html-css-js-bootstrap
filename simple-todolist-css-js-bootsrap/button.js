
const addButton = document.querySelector("#addButton");
const inputTask = document.querySelector("input.form-control");
const container = document.querySelector(".container.mt-5:last-of-type");

// Event untuk tombol Add
addButton.addEventListener("click", () => {
  const taskText = inputTask.value.trim();
  if (taskText === "") {
    return alert("Task cannot be empty!");
  }

  
  const row = document.createElement("div");
  row.className = "row align-items-center mb-4";
  row.innerHTML = `
    <div class="col-sm-4">
        <div class="task-box">
            <h3>${taskText}</h3>
            <p>Task baru ditambahkan</p>
        </div>
    </div>
    <div class="col-sm-6">
        <button class="btn btn-success">Done</button>
        <button class="btn btn-danger">Delete</button>
    </div>
  `;

  container.appendChild(row);
  inputTask.value = ""; 

  addEventToButtons(row);
});


function addEventToButtons(row) {
  const doneButton = row.querySelector(".btn-success");
  const deleteButton = row.querySelector(".btn-danger");

  doneButton.addEventListener("click", function () {
    doneButton.innerText = "Done!";
    doneButton.disabled = true;
  });

  deleteButton.addEventListener("click", function () {
    row.remove();
  });
}


document.querySelectorAll(".row.align-items-center.mb-4").forEach(row => {
  addEventToButtons(row);
});
