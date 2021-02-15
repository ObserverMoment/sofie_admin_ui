import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import ErrorMessage from '../components/errorMessage'
import { SpotMeLogo } from '../components/images'
import { FlexBox, Spacer, Title } from '../components/styled-components/styled'
import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledTextInput,
  SubmitButton,
} from '../components/styled-components/styledForm'
import { firebaseClient, signIn } from '../lib/firebaseClient'

const LoginPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

interface LoginData {
  email: string
  password: string
}

const LoginFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.pureWhite};
  padding: 40px;
  border-radius: 20px;
`

const Login = () => {
  const { query } = useRouter()
  const [globalError, setGlobalError] = useState(null as string)
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data: LoginData) => {
    try {
      await signIn(
        data.email,
        data.password,
        query.from ? (query.from as string) : null,
      )
    } catch (err) {
      console.error(err)
      setGlobalError(
        'There was a problem logging you in, your username or password may be incorrect?',
      )
    }
  }

  return (
    <LoginPage>
      <LoginFormContainer>
        <FlexBox direction="row" align="center">
          <SpotMeLogo />
          <Spacer />
          <Title>SpotMe Admin</Title>
        </FlexBox>
        {globalError && (
          <FlexBox direction="row">
            <ErrorMessage message={globalError} />
          </FlexBox>
        )}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <StyledLabel htmlFor="Email">Email</StyledLabel>
            <StyledTextInput
              type="email"
              placeholder="Email"
              name="email"
              size={40}
              ref={register({ required: true, maxLength: 200 })}
            />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="Password">Password</StyledLabel>
            <StyledTextInput
              type="password"
              placeholder="Password"
              name="password"
              size={40}
              ref={register({ required: true, maxLength: 200 })}
            />
          </StyledInputGroup>

          <SubmitButton text="Login" disabled={false} loading={false} />
        </StyledForm>
      </LoginFormContainer>
    </LoginPage>
  )
}

export default Login
