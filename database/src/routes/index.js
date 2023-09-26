const { Router } = require('express');
const store = require('../database');
const { validateModel } = require('../middlewares')
const { catchAsync, response } = require('../utils')

const router = Router();

if (Object.keys(store).includes)

    router.get("/:model", validateModel, catchAsync(async (req, res) => {
        const { model } = req.params;
        const data = await store[model].list();
        response(res, 200, data);

    }));

router.get("/:model/:id", validateModel, catchAsync(async (req, res) => {
    const { model, id } = req.params;
    const data = await store[model].get(id);
    response(res, 200, data);
}));

router.post("/:model", validateModel, catchAsync(async (req, res) => {
    const { model } = req.params;
    const body = req.body;
    const data = await store[model].insert(body);
    response(res, 200, data);
}));
//

module.exports = router