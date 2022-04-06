import Link from 'next/link'
import React, { Fragment } from 'react'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import { useAdminPublicWorkoutPlanCountsQuery } from '../../../graphql/generated_types'
import {
  DashboardSectionNav,
  DashboardSectionNavItem,
  ObjectCountText,
} from '../../../pages/public-data'
import { SubTitle } from '../../../styles/text'
import ErrorMessage from '../../errorMessage'
import { LoadingDots } from '../../loadingIndicators'

export default function PublicWorkoutPlansDashboard() {
  const { loading, error, data } = useAdminPublicWorkoutPlanCountsQuery()

  return (
    <DashboardSectionNav>
      <Link href={`${PUBLIC_CONTENT_BASE_URL}/validated-plans`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicWorkoutPlanCounts.valid}
              </ObjectCountText>
              <SubTitle>Validated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/pending-plans`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicWorkoutPlanCounts.pending}
              </ObjectCountText>
              <SubTitle>Pending</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/invalidated-plans`} passHref>
        <DashboardSectionNavItem>
          {error ? (
            <ErrorMessage message={error.message} />
          ) : loading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {data.adminPublicWorkoutPlanCounts.invalid}
              </ObjectCountText>
              <SubTitle>Invalidated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>
    </DashboardSectionNav>
  )
}
