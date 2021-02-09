import React from 'react'
import styled from 'styled-components'
import { MainText } from '../styled'
import { useRouter } from 'next/router'

const NavContainer = styled.nav`
  border-radius: 4px;
  background-color: #f8f8f8;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

interface ListItemLinkProps {
  readonly isActive?: boolean
}

const ListItem = styled.li`
  padding: 4px;
  margin: 12px;
`

const ListItemLink = styled.a<ListItemLinkProps>`
  text-decoration: none;
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? '#050729' : '#f8f8f8')};
`

const ListLinkText = styled.span<ListItemLinkProps>`
  font-size: 18px;
  color: ${(props) => (props.isActive ? '#f8f8f8' : '#050729')};
`

export const LeftNav = ({ navItems }) => {
  const router = useRouter()

  return (
    <NavContainer>
      <List>
        {navItems.map(({ text, link }) => (
          <ListItem key={text}>
            <ListItemLink href={link} isActive={router.route === link}>
              <ListLinkText isActive={router.route === link}>
                {text}
              </ListLinkText>
            </ListItemLink>
          </ListItem>
        ))}
      </List>
    </NavContainer>
  )
}
