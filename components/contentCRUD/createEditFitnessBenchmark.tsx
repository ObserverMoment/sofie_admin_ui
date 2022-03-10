import React from 'react'
import { SuccessIcon } from '../images'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { DestructiveButton, LightButton } from '../styled-components/buttons'
import { FlexBox, MainText, Spacer } from '../styled-components/styled'
import FileUploader from '../forms/fileUploader'
import RadioButtons from '../forms/inputs/radioButtons'
import TextAreaInput from '../forms/inputs/textAreaInput'
import TextInput from '../forms/inputs/textInput'
import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  SubmitButton,
} from '../forms/styled'
import { useFormState } from '../forms/useFormState'
import { defaultVideoEncoding } from '../../lib/uploadcare'
import { useConfirmationDialog } from '../../lib/dialogHookProvider'
import {
  CoreDataDocument,
  CreateFitnessBenchmarkInput,
  FitnessBenchmark,
  FitnessBenchmarkCategory,
  FitnessBenchmarkScope,
  FitnessBenchmarkScoreType,
  useCoreDataQuery,
  useCreateFitnessBenchmarkMutation,
  useUpdateFitnessBenchmarkMutation,
} from '../../graphql/generated_types'

interface CreateEditFitnessBenchmarkProps {
  readonly fitnessBenchmark?: FitnessBenchmark
  readonly onComplete?: () => void
  readonly handleClose: () => void
}

