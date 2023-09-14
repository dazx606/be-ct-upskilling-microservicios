module.exports = (res, statusCode, data) => {
    res.status(statusCode).json({
        status: statusCode,
        data,
    })
}