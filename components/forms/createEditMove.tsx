import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MOVE_TYPES_QUERY } from '../../graphql/move'
import {
  BodyAreaMoveScore,
  Equipment,
  Move,
  MoveType,
} from '../../types/models'
import ErrorMessage from '../errorMessage'
import { LoadingSpinner } from '../loadingIndicators'
import { MainText } from '../styled-components/styled'
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

  // Uploaded video cdn file id - Uploadcare (upload on client first)
  const [demoVideoUrl, setDemoVideoUrl] = useState<string>(
    move ? move.demoVideoUrl : null,
  )

  const [requiredEquipments, setRequiredEquipments] = useState<
    Array<Equipment>
  >(move ? move.requiredEquipments : [])

  const [selectableEquipments, setSelectableEquipments] = useState<
    Array<Equipment>
  >(move ? move.requiredEquipments : [])

  const [bodyAreaMovesScores, setBodyAreaMovesScores] = useState<
    Array<BodyAreaMoveScore>
  >(move ? move.bodyAreaMoveScores : [])

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      type: move ? move.type : null,
      name: move ? move.name : '',
      searchTerms: move ? move.searchTerms : '',
      description: move ? move.description : '',
      demoVideoUrl: move ? move.demoVideoUrl : null,
      repTypes: move ? move.demoVideoUrl : null,
    },
  })

  const onSubmit = (data) => {
    const formattedData: Move = {
      ...data,
    }
    if (move) {
      handleUpdateMove({
        id: move.id,
        ...formattedData,
      })
    } else {
      handleCreateMove(formattedData)
    }
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputGroup>
          <StyledLabel htmlFor="type">Type</StyledLabel>
          <HorizontalButtonsInputGroup>
            {data.moveTypes.map((t) => (
              <MainText>{t.name}</MainText>
            ))}
          </HorizontalButtonsInputGroup>
        </StyledInputGroup>

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
          <StyledLabel htmlFor="searchTerms">Search Terms</StyledLabel>
          <StyledTextInput
            type="text"
            placeholder="Search Terms"
            name="searchTerms"
            size={60}
            ref={register({ maxLength: 60 })}
          />

          <ExampleText>
            Comma separated list. E.g. 'ruck,sack,pack,rucksack's
          </ExampleText>
        </StyledInputGroup>

        <MainText>Demo Video Uploader</MainText>

        {/* <StyledInputGroup>
          <StyledLabel htmlFor="repTypes">Rep Types</StyledLabel>
          <MainText>Time selected by default</MainText>
          <HorizontalButtonsInputGroup>
            <RadioButton
              name="repTypes"
              label="REPS"
              value="REPS"
              register={register({ required: true })}
            />
            <RadioButton
              name="repTypes"
              label="CALORIES"
              value="CALORIES"
              register={register({ required: true })}
            />
            <RadioButton
              name="repTypes"
              label="DISTANCE"
              value="DISTANCE"
              register={register({ required: true })}
            />
          </HorizontalButtonsInputGroup>
        </StyledInputGroup> */}

        <MainText>Required Equipments Select</MainText>
        <MainText>Selectable Equipments Select</MainText>
        <MainText>Body Area Move Scores Select</MainText>

        <SubmitButton
          disabled={!formState.isDirty}
          loading={false}
          text={move ? 'Update Move' : 'Add Move'}
        />
      </StyledForm>
    )
  }
}

export default CreateEditMove
