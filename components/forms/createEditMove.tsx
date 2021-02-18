import { useQuery } from '@apollo/client'
import React from 'react'
import { MOVE_TYPES_QUERY } from '../../graphql/move'
import {
  BodyAreaMoveScore,
  Equipment,
  Move,
  MoveType,
} from '../../types/models'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { MainText } from '../styled-components/styled'
import CheckBoxes from './inputs/checkBoxes'
import RadioButtons from './inputs/radioButtons'
import { StyledTextInput } from './inputs/textInput'
import {
  ExampleText,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  SubmitButton,
} from './styled'
import { useFormState, FieldDef } from './useFormState'

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

  const { state, getFormData } = useFormState<Move>([
    {
      key: 'moveType',
      initialValue: move?.moveType,
    } as FieldDef<MoveType>,
    {
      key: 'name',
      initialValue: move?.name,
    } as FieldDef<string>,
    {
      key: 'searchTerms',
      initialValue: move?.searchTerms,
    } as FieldDef<string>,
    {
      key: 'description',
      initialValue: move?.description,
    } as FieldDef<string>,
    {
      key: 'demoVideoUrl',
      initialValue: move?.demoVideoUrl,
    } as FieldDef<string>,
    {
      key: 'validRepTypes',
      initialValue: move ? move.validRepTypes : [],
    } as FieldDef<Array<string>>,
    {
      key: 'requiredEquipments',
      initialValue: move ? move.requiredEquipments : [],
    } as FieldDef<Array<Equipment>>,
    {
      key: 'selectableEquipments',
      initialValue: move ? move.selectableEquipments : [],
    } as FieldDef<Array<Equipment>>,
    {
      key: 'bodyAreaMoveScores',
      initialValue: move ? move.bodyAreaMoveScores : [],
    } as FieldDef<Array<BodyAreaMoveScore>>,
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
            options={data.moveTypes.map((mt) => ({
              value: mt,
              label: mt.name,
            }))}
            value={state.moveType.value}
            setter={state.moveType.setValue}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledTextInput
            type="text"
            placeholder="Name"
            name="name"
            onChange={state.name.setValue}
            value={state.name.value}
            size={20}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="searchTerms">Search Terms</StyledLabel>
          <StyledTextInput
            type="text"
            placeholder="Search Terms"
            name="searchTerms"
            size={60}
            onChange={state.searchTerms.setValue}
            value={state.searchTerms.value}
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
            selected={state.validRepTypes.value}
            setter={state.validRepTypes.setValue}
          />
        </StyledInputGroup>

        <MainText>Required Equipments Select</MainText>
        <MainText>Selectable Equipments Select</MainText>
        <MainText>Body Area Move Scores Select</MainText>

        <SubmitButton
          disabled={false}
          loading={false}
          text={move ? 'Update Move' : 'Add Move'}
        />
      </StyledForm>
    )
  }
}

export default CreateEditMove
