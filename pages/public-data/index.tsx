import React from 'react'
import styled from 'styled-components'
import PublicClubsDashboard from '../../components/public-content/dashboard/clubs'
import PublicWorkoutPlansDashboard from '../../components/public-content/dashboard/workoutPlans'
import PublicWorkoutsDashboard from '../../components/public-content/dashboard/workouts'
import { FlexBox, Title } from '../../components/styled-components/styled'

export default function Overview() {
  return (
    <FlexBox align="center">
      <DashboardSection>
        <Title>Workouts</Title>
        <PublicWorkoutsDashboard />
      </DashboardSection>

      <DashboardSection>
        <Title>Plans</Title>
        <PublicWorkoutPlansDashboard />
      </DashboardSection>

      <DashboardSection>
        <Title>Clubs</Title>
        <PublicClubsDashboard />
      </DashboardSection>
    </FlexBox>
  )
}

//// Styled Components ////
export const DashboardSection = styled.div`
  padding: 16px;
  margin: 8px;
  border-radius: 10px;
  width: 94%;
  background-color: ${(props) => props.theme.colors.pureWhite};
`

export const DashboardSectionNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 24px;
  justify-content: center;
  align-items: center;
`

export const DashboardSectionNavItem = styled.a`
  padding: 12px 16px;
  margin: 12px;
  text-decoration: none;
  border-radius: 12px;
  height: 120px;
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const ObjectCountText = styled.span`
  font-size: 40px;
  color: ${(props) => props.theme.colors.highlight};
  font-weight: 'bold';
`
