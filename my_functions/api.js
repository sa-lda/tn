const mysql = require('mysql');
const stripe = require('stripe')(process.env.STP);

exports.handler = async function (event, context) {
    if(event.httpMethod != "POST" && event.httpMethod != "OPTIONS") {
        return {
            statusCode: 405
        }
    }
    
    const params = JSON.parse(event.body);
        
    const db = mysql.createConnection({
        host: process.env.HOST,
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        ssl: {
            rejectUnauthorized: true,
        },
    });
    db.connect(function (err) {
        if (err) {
            throw err.message
        }
    });

    let path = event.path.split("/").pop();

    switch (path) {
        case "download":
            return new Promise(async (resolve, reject) => {
                
                resolve({
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': 'https://technept.uno',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: 32,
                        url: 4334
                    })
                })
                
            });
            break;
        case "re4kvlb13v":
            return new Promise(async (resolve, reject) => {                  
                resolve({
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
            });
            break;
        default:
            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: "Not found"
                })
            }
    }
}
