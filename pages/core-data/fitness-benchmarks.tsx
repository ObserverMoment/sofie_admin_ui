import React, { useState } from 'react'
import CreateEditFitnessBenchmark from '../../components/contentCRUD/createEditFitnessBenchmark'
import ErrorMessage from '../../components/errorMessage'
import Modal from '../../components/layout/modal'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { CreateButton } from '../../components/styled-components/buttons'
import {
  FlexBox,
  MainText,
  Padding,
  SubTitle,
  theme,
  TinyText,
  Title,
} from '../../components/styled-components/styled'
import {
  FitnessBenchmark,
  FitnessBenchmarkCategory,
  useCoreDataQuery,
} from '../../graphql/generated_types'

export default function FitnessBenchmarks() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: '',
  })

  const { loading, error, data } = useCoreDataQuery()

  const [activeBenchmarkData, setActiveBenchmarkData] = useState(null)

  function handleBenchmarkClick(data: FitnessBenchmark) {
    setActiveBenchmarkData(data)
    setModalState({ isOpen: true, title: 'Edit Benchmark' })
  }

  function handleAddNewClick() {
    setActiveBenchmarkData(null)
    setModalState({ isOpen: true, title: 'Create New Benchmark' })
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <div>
        <Padding>
          <FlexBox direction="row" justify="space-between">
            <Title>Fitness Benchmarks</Title>
            <CreateButton onClick={handleAddNewClick} />
          </FlexBox>
        </Padding>

        {data.coreData.fitnessBenchmarkCategories.map((c) => (
          <FitnessBenchmarkCategoryDisplay
            category={c}
            benchmarks={data.coreData.fitnessBenchmarks.filter(
              (b) => b.FitnessBenchmarkCategory.id === c.id,
            )}
            handleBenchmarkClick={handleBenchmarkClick}
          />
        ))}

        <Modal
          isOpen={isOpen}
          width="90vw"
          disableCloseButton={true}
          disableClickOutsideClose={true}
        >
          <div>
            <FlexBox direction="row" align="space-between">
              <Title>{title}</Title>
            </FlexBox>
            <CreateEditFitnessBenchmark
              fitnessBenchmark={activeBenchmarkData}
              onComplete={() => setModalState({ isOpen: false, title: '' })}
              handleClose={() => setModalState({ isOpen: false, title: '' })}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

interface FitnessBenchmarkCategoryDisplayProps {
  category: FitnessBenchmarkCategory
  benchmarks: FitnessBenchmark[]
  handleBenchmarkClick: (benchmark: FitnessBenchmark) => void
}

const FitnessBenchmarkCategoryDisplay = ({
  category,
  benchmarks,
  handleBenchmarkClick,
}: FitnessBenchmarkCategoryDisplayProps) => (
  <FlexBox align="start" margin="16px">
    <SubTitle>{category.name}</SubTitle>
    <FlexBox direction="row">
      {benchmarks.map((b) => (
        <Padding>
          <FitnessBenchmarkDisplay
            benchmark={b}
            handleBenchmarkClick={handleBenchmarkClick}
          />
        </Padding>
      ))}
    </FlexBox>
  </FlexBox>
)

interface FitnessBenchmarkDisplayProps {
  benchmark: FitnessBenchmark
  handleBenchmarkClick: (benchmark: FitnessBenchmark) => void
}

const FitnessBenchmarkDisplay = ({
  benchmark,
  handleBenchmarkClick,
}: FitnessBenchmarkDisplayProps) => (
  <FlexBox
    backgroundColor={theme.colors.pureWhite}
    padding="8px 16px"
    cursorHover={true}
    align="start"
    borderRadius="6px"
    onClick={() => handleBenchmarkClick(benchmark)}
  >
    <MainText>{benchmark.name}</MainText>

    <TinyText>{benchmark.type.toString()}</TinyText>
  </FlexBox>
)
