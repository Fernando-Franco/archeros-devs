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
        app.db('cliente')
            .where({ codigo_cli: payload.id })
            .first()
            .then(user => {
                if (user) {
                    done(null, { 
                        //codigo_cli: user.codigo_cli,
                        //nome_cli: user.nome_cli,
                        //documento_cli: user.documento_cli
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