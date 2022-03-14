import Link from 'next/link'
import React, { Fragment } from 'react'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import {
  PublicContentValidationStatus,
  useAdminPublicWorkoutsCountQuery,
} from '../../../graphql/generated_types'
import {
  DashboardSectionNav,
  DashboardSectionNavItem,
  ObjectCountText,
} from '../../../pages/public-content'
import ErrorMessage from '../../errorMessage'
import { LoadingSpinner } from '../../loadingIndicators'
import { SubTitle } from '../../styled-components/styled'

export default function PublicWorkoutsDashboard() {
  const {
    loading: pendingCountLoading,
    error: pendingCountError,
    data: pendingCount,
  } = useAdminPublicWorkoutsCountQuery({
    variables: {
      status: PublicContentValidationStatus.Pending,
    },
  })

  const {
    loading: validCountLoading,
    error: validCountError,
    data: validCount,
  } = useAdminPublicWorkoutsCountQuery({
    variables: {
      status: PublicContentValidationStatus.Valid,
    },
  })

  const {
    loading: invalidCountLoading,
    error: invalidCountError,
    data: invalidCount,
  } = useAdminPublicWorkoutsCountQuery({
    variables: {
      status: PublicContentValidationStatus.Invalid,
    },
  })

  return (
    <DashboardSectionNav>
      <Link href={`${PUBLIC_CONTENT_BASE_URL}/workouts/validated`} passHref>
        <DashboardSectionNavItem>
          {validCountError ? (
            <ErrorMessage message={validCountError.message} />
          ) : validCountLoading ? (
            <LoadingSpinner />
          ) : (
            <Fragment>
              <ObjectCountText>
                {validCount.adminPublicWorkoutsCount}
              </ObjectCountText>
              <SubTitle>Validated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/workouts/pending`} passHref>
        <DashboardSectionNavItem>
          {pendingCountError ? (
            <ErrorMessage message={pendingCountError.message} />
          ) : pendingCountLoading ? (
            <LoadingSpinner />
          ) : (
            <Fragment>
              <ObjectCountText>
                {pendingCount.adminPublicWorkoutsCount}
              </ObjectCountText>
              <SubTitle>Pending</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/workouts/invalidated`} passHref>
        <DashboardSectionNavItem>
          {invalidCountError ? (
            <ErrorMessage message={invalidCountError.message} />
          ) : invalidCountLoading ? (
            <LoadingSpinner />
          ) : (
            <Fragment>
              <ObjectCountText>
                {invalidCount.adminPublicWorkoutsCount}
              </ObjectCountText>
              <SubTitle>Invalidated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>
    </DashboardSectionNav>
  )
}
