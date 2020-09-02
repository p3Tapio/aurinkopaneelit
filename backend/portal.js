const request = require('request')
const csv = require('csvtojson');


const SunnyPortal = function (params) {
    const username = params.username
    const password = params.password
    const url = 'https://sunnyportal.com'
    const LOGIN_URL = '/Templates/Start.aspx';
    const PLANTS_URL = '/Plants'

    const _login = function (callback) {
        const jar = request.jar()
        var options = {
            'method': 'POST',
            'url': url + LOGIN_URL,
            'headers': {
                'Connection': 'keep-alive',
                'Cache-Control': 'max-age=0',
                'Upgrade-Insecure-Requests': '1',
                'Origin': 'https://www.sunnyportal.com',
                'Content-Type': ['application/x-www-form-urlencoded', 'application/x-www-form-urlencoded'],
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-User': '?1',
                'Sec-Fetch-Dest': 'document',
                'Referer': 'https://sunnyportal.com/Templates/Start.aspx',
            },
            form: {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': '',
                'ctl00$ContentPlaceHolder1$Logincontrol1$txtUserName': username,
                'ctl00$ContentPlaceHolder1$Logincontrol1$txtPassword': password,
                'ctl00$ContentPlaceHolder1$Logincontrol1$LoginBtn': 'Login',
                'ctl00$ContentPlaceHolder1$hiddenLanguage': 'en-gb'
            },
            jar: jar
        }
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (response.headers.location && response.headers.location == '/Plants') {
                callback(error, jar);
            } else {
                const error = new Error('Login Failed')
                callback(error);
            }
        });
    }
    const currentProduction = function (callback) {
        _login(function (err, jar) {
            if (err) callback(err)
            const ops = { method: 'GET', strictSSL: false, jar: jar }
            request(url + PLANTS_URL, ops, function (err, httpResponse, body) {
                if (err) {
                    console.error('Failed to open /Plants URL')
                    callback(err)
                }
                request(url + '/Plants/Download', ops, function (err, httpResponse, body) {
                    const x = []
                    // TODO handlaa error: 
                    // Unhandled rejection CSV Parse Error: Error: unclosed_quote. JSON Line number: 58 near:
                    // <div style="float:left; width:225px; margin-right:20px;">    
                    csv({ delimiter: ';' }).fromString(body).subscribe((jsonObj) => {
                        x.push(jsonObj)
                    }).then(() => {
                        callback(err, x)
                    })
                })
            })
        })
    }
    // TODO signin / logout ?
    return {
        currentProduction: currentProduction
    };
}
module.exports = SunnyPortal