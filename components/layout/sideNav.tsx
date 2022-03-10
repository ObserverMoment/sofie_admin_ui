import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { signOut } from '../../lib/firebaseClient'
import { ContentIcon, DataIcon, HomeIcon, SignOutIcon, Logo } from '../images'
import { MyButton, MyLink } from '../styled-components/buttons'
import { FlexBox, Spacer, TinyText } from '../styled-components/styled'

//// Routing Data ////
const primaryRoutes = [
  { text: 'Dashboard', link: '/', icon: HomeIcon },
  { text: 'Core Data', link: '/core-data', icon: DataIcon },
  { text: 'Public Content', link: '/public-content', icon: ContentIcon },
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
    <Spacer bottom="8px" top="8px" />
    <MyLink
      href="/"
      content={
        <FlexBox justify="center" align="center">
          <Logo size={30} invert={true} />
        </FlexBox>
      }
    />
    <PrimaryNav />
  </SideNavContainer>
)

export const PrimaryNav = () => {
  const { route } = useRouter()
  const baseRoute = route.split('/')[1]

  return (
    <PrimaryNavContainer>
      <NavItemsGroupContainer expand>
        {primaryRoutes.map(({ text, link, icon: Icon }) => (
          <Link key={text} href={link} passHref>
            <PrimaryNavItem isActive={`/${baseRoute}` === link}>
              <Icon
                colorType={
                  `/${baseRoute}` === link ? 'primaryDark' : 'primaryLight'
                }
              />
              <Spacer bottom="3px" />
              <TinyText>{text}</TinyText>
            </PrimaryNavItem>
          </Link>
        ))}
      </NavItemsGroupContainer>
      <NavItemsGroupContainer>
        <MyButton
          flexDirection="column"
          onClick={signOut}
          colorType="primaryDark"
        >
          <SignOutIcon size="2x" />
          <Spacer bottom="3px" />
          <TinyText>Sign Out</TinyText>
        </MyButton>
      </NavItemsGroupContainer>
    </PrimaryNavContainer>
  )
}
