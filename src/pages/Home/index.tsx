import {
  Container,
  Content,
  Footer,
  Form,
  Header,
  Info,
  LogoWrapper,
} from './styles'

import logo from '@/assets/icons/logo.svg'
import labelName from '@/assets/icons/label-name.svg'
import homeImage from '@/assets/icons/home-image.svg'
import { Select } from '@/components/Select'
import { Button } from '@/components/Button'

import search from '@/assets/icons/search.svg'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

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
            <p>Busque um amigo:</p>
            <Select
              name="state"
              defaultLabel="UF"
              options={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
              ]}
            />
            <Select
              name="city"
              defaultLabel="Cidade"
              options={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
              ]}
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
