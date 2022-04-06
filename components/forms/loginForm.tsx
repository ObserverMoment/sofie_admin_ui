import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import ErrorMessage from '../errorMessage'
import { Logo } from '../icons'
import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  SubmitButton,
} from './styled'
import { StyledTextInput } from './inputs/textInput'
import { signIn } from '../../services/firebaseClient'
import { FlexBox, Spacer } from '../../styles/layout'
import { Title } from '../../styles/text'

interface LoginData {
  email: string
  password: string
}

const LoginFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.pureWhite};
  border-radius: 4px;
`

const LoginForm = () => {
  const [globalError, setGlobalError] = useState(null as string)
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data: LoginData) => {
    try {
      await signIn(data.email, data.password)
      setGlobalError(null)
    } catch (err) {
      console.error(err)
      setGlobalError(
        'There was a problem logging you in, your username or password may be incorrect?',
      )
    }
  }

  return (
    <LoginFormContainer>
      <FlexBox direction="column" align="center" justify="center">
        <Logo />
        <Spacer bottom="8px" />
        <Title>Sign In</Title>
      </FlexBox>
      {globalError && <ErrorMessage message={globalError} />}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputGroup>
          <StyledLabel htmlFor="Email">Email</StyledLabel>
          <StyledTextInput
            {...register('email', { required: true, maxLength: 200 })}
            type="email"
            placeholder="Email"
            name="email"
            size={40}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="Password">Password</StyledLabel>
          <StyledTextInput
            {...register('password', { required: true, maxLength: 200 })}
            type="password"
            placeholder="Password"
            name="password"
            size={40}
          />
        </StyledInputGroup>

        <SubmitButton text="Login" disabled={false} loading={false} />
      </StyledForm>
    </LoginFormContainer>
  )
}

export default LoginForm
