import {
  Container,
  Content,
  Footer,
  Form,
  Header,
  Info,
  LogoWrapper,
} from './styles'

import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import logo from '@/assets/icons/logo.svg'
import labelName from '@/assets/icons/label-name.svg'
import homeImage from '@/assets/icons/home-image.svg'
import { Select } from '@/components/Select'
import { Button } from '@/components/Button'

import search from '@/assets/icons/search.svg'

export interface State {
  id: number
  sigla: string
  nome: string
}

export interface City {
  code: string
  name: string
}

export function Home() {
  const [states, setStates] = useState<State[]>([])
  const [cities, setCities] = useState<City[]>([])

  async function fetchStates() {
    const response = await api.get('/location/states')
    setStates(response.data.states)
  }

  async function fetchCities(sigla: string) {
    const response = await api.get(`/location/citys/${sigla}`)
    setCities(response.data.citys)
  }

  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState(stateId: string) {
    setCities([])

    const state = states.find((state) => state.id === Number(stateId))
    state && fetchCities(state.sigla)
  }

  function handleChangeCity(cityId: string) {
    // TO DO
  }

  useEffect(() => {
    fetchStates()
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <LogoWrapper>
            <img src={logo} alt="a dog face" />
            <img src={labelName} alt="find a friend" />
          </LogoWrapper>
          <Info>
            <h1>Leve a felicidade para o seu lar</h1>
            <img src={homeImage} alt="" />
          </Info>
        </Header>

        <Footer>
          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>

          <Form>
            <Select
              name="state"
              defaultLabel="UF"
              options={states.map((state) => {
                return {
                  value: state.id,
                  label: state.nome,
                }
              })}
              onSelect={handleChangeState}
            />
            <Select
              name="city"
              defaultLabel="Cidade"
              options={cities.map((city) => {
                return {
                  value: city.code,
                  label: city.name,
                }
              })}
              onSelect={handleChangeCity}
            />
            <Button>
              <img src={search} alt="ícone de lupa" />
            </Button>
          </Form>
        </Footer>
      </Content>
    </Container>
  )
}
