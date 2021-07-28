const axios = require('axios');

const example = async (page = 'javascript') => {
  try {
    return await axios.get(`/pages/${page}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { example };
