import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingDots } from '../../components/loadingIndicators'
import { FlexBox, Padding } from '../../components/styled-components/styled'
import { CORE_DATA_BASE_URL } from '../../constants'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function BenchmarkWorkouts() {
  const { loading, error, data } = useCoreDataQuery()

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingDots />
  } else {
    return (
      <div>
        <Padding>
          <FlexBox direction="row">
            <Breadcrumbs
              pageTitle="Benchmark Workouts"
              crumbs={[{ text: 'Core Data', routeTo: CORE_DATA_BASE_URL }]}
            />
          </FlexBox>
        </Padding>
        <InteractiveTable
          columnMapping={[
            {
              Header: 'Name',
              accessor: 'name',
              disableSortBy: true,
            },
            {
              Header: 'Description',
              accessor: 'description',
              disableSortBy: true,
            },
            {
              Header: 'Instructions',
              accessor: 'instructions',
              disableSortBy: true,
            },
          ]}
          data={data.coreData.fitnessBenchmarkWorkouts}
        />
      </div>
    )
  }
}