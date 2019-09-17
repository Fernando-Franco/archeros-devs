const path = require('path');

module.exports = app => {
    const docs = async (req, res) => {
        console.log(__dirname)
        try {
            res.sendFile(__dirname + 'docs/index.html');
        } catch (error) {
            console.log(error)
        }
    }
    return { docs }
}