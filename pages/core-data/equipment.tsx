import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import ErrorMessage from '../../components/errorMessage'
import LoadingIndicator from '../../components/loadingIndicator'
import InteractiveTable from '../../components/interactiveTable'
import {
  CreateButton,
  FlexBox,
  MainText,
  MyButton,
  Title,
} from '../../components/styled'
import MyModal from '../../components/modal'

export const EQUIPMENT_QUERY = gql`
  query equipments {
    equipments {
      id
      name
      altNames
      loadAdjustable
    }
  }
`

interface Equipment {
  id: string
  name: string
  altNames: string
  loadAdjustable: boolean
}

export default function Equipment() {
  const { loading, error, data } = useQuery(EQUIPMENT_QUERY)
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Equipment',
  })
  const [activeEquipmentData, setActiveEquipmentData] = useState(
    {} as Equipment,
  )

  function handleRowClick(data: Equipment) {
    setActiveEquipmentData(data)
    setModalState({ isOpen: true, title: 'Edit Equipment' })
  }

  function handleAddNewClick() {
    setActiveEquipmentData({} as Equipment)
    setModalState({ isOpen: true, title: 'Add Equipment' })
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingIndicator />
  } else {
    return (
      <FlexBox>
        <FlexBox direction="row" justify="center">
          <CreateButton onClick={handleAddNewClick} />
        </FlexBox>
        <InteractiveTable
          handleRowClick={(data) => handleRowClick(data)}
          columnMapping={[
            {
              Header: 'Name',
              accessor: 'name', // accessor is the "key" in the data
            },
            {
              Header: 'Alt Names',
              accessor: 'altNames',
            },
            {
              id: 'loadAdjustable',
              Header: 'Load Adjustable?',
              accessor: ({ loadAdjustable }) =>
                loadAdjustable ? 'TRUE' : 'FALSE',
            },
          ]}
          data={data.equipments}
        />
        <MyModal
          isOpen={isOpen}
          handleClose={() =>
            setModalState({ isOpen: false, title: 'Equipment' })
          }
        >
          {activeEquipmentData && (
            <FlexBox>
              <Title>{title}</Title>
              <MainText>{activeEquipmentData.name}</MainText>
            </FlexBox>
          )}
        </MyModal>
      </FlexBox>
    )
  }
}
