exports.handler = async function (event, context) {

            return new Promise(async (resolve, reject) => {            

                
                resolve({
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      message: 232
                    })
                })
            
            });
    
}
