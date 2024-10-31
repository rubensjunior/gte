dmx.config({
  "trabalhadores": {
    "rpColaboradores": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-completo"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "admin"
        },
        {
          "type": "boolean",
          "name": "colaborador"
        },
        {
          "type": "boolean",
          "name": "frequentador"
        }
      ],
      "outputType": "array"
    },
    "data_colaborador": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-completo"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "admin"
        },
        {
          "type": "boolean",
          "name": "colaborador"
        },
        {
          "type": "boolean",
          "name": "frequentador"
        },
        {
          "type": "boolean",
          "name": "ativo"
        }
      ],
      "outputType": "array"
    }
  },
  "frequentadores": {
    "rpFrequentadores": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-completo"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "admin"
        },
        {
          "type": "boolean",
          "name": "colaborador"
        },
        {
          "type": "boolean",
          "name": "frequentador"
        },
        {
          "type": "boolean",
          "name": "ativo"
        }
      ],
      "outputType": "array"
    },
    "data_frequentador": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-completo"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "admin"
        },
        {
          "type": "boolean",
          "name": "colaborador"
        },
        {
          "type": "boolean",
          "name": "frequentador"
        },
        {
          "type": "boolean",
          "name": "ativo"
        }
      ],
      "outputType": "array"
    }
  },
  "atendimento": {
    "rpAtendimentos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "frequentador"
        },
        {
          "type": "date",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "nome-completo"
        }
      ],
      "outputType": "array"
    },
    "atendimentos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "frequentador"
        },
        {
          "type": "date",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "data_atendimento": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "frequentador"
        },
        {
          "type": "date",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "nome-completo"
        }
      ],
      "outputType": "array"
    },
    "rpNotas": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "atendimento"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "nota"
        }
      ],
      "outputType": "array"
    }
  }
});
