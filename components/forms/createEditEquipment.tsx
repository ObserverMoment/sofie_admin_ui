import React from 'react'
import { CreateEquipment, Equipment, UpdateEquipment } from '../../types/models'
import RadioButtons from './inputs/radioButtons'
import TextInput from './inputs/textInput'
import {
  ExampleText,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  SubmitButton,
} from './styled'
import { useFormState } from './useFormState'

interface CreateEditEquipmentProps {
  readonly equipment?: Equipment
  readonly handleCreateEquipment: (data: CreateEquipment) => void
  readonly handleUpdateEquipment: (data: UpdateEquipment) => void
}

const CreateEditEquipment = ({
  handleCreateEquipment,
  handleUpdateEquipment,
  equipment,
}: CreateEditEquipmentProps) => {
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
      handleUpdateEquipment({
        id: equipment.id,
        ...getFormData(),
      })
    } else {
      handleCreateEquipment({ ...getFormData() })
    }
  }

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
        disabled={!formDirty()}
        loading={false}
        text={equipment ? 'Update Equipment' : 'Add Equipment'}
      />
    </StyledForm>
  )
}

export default CreateEditEquipment
