import express, { Request, Response} from "express";
import {songRouter} from "./routes/song.route";
import errorMiddleware from "./middleware/error.middleware";

const app = express();

const port = "4002";

app.use(express.json());
app.use(errorMiddleware);
app.use(songRouter);



app.get('/', (req: Request, res: Response):void => {
    res.send("welcome to spotify api")
})




app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
});
