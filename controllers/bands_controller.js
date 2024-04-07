const bands = require("express").Router();
const db = require("../models");
const { Band, Meet_Greet, Event, Set_Time } = db;
const { Op } = require('sequelize');

//FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC BAND
bands.get('/:band_name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_name: req.params.band_name },
            include: [
                {
                model: Meet_Greet, 
                as: 'meet_greets',
                include: { 
                    model: Event, 
                    as: 'event',
                    where: { band_name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } }
                }
            },
            {
                model: Set_Time,
                as: 'set_times',
                include: {
                     model: Event,
                     as: 'event',
                    where: { band_name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } }
                }
            }
        ]
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body);
        res.status(201).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE 
bands.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, {
            where: { band_id: req.params.id }
        })
        res.status(200).json(updatedBand)
    } catch (error) {
        res.status(500).json
    }
}) 

//DELETE 
bands.delete('/:id', async (req, res) => {
    try {
        await Band.destroy({
            where: { band_id: req.params.id }
        })
        res.status(204).end()
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = bands;