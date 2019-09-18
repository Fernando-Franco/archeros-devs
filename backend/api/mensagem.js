module.exports = app => {
    const enviar = (req, res) => {
        res.status(200).json({user: req.user})
    }
    
    return { enviar }
}