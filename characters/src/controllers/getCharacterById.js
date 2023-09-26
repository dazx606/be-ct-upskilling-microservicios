const axios = require("axios");
const { response } = require('../utils')

module.exports = async (req, res) => {
    const {id} = req.params;
    const allCharacters = await axios.get(`http://database:8004/Character/${id}`)
    //console.log('Axios: ',allCharacters.data)
    response(res, 200, allCharacters.data)
    // res.status(200).json({
    //     status: 200,
    //     data: characters.allCharacters()
    // })
}