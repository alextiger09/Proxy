const corsAnywhere = require('cors-anywhere');

const host = process.env.HOST || '0.0.0.0'; // Allow external access
const port = process.env.PORT || 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins — change this if needed
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    setHeaders: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/116.0.0.0 Safari/537.36',
        'Referer': 'https://google.com',
    },
    handleInitialRequest: (req, res, location) => {
        console.log(`📥 Incoming request to: ${JSON.stringify(location)}`);
        return false; // Proceed normally
    }
}).listen(port, host, () => {
    console.log(`🚀 CORS Proxy running on http://${host}:${port}`);
});
