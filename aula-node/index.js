import axios from "axios";

axios.get('https://api.github.com/users/lucianorp')
  .then(res => {
    console.log(res.data.login);
  });