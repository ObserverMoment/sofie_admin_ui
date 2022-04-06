import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingDots } from '../../components/loadingIndicators'
import { useCoreDataQuery } from '../../graphql/generated_types'
import { FlexBox, Padding } from '../../styles/layout'

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
          <FlexBox direction="row">
            <Breadcrumbs pageTitle="Move Types" />
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
