// apidoc -i backend/config -o backend/apidocs
module.exports = app => {
    app.get('/', app.api.welcome.docs);

    /**
     * @api {get} /signin Singin
     * @apiName Singin
     * @apiGroup Sistema
     * 
     * @apiParam (Auth) {String} email E-mail do usuário
     * @apiParam (Auth) {String} password Senha do usuário
     *
     * @apiSuccess {Boolean} retorno Status de acesso autorizado
     * @apiSuccess {String} name Nome do Usuário
     * @apiSuccess {String} email E-mail do Usuário
     * @apiSuccess {String} token Token para realizar outras requisições
     * 
     * @apiSuccessExample {"email": "lucasano@gmail.com", "password": "123"} Sucesso
     *    HTTP/1.1 200 OK
     *    {
     *      "retorno": true,
     *      "name": "Lucas Ano",
     *      "email": lucasano@gmail.com,
     *      "token": "eyJ0eaAiOiJKv1QiLCJhbGciOIJIUzI1NiJ9.eyJpZCI6Mn1.yvxnk454o2krShaQUSV1Falcm4HtMEd9b_jRUoFLZXA",
     *    }
     * 
     * @apiError IncompleteData Dados incompletos.
     * @apiError NotFound E-mail não cadastrado.
     * @apiError Unauthorized Senha incorreta.
     *
     */
    app.post('/signin', app.api.auth.signin)

    app.route('/messagem/enviar')
        .all(app.config.passport.authenticate())
        .post(app.api.mensagem.enviar)
}