import Link from 'next/link'
import React, { Fragment } from 'react'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import {
  PublicContentValidationStatus,
  useAdminPublicClubsCountQuery,
} from '../../../graphql/generated_types'
import {
  DashboardSectionNav,
  DashboardSectionNavItem,
  ObjectCountText,
} from '../../../pages/public-content'
import ErrorMessage from '../../errorMessage'
import { LoadingDots } from '../../loadingIndicators'
import { SubTitle } from '../../styled-components/styled'

export default function PublicClubsDashboard() {
  const {
    loading: pendingCountLoading,
    error: pendingCountError,
    data: pendingCount,
  } = useAdminPublicClubsCountQuery({
    variables: {
      status: PublicContentValidationStatus.Pending,
    },
  })

  const {
    loading: validCountLoading,
    error: validCountError,
    data: validCount,
  } = useAdminPublicClubsCountQuery({
    variables: {
      status: PublicContentValidationStatus.Valid,
    },
  })

  const {
    loading: invalidCountLoading,
    error: invalidCountError,
    data: invalidCount,
  } = useAdminPublicClubsCountQuery({
    variables: {
      status: PublicContentValidationStatus.Invalid,
    },
  })

  return (
    <DashboardSectionNav>
      <Link href={`${PUBLIC_CONTENT_BASE_URL}/clubs-validated`} passHref>
        <DashboardSectionNavItem>
          {validCountError ? (
            <ErrorMessage message={validCountError.message} />
          ) : validCountLoading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {validCount.adminPublicClubsCount}
              </ObjectCountText>
              <SubTitle>Validated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/clubs-pending`} passHref>
        <DashboardSectionNavItem>
          {pendingCountError ? (
            <ErrorMessage message={pendingCountError.message} />
          ) : pendingCountLoading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {pendingCount.adminPublicClubsCount}
              </ObjectCountText>
              <SubTitle>Pending</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>

      <Link href={`${PUBLIC_CONTENT_BASE_URL}/clubs-invalidated`} passHref>
        <DashboardSectionNavItem>
          {invalidCountError ? (
            <ErrorMessage message={invalidCountError.message} />
          ) : invalidCountLoading ? (
            <LoadingDots />
          ) : (
            <Fragment>
              <ObjectCountText>
                {invalidCount.adminPublicClubsCount}
              </ObjectCountText>
              <SubTitle>Invalidated</SubTitle>
            </Fragment>
          )}
        </DashboardSectionNavItem>
      </Link>
    </DashboardSectionNav>
  )
}
