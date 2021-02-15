import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { firebaseClient, signOut } from '../../lib/firebaseClient'
import {
  ContentIcon,
  DataIcon,
  HomeIcon,
  SignOutIcon,
  SpotMeLogo,
  UsersIcon,
} from '../images'
import {
  FlexBox,
  MyButton,
  MyLink,
  Spacer,
  TinyText,
} from '../styled-components/styled'

//// Routing Data ////
const primaryRoutes = [
  { text: 'Dashboard', link: '/', icon: HomeIcon },
  { text: 'Core Data', link: '/core-data', icon: DataIcon },
  { text: 'Official Content', link: '/official-content', icon: ContentIcon },
  { text: 'Users', link: '/users', icon: UsersIcon },
]

//// Styled Components ////
interface NavItem {
  text: string
  link: string
}

const SideNavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${(props) => props.theme.spacing.sideNavWidth};
  border-radius: 0 10px 10px 0;
  background-color: ${(props) => props.theme.colors.primaryDark};
`

const PrimaryNavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 6px;
  height: 100%;
  padding: 10px 0;
`
interface NavItemsGroupContainerProps {
  expand?: boolean
}

const NavItemsGroupContainer = styled.div<NavItemsGroupContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: ${(props) => (props.expand ? 1 : 0)};
  width: 100%;
`

interface NavItemProps {
  isActive: boolean
}

const PrimaryNavItem = styled.a<NavItemProps>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.primaryLight
      : props.theme.colors.primaryDark};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.primaryDark
      : props.theme.colors.primaryLight};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 74px;
  width: 100%;
  opacity: 1;
  border-radius: 10px 0 0 10px;
  i {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
  }
  span {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
    text-decoration: none;
  }
  :hover {
    opacity: 0.8;
  }
`

//// React Components ////
export const LogoMenuAndSideNav = () => (
  <SideNavContainer>
    <Spacer space="8px" />
    <MyLink
      href="/"
      content={
        <FlexBox justify="center" align="center">
          <SpotMeLogo width={50} height={50} />
        </FlexBox>
      }
    />
    <PrimaryNav signOut={signOut} />
  </SideNavContainer>
)

export const PrimaryNav = ({ signOut }) => {
  const { route } = useRouter()
  const baseRoute = route.split('/')[1]

  return (
    <PrimaryNavContainer>
      <NavItemsGroupContainer expand>
        {primaryRoutes.map(({ text, link, icon: Icon }) => (
          <PrimaryNavItem
            key={text}
            href={link}
            isActive={`/${baseRoute}` === link}
          >
            <Icon width={20} />
            <Spacer space="3px" />
            <TinyText>{text}</TinyText>
          </PrimaryNavItem>
        ))}
      </NavItemsGroupContainer>
      <NavItemsGroupContainer>
        <MyButton
          flexDirection="column"
          onClick={signOut}
          colorType="primaryDark"
        >
          <SignOutIcon />
          <Spacer space="3px" />
          <TinyText>Sign Out</TinyText>
        </MyButton>
      </NavItemsGroupContainer>
    </PrimaryNavContainer>
  )
}
