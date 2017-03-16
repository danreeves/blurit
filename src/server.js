// @flow
const fs = require('fs');
const path = require('path');
const { send } = require('micro');
const { renderToString } = require('react-dom/server');
const { createElement } = require('react');
const { styleSheet } = require('styled-components');
const App = require('./containers/app');

function readFile(file: string): Promise<string> {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function HTML(app: string, styles: string): string {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="manifest" href="manifest.json">
                <meta name="mobile-web-app-capable" content="yes">
                <title>BlurIt</title>
                <style id="ssr-styles">${styles}</style>
            </head>
            <body>
                <div id="app">${app}</div>
                <script src="/client.js"></script>
            </body>
            </html>
    `;
}

type Request = {
  url: string;
};

module.exports = async (req : http$IncomingMessage, res: Object) => {
    console.log(`>> Requesting ${req.url}`);

    if (req.url === '/client.js') {
        const data = await readFile(path.join(__dirname, 'client.js'));
        send(res, 200, data);
    } else {
        const html = renderToString(createElement(App));
        const css = styleSheet.getCSS();
        send(res, 200, HTML(html, css));
    }
};

console.log('> starting server');
