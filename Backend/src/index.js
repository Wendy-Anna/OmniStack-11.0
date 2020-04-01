const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/*
Rota / Recurso
*/


/*
Métodos HTTP:
*GET: Busca uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parâmetros:

*Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
*Route Params: Parâmetros utilizados para identificar recursos
*Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/




app.listen(3333); 