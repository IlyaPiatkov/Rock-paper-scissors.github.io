import express, {Express, Response, Request} from 'express';

import { registration } from './access/registration';


// export const routerV1 = express.Router();

// routerV1.use("/v1", registration)

export const routers = (app: Express) => {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    app.post('/api/v1/signup', registration)
}