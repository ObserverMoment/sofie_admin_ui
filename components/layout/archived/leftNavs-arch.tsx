import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  text-align: center;
  top: 0;
`

interface ListItemLinkProps {
  readonly isActive?: boolean
}

const ListItemLink = styled.a<ListItemLinkProps>`
  font-size: 1.2rem;
  padding: 1rem 0;
  margin-left: 10px;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${(props) => (props.isActive ? '#f8f8f8' : '#025be9')};
  color: ${(props) => (props.isActive ? '#f8f8f8' : '#050729')};
`

export const LeftNav = ({ fullscreen, navItems }) => {
  const router = useRouter()

  return (
    <NavContainer>
      {navItems.map(({ text, link }) => (
        <ListItemLink key={text} href={link} isActive={router.route === link}>
          {text}
        </ListItemLink>
      ))}
    </NavContainer>
  )
}

interface NavItem {
  text: string
  link: string
}

const primaryNavItems = [
  { text: 'Dashboard', link: '/' },
  { text: 'Core Data', link: '/core-data' },
  { text: 'Official Content', link: '/official-content' },
  { text: 'Users', link: '/users' },
]

export const PrimaryLeftNav = () => (
  <LeftNav fullscreen navItems={primaryNavItems} />
)

const coreDataBasePath = '/core-data'
const coreDataNavItems = [
  { text: 'Overview', link: coreDataBasePath },
  { text: 'Equipment', link: `${coreDataBasePath}/equipment` },
  { text: 'Moves', link: `${coreDataBasePath}/moves` },
  { text: 'Body Areas', link: `${coreDataBasePath}/body-areas` },
  { text: 'Workout Types', link: `${coreDataBasePath}/workout-types` },
  { text: 'Workout Goals', link: `${coreDataBasePath}/workout-goals` },
]

// export const CoreDataLeftNav = () => <LeftNav navItems={coreDataNavItems} />

const officialContentBasePath = '/official-ciontent'
const officialContentNavItems = [
  { text: 'Overview', link: officialContentBasePath },
  { text: 'Workouts', link: `${officialContentBasePath}/workouts` },
  { text: 'Plans', link: `${officialContentBasePath}/plans` },
  { text: 'Events', link: `${officialContentBasePath}/events` },
  { text: 'Clubs', link: `${officialContentBasePath}/clubs` },
]

// export const OfficialContentLeftNav = () => (
//   <LeftNav navItems={officialContentNavItems} />
// )
