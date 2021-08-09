const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const fs = require('fs');
const { startBot } = require('./bot/bot');
const { startCron } = require('./cron/cronRetrieve');
const SESSION_FILE_PATH = './session.json';
let client;
let sessionData;

const withoutSession = () => {
    console.log("Not logged")
    client = new Client()
    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true })
    })
    client.on('authenticated', (session) => {
        sessionData = session
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
    client.initialize()
}

const withSession = () => {

    console.log("Loggeado")
    sessionData = require(SESSION_FILE_PATH);
    client = new Client({
        session: sessionData
    });
    startCron(client)

    client.on('ready', () => {
        console.log('Client is ready!');
        startBot(client)
    });

    client.on('auth_failure', () => {
        console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
    })


    client.initialize();
}

(fs.existsSync(SESSION_FILE_PATH)) ? withSession() : withoutSession();
