import { useQuery } from '@apollo/client'
import React from 'react'
import { MOVE_TYPES_QUERY } from '../../graphql/move'
import { Move, MoveType } from '../../types/models'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { MainText } from '../styled-components/styled'
import CheckBoxes from './inputs/checkBoxes'
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

interface CreateEditMoveProps {
  readonly move?: Move
  readonly handleCreateMove: (data: Move) => void
  readonly handleUpdateMove: (data: Move) => void
}

const CreateEditMove = ({
  handleCreateMove,
  handleUpdateMove,
  move,
}: CreateEditMoveProps) => {
  const { loading, error, data } = useQuery(MOVE_TYPES_QUERY)

  const { formState, formDirty, getFormData } = useFormState<Move>([
    {
      key: 'moveType',
      value: move?.moveType,
    },
    {
      key: 'name',
      value: move?.name,
    },
    {
      key: 'searchTerms',
      value: move?.searchTerms,
    },
    {
      key: 'description',
      value: move?.description,
    },
    {
      key: 'demoVideoUrl',
      value: move?.demoVideoUrl,
    },
    {
      key: 'validRepTypes',
      value: move ? move.validRepTypes : [],
    },
    {
      key: 'requiredEquipments',
      value: move ? move.requiredEquipments : [],
    },
    {
      key: 'selectableEquipments',
      value: move ? move.selectableEquipments : [],
    },
    {
      key: 'bodyAreaMoveScores',
      value: move ? move.bodyAreaMoveScores : [],
    },
  ])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (move) {
      handleUpdateMove({
        id: move.id,
        ...getFormData(),
      })
    } else {
      handleCreateMove({ ...getFormData() })
    }
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <StyledForm onSubmit={onSubmit}>
        <StyledInputGroup>
          <StyledLabel htmlFor="moveType">Type</StyledLabel>
          <RadioButtons<MoveType>
            options={data.moveTypes.map((mt: MoveType) => ({
              value: mt,
              label: mt.name,
            }))}
            value={formState.moveType.value}
            setValue={formState.moveType.setValue}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <TextInput
            placeholder="Name"
            name="name"
            value={formState.name.value}
            setValue={formState.name.setValue}
            size={20}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="searchTerms">Search Terms</StyledLabel>
          <TextInput
            placeholder="Search Terms"
            name="searchTerms"
            size={60}
            value={formState.searchTerms.value}
            setValue={formState.searchTerms.setValue}
          />
        </StyledInputGroup>

        <MainText>Description Text Area</MainText>

        <MainText>Demo Video Uploader</MainText>

        <StyledInputGroup>
          <StyledLabel htmlFor="validRepTypes">Valid Rep Types</StyledLabel>
          <ExampleText>TIME is selected by default for all moves.</ExampleText>
          <CheckBoxes<string>
            options={['REPS', 'CALORIES', 'DISTANCE'].map((rt) => ({
              value: rt,
              label: rt,
            }))}
            selected={formState.validRepTypes.value}
            setValue={formState.validRepTypes.setValue}
          />
        </StyledInputGroup>

        <MainText>Required Equipments Select</MainText>
        <MainText>Selectable Equipments Select</MainText>
        <MainText>Body Area Move Scores Select</MainText>

        <SubmitButton
          disabled={!formDirty()}
          loading={false}
          text={move ? 'Update Move' : 'Add Move'}
        />
      </StyledForm>
    )
  }
}

export default CreateEditMove
