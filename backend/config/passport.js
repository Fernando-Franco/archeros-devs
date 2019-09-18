const { KEY } = require('../.env')

const passport = require('passport')
const passportJwt = require('passport-jwt')

const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    const params = {
        secretOrKey: KEY,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    }

    const strategy = new Strategy(params, (payload, done) => {
        app.db('usuario')
            .where({ id_usuario: payload.id })
            .first()
            .then(user => {
                if (user) {
                    done(null, { 
                        id_usuario: user.id_usuario,
                        nome: user.nome
                    })
                } else {
                    done(null, false)
                }
            })
            .catch(err => done(err, false))
    })

    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', { session: false }),
    }
}