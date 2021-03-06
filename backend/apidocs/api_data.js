define({ "api": [
  {
    "type": "get",
    "url": "/signin",
    "title": "Singin",
    "name": "Singin",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p>"
          },
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "retorno",
            "description": "<p>Status de acesso autorizado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do Usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token para realizar outras requisições</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"email\": \"lucasano@gmail.com\", \"password\": \"123\"} Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"retorno\": true,\n  \"name\": \"Lucas Ano\",\n  \"email\": lucasano@gmail.com,\n  \"token\": \"eyJ0eaAiOiJKv1QiLCJhbGciOIJIUzI1NiJ9.eyJpZCI6Mn1.yvxnk454o2krShaQUSV1Falcm4HtMEd9b_jRUoFLZXA\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncompleteData",
            "description": "<p>Dados incompletos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>E-mail não cadastrado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Senha incorreta.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/config/routes.js",
    "groupTitle": "Sistema"
  }
] });
