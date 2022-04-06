import React from 'react'
import { SuccessIcon } from '../icons'
import { LoadingDots } from '../loadingIndicators'
import { showToast } from '../notifications'
import { SelectedBodyAreaMoveScores } from '../selectors/bodyAreaMoveScores'
import { SelectedEquipmentDisplay } from '../selectors/equipmentMultiSelect'
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
import {
  BodyAreaMoveScore,
  CoreDataDocument,
  CreateMoveInput,
  Equipment,
  Move,
  MoveScope,
  MoveType,
  useCoreDataQuery,
  useCreateMoveMutation,
  useUpdateMoveMutation,
  WorkoutMoveRepType,
} from '../../graphql/generated_types'
import { useConfirmationDialog } from '../../services/dialogHookProvider'
import { FlexBox, Spacer } from '../../styles/layout'
import { MainText } from '../../styles/text'
import { DestructiveButton, LightButton } from '../../styles/buttons'
import { defaultVideoEncoding } from '../../services/uploadcare'

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
  const { loading, error, data } = useCoreDataQuery()

  const [createMove, { loading: createMoveInProgress }] = useCreateMoveMutation(
    {
      update(cache, { data: { createMove } }) {
        const { coreData } = cache.readQuery({
          query: CoreDataDocument,
        })

        cache.writeQuery({
          query: CoreDataDocument,
          data: {
            coreData: {
              ...coreData,
              standardMoves: [createMove, ...coreData.standardMoves],
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

  const [updateMove, { loading: updateMoveInProgress }] = useUpdateMoveMutation(
    {
      onCompleted() {
        showToast('Move Updated', 'Success')
        onComplete && onComplete()
      },
      onError() {
        showToast('API error updating move!', 'Error')
      },
    },
  )

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
            // JSON is the same as for create, but with the ID added.
            id: move.id,
            ...genCreateMoveJson(getFormData()),
          },
        },
      })
    } else {
      createMove({
        variables: {
          data: genCreateMoveJson(getFormData()),
        },
      })
    }
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    const formIsValidToSubmit = formState.name.value && formState.MoveType.value

    return (
      <StyledForm onSubmit={onSubmit}>
        <FlexBox direction="row">
          <FlexBox direction="column" width="50%">
            <StyledInputGroup>
              <StyledLabel htmlFor="MoveType">Type</StyledLabel>
              <RadioButtons<MoveType>
                options={data.coreData.moveTypes.map((mt: MoveType) => ({
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
                move={move}
                bodyAreaMoveScores={formState.BodyAreaMoveScores.value}
                updateBodyAreaMoveScores={formState.BodyAreaMoveScores.setValue}
              />
            </StyledInputGroup>
          </FlexBox>
        </FlexBox>

        <SubmitButton
          disabled={
            !formIsValidToSubmit ||
            !formDirty() ||
            createMoveInProgress ||
            updateMoveInProgress
          }
          loading={createMoveInProgress || updateMoveInProgress}
          text={move ? 'Save Updates' : 'Create New Move'}
        />
        <FlexBox direction="row" justify="center" padding="10px 0 0 0">
          <LightButton
            onClick={() => {
              if (formDirty()) {
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
          >
            <MainText>Cancel</MainText>
          </LightButton>
        </FlexBox>
      </StyledForm>
    )
  }
}

// For sending to the API
const genCreateMoveJson = (move: Move): CreateMoveInput => ({
  name: move.name,
  searchTerms: move.searchTerms || null,
  description: move.description || null,
  demoVideoUri: move.demoVideoUri || null,
  scope: MoveScope.Standard,
  validRepTypes: move.validRepTypes.includes(WorkoutMoveRepType.Time)
    ? move.validRepTypes
    : [WorkoutMoveRepType.Time, ...move.validRepTypes], // TIME is always required, the API will throw an error if not present.
  RequiredEquipments: move.RequiredEquipments.map((e: Equipment) => ({
    id: e.id,
  })),
  SelectableEquipments: move.SelectableEquipments.map((e: Equipment) => ({
    id: e.id,
  })),
  MoveType: { id: move.MoveType.id },
  BodyAreaMoveScores: move.BodyAreaMoveScores.map((bam: BodyAreaMoveScore) => ({
    BodyArea: { id: bam.BodyArea.id },
    score: bam.score,
  })),
})

export default CreateEditMove
