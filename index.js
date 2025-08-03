const corsAnywhere = require('cors-anywhere');

// Server Config
const host = 'localhost';
const port = 8080;

const server = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],

    // Log each proxy request
    handleInitialRequest: function (req, res, location) {
        console.log(`📥 Incoming request to: ${JSON.stringify(location)}`);
        return false; // continue normally
    },

    // Optional: override headers to mimic browser
    setHeaders: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/116.0.0.0 Safari/537.36',
        'Referer': 'https://google.com',
    }
});

server.listen(port, host, () => {
    console.log(`🚀 CORS Anywhere proxy running at http://${host}:${port}`);
});

