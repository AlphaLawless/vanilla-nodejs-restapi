const data = require("./data");

class Controller {
  async getTodos() {
    return new Promise((resolve, _) => resolve(data));
  }

  async getTodo(id) {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (todo) {
        resolve(todo);
      } else {
        reject(`Todo com o id ${id} não encontrado`);
      }
    });
  }

  async createTodo(todo) {
    return new Promise((resolve, _) => {
      let newTodo = {
        id: Math.floor(4 + Math.random() * 10),
        ...todo,
      };

      resolve(newTodo);
    });
  }

  async updateTodo(id) {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (!todo) {
        reject(`Nenhum todo com o id ${id} encontrado`);
      }
      todo["completed"] = true;
      resolve(todo);
    });
  }

  async deleteTodo(id) {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (!todo) {
        reject(`Nenhum todo com o id ${id} encontrado`);
      }
      resolve(`Todo deleted successfully`);
    });
  }
}
module.exports = Controller;
