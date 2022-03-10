import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ErrorMessage from '../../components/errorMessage'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { FlexBox, Title } from '../../components/styled-components/styled'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function Overview() {
  const { loading, error, data } = useCoreDataQuery()

  const coreDataBasePath = '/core-data'

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox align="center">
        <DashboardGrid>
          <Link key="Equipment" href={`${coreDataBasePath}/equipment`} passHref>
            <GridItem>
              <ObjectCountText>
                {data.coreData.equipment.length.toString()}
              </ObjectCountText>
              <Title>Equipment</Title>
            </GridItem>
          </Link>

          <Link key="Moves" href={`${coreDataBasePath}/moves`} passHref>
            <GridItem>
              <ObjectCountText>
                {data.coreData.standardMoves.length.toString()}
              </ObjectCountText>
              <Title>Moves</Title>
            </GridItem>
          </Link>

          <Link
            key="Move Types"
            href={`${coreDataBasePath}/move-types`}
            passHref
          >
            <GridItem>
              <ObjectCountText>
                {data.coreData.moveTypes.length.toString()}
              </ObjectCountText>
              <Title>Move Types</Title>
            </GridItem>
          </Link>

          <Link
            key="Body Areas"
            href={`${coreDataBasePath}/body-areas`}
            passHref
          >
            <GridItem>
              <ObjectCountText>
                {data.coreData.bodyAreas.length.toString()}
              </ObjectCountText>
              <Title>Body Areas</Title>
            </GridItem>
          </Link>

          <Link
            key="Workout Types"
            href={`${coreDataBasePath}/workout-types`}
            passHref
          >
            <GridItem>
              <ObjectCountText>
                {data.coreData.workoutSectionTypes.length.toString()}
              </ObjectCountText>
              <Title>Workout Types</Title>
            </GridItem>
          </Link>

          <Link
            key="Workout Goals"
            href={`${coreDataBasePath}/workout-goals`}
            passHref
          >
            <GridItem>
              <ObjectCountText>
                {data.coreData.workoutGoals.length.toString()}
              </ObjectCountText>
              <Title>Workout Goals</Title>
            </GridItem>
          </Link>

          <Link
            key="Fitness Benchmarks"
            href={`${coreDataBasePath}/fitness-benchmarks`}
            passHref
          >
            <GridItem>
              <ObjectCountText>
                {data.coreData.fitnessBenchmarks.length.toString()}
              </ObjectCountText>
              <Title>Fitness Benchmarks</Title>
            </GridItem>
          </Link>

          <Link
            key="Benchmark Workouts"
            href={`${coreDataBasePath}/benchmark-workouts`}
            passHref
          >
            <GridItem>
              <ObjectCountText>
                {data.coreData.fitnessBenchmarkWorkouts.length.toString()}
              </ObjectCountText>
              <Title>Benchmark Workouts</Title>
            </GridItem>
          </Link>
        </DashboardGrid>
      </FlexBox>
    )
  }
}

//// Styled Components ////
const DashboardGrid = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 24px;
  justify-content: center;
  align-items: center;
`

const GridItem = styled.a`
  padding: 12px 16px;
  margin: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-decoration: none;
  border-radius: 12px;
  height: 280px;
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.pureWhite};
`

const ObjectCountText = styled.span`
  font-size: 50px;
  color: ${(props) => props.theme.colors.highlight};
  font-weight: 'bold'};
`
