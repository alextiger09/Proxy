const corsAnywhere = require('cors-anywhere');

const host = process.env.HOST || '0.0.0.0'; // Allow external access
const port = process.env.PORT || 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],

    // These headers are forced on every proxied request
    setHeaders: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/116.0.0.0 Safari/537.36',
        'Referer': 'https://teraboxdl.site/',
        'Origin': 'https://teraboxdl.site',   // 👈 Spoofed Origin
        'Host': 'teraboxdl.site'              // 👈 Spoofed Host
    },

    handleInitialRequest: (req, res, location) => {
        console.log(`📥 Incoming request to: ${JSON.stringify(location)}`);
        return false; // Proceed normally
    }
}).listen(port, host, () => {
    console.log(`🚀 CORS Proxy running on http://${host}:${port}`);
});

