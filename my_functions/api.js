const fetch = require('node-fetch');

exports.handler = async function (event, context) {

  const response = await fetch('https://movies2watch.tv');
  const data = await response.json();

  
            return new Promise(async (resolve, reject) => {            

                
                resolve({
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      message: data
                    })
                })
            
            });
    
}
