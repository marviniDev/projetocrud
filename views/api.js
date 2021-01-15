// import axios from "axios";

const BASE_URL = 'http://localhost:3001';

  const getTodos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
  
      const todos = res.data;

      console.log(`GET: Here's the list of todos`, todos);
  
      return todos;
    } catch (e) {
      console.error(e);
    }
  };
  getTodos();


