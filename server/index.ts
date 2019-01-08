import * as express from 'express';
import * as next from 'next';
import * as nextI18NextMiddleware from 'next-i18next/middleware';
import * as nextI18next from '../i18n';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app
	.prepare()
	.then(() => {
		const server = express();
		nextI18NextMiddleware(nextI18next, app, server);
		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, (error: Error) => {
			if (error) {
				throw error;
			}

			if (dev) {
				console.log(`http://localhost:${port}/`);
			} else {
				console.log(`listening to port: ${port}`);
			}
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
