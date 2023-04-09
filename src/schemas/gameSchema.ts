import joi from 'joi';

const gameSchema = joi.object({
    first_team: joi.string().required(),
    second_team: joi.string().required(),
    date: joi.date().required(), 
    time: joi.string().required()
});
export default gameSchema