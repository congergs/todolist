<script lang="ts">
</script>

<main>
  <div class="container">
    <div class="todo-list">
      <button class="add-new-todo-list">New Todo List</button>
      <ul>
        <li>Alışveriş Listesi</li>
        <li>Ev için gerekenler</li>
        <li>Tatil öncesi işler</li>
      </ul>
    </div>

    <div class="main">
      <h2>Alışveriş Listesi <button class="add-new-todo-item">+</button></h2>
      <div class="items">
        <form>
          <p>
            <label for="done-1">
              <input id="done-1" type="checkbox" />
              Et
            </label>
          </p>
          <p>
            <label for="done-1">
              <input id="done-1" type="checkbox" />
              Süt
            </label>
          </p>
          <p>
            <label for="done-1">
              <input id="done-1" type="checkbox" />
              Yumurta
            </label>
          </p>
        </form>
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
  }

  .todo-list {
    width: 200px;
    background-color: #f4f4f4;
    padding: 10px;
    list-style-type: none;
    text-align: left;
    padding-top: 1em;
  }

  .todo-list li {
    padding: 10px;

    cursor: pointer;
    border-bottom: 1px solid #ddd;
  }

  .todo-list li:hover {
    background-color: #ddd;
  }

  .main {
    flex-grow: 1;
    padding: 20px;

    background-color: #fafafa;
    overflow-y: auto;
    min-width: 30em;
  }

  h2 {
    text-align: left;
  }

  .items {
    text-align: left;
  }
</style>
