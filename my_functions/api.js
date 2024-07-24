exports.handler = async function (event, context) {

  const { sa } = event.queryStringParameters;
                
            return {
                        statusCode: 200,
                        headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                                    message: 232,
                                    ds: sa
                        })
            }
}
