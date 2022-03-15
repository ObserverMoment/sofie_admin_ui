import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingDots } from '../../components/loadingIndicators'
import {
  FlexBox,
  Padding,
  Title,
} from '../../components/styled-components/styled'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function MoveTypes() {
  const { loading, error, data } = useCoreDataQuery()

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingDots />
  } else {
    return (
      <FlexBox>
        <Padding>
          <FlexBox direction="row" justify="center">
            <Title>Move Types</Title>
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
              id: 'imageUri',
              Header: 'Has Image?',
              accessor: ({ imageUri }) => (imageUri ? 'YES' : 'NO'),
              disableSortBy: true,
            },
          ]}
          data={data.coreData.moveTypes}
        />
      </FlexBox>
    )
  }
}