const CreateEditFitnessBenchmark = ({
  fitnessBenchmark,
  onComplete,
  handleClose,
}: CreateEditFitnessBenchmarkProps) => {
  const getConfirmation = useConfirmationDialog()
  const { loading, error, data } = useCoreDataQuery()

  const [
    createFitnessBenchmark,
    { loading: createFitnessBenchmarkInProgress },
  ] = useCreateFitnessBenchmarkMutation({
    update(cache, { data: { createFitnessBenchmark } }) {
      const { coreData } = cache.readQuery({
        query: CoreDataDocument,
      })

      cache.writeQuery({
        query: CoreDataDocument,
        data: {
          coreData: {
            ...coreData,
            fitnessBenchmarks: [
              createFitnessBenchmark,
              ...coreData.fitnessBenchmarks,
            ],
          },
        },
      })
    },
    onCompleted() {
      showToast('New Benchmark Added', 'Success')
      onComplete && onComplete()
    },
    onError() {
      showToast('Error creating benchmark!', 'Error')
    },
  })

  const [
    updateFitnessBenchmark,
    { loading: updateFitnessBenchmarkInProgress },
  ] = useUpdateFitnessBenchmarkMutation({
    onCompleted() {
      showToast('Benchmark Updated', 'Success')
      onComplete && onComplete()
    },
    onError() {
      showToast('API error updating benchmark!', 'Error')
    },
  })

  const { formState, formDirty, getFormData } = useFormState<FitnessBenchmark>([
    {
      key: 'name',
      value: fitnessBenchmark?.name,
    },
    {
      key: 'description',
      value: fitnessBenchmark?.description,
    },
    {
      key: 'instructions',
      value: fitnessBenchmark?.instructions,
    },
    {
      key: 'scope',
      value: fitnessBenchmark?.scope || FitnessBenchmarkScope.Standard,
    },
    {
      key: 'type',
      value: fitnessBenchmark?.type,
    },
    {
      key: 'instructionalVideoUri',
      value: fitnessBenchmark?.instructionalVideoUri,
    },
    {
      key: 'instructionalVideoThumbUri',
      value: fitnessBenchmark?.instructionalVideoThumbUri,
    },
    {
      key: 'FitnessBenchmarkCategory',
      value: fitnessBenchmark?.FitnessBenchmarkCategory,
    },
  ])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (fitnessBenchmark) {
      updateFitnessBenchmark({
        variables: {
          data: {
            // JSON is the same as for create, but with the ID added.
            id: fitnessBenchmark.id,
            ...genCreateFitnessBenchmarkJson(getFormData()),
          },
        },
      })
    } else {
      createFitnessBenchmark({
        variables: {
          data: genCreateFitnessBenchmarkJson(getFormData()),
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
    const formIsValidToSubmit =
      formState.scope.value &&
      formState.type.value &&
      formState.name.value &&
      formState.description.value &&
      formState.FitnessBenchmarkCategory.value

    return (
      <StyledForm onSubmit={onSubmit}>
        <FlexBox direction="row">
          <FlexBox direction="column" width="50%">
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
              <StyledLabel htmlFor="description">Description</StyledLabel>
              <TextAreaInput
                placeholder="Description"
                name="description"
                value={formState.description.value}
                setValue={formState.description.setValue}
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="instructions">Instructions</StyledLabel>
              <TextAreaInput
                placeholder="Instructions"
                name="instructions"
                value={formState.instructions.value}
                setValue={formState.instructions.setValue}
              />
            </StyledInputGroup>
          </FlexBox>

          <FlexBox direction="column" width="50%">
            <StyledInputGroup>
              <StyledLabel htmlFor="FitnessBenchmarkCategory">
                Category
              </StyledLabel>
              <RadioButtons<FitnessBenchmarkCategory>
                options={data.coreData.fitnessBenchmarkCategories.map(
                  (cat: FitnessBenchmarkCategory) => ({
                    value: cat,
                    label: cat.name,
                  }),
                )}
                value={formState.FitnessBenchmarkCategory.value}
                setValue={formState.FitnessBenchmarkCategory.setValue}
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="FitnessBenchmarkType">
                Score Type
              </StyledLabel>
              <RadioButtons<FitnessBenchmarkScoreType>
                options={Object.values(FitnessBenchmarkScoreType).map(
                  (type: FitnessBenchmarkScoreType) => ({
                    value: type,
                    label: type.toString(),
                  }),
                )}
                value={formState.type.value}
                setValue={formState.type.setValue}
              />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="instructionalVideoUri">
                Instructional Video
              </StyledLabel>
              {formState.instructionalVideoUri.value ? (
                <FlexBox direction="row" align="center">
                  <SuccessIcon />
                  <Spacer right="4px" />
                  <MainText>Video Uploaded</MainText>
                  <Spacer right="40px" />
                  <DestructiveButton
                    onClick={() =>
                      formState.instructionalVideoUri.setValue(null)
                    }
                  >
                    Remove
                  </DestructiveButton>
                </FlexBox>
              ) : (
                <FileUploader
                  onUploadComplete={({ uuid }) => {
                    formState.instructionalVideoUri.setValue(uuid)
                    /// Run video encoding and get back the processed UUID
                    defaultVideoEncoding(uuid).then((processedId) => {
                      if (processedId) {
                        formState.instructionalVideoUri.setValue(processedId)
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
          </FlexBox>
        </FlexBox>

        <SubmitButton
          disabled={
            !formIsValidToSubmit ||
            !formDirty() ||
            createFitnessBenchmarkInProgress ||
            updateFitnessBenchmarkInProgress
          }
          loading={
            createFitnessBenchmarkInProgress || updateFitnessBenchmarkInProgress
          }
          text={fitnessBenchmark ? 'Save Updates' : 'Create New Benchmark'}
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
const genCreateFitnessBenchmarkJson = (
  benchmark: FitnessBenchmark,
): CreateFitnessBenchmarkInput => ({
  name: benchmark.name,
  description: benchmark.description || null,
  instructions: benchmark.instructions || null,
  instructionalVideoUri: benchmark.instructionalVideoUri || null,
  scope: FitnessBenchmarkScope.Standard,
  type: benchmark.type || null,
  FitnessBenchmarkCategory: benchmark.FitnessBenchmarkCategory
    ? { id: benchmark.FitnessBenchmarkCategory.id }
    : null,
})

export default CreateEditFitnessBenchmark
