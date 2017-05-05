/* @flow */
/* eslint-env node */
/* global http$IncomingMessage */
const fs = require('fs');
const path = require('path');
const { send } = require('micro');
const { renderToString } = require('react-dom/server');
const { createElement } = require('react');
const { ServerStyleSheet } = require('styled-components');
const App = require('./containers/app');

function readFile(file: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function makePage(app: string, styles: string): string {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="manifest" href="manifest.json">
                <meta name="mobile-web-app-capable" content="yes">
                <title>BlurIt</title>
                ${styles}
            </head>
            <body>
                <div id="app">${app}</div>
                <script src="/client.js"></script>
            </body>
            </html>
    `;
}

module.exports = async (req: http$IncomingMessage, res: Object) => {
    console.log(`>> Requesting ${req.url}`);

    if (req.url === '/client.js') {
        const data = await readFile(path.join(__dirname, 'client.js'));
        send(res, 200, data);
    } else if (req.url === '/client.js.map') {
        const data = await readFile(path.join(__dirname, 'client.js.map'));
        send(res, 200, data);
    } else {
        const sheet = new ServerStyleSheet();
        const html = renderToString(createElement(App));
        const css = sheet.getStyleTags();
        send(res, 200, makePage(html, css));
    }
};

console.log('> starting server');
