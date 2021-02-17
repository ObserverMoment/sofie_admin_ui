import React from 'react'
import { FlexBox, Title } from '../../components/styled-components/styled'
import nookies from 'nookies'
import Router from 'next/router'

export default function Overview() {
  return (
    <FlexBox>
      <Title>OfficialContentOverview</Title>
    </FlexBox>
  )
}

// Overview.getInitialProps = async (ctx) => {
//   console.log('Content.getStaticProps')
//   let token: string
//   if (typeof window === 'undefined') {
//     console.log('server')
//     console.log(ctx.pathname)
//     const { idToken } = nookies.get(ctx)
//     token = idToken
//     if (!token && ctx.pathname !== '/login') {
//       ctx.res.writeHead(307, { Location: '/login' })
//       ctx.res.end()
//     }
//   } else {
//     console.log('browser')
//     console.log(Router.route)
//     const { idToken } = nookies.get()
//     token = idToken
//     if (!token && Router.route !== '/login') {
//       Router.replace('/login')
//     }
//   }
//   return { token }
// }
