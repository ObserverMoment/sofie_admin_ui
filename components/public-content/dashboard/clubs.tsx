import Link from 'next/link'
import React, { Fragment } from 'react'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import { useAdminPublicClubCountsQuery } from '../../../graphql/generated_types'
import {
  DashboardSectionNav,
  DashboardSectionNavItem,
  ObjectCountText,
} from '../../../pages/public-data'
import { SubTitle } from '../../../styles/text'
import ErrorMessage from '../../errorMessage'
import { LoadingDots } from '../../loadingIndicators'

export default function PublicClubsDashboard() {
  const { loading, error, data } = useAdminPublicClubCountsQuery()

  return (
    <DashboardSectionNav>
      <Link href={`${PUBLIC_CONTENT_BASE_URL}/validated-clubs`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicClubCounts.valid}
              </ObjectCountText>
              <SubTitle>Validated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/pending-clubs`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicClubCounts.pending}
              </ObjectCountText>
              <SubTitle>Pending</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/invalidated-clubs`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicClubCounts.invalid}
              </ObjectCountText>
              <SubTitle>Invalidated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>
    </DashboardSectionNav>
  )
}
