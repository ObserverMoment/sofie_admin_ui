import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`

interface ListItemLinkProps {
  readonly isActive?: boolean
}

const ListItem = styled.li`
  padding: 4px;
`

const ListItemLink = styled.a<ListItemLinkProps>`
  text-decoration: none;
  padding: 8px;
  margin: 4px;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? '#050729' : '#f8f8f8')};
`

const ListLinkText = styled.span<ListItemLinkProps>`
  font-size: 18px;
  color: ${(props) => (props.isActive ? '#f8f8f8' : '#050729')};
`

const navItems = [
  { text: 'Dashboard', link: '/' },
  { text: 'Core Data', link: '/core-data' },
  { text: 'Official Content', link: '/official-content' },
  { text: 'Users', link: '/users' },
]

export const HeaderNav = (props) => {
  const router = useRouter()

  return (
    <List>
      {navItems.map(({ text, link }) => (
        <ListItem key={text}>
          <ListItemLink href={link} isActive={router.route === link}>
            <ListLinkText isActive={router.route === link}>{text}</ListLinkText>
          </ListItemLink>
        </ListItem>
      ))}
    </List>
  )
}
