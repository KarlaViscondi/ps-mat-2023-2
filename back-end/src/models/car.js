import { z } from 'zod'

const maxSellingDate = new Date();  // Hoje

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
        z.coerce.number()
        .int()
        .min(1940, { message: 'Selecione um ano de fabricação'})
        .max(2023, { message: 'Selecione um ano de fabricação'}),
    
    imported: 
        z.boolean(),
    
    plates: 
        z.string()
        .transform(v => v.replace(' ', '')) // Retira os espaços
        // Depois de um transform(), não podemos usar length(). Por isso, temos que
        // usar refine() passando uma função personalizada para validar o tamanho do campo
        .refine(v => v.length == 8, { message: 'O número da placa está incompleto' }),
    
    selling_date: 
        z.coerce.date()
        .max(maxSellingDate, { message: 'A data de venda não pode ser posterior à data de hoje'})
        .nullable(),
    
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