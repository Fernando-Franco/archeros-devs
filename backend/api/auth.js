const { KEY } = require('../.env')
const jwt = require('jwt-simple')
const crypto = require('crypto')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email) {
            return res.status(204).send('Dados incompletos')
        }

        const user = await app.db('usuario')
            .whereRaw("LOWER(email) = LOWER(?)", req.body.email)
            .first()
            
        if (user) {
            if (!req.body.password){
                return res.status(200).send({retorno: true, msg: 'Usuário encontrado!'})
            } else {
                var hash = crypto.createHmac('sha1', KEY).update(req.body.password).digest('hex')
                console.log(hash)
                if(hash === user.senha_cli){
                    const payload = { id: user.id_usuario }
                    return res.status(200).send({
                        retorno: true, 
                        name: user.nome,
                        email: user.email,
                        token: jwt.encode(payload, KEY)
                    })
                }else{
                    return res.status(200).send({retorno: false, msg: 'Senha incorreta'})
                }
            }
        } else {
            return res.status(200).send({retorno: false, msg: 'Usuário não cadastrado!'})
        }
    }

    return { signin }
}