import { Select } from '@/components/Select'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  flex: 1;
  padding: 154px 32px 50px;
  gap: 136px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 46px;

  p {
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    color: #0d3b66;
  }

  span {
    font-weight: 800;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 100px;

  h1 {
    font-size: 72px;
    line-height: 65px;
    font-weight: 800;
    font-style: normal;
    letter-spacing: -0.02em;
    color: #fff;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    width: 415px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 25px;

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
  }
`
