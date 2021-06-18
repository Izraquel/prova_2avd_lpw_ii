import React from 'react'
import { useState, useEffect, FormEvent } from 'react'
import { Container, Button, Form } from './styles'

import api from '../../services/api'

interface Cadastro {
  id: string
  ano: string
  sede: string
  campeao: string
}

const Dashboard: React.FC = () => {
  const [copa, setCopas] = useState<Cadastro[]>([] as Cadastro[])

  const [id, setId] = useState('')
  const [ano, setAno] = useState('')
  const [sede, setSede] = useState('')
  const [campeao, setCampeao] = useState('')
  const [idS, setIdS] = useState('null')


  async function loadData() {
    const dados = await api.get(`/worldcup`).then((response) => response.data)
    setCopas(dados)
  }

  useEffect(() => {
    loadData()
  }, [])

  async function handleAddCopas(event: FormEvent) {
    event.preventDefault()

    const dado = {
      ano: ano,
      sede: sede,
      campeao: campeao
    }
    if(idS) {
      await api.put(`/worldcup/${idS}`, dado) //altera
    } else {
      await api.post(`/worldcup`, dado) //cria
    }

    setAno('')
    setSede('')
    setCampeao('')
    setIdS('null')
    loadData()
  }


  async function handleDelete(id: string) {
    await api.delete(`worldcup/${id}`)

    loadData()
  }


  return (
    <Container>
      <Form onSubmit={handleAddCopas}>
        <input type='text' name='ano' value={ano}
         onChange={(e) => setAno(e.target.value)} placeholder='Ano da Copa Mundo' />


        <input type='text' name='sede' value={sede}
        onChange={(e) => setSede(e.target.value)} placeholder='Sede da Copa do Mundo' />


        <input type='text' name='campeo' value={campeao}
        onChange={(e) => setCampeao(e.target.value)}placeholder='Campeo Mundial' />

        <Button type="submit">Salvar</Button>
      </Form>

      <table>
          <thead>
            <tr>
              <th>Ano</th>
              <th>Sede</th>
              <th>Campeão</th>
            </tr>
          </thead>
          <tbody>
          {copa.map((copa: Cadastro) => (
            <tr key={copa.id}>
              <td>{copa.ano}</td>
              <td>{copa.sede}</td>
              <td>{copa.campeao}</td>
              <td>
                <Button type="button" onClick={() => handleDelete(copa.id)}>Excluir</Button>

                <Button type="button">Detalhes</Button>
              </td>
            </tr>
          ))}

          </tbody>
      </table>

    </Container>

  )
}

export default Dashboard
