const axios = require('axios');

module.exports = async (params) => {
  const {
    name,
    email,
    password,
    phone,
    roles,
  } = params;
  const user = {
    name,
    email,
    password,
    phone,
    roles,
  };
  const { data } = await axios.post('http://localhost:8080/api/auth/signup', user);
  return data;
}