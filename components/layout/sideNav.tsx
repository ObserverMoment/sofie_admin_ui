import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { signOut } from '../../services/firebaseClient'
import { MyLink } from '../../styles/buttons'
import { FlexBox, Spacer } from '../../styles/layout'
import { TinyText, Title } from '../../styles/text'
import {
  ContentIcon,
  DataIcon,
  HomeIcon,
  SignOutIcon,
  Logo,
  NewsFeedIcon,
  UserAvatarIcon,
} from '../icons'

//// Routing Data ////
const primaryRoutes = [
  { text: 'Dashboard', link: '/', icon: HomeIcon },
  { text: 'Core Data', link: '/core-data', icon: DataIcon },
  { text: 'Public Data', link: '/public-data', icon: ContentIcon },
  { text: 'User Data', link: '/user-data', icon: UserAvatarIcon },
  { text: 'Announcements', link: '/announcements', icon: NewsFeedIcon },
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
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const PrimaryNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px 8px;
`
interface NavItemsGroupContainerProps {
  expand?: boolean
}

const NavItemsGroupContainer = styled.div<NavItemsGroupContainerProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`

interface NavItemProps {
  isActive: boolean
}

const PrimaryNavItem = styled.a<NavItemProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.grey : props.theme.colors.pureWhite};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
  border-radius: 10px;
  opacity: 1;
  width: calc(100% - 16px);
  span,
  i {
    font-weight: bold;
    color: ${(props) =>
      props.isActive ? props.theme.colors.pureWhite : props.theme.colors.grey};
    text-decoration: none;
  }

  :hover {
    opacity: 0.9;
  }
`

//// React Components ////
export const LogoMenuAndSideNav = () => (
  <SideNavContainer>
    <Spacer bottom="8px" top="8px" />
    <MyLink
      href="/"
      content={
        <FlexBox direction="row" justify="center" align="center">
          <Logo size={30} />
          <Spacer right="10px" />
          <Title fontSize="18px">Admin</Title>
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
                size="sm"
                colorType={
                  `/${baseRoute}` === link ? 'pureWhite' : 'primaryDark'
                }
              />
              <Spacer right="8px" />
              <TinyText>{text}</TinyText>
            </PrimaryNavItem>
          </Link>
        ))}
      </NavItemsGroupContainer>
      <NavItemsGroupContainer>
        <FlexBox
          onClick={signOut}
          direction="row"
          padding="12px 8px"
          cursorHover
        >
          <SignOutIcon size="sm" colorType="grey" />
          <Spacer right="8px" />
          <TinyText colorType="grey" bold>
            Sign Out
          </TinyText>
        </FlexBox>
      </NavItemsGroupContainer>
    </PrimaryNavContainer>
  )
}
