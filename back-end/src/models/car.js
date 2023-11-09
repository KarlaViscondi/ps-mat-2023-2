import { z } from 'zod'

const Car = z.object({
    brand: 
        z.string()
        .min(1, { message: '' })
        .max(25, { message: '' }),
    
    model: 
        z.string()
        .min(1, { message: '' })
        .max(25, { message: '' }),
    
    color: 
        z.string()
        .min(4, { message: '' })
        .max(20, { message: '' }),
    
    year_manufacture: 
        z.number()
        .min(1940, { message: '' })
        .max(2023, { message: '' }),
    
    imported: 
        z.boolean(),
    
    plates: 
        z.string()
        .trim()
        .length(8, { message: ''}),
    
    selling_date: 
        z.coerce.date().nullable().refine(date => !date || new Date(date) <= new Date(), {
        message: 'A data de venda não pode ser posterior à data de hoje',
        }),
    
    selling_price: 
        z.number()
        .min(2000, { message: '' })
        .nullable(),
    
    customer_id: 
        z.number()
        .int()
        .positive()
        .nullable()
    
})

export default Car