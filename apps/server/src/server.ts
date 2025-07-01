import app from './app';
import { createServer } from 'http';

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || 'localhost';

const server = createServer(app);

server.listen(PORT, () => {
	console.log(`🎀 Server running at http://${HOST}:${PORT}`);
});
