//DEPENDICIES 
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db;

//FIND ALL STAGES 
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC STAGE
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(201).json({
            message: 'Successfully inserted a new Stage', 
            data: newStage
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: { stage_id: req.params.id }
        })
        res.status(200).json(updatedStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE 
stages.delete('/:id', async (req, res) => {
    try {
        await Stage.destroy({
            where: { stage_id: req.params.id }
        })
        res.status(204).end()
    } catch (error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = stages