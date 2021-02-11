import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Equipment } from '../../types/modelTypes'
import { TinyText } from '../styled-components/styled'
import {
  ExampleText,
  HorizontalButtonsInputGroup,
  RadioButton,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledTextInput,
  SubmitButton,
} from '../styled-components/styledForm'

interface CreateEditEquipmentProps {
  readonly equipment?: Equipment
  readonly handleCreateEquipment: (data: Equipment) => void
  readonly handleUpdateEquipment: (data: Equipment) => void
}

const CreateEditEquipment = ({
  handleCreateEquipment,
  handleUpdateEquipment,
  equipment,
}: CreateEditEquipmentProps) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: equipment ? equipment.name : '',
      altNames: equipment ? equipment.altNames : '',
      loadAdjustable: equipment && equipment.loadAdjustable ? 'true' : 'false',
    },
  })
  const onSubmit = (data) => {
    const formattedData: Equipment = {
      ...data,
      loadAdjustable: data.loadAdjustable === 'true' ? true : false,
    }
    if (equipment) {
      handleUpdateEquipment({
        id: equipment.id,
        ...formattedData,
      })
    } else {
      handleCreateEquipment(formattedData)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputGroup>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledTextInput
          type="text"
          placeholder="Name"
          name="name"
          size={20}
          ref={register({ required: true, maxLength: 20 })}
        />
      </StyledInputGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="altNames">Alternative Names</StyledLabel>
        <StyledTextInput
          type="text"
          placeholder="Alternative names"
          name="altNames"
          size={60}
          ref={register({ maxLength: 60 })}
        />

        <ExampleText>
          Comma separated list. E.g. 'ruck,sack,pack,rucksack's
        </ExampleText>
      </StyledInputGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="loadAdjustable">Load Adjustable?</StyledLabel>
        <HorizontalButtonsInputGroup>
          <RadioButton
            name="loadAdjustable"
            label="Yes"
            value="true"
            register={register({ required: true })}
          />
          <RadioButton
            name="loadAdjustable"
            label="No"
            value="false"
            register={register({ required: true })}
          />
        </HorizontalButtonsInputGroup>
      </StyledInputGroup>

      <SubmitButton
        disabled={!formState.isDirty}
        loading={false}
        text={equipment ? 'Update Equipment' : 'Add Equipment'}
      />
    </StyledForm>
  )
}

export default CreateEditEquipment
