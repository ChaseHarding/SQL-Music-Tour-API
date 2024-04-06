// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event } = db 

//FIND ALL EVENTS 
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE 
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json({
            message: 'Successfully inserted a new event', 
            data: newEvent
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
events.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { event_id: req.params.id }
        })
        res.status(200).json(updatedEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE
events.delete('/:id', async (req, res) => {
    try {
        await Event.destroy({
            where: { event_id: req.params.id }
        })
        res.status(204).end()
    } catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = events
