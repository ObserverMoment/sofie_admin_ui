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

export const UPDATE_EQUIPMENT_MUTATION = gql`
  mutation updateEquipment($data: UpdateEquipmentInput!) {
    updateEquipment(data: $data) {
      ${equipmentFields}
    }
  }
`
