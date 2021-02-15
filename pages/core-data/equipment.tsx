import { gql, useQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import ErrorMessage from '../../components/errorMessage'
import { LoadingSpinner } from '../../components/loadingIndicators'
import InteractiveTable from '../../components/interactiveTable'
import {
  CreateButton,
  FlexBox,
  Title,
} from '../../components/styled-components/styled'
import MyModal from '../../components/modal'
import CreateEditEquipment from '../../components/forms/createEditEquipment'
import { Equipment } from '../../types/modelTypes'
import { showToast } from '../../components/notifications'

const equipmentFields = `
  id
  name
  altNames
  loadAdjustable
`

const EQUIPMENT_QUERY = gql`
  query equipments {
    equipments {
      ${equipmentFields}
    }
  }
`

const CREATE_EQUIPMENT_MUTATION = gql`
  mutation createEquipment($data: CreateEquipmentInput!) {
    createEquipment(data: $data) {
      ${equipmentFields}
    }
  }
`

const UPDATE_EQUIPMENT_MUTATION = gql`
  mutation updateEquipment($data: UpdateEquipmentInput!) {
    updateEquipment(data: $data) {
      ${equipmentFields}
    }
  }
`

export default function EquipmentData() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Equipment',
  })

  const { loading, error, data } = useQuery(EQUIPMENT_QUERY)

  const [createEquipment] = useMutation(CREATE_EQUIPMENT_MUTATION, {
    onCompleted: () => {
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

  function handleCreateEquipment(data: Equipment) {
    createEquipment({ variables: { data } })
  }

  function handleUpdateEquipment(data: Equipment) {
    updateEquipment({ variables: { data } })
  }

  if (error) {
    return <ErrorMessage message={error.message} />
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
          data={data.equipments}
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
