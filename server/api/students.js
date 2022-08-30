const router = require('express').Router();
const {
    models: {Student},
} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send(students);
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    const id = Number(req.params.id)
    try {
        const student = await Student.findAll({
            where : {
                id: id
            }
        })
        res.send(student)
    } catch (error) {
        next(error);
    }
})

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
})

module.exports = router