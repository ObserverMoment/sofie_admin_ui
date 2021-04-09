import { gql, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import {
  CREATE_STANDARD_MOVE_MUTATION,
  genMoveJson,
  MOVE_FIELDS_FRAGMENT,
  MOVE_TYPES_QUERY,
  UPDATE_STANDARD_MOVE_MUTATION,
} from '../../graphql/move'
import { Move, MoveType } from '../../types/models/move'
import { SuccessIcon } from '../images'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { SelectedBodyAreaMoveScores } from '../selectors/bodyAreaMoveScores'
import { SelectedEquipmentDisplay } from '../selectors/equipmentMultiSelect'
import { DestructiveButton } from '../styled-components/buttons'
import { FlexBox, MainText, Spacer } from '../styled-components/styled'
import FileUploader from '../forms/fileUploader'
import CheckBoxes from '../forms/inputs/checkBoxes'
import RadioButtons from '../forms/inputs/radioButtons'
import TextAreaInput from '../forms/inputs/textAreaInput'
import TextInput from '../forms/inputs/textInput'
import {
  ExampleText,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  SubmitButton,
} from '../forms/styled'
import { useFormState } from '../forms/useFormState'
import { defaultVideoEncoding } from '../../lib/uploadcare'
import { useConfirmationDialog } from '../../lib/dialogHookProvider'

interface CreateEditMoveProps {
  readonly move?: Move
  readonly onComplete?: () => void
  readonly handleClose: () => void
}

const CreateEditMove = ({
  move,
  onComplete,
  handleClose,
}: CreateEditMoveProps) => {
  const getConfirmation = useConfirmationDialog()
  const { loading, error, data } = useQuery(MOVE_TYPES_QUERY)

  const [createMove, { loading: mutateMoveInProgress }] = useMutation(
    CREATE_STANDARD_MOVE_MUTATION,
    {
      update(cache, { data: { createMove } }) {
        cache.modify({
          fields: {
            standardMoves(prevMoves = []) {
              const newMoveRef = cache.writeFragment({
                data: createMove,
                fragment: MOVE_FIELDS_FRAGMENT,
              })
              return [newMoveRef, ...prevMoves]
            },
          },
        })
      },
      onCompleted() {
        showToast('New Move Added', 'Success')
        onComplete && onComplete()
      },
      onError() {
        showToast('Error creating move!', 'Error')
      },
    },
  )

  const [updateMove] = useMutation(UPDATE_STANDARD_MOVE_MUTATION, {
    onCompleted() {
      showToast('Move Updated', 'Success')
      onComplete && onComplete()
    },
    onError() {
      showToast('API error updating move!', 'Error')
    },
  })

  const { formState, formDirty, getFormData } = useFormState<Move>([
    {
      key: 'MoveType',
      value: move?.MoveType,
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
      key: 'demoVideoUri',
      value: move?.demoVideoUri,
    },
    {
      key: 'validRepTypes',
      value: move ? move.validRepTypes : [],
    },
    {
      key: 'RequiredEquipments',
      value: move ? move.RequiredEquipments : [],
    },
    {
      key: 'SelectableEquipments',
      value: move ? move.SelectableEquipments : [],
    },
    {
      key: 'BodyAreaMoveScores',
      value: move ? move.BodyAreaMoveScores : [],
    },
  ])

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
              <StyledLabel htmlFor="MoveType">Type</StyledLabel>
              <RadioButtons<MoveType>
                options={data.moveTypes.map((mt: MoveType) => ({
                  value: mt,
                  label: mt.name,
                }))}
                value={formState.MoveType.value}
                setValue={formState.MoveType.setValue}
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
              <StyledLabel htmlFor="demoVideoUri">Demo Video</StyledLabel>
              {formState.demoVideoUri.value ? (
                <FlexBox direction="row" align="center">
                  <SuccessIcon />
                  <Spacer right="4px" />
                  <MainText>Video Uploaded</MainText>
                  <Spacer right="40px" />
                  <DestructiveButton
                    onClick={() => formState.demoVideoUri.setValue(null)}
                  >
                    Remove
                  </DestructiveButton>
                </FlexBox>
              ) : (
                <FileUploader
                  onUploadComplete={({ uuid }) => {
                    formState.demoVideoUri.setValue(uuid)
                    /// Run video encoding and get back the processed UUID
                    defaultVideoEncoding(uuid).then((processedId) => {
                      if (processedId) {
                        formState.demoVideoUri.setValue(processedId)
                        showToast(
                          'File uploaded and processed!',
                          'Success',
                          5000,
                        )
                      } else {
                        showToast(
                          'File uploaded but processing failed!',
                          'Error',
                          5000,
                        )
                      }
                    })
                  }}
                  allowedFileTypes="mp4"
                  onError={(message) => showToast(message, 'Error', 5000)}
                />
              )}
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="RequiredEquipments">
                Required Equipment
              </StyledLabel>
              <SelectedEquipmentDisplay
                selectedEquipments={formState.RequiredEquipments.value}
                updateSelectedEquipments={formState.RequiredEquipments.setValue}
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="SelectableEquipments">
                Selectable Equipment
              </StyledLabel>
              <SelectedEquipmentDisplay
                selectedEquipments={formState.SelectableEquipments.value}
                updateSelectedEquipments={
                  formState.SelectableEquipments.setValue
                }
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="bodyAreaMoveScores">
                Body Area Move Scores
              </StyledLabel>
              <SelectedBodyAreaMoveScores
                bodyAreaMoveScores={formState.BodyAreaMoveScores.value}
                updateBodyAreaMoveScores={formState.BodyAreaMoveScores.setValue}
              />
            </StyledInputGroup>
          </FlexBox>
        </FlexBox>

        <SubmitButton
          disabled={!formDirty() || mutateMoveInProgress}
          loading={mutateMoveInProgress}
          text={move ? 'Save Updates' : 'Create New Move'}
        />
        <FlexBox direction="row" justify="center" padding="10px 0 0 0">
          <DestructiveButton
            children="Cancel"
            onClick={() => {
              if (formDirty) {
                getConfirmation({
                  title: 'You have unsaved changes.',
                  message:
                    'Are you sure you want to close this form? Changes will not be saved',
                  onConfirm: handleClose,
                })
              } else {
                handleClose()
              }
            }}
          />
        </FlexBox>
      </StyledForm>
    )
  }
}

export default CreateEditMove
