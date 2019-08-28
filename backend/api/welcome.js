module.exports = app => {
    const hello = async (req, res) => {
        res.status(400).send('Olá')
    }
    return { hello }
}