import React from 'react'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import {MenuItem} from '@mui/material'

export default function CustomersForm() {

  const [state, setState] = React.useState({
    customer: {} //objeto vazio
  })
  const {
    customer
  } = state

  const states = [
    {label: 'Distrito federal', value: 'DF'},
    {label: 'Espírito Santo', value: 'ES'},
    {label: 'Goiás', value: 'GO'},
    {label: 'Minas Gerais', value: 'MG'},
    {label: 'Paraná', value: 'PR'},
    {label: 'Rio de Janeiro', value: 'RJ'},
    {label: 'São Paulo', value: 'SP'},
  ]

  return(
    <>
      <Typography variant="h1" sx={{ mb: '50px' }}>
        Cadastro de clientes
      </Typography>

      <form>
        <TextField 
        id="name" 
        name="name" 
        label="Nome completo" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.name} 
        />

        <TextField 
        id="ident_document"
        mame="ident_document" 
        label="CPF" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.ident_document} 
        />

        <TextField 
        id="birth_date"
        mame="birth_date" 
        label="Data de nascimento" 
        variant="filled"  
        fullWidth 
        value={customer.birth_date} 
        />

        <TextField 
        id="street_name"
        mame="street_name" 
        label="Logradouro (Rua, Av., etc.)" 
        variant="filled" 
        required 
        fullWidth
        placeholder='Ex.: Rua Principal' 
        value={customer.street_name} 
        />

        <TextField 
        id="house_number"
        mame="house_number" 
        label="Nº" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.house_number} 
        />

        <TextField 
        id="complements"
        mame="complements" 
        label="Complemento" 
        variant="filled" 
        fullWidth
        placeholder='Apto., bloco, casa, etc.' 
        value={customer.complements} 
        />

        <TextField 
        id="neighborhood"
        mame="neighborhood" 
        label="Bairro" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.neighborhood} 
        />

        <TextField 
        id="municipality"
        mame="municipality" 
        label="Município" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.municipality} 
        />

        <TextField
        id="state"
        name='state'
        select
        label="UF"
        variant="filled"
        required
        fullWidth
        value={customer.state}
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField 
        id="phone"
        mame="phone" 
        label="Telefone" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.phone} 
        />

        <TextField 
        id="email"
        mame="email" 
        label="E-mail" 
        variant="filled" 
        required 
        fullWidth 
        value={customer.email} 
        />
      </form>
    </>
    
  )
}