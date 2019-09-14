module.exports = app => {
    app.get('/', app.api.welcome.hello);

    app.post('/signin', app.api.auth.signin)

    //app.route('/oportunidades/balance')
    //    .all(app.config.passport.authenticate())
    //    .post(app.api.oportunidades.balanceRequest)
}