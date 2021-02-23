import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import {
  CREATE_OFFICIAL_MOVE_MUTATION,
  genMoveJson,
  MOVE_TYPES_QUERY,
  NEW_MOVE_FRAGMENT,
  UPDATE_OFFICIAL_MOVE_MUTATION,
} from '../../graphql/move'
import { Move, MoveType } from '../../types/models/move'
import { SuccessIcon } from '../images'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { SelectedBodyAreaMoveScores } from '../selectors/bodyAreaMoveScores'
import { SelectedEquipmentDisplay } from '../selectors/equipmentMultiSelect'
import { DestructiveButton } from '../styled-components/buttons'
import { FlexBox, MainText, Spacer } from '../styled-components/styled'
import FileUploader from './fileUploader'
import CheckBoxes from './inputs/checkBoxes'
import RadioButtons from './inputs/radioButtons'
import TextAreaInput from './inputs/textAreaInput'
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
  readonly onComplete?: () => void
}

const CreateEditMove = ({ move, onComplete }: CreateEditMoveProps) => {
  const { loading, error, data } = useQuery(MOVE_TYPES_QUERY)

  const [createMove] = useMutation(CREATE_OFFICIAL_MOVE_MUTATION, {
    update(cache, { data: { createMove } }) {
      cache.modify({
        fields: {
          standardMoves(prevMoves = []) {
            const newMoveRef = cache.writeFragment({
              data: createMove,
              fragment: NEW_MOVE_FRAGMENT,
            })
            return [newMoveRef, ...prevMoves]
          },
        },
      })
    },
    onCompleted: () => {
      showToast('New Move Added', 'Success')
      onComplete && onComplete()
    },
  })

  const [updateMove] = useMutation(UPDATE_OFFICIAL_MOVE_MUTATION, {
    onCompleted: () => {
      showToast('Move Updated', 'Success')
      onComplete && onComplete()
    },
  })

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

  console.log(formState)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (move) {
      updateMove({
        variables: {
          data: {
            id: move.id,
            ...genMoveJson(getFormData()),
          },
        },
      })
    } else {
      createMove({
        variables: {
          data: { ...genMoveJson(getFormData()) },
        },
      })
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
        <FlexBox direction="row">
          <FlexBox direction="column" width="50%">
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

            <StyledInputGroup>
              <StyledLabel htmlFor="description">Description</StyledLabel>
              <TextAreaInput
                placeholder="Description"
                name="description"
                value={formState.description.value}
                setValue={formState.description.setValue}
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="validRepTypes">Valid Rep Types</StyledLabel>
              <ExampleText>
                TIME is selected by default for all moves.
              </ExampleText>
              <CheckBoxes<string>
                options={['REPS', 'CALORIES', 'DISTANCE'].map((rt) => ({
                  value: rt,
                  label: rt,
                }))}
                selected={formState.validRepTypes.value}
                setValue={formState.validRepTypes.setValue}
              />
            </StyledInputGroup>
          </FlexBox>
          <FlexBox direction="column" width="50%">
            <StyledInputGroup>
              <StyledLabel htmlFor="demoVideoUrl">Demo Video</StyledLabel>
              {formState.demoVideoUrl.value ? (
                <FlexBox direction="row" align="center">
                  <SuccessIcon />
                  <Spacer right="4px" />
                  <MainText>Video Uploaded</MainText>
                  <Spacer right="40px" />
                  <DestructiveButton
                    onClick={() => formState.demoVideoUrl.setValue(null)}
                  >
                    Remove
                  </DestructiveButton>
                </FlexBox>
              ) : (
                <FileUploader
                  onUploadComplete={({ uuid }) =>
                    formState.demoVideoUrl.setValue(uuid)
                  }
                  allowedFileTypes="mp4"
                  onError={(message) => showToast(message, 'Error', 5000)}
                />
              )}
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="requiredEquipments">
                Required Equipment
              </StyledLabel>
              <SelectedEquipmentDisplay
                selectedEquipments={formState.requiredEquipments.value}
                updateSelectedEquipments={formState.requiredEquipments.setValue}
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="selectableEquipments">
                Selectable Equipment
              </StyledLabel>
              <SelectedEquipmentDisplay
                selectedEquipments={formState.selectableEquipments.value}
                updateSelectedEquipments={
                  formState.selectableEquipments.setValue
                }
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="bodyAreaMoveScores">
                Body Area Move Scores
              </StyledLabel>
              <SelectedBodyAreaMoveScores
                bodyAreaMoveScores={formState.bodyAreaMoveScores.value}
                updateBodyAreaMoveScores={formState.bodyAreaMoveScores.setValue}
              />
            </StyledInputGroup>
          </FlexBox>
        </FlexBox>

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
