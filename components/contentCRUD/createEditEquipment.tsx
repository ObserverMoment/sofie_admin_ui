import { useMutation } from '@apollo/client'
import React from 'react'
import {
  CREATE_EQUIPMENT_MUTATION,
  NEW_EQUIPMENT_FRAGMENT,
  UPDATE_EQUIPMENT_MUTATION,
} from '../../graphql/equipment'
import { Equipment } from '../../types/models/equipment'
import { showToast } from '../notifications'
import RadioButtons from '../forms/inputs/radioButtons'
import TextInput from '../forms/inputs/textInput'
import {
  ExampleText,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  SubmitButton,
} from '../forms/styled'
import { useFormState } from '../forms/useFormState'

interface CreateEditEquipmentProps {
  readonly equipment?: Equipment
  readonly onComplete?: () => void
}

const CreateEditEquipment = ({
  equipment,
  onComplete,
}: CreateEditEquipmentProps) => {
  const [createEquipment, { loading: mutateEquipmentInProgress }] = useMutation(
    CREATE_EQUIPMENT_MUTATION,
    {
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
        onComplete && onComplete()
      },
      onError() {
        showToast('API error creating equipment!', 'Error')
      },
    },
  )

  const [updateEquipment] = useMutation(UPDATE_EQUIPMENT_MUTATION, {
    onCompleted() {
      showToast('Equipment Updated', 'Success')
      onComplete && onComplete()
    },
    onError() {
      showToast('API error updating equipment!', 'Error')
    },
  })

  const { formState, formDirty, getFormData } = useFormState<Equipment>([
    {
      key: 'name',
      value: equipment?.name as string,
    },
    {
      key: 'altNames',
      value: equipment?.altNames as string,
    },
    {
      key: 'loadAdjustable',
      value: equipment?.loadAdjustable || (false as boolean),
    },
  ])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (equipment) {
      updateEquipment({
        variables: {
          data: {
            id: equipment.id,
            ...getFormData(),
          },
        },
      })
    } else {
      createEquipment({
        variables: {
          data: {
            ...getFormData(),
          },
        },
      })
    }
  }
  console.log(formState)

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputGroup>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <TextInput
          placeholder="Name"
          name="name"
          value={formState.name.value}
          setValue={formState.name.setValue}
          maxLength={100}
          size={20}
        />
      </StyledInputGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="altNames">Alternative Names</StyledLabel>
        <TextInput
          placeholder="Alternative names"
          name="altNames"
          value={formState.altNames.value}
          setValue={formState.altNames.setValue}
          size={60}
          maxLength={100}
        />

        <ExampleText>
          Comma separated list. E.g. 'ruck,sack,pack,rucksack's
        </ExampleText>
      </StyledInputGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="loadAdjustable">Load Adjustable?</StyledLabel>
        <RadioButtons<boolean>
          value={formState.loadAdjustable.value}
          setValue={formState.loadAdjustable.setValue}
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
        />
      </StyledInputGroup>

      <SubmitButton
        disabled={!formDirty() || mutateEquipmentInProgress}
        loading={mutateEquipmentInProgress}
        text={equipment ? 'Update Equipment' : 'Add Equipment'}
      />
    </StyledForm>
  )
}

export default CreateEditEquipment
