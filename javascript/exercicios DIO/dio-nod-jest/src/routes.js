import { Router } from "express";

const routes = Router()

const database = ['Julio']

routes.get('/users', (request, response) => {
    return response.status(200).json(database)
})

routes.post('/users', (request, response)=>{
    const { name } = request.body
    database.push(name)
    return response.status(201).json({'mensagem': `Usuário ${name} criado`})
})
//STATUS CODE

// GET - Ler os dados
// POST - Criar um novo dado
// PUT/PATCH - Editar os dados
// DELETE - Deletar os dados
