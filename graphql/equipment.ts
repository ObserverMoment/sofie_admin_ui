import { gql } from '@apollo/client'

const equipmentFields = `
  id
  name
  altNames
  loadAdjustable
`

export const EQUIPMENT_QUERY = gql`
  query equipments {
    equipments {
      ${equipmentFields}
    }
  }
`

export const CREATE_EQUIPMENT_MUTATION = gql`
  mutation createEquipment($data: CreateEquipmentInput!) {
    createEquipment(data: $data) {
      ${equipmentFields}
    }
  }
`

export const NEW_EQUIPMENT_FRAGMENT = gql`
  fragment NewEquipment on Equipment {
    id
    type
  }
`

export const UPDATE_EQUIPMENT_MUTATION = gql`
  mutation updateEquipment($data: UpdateEquipmentInput!) {
    updateEquipment(data: $data) {
      ${equipmentFields}
    }
  }
`
