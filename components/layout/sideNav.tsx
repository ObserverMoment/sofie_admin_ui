import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { signOut } from '../../lib/firebaseClient'
import { ContentIcon, DataIcon, HomeIcon, SignOutIcon, Logo } from '../icons'
import { MyLink } from '../styled-components/buttons'
import { FlexBox, Spacer, TinyText, Title } from '../styled-components/styled'

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
  background-color: ${(props) => props.theme.colors.pureWhite};
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
    props.isActive
      ? props.theme.colors.primaryLight
      : props.theme.colors.pureWhite};
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
      props.isActive
        ? props.theme.colors.primaryDark
        : props.theme.colors.grey};

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
                colorType={`/${baseRoute}` === link ? 'primaryDark' : 'grey'}
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
