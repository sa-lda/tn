const fetch = require("node-fetch");

//const validator = require("validator");


exports.handler = async (event, context) => {

  const eventBody = JSON.parse(event.body);



  /*

  let extension = "";

  if (eventBody.searchTerm) {

    const { searchTerm } = eventBody;

    if (validator.isIP(searchTerm)) {

      extension = `&ipAddress=${searchTerm}`;

    } else if (validator.isURL(searchTerm)) {

      const domain = new URL(searchTerm);

      extension = `&domain=${domain.hostname}`;

    }

  }

*/

  try {

    const res = await fetch("https://movies2watch.tv/");

    const data = await res.json();

    return { statusCode: 200, body: JSON.stringify({ data }) };

  } catch (error) {

    console.log(error);

    return {

      statusCode: 500,

      body: JSON.stringify({ error: "Failed fetching data" }),

    };

  }

};
