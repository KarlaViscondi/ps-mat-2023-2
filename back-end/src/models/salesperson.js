import { z } from 'zod'
import { cpf } from 'cpf-cnpj-validator'

//  maior de 18 anos
// Por isso, para validar, calculamos a data máxima em que
// o funcionário pode ter nascido para ter 18 anos na data de hoje
const maxBirthDate = new Date()   // Hoje
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 18)  // Data há 18 anos atrás

// O funcionario pode ter nascido, no máximo, há 120 anos
const minBirthDate = new Date()
minBirthDate.setFullYear(maxBirthDate.getFullYear() - 120)

//Data min 01/01/2020
const minDateHire = new Date('2020-01-01')
//Data máx hoje
const maxDateHire = new Date()

const Salesperson = z.object({
    user_id: 
        z.number()
        .int({ message: 'O id deve conter apenas números inteiros' }),
    
    birth_date: 
    // coerce força a conversão para o tipo Date, se o dado recebido for string
        z.coerce.date()
        .min(minBirthDate, { message: 'Data de nascimento está muito no passado'})
        .max(maxBirthDate, { message: 'O funcionário deve ser maior de 18 anos' })
        .nullable(),

    ident_document: 
        z.string()
        .trim()
        .length(14, { message: 'O CPF está incompleto'})
        .refine(val => cpf.isValid(val), { message: 'CPF inválido' }),
    
    salary:
        z.coerce.number()
        .min(1500, { message: 'O salário do funcionário deve ser de pelo menos 1.500 R$' })
        .max(20000, { message: 'O salário do funcionário não deve ultrapassar o valor de 20.000 R$' }),

    phone: 
        z.string()
        .transform(v => v.replace('_', '')) // Retira os sublinhados
        // Depois de um transform(), não podemos usar length(). Por isso, temos que
        // usar refine() passando uma função personalizada para validar o tamanho do campo
        .refine(v => v.length == 15, { message: 'O número do telefone/celular está incompleto' }),
    
    date_of_hire:
        z.coerce.date()
        .min(minDateHire)
        .max(maxDateHire) 
    
})

export default Salesperson