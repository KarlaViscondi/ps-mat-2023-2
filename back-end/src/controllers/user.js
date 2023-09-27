import prisma from '../database/client.js'

const controller = {} //Objeto vazio
controller.create = async function(req, res){
    try{
        await prisma.user.create({data: req.body})

        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function(req, res){
    try{
        const result = await prisma.user.findMany({
            orderBy: [
                {first_name: 'asc'}
            ]

        }) //select * from tabela - mostra

        //HTTP 200: OK 
        res.send(result)
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function(req, res){
    try{
        const result = await prisma.user.findUnique({
            where: {id: Number(req.params.id)}
        })
        //Encontrou: retorna HTTP 200:OK
        if(result) res.send(result)
        //Não encontrou:retorna HTTP 404: Not found
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async function(req, res){
    try{
        const result = await prisma.user.update({
            where: {id: Number(req.params.id)},
            data: req.body
        })
        //HTTP 204: No content
        if(result) res.status(204).end()
        //HTTP 404: Not found
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async function(req, res){
    try{
        const result = await prisma.user.delete({
            where: {id: Number(req.params.id)}
        })
        //HTTP 204: No content
        if(result) res.status(204).end()
        //HTTP 404: Nou found
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

export default controller
