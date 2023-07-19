import express from "express";
import songController from "../controllers/song.controller";
import errorMiddleware from "../middleware/error.middleware";

const songRouter = express.Router()

songRouter.get('/api/songs', songController.getAll)
songRouter.post('/api/songs/play',errorMiddleware, songController.play)

export {
    songRouter
}
