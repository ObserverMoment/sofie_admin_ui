import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingDots } from '../../components/loadingIndicators'
import { FlexBox, Padding } from '../../components/styled-components/styled'
import { CORE_DATA_BASE_URL } from '../../constants'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function WorkoutGoals() {
  const { loading, error, data } = useCoreDataQuery()

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingDots />
  } else {
    return (
      <FlexBox>
        <Padding>
          <FlexBox direction="row">
            <Breadcrumbs
              pageTitle="Workout Goals"
              crumbs={[{ text: 'Core Data', routeTo: CORE_DATA_BASE_URL }]}
            />
          </FlexBox>
        </Padding>

        <InteractiveTable
          columnMapping={[
            {
              Header: 'Name',
              accessor: 'name', // accessor is the "key" in the data
              disableSortBy: true,
            },
            {
              Header: 'Description',
              accessor: 'description', // accessor is the "key" in the data
              disableSortBy: true,
            },
          ]}
          data={data.coreData.workoutGoals}
        />
      </FlexBox>
    )
  }
}
