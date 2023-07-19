import Joi from "joi"

const playSongValidation = Joi.object({
    song_id: Joi.number().required()
})


export {
    playSongValidation
}

