
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value, taskTime.value);
      taskInput.value = '';
      taskTime.value = '';
    });

    function addTask(text, time) {
      const li = document.createElement('li');

      const info = document.createElement('div');
      info.className = 'task-info';
      const span = document.createElement('span');
      span.textContent = text;
      const timeTag = document.createElement('div');
      timeTag.className = 'task-time';
      timeTag.textContent = time ? `Due: ${new Date(time).toLocaleString()}` : '';
      info.appendChild(span);
      info.appendChild(timeTag);

      const actions = document.createElement('div');
      actions.className = 'task-actions';

      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'OK';
      completeBtn.onclick = () => {
        span.classList.toggle('completed');
      };

      const editBtn = document.createElement('button');
      editBtn.textContent = 'REWRITE';
      editBtn.onclick = () => {
        const newText = prompt('Edit task:', span.textContent);
        if (newText !== null) span.textContent = newText;
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'BIN';
      deleteBtn.onclick = () => li.remove();

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(info);
      li.appendChild(actions);
      taskList.appendChild(li);
        }
