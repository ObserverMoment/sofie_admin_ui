import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { LoadingSpinner } from '../../components/loadingIndicators'
import InteractiveTable from '../../components/interactiveTable'
import { FlexBox, Title } from '../../components/styled-components/styled'
import Modal from '../../components/layout/modal'
import CreateEditEquipment from '../../components/contentCRUD/createEditEquipment'
import { showToast } from '../../components/notifications'
import { CreateButton } from '../../components/styled-components/buttons'
import { Equipment, useEquipmentsQuery } from '../../graphql/generated_types'

export default function EquipmentData() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Equipment',
  })

  const { loading, error, data } = useEquipmentsQuery()

  const [activeEquipmentData, setActiveEquipmentData] = useState(null)

  function handleRowClick(data: Equipment) {
    setActiveEquipmentData(data)
    setModalState({ isOpen: true, title: 'Edit Equipment' })
  }

  function handleAddNewClick() {
    setActiveEquipmentData(null)
    setModalState({ isOpen: true, title: 'Add Equipment' })
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
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
              disableSortBy: true,
            },
            {
              id: 'loadAdjustable',
              Header: 'Load Adjustable?',
              accessor: ({ loadAdjustable }) =>
                loadAdjustable ? 'TRUE' : 'FALSE',
            },
          ]}
          data={[...data.equipments]}
        />
        <Modal
          isOpen={isOpen}
          handleClose={() =>
            setModalState({ isOpen: false, title: 'Equipment' })
          }
        >
          <FlexBox>
            <Title>{title}</Title>
            <CreateEditEquipment
              equipment={activeEquipmentData}
              onComplete={() => setModalState({ isOpen: false, title: '' })}
            />
          </FlexBox>
        </Modal>
      </FlexBox>
    )
  }
}
