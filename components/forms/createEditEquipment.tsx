import React, { useState } from 'react'
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
import useFormField from './useFormState'

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
  const formDirty = useState(false)

  const [name, setName] = useFormField<string>(equipment?.name, formDirty)

  const [altNames, setAltNames] = useFormField<string>(
    equipment?.altNames,
    formDirty,
  )
  const [loadAdjustable, setLoadAdjustable] = useFormField<boolean>(
    equipment?.loadAdjustable || false,
    formDirty,
  )

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      name,
      altNames,
      loadAdjustable,
    }
    if (equipment) {
      handleUpdateEquipment({
        id: equipment.id,
        ...data,
      })
    } else {
      handleCreateEquipment({ ...data })
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputGroup>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <TextInput
          placeholder="Name"
          name="name"
          value={name}
          setter={setName}
          maxLength={100}
          size={20}
        />
      </StyledInputGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="altNames">Alternative Names</StyledLabel>
        <TextInput
          placeholder="Alternative names"
          name="altNames"
          value={altNames}
          setter={setAltNames}
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
          value={loadAdjustable || false}
          setter={setLoadAdjustable}
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
        />
      </StyledInputGroup>

      <SubmitButton
        disabled={!formDirty[0]}
        loading={false}
        text={equipment ? 'Update Equipment' : 'Add Equipment'}
      />
    </StyledForm>
  )
}

export default CreateEditEquipment
