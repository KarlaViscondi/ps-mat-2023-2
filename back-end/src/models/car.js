import { z } from 'zod'

const Car = z.object({
    brand: 
        z.string()
        .min(1, { message: 'Preencha este campo' })
        .max(25, { message: 'Número de caracteres excedido' }),
    
    model: 
        z.string()
        .min(1, { message: 'Preencha este campo' })
        .max(25, { message: 'Número de caracteres excedido' }),
    
    color: 
        z.string()
        .min(4, { message: 'A cor deve conter pelo menos 4 caracteres' })
        .max(20, { message: 'Número de caracteres excedido' }),
    
    year_manufacture: 
        z.number()
        .int()
        .min(1940)
        .max(2023),
    
    imported: 
        z.boolean(),
    
    plates: 
        z.string()
        .trim()
        .length(8, { message: 'A placa precisa conter exatamente 8 caracteres'}),
    
    selling_date: 
        z.coerce.date().nullable().refine(date => !date || !isNaN(new Date(date).getTime()), {
        message: 'Data de venda inválida',
        }),
    
    selling_price: 
        z.coerce.number()
        .min(2000, { message: 'O preço do carro deve ser de pelo menos 2000 R$' })
        .nullable(),
    
    customer_id: 
        z.coerce.number()
        .int()
        .positive({ message: 'Selecione "nenhum cliente" ou o nome do cliente que comprou o carro' })
        .nullable()
    
})

export default Car