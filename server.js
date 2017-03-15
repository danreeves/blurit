const fs = require('fs');
const path = require('path');
const { send } = require('micro');
const { renderToString } = require('react-dom/server');
const { createElement } = require('react');
const { styleSheet } = require('styled-components');
const App = require('./dist/app');

function readFile(file) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function HTML(app, styles) {
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

module.exports = async (req, res) => {
    console.log(`>> Requesting ${req.url}`);

    if (req.url === '/client.js') {
        const data = await readFile(path.join(__dirname, 'dist/client.js'));
        send(res, 200, data);
    } else {
        const html = renderToString(createElement(App));
        const css = styleSheet.getCSS();
        send(res, 200, HTML(html, css));
    }
};

console.log('> starting server');
