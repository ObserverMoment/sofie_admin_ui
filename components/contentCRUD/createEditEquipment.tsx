import React from 'react'
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
import {
  CreateEquipmentDocument,
  Equipment,
  EquipmentsDocument,
  useCreateEquipmentMutation,
  useUpdateEquipmentMutation,
} from '../../graphql/generated_types'
import { gql } from '@apollo/client'
import { newObjectRefFragment } from '../../lib/apolloClient'

interface CreateEditEquipmentProps {
  readonly equipment?: Equipment
  readonly onComplete?: () => void
}

const CreateEditEquipment = ({
  equipment,
  onComplete,
}: CreateEditEquipmentProps) => {
  const [
    createEquipment,
    { loading: createEquipmentInProgress },
  ] = useCreateEquipmentMutation({
    update(cache, { data: { createEquipment } }) {
      cache.modify({
        fields: {
          equipments(prevEquipments = []) {
            // https://www.apollographql.com/docs/react/caching/cache-interaction/#example-updating-the-cache-after-a-mutation
            // Apollo mutations automatically update the normalized cache.
            // Here we are simply retrieving a ref to the newly created object
            // and adding it to the equipments field which will cause the equipments query hook to update.
            const newEquipmentRef = cache.writeFragment({
              data: createEquipment,
              fragment: newObjectRefFragment,
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
  })

  const [
    updateEquipment,
    { loading: updateEquipmentInProgress },
  ] = useUpdateEquipmentMutation({
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
        disabled={
          !formDirty() || createEquipmentInProgress || updateEquipmentInProgress
        }
        loading={createEquipmentInProgress || updateEquipmentInProgress}
        text={equipment ? 'Update Equipment' : 'Add Equipment'}
      />
    </StyledForm>
  )
}

export default CreateEditEquipment
