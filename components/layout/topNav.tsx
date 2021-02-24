import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { MainText } from '../styled-components/styled'

//// Routing Data ////
const coreDataBasePath = '/core-data'
const coreContentBasePath = '/core-content'
const subRoutes = {
  'core-data': [
    { text: 'Overview', link: coreDataBasePath },
    { text: 'Equipment', link: `${coreDataBasePath}/equipment` },
    { text: 'Moves', link: `${coreDataBasePath}/moves` },
    { text: 'Move Types', link: `${coreDataBasePath}/move-types` },
    { text: 'Body Areas', link: `${coreDataBasePath}/body-areas` },
    { text: 'Workout Types', link: `${coreDataBasePath}/workout-types` },
    { text: 'Programme Goals', link: `${coreDataBasePath}/programme-goals` },
  ],
  'core-content': [
    { text: 'Overview', link: coreContentBasePath },
    { text: 'Workouts', link: `${coreContentBasePath}/workouts` },
    { text: 'Plans', link: `${coreContentBasePath}/plans` },
    { text: 'Events', link: `${coreContentBasePath}/events` },
    { text: 'Clubs', link: `${coreContentBasePath}/clubs` },
  ],
  users: null,
}

//// Styled Components ////
const TopNavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
interface NavItemProps {
  isActive: boolean
}

const TopNavItem = styled.a<NavItemProps>`
  padding: 12px 16px;
  margin: 0 4px;
  box-shadow: ${(props) =>
    props.isActive
      ? '0 3px 16px 0px rgb(0 0 0 / 12%), 0 5px 8px -4px rgb(0 0 0 / 30%)'
      : 'None'};
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

export const TopNav = () => {
  const { route } = useRouter()
  const baseRoute = route.split('/')[1]
  const routes = baseRoute === '' ? null : subRoutes[baseRoute]

  return routes ? (
    <TopNavContainer>
      {routes.map(({ text, link }) => (
        <TopNavItem key={text} href={link} isActive={route === link}>
          <MainText
            bold
            colorType={route === link ? 'primaryLight' : 'primaryDark'}
          >
            {text}
          </MainText>
        </TopNavItem>
      ))}
    </TopNavContainer>
  ) : null
}
