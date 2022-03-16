import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { FlexBox, Spacer, SubTitle, Title } from './styled-components/styled'

export interface BreadCrumbData {
  title: string
  href: string
  isLast: boolean // Render is bold + no link.
}

export const BreadCrumb: React.FC<BreadCrumbData> = ({ title, href, isLast }) =>
  isLast ? (
    <Title>{title}</Title>
  ) : (
    <StyledBreadCrumb>
      <Link href={href}>
        <SubTitle>{title}</SubTitle>
      </Link>
      <Spacer right="4px" />
      <SubTitle>/</SubTitle>
      <Spacer right="4px" />
    </StyledBreadCrumb>
  )

interface BreadcrumbsProps {
  pageTitle?: string // Optional override the current route title.
}

// https://dev.to/dan_starner/building-dynamic-breadcrumbs-in-nextjs-17oa
export default function Breadcrumbs({ pageTitle }: BreadcrumbsProps) {
  // Gives us ability to load the current route details
  const router = useRouter()

  // Call the function to generate the breadcrumbs list
  const breadcrumbs = generateBreadcrumbs(router)

  return (
    <FlexBox direction="row">
      {breadcrumbs.map((c, i) => {
        const isLast = i === breadcrumbs.length - 1
        return (
          <BreadCrumb
            key={c.href}
            title={
              isLast && pageTitle ? pageTitle : formatBreadCrumbText(c.title)
            }
            href={c.href}
            isLast={isLast}
          />
        )
      })}
    </FlexBox>
  )
}

//// Utils ////
function generateBreadcrumbs(router: NextRouter) {
  // Remove any query parameters, as those aren't included in breadcrumbs
  const asPathWithoutQuery = router.asPath.split('?')[0]

  // Break down the path between "/"s, removing empty entities
  // Ex:"/my/nested/path" --> ["my", "nested", "path"]
  const asPathNestedRoutes = asPathWithoutQuery
    .split('/')
    .filter((v) => v.length > 0)

  // Iterate over the list of nested route parts and build
  // a "crumb" object for each one.
  const crumblist = asPathNestedRoutes.map((subpath, idx) => {
    // We can get the partial nested route for the crumb
    // by joining together the path parts up to this point.
    const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
    // The title will just be the route string for now
    const title = subpath
    return { href, title }
  })

  return crumblist
}

function formatBreadCrumbText(linkText: string) {
  return linkText
    .split('-')
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ')
}

///// Styled Components /////
const StyledBreadCrumb = styled.div`
  display: flex;
  direction: row;
  :hover {
    cursor: pointer;
  }
`
