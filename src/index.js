document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', 
      function (myEvent){
        myEvent.preventDefault();

        let li = document.createElement("li")
        li.textContent = myEvent.target.new_task_description.value
        
        document.getElementById("tasks").appendChild(li)

      }
  )
  
});
