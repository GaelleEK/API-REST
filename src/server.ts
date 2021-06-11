import * as express from 'express';
import { Application, Request, Response } from 'express';
import { myRouter } from './router';
import * as bodyParser from 'body-parser';

const app: Application = express();

app.use(express.urlencoded({limit: '50mb', type: 'application/vnd.api+json'}));
app.use(express.json({limit: '50mb', type: 'application/vnd.api+json'}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello TS');
});

app.use('/projects', myRouter);

app.listen(3000, () => {
    console.log('Server Express with Typescript :-) running')
})