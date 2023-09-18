const mysql = require('mysql');

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

function isPopularEmail(email) {
  const popularDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook',
    'outlook.com',
    'hotmail.com',
    'aol.com',
    'icloud.com',
    'me.com',
    'mac.com',
    'proton.me',
    'protonmail.com',
    'zoho.com',
    'yandex.com',
    'gmx.com',
    'mail.',
    'fastmail.com',
    'tutanota.com',
    'hushmail.com',
    'mail.ru',
    'yahoo.co.jp',
    'qq.com',
    '163.com',
    'sina.com.cn',
    'naver.com',
    'daum.net',
    'rambler.ru',
    'rediffmail.com',
    'cox.net',
    'earthlink.net',
    't-online.de',
    'comcast.net',
    'verizon.net',
    'att.net',
    'spectrum.net',
    'rogers.com',
    'telus.net',
    'bell.ca',
    'optimum.net',
    'shaw.ca',
    'centurylink.net',
    'bt.com',
    'orange.fr',
    'sfr.fr',
    'free.fr',
    'gmx.de',
    'web.de',
    'ionos.com',
    'tiscali.it',
    'libero.it',
    'alice.it',
    'yahoo.co.in',
    'rediff.com',
    'baidu.com',
    'mailbox.org',
    'yahoo.',
    'zoho.com',
    'yandex.',
    'gmx.com',
    'mail.com',
    'fastmail.com',
    'tutanota.com',
    'hushmail.com',
    'mail.ru',
    'yahoo.co.jp',
    'qq.com',
    '163.com',
    'sina.com.cn',
    'naver.com',
    'daum.net',
    'rambler.ru',
    'rediffmail.com',
    'cox.net',
    'earthlink.net',
    't-online.de',
    'comcast.net',
    'verizon.net',
    'att.net',
    'spectrum.net',
    'rogers.com',
    'telus.net',
    'bell.ca',
    'optimum.net',
    'shaw.ca',
    'centurylink.net',
    'bt.com',
    'orange.fr',
    'sfr.fr',
    'free.fr',
    'gmx.de',
    'web.de',
    'ionos.com',
    'tiscali.it',
    'libero.it',
    'alice.it',
    'yahoo.co.in',
    'rediff.com',
    'baidu.com',
    'mailbox.org',
    'mail.ru',
    'ymail.com',
    'rocketmail.com',
    'outlook.co.uk',
    'yandex.',
    'hotmail.com.tr',
    'outlook.com.tr',
    'ttnet.com.tr',
    'superonline.com',
    'vodafone.net.tr',
    'mail.com.tr',
    'mynet.com',
    'mynet.com.tr',
    'uydunet.com.tr',
    'koc.net',
    'akbank.com',
    'isbank.com.tr',
    'yandex.com.tr',
    'turk.net',
    'gittigidiyor.com',
    'markafoni.com',
    'istmail.com',
    'ada.net.tr',
    'ada.net',
    'altavista.com',
    'atlasturkiye.com',
    'e-kolay.net',
    'e-kolay.com',
    'ege.edu.tr',
    'haberler.com',
    'googlemail.com',
    'iname.com',
    'hotmail.fr',
    'hotmail.co.uk',
    'hotmail.co.jp',
    'live.',
    'att.net',
    'comcast.net',
    'earthlink.net',
    't-online.de',
    'verizon.net',
    'bt.com',
    'orange.fr',
    'sfr.fr',
    'free.fr',
    'web.de',
    'ionos.com',
    'tiscali.it',
    'libero.it',
    'alice.it',
    'rediff.com',
    'baidu.com',
    'yahoo.',
     'zoho.com',
    'gmx.com',
    'protonmail.com',
    'yandex.com',
    'hushmail.com',
    'aol.com',
    'mail.com',
    'inbox.com',
    'fastmail.com',
    'tutanota.com',
    'runbox.com',
    'gmx.net',
    't-online.de',
    'web.de',
    'mail.ru',
    'rambler.ru',
    'yandex.ru',
    'seznam.cz',
    'o2.pl',
    'wp.pl',
    'onet.pl',
    'interia.pl',
    'abv.bg',
    'mail.bg',
    'tiscali.it',
    'libero.it',
    'tin.it',
    'virgilio.it',
    'alice.it',
    'iol.it',
    'vodafone.it',
    'gmx.at',
    'mail.at',
    'chello.at',
    'bluewin.ch',
    'gmx.ch',
    'mail.ch',
    'hispeed.ch',
    'swisscom.ch',
    'protonmail.ch',
    'gmx.fr',
    'mail.fr',
    'laposte.net',
    'orange.fr',
    'sfr.fr',
    'neuf.fr',
    'club-internet.fr',
    'free.fr',
    'protonmail.fr',
    'gmx.de',
    'mail.de',
    'web.de',
    'freenet.de',
    't-online.de',
    '1und1.de',
    'vodafone.de',
    'protonmail.de',
    'gmx.es',
    'mail.es',
    'hotmail.es',
    'outlook.es',
    'yahoo.es',
    'orange.es',
    'wanadoo.es',
    'terra.es',
    'ono.com',
    'vodafone.es',
    'protonmail.es',
    'gmx.co.uk',
    'mail.co.uk',
    'outlook.co.uk',
    'yahoo.co.uk',
    'aol.co.uk',
    'btinternet.com',
    'ntlworld.com',
    'blueyonder.co.uk',
    'virginmedia.com',
    'protonmail.co.uk',
    'gmx.ca',
    'mail.ca',
    'outlook.ca',
    'yahoo.ca',
    'aol.ca',
    'bell.ca',
    'telus.net',
    'shaw.ca',
    'protonmail.ca',
    'gmx.com.au',
    'mail.com.au',
    'outlook.com.au',
    'yahoo.com.au',
    'iinet.net.au',
    'optusnet.com.au',
    'tpg.com.au',
    'protonmail.com.au',
    'gmx.nl',
    'mail.nl',
    'outlook.nl',
    'yahoo.nl',
    'kpnmail.nl',
    'ziggo.nl',
    'upcmail.nl',
    'home.nl',
    'telfort.nl',
    'planet.nl',
    'xs4all.nl',
    'protonmail.nl',
    'gmx.be',
    'mail.be',
    'outlook.be',
    'yahoo.be',
    'telenet.be',
    'proximus.be',
    'skynet.be',
    'voo.be',
    'scarlet.be',
    'belgacom.be',
    'protonmail.be',
    'gmx.se',
    'mail.se',
    'outlook.se',
    'yahoo.se',
    'bredbandsbolaget.se',
    'tele2.se',
    'comhem.se',
    'telia.com',
    'protonmail.se',
    'gmx.no',
    'mail.no',
    'outlook.no',
    'yahoo.no',
    'get.no',
    'telenor.no',
    'online.no',
    'protonmail.no',
    'gmx.dk',
    'mail.dk',
    'outlook.dk',
    'yahoo.dk',
    'c.dk',
    'stofa.dk',
    'protonmail.dk',
    'gmx.fi',
    'mail.fi',
    'outlook.fi',
    'yahoo.fi',
    'saunalahti.fi',
    'elisa.fi',
    'protonmail.fi',
    'gmx.pl',
    'mail.pl',
    'outlook.pl',
    'yahoo.pl',
    'onet.pl',
    'wp.pl',
    'interia.pl',
    'protonmail.pl',
    'gmx.pt',
    'mail.pt',
    'outlook.pt',
    'yahoo.pt',
    'sapo.pt',
    'protonmail.pt',
    'gmx.gr',
    'mail.gr',
    'outlook.gr',
    'yahoo.gr',
    'otenet.gr',
    'protonmail.gr',
    'gmx.ch',
    'mail.ch',
    'outlook.ch',
    'yahoo.ch',
    'protonmail.ch',
    'gmx.at',
    'mail.at',
    'outlook.at',
    'yahoo.at',
    'protonmail.at',
    'gmx.hu',
    'mail.hu',
    'outlook.hu',
    'yahoo.hu',
    'freemail.hu',
    'protonmail.hu',
    'gmx.cz',
    'mail.cz',
    'outlook.cz',
    'seznam.cz',
    'centrum.cz',
    'volny.cz',
    'protonmail.cz',
    'gmx.sk',
    'mail.sk',
    'outlook.sk',
    'azet.sk',
    'centrum.sk',
    'protonmail.sk',
    'gmx.si',
    'mail.si',
    'outlook.si',
    'yahoo.si',
    'protonmail.si',
    'gmx.hr',
    'mail.hr',
    'outlook.hr',
    'yahoo.hr',
    'protonmail.hr',
    'gmx.si',
    'mail.si',
    'outlook.si',
    'yahoo.si',
    'protonmail.si',
    'gmx.mk',
    'mail.mk',
    'outlook.mk',
    'yahoo.mk',
    'protonmail.mk',
    'gmx.ba',
    'mail.ba',
    'outlook.ba',
    'yahoo.ba',
    'protonmail.ba',
    'gmx.me',
    'mail.me',
    'outlook.me',
    'yahoo.me',
    'protonmail.me',
    'gmx.al',
    'mail.al',
    'outlook.al',
    'yahoo.al',
    'protonmail.al',
    'gmx.ie',
    'mail.ie',
    'outlook.ie',
    'yahoo.ie',
    'protonmail.ie',
    'gmx.co.za',
    'mail.co.za',
    'outlook.co.za',
    'yahoo.co.za',
    'protonmail.co.za',
    'gmx.com.br',
    'mail.com.br',
    'outlook.com.br',
    'yahoo.com.br',
    'protonmail.com.br',
    'gmx.com.ar',
    'mail.com.ar'
  ];
  
  
  const domain = email.split('@')[1];

  for(var i = 0; i < popularDomains.length; i++) {
    if (domain.indexOf(popularDomains[i]) === 0) {
      return true;
    }
  }

  return false;
}

    
    switch (path) {
        case "download":
            return new Promise(async (resolve, reject) => {
                const email = params.email.trim();
                
                    if(email != "") {
                      var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                      if (validRegex.test(email)) {
                        if(isPopularEmail(email)) {
                            db.query('INSERT INTO danwangf8e5c (dw_su, dw_dt) VALUES (?, ?)', [
                                email,
                                Math.floor(new Date().getTime() / 1000)
                            ], function (err, results, fields) {
                                db.end();

                                resolve({
                                    statusCode: 200,
                                    headers: {
                                        'Access-Control-Allow-Origin': 'https://technept.uno',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        status: true,
                                        id: process.env.FILE,
                                        email: email
                                    })
                                })
                            });
                        }
                      }
                    }
                
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
