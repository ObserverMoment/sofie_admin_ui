import { printIntrospectionSchema } from 'graphql'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MainText } from '../styled'

//// Routing Data ////
const coreDataBasePath = '/core-data'
const officialContentBasePath = '/official-content'
const subRoutes = {
  'core-data': [
    { text: 'Overview', link: coreDataBasePath },
    { text: 'Equipment', link: `${coreDataBasePath}/equipment` },
    { text: 'Moves', link: `${coreDataBasePath}/moves` },
    { text: 'Body Areas', link: `${coreDataBasePath}/body-areas` },
    { text: 'Workout Types', link: `${coreDataBasePath}/workout-types` },
    { text: 'Workout Goals', link: `${coreDataBasePath}/workout-goals` },
  ],
  'official-content': [
    { text: 'Overview', link: officialContentBasePath },
    { text: 'Workouts', link: `${officialContentBasePath}/workouts` },
    { text: 'Plans', link: `${officialContentBasePath}/plans` },
    { text: 'Events', link: `${officialContentBasePath}/events` },
    { text: 'Clubs', link: `${officialContentBasePath}/clubs` },
  ],
  users: null,
}

//// Styled Components ////
interface NavItem {
  text: string
  link: string
}

const SecondaryNavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
interface NavItemProps {
  isActive: boolean
}

const SecondaryNavItem = styled.a<NavItemProps>`
  padding: 12px 16px;
  margin: 0 4px;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.primaryDark
      : props.theme.colors.primaryLight};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.primaryLight
      : props.theme.colors.primaryDark};
  text-decoration: none;
  border-radius: 112px;
`

export const SecondaryNav = () => {
  const { route } = useRouter()
  const baseRoute = route.split('/')[1]
  const routes = baseRoute === '' ? null : subRoutes[baseRoute]

  return routes ? (
    <SecondaryNavContainer>
      {routes.map(({ text, link }) => (
        <SecondaryNavItem key={text} href={link} isActive={route === link}>
          <MainText
            bold
            colorType={route === link ? 'primaryLight' : 'primaryDark'}
          >
            {text}
          </MainText>
        </SecondaryNavItem>
      ))}
    </SecondaryNavContainer>
  ) : null
}
