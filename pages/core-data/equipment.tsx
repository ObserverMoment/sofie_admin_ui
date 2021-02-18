import { useQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { LoadingSpinner } from '../../components/loadingIndicators'
import InteractiveTable from '../../components/interactiveTable'
import {
  CreateButton,
  FlexBox,
  Title,
} from '../../components/styled-components/styled'
import MyModal from '../../components/layout/modal'
import CreateEditEquipment from '../../components/forms/createEditEquipment'
import { CreateEquipment, Equipment, UpdateEquipment } from '../../types/models'
import { showToast } from '../../components/notifications'
import {
  CREATE_EQUIPMENT_MUTATION,
  EQUIPMENT_QUERY,
  NEW_EQUIPMENT_FRAGMENT,
  UPDATE_EQUIPMENT_MUTATION,
} from '../../graphql/equipment'

export default function EquipmentData() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Equipment',
  })

  const { loading, error, data } = useQuery(EQUIPMENT_QUERY)

  const [createEquipment] = useMutation(CREATE_EQUIPMENT_MUTATION, {
    update(cache, { data: { createEquipment } }) {
      cache.modify({
        fields: {
          equipments(prevEquipments = []) {
            const newEquipmentRef = cache.writeFragment({
              data: createEquipment,
              fragment: NEW_EQUIPMENT_FRAGMENT,
            })
            return [newEquipmentRef, ...prevEquipments]
          },
        },
      })
    },
    onCompleted() {
      showToast('New Equipment Added', 'Success')
      setModalState({ isOpen: false, title: '' })
    },
  })

  const [updateEquipment] = useMutation(UPDATE_EQUIPMENT_MUTATION, {
    onCompleted: () => {
      showToast('Equipment Updated', 'Success')
      setModalState({ isOpen: false, title: '' })
    },
  })

  const [activeEquipmentData, setActiveEquipmentData] = useState(null)

  function handleRowClick(data: Equipment) {
    setActiveEquipmentData(data)
    setModalState({ isOpen: true, title: 'Edit Equipment' })
  }

  function handleAddNewClick() {
    setActiveEquipmentData(null)
    setModalState({ isOpen: true, title: 'Add Equipment' })
  }

  function handleCreateEquipment(data: CreateEquipment) {
    createEquipment({ variables: { data } })
  }

  function handleUpdateEquipment(data: UpdateEquipment) {
    updateEquipment({ variables: { data } })
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
        <MyModal
          isOpen={isOpen}
          handleClose={() =>
            setModalState({ isOpen: false, title: 'Equipment' })
          }
        >
          <FlexBox>
            <Title>{title}</Title>
            <CreateEditEquipment
              equipment={activeEquipmentData}
              handleCreateEquipment={handleCreateEquipment}
              handleUpdateEquipment={handleUpdateEquipment}
            />
          </FlexBox>
        </MyModal>
      </FlexBox>
    )
  }
}
