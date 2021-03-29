import { gql } from '@apollo/client'

export const EQUIPMENT_FIELDS_FRAGMENT = gql`
  fragment EquipmentFields on Equipment {
    id
    name
    altNames
    loadAdjustable
  }
`

export const EQUIPMENT_QUERY = gql`
  query equipments {
    equipments {
      ...EquipmentFields
    }
  }
  ${EQUIPMENT_FIELDS_FRAGMENT}
`

export const CREATE_EQUIPMENT_MUTATION = gql`
  mutation createEquipment($data: CreateEquipmentInput!) {
    createEquipment(data: $data) {
      ...EquipmentFields
    }
  }
  ${EQUIPMENT_FIELDS_FRAGMENT}
`

export const UPDATE_EQUIPMENT_MUTATION = gql`
  mutation updateEquipment($data: UpdateEquipmentInput!) {
    updateEquipment(data: $data) {
      ...EquipmentFields
    }
  }
  ${EQUIPMENT_FIELDS_FRAGMENT}
`
