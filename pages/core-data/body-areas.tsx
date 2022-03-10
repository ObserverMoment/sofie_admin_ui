import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import {
  FlexBox,
  Padding,
  Title,
} from '../../components/styled-components/styled'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function BodyAreas() {
  const { loading, error, data } = useCoreDataQuery()

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox>
        <Padding>
          <FlexBox direction="row" justify="center">
            <Title>Body Areas</Title>
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
              Header: 'Alternative Names',
              accessor: 'altNames', // accessor is the "key" in the data
              disableSortBy: true,
            },
            {
              Header: 'Front / Back',
              accessor: 'frontBack', // accessor is the "key" in the data
              disableSortBy: true,
            },
            {
              Header: 'Upper / Core / Lower',
              accessor: 'upperLower', // accessor is the "key" in the data
              disableSortBy: true,
            },
          ]}
          data={data.coreData.bodyAreas}
        />
      </FlexBox>
    )
  }
}
