import Link from 'next/link'
import React, { Fragment } from 'react'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import { useAdminPublicWorkoutCountsQuery } from '../../../graphql/generated_types'
import {
  DashboardSectionNav,
  DashboardSectionNavItem,
  ObjectCountText,
} from '../../../pages/public-data'
import ErrorMessage from '../../errorMessage'
import { LoadingDots } from '../../loadingIndicators'
import { SubTitle } from '../../styled-components/styled'

export default function PublicWorkoutsDashboard() {
  const { loading, error, data } = useAdminPublicWorkoutCountsQuery()

  return (
    <DashboardSectionNav>
      <Link href={`${PUBLIC_CONTENT_BASE_URL}/validated-workouts`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicWorkoutCounts.valid}
              </ObjectCountText>
              <SubTitle>Validated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/pending-workouts`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicWorkoutCounts.pending}
              </ObjectCountText>
              <SubTitle>Pending</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/invalidated-workouts`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicWorkoutCounts.invalid}
              </ObjectCountText>
              <SubTitle>Invalidated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>
    </DashboardSectionNav>
  )
}
