import Link from 'next/link'
import React, { Fragment } from 'react'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import {
  PublicContentValidationStatus,
  useAdminPublicWorkoutPlansCountQuery,
} from '../../../graphql/generated_types'
import {
  DashboardSectionNav,
  DashboardSectionNavItem,
  ObjectCountText,
} from '../../../pages/public-data'
import ErrorMessage from '../../errorMessage'
import { LoadingDots } from '../../loadingIndicators'
import { SubTitle } from '../../styled-components/styled'

export default function PublicWorkoutPlansDashboard() {
  const {
    loading: pendingCountLoading,
    error: pendingCountError,
    data: pendingCount,
  } = useAdminPublicWorkoutPlansCountQuery({
    variables: {
      status: PublicContentValidationStatus.Pending,
    },
  })

  const {
    loading: validCountLoading,
    error: validCountError,
    data: validCount,
  } = useAdminPublicWorkoutPlansCountQuery({
    variables: {
      status: PublicContentValidationStatus.Valid,
    },
  })

  const {
    loading: invalidCountLoading,
    error: invalidCountError,
    data: invalidCount,
  } = useAdminPublicWorkoutPlansCountQuery({
    variables: {
      status: PublicContentValidationStatus.Invalid,
    },
  })

  return (
    <DashboardSectionNav>
      <Link href={`${PUBLIC_CONTENT_BASE_URL}/validated-plans`} passHref>
        <DashboardSectionNavItem>
          {validCountError ? (
            <ErrorMessage message={validCountError.message} />
          ) : validCountLoading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {validCount.adminPublicWorkoutPlansCount}
              </ObjectCountText>
              <SubTitle>Validated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/pending-plans`} passHref>
        <DashboardSectionNavItem>
          {pendingCountError ? (
            <ErrorMessage message={pendingCountError.message} />
          ) : pendingCountLoading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {pendingCount.adminPublicWorkoutPlansCount}
              </ObjectCountText>
              <SubTitle>Pending</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/invalidated-plans`} passHref>
        <DashboardSectionNavItem>
          {invalidCountError ? (
            <ErrorMessage message={invalidCountError.message} />
          ) : invalidCountLoading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {invalidCount.adminPublicWorkoutPlansCount}
              </ObjectCountText>
              <SubTitle>Invalidated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>
    </DashboardSectionNav>
  )
}
