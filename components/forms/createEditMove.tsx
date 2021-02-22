import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import {
  CREATE_OFFICIAL_MOVE_MUTATION,
  genCreateMoveJson,
  MOVE_TYPES_QUERY,
  UPDATE_OFFICIAL_MOVE_MUTATION,
} from '../../graphql/move'
import { Move, MoveType } from '../../types/models'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { SelectedEquipmentDisplay } from '../selectors/equipmentMultiSelect'
import { FlexBox, MainText } from '../styled-components/styled'
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (move) {
      updateMove({
        variables: {
          data: {
            id: move.id,
            ...genCreateMoveJson(getFormData()),
            scope: 'STANDARD',
          },
        },
      })
    } else {
      createMove({
        variables: {
          data: { ...genCreateMoveJson(getFormData()), scope: 'STANDARD' },
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
              <FileUploader
                onUploadComplete={(fileInfo) =>
                  formState.demoVideoUrl.setValue(fileInfo.uuid)
                }
                allowedFileTypes="mp4"
                onError={(message) => showToast(message, 'Error', 5000)}
              />
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
              <MainText>Body Area Move Scores Select</MainText>
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
