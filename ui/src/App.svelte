<script lang="ts">
  let todos = $state([
    {
      id: 1,
      name: "Alışveriş",
      list: [
        { id: 1, name: "Çelik", completed: true },
        { id: 2, name: "Demir", completed: true },
        { id: 3, name: "Pamuk", completed: false },
      ],
    },
    {
      id: 2,
      name: "Tatil",
      list: [
        { id: 1, name: "Bodrum", completed: false },
        { id: 2, name: "Fethiye", completed: true },
        { id: 3, name: "Çalapverdi", completed: false },
      ],
    },
    {
      id: 3,
      name: "Ev İhtiyaçları",
      list: [
        { id: 1, name: "Yorgan", completed: false },
        { id: 2, name: "Urgan", completed: true },
        { id: 3, name: "Argan", completed: false },
      ],
    },
  ]);
  let selectedTodo = $state(3);
  let index = $state(Math.max(...todos.map(todo => todo.id)));
  // let totalTodos = todos.list.length;
  // let completedTodos = todos.filter((todo) => todo.list.completed).length

  function removeTodoList(todo: any) {
    todos = todos.filter((t) => t.id !== todo.id);
  }

  function addTodoList(str: string) {
    todos.push({id: index + 1, name: str, list: []})
  }

  $inspect(todos);
</script>

<main>
  <div class="container">
    <div class="todo-list">
      <button class="add-todo-list">New Todo List</button>
      {#each todos as todo, index (todo.id)}
        <div class="item-todo-list">
          <button class="todo-select" onclick={() => {selectedTodo = todo.id}}>{todo.name}</button>
          <button class="list-delete-button" onclick={() => removeTodoList(todo)}>
            <img src="./src/assets/trash.png" alt="Delete list" />
          </button>
        </div>
      {:else}
        Nothing to do here!
      {/each}
    </div>

    <div class="main">
      <div class="title">
        <h2>
          {todos.find((todo) => {
            return todo.id === selectedTodo;
          })?.name}
        </h2>
        <button class="add-todo-item">+</button>
      </div>
      <!--<h3 id="list-heading">{completedTodos} out of {totalTodos} items completed</h3>-->
      <div class="items">
        {#each todos.find((todo) => {
          return todo.id === selectedTodo;
        })?.list as todo, index (todo.id)}
          <li>
            <input
              type="checkbox"
              onclick={() => (todo.completed = !todo.completed)}
              checked={todo.completed}
            />
            {index}. {todo.name} (id: {todo.id})
          </li>
        {:else}
          Nothing to do here!
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .todo-list {
    width: auto;
    max-width: 20%;
    min-width: 15%;
    flex-shrink: 0;
    background-color: #f4f4f4;
    padding: 10px;
    list-style-type: none;
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
  }

  .todo-list li {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  .todo-list .add-todo-list {
    margin-bottom: 3em;
  }

  .item-todo-list {
    display: flex;
    width: 100%;
  }

  .todo-select {
    flex-grow: 1;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-right: none;
    text-align: left;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
    border-right: none;
  }

  .list-delete-button {
    flex-shrink: 0;
    padding: 0 12px;
    border-radius: 0 4px 4px 0;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-left: 0;
  }

  .list-delete-button img {
    height: 24px;
    width: 24px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .list-delete-button:hover {
    opacity: 1;
  }

  .main {
    flex-grow: 1;
    padding: 20px;

    background-color: #fafafa;
    min-width: 30em;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .add-todo-item {
    font-size: xx-large;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fafafa;
    border-radius: 3px;
    border: 2px solid #fafafa;
  }

  h2 {
    text-align: left;
  }

  h3 {
    text-align: left;
  }

  .items {
    text-align: left;
    list-style: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: #f4f4f4;
  }

  button:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      height: auto;
      min-height: 100vh;
    }

    .todo-list {
      width: 100%;
      min-width: unset;
      max-width: unset;
      border-right: none;
      border-bottom: 2px solid #ddd;
    }
  }
</style>
