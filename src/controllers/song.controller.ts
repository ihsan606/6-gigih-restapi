import e, {Request, Response} from "express";
import songService from "../services/song.service";
import {playSongValidation} from "../validations/song.validation";
import {validate} from "../validations/validation";
import {ResponseError} from "../responses/error.response";
import {throws} from "assert";

const getAll = async (req: Request, res: Response) => {

    let result = await songService.getAll()
    result = songService.sortByPlayCount(result)

    res.status(200).json({
        code: 200,
        data: result,
        message: 'success'
    })
}

const play = async (req: Request, res: Response) => {

    const validation = validate(playSongValidation, req.body)
    if(validation.details) {
         return res.status(400).json({
            code: 400,
            data: {},
            message: 'BAD REQUEST',
            errors: validation.details[0].message
        })
    }

    const { data, errors } = songService.play(req.body.song_id)
    if(errors != undefined){
        return res.status(404).json({
            code: 404,
            data: {},
            message: 'NOT FOUND',
            errors: errors
        })
    }


     res.status(200).json({
        code: 200,
        data: data,
        message: 'PLAY SONG SUCCESS '
    })

}

export default {
    getAll,
    play
}
