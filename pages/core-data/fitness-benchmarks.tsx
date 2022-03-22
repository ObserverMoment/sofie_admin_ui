import React, { useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import CreateEditFitnessBenchmark from '../../components/contentCRUD/createEditFitnessBenchmark'
import ErrorMessage from '../../components/errorMessage'
import Modal from '../../components/layout/modal'
import { LoadingDots } from '../../components/loadingIndicators'
import { CreateButton } from '../../components/styled-components/buttons'
import {
  FlexBox,
  MainText,
  Padding,
  theme,
  TinyText,
  Title,
} from '../../components/styled-components/styled'
import {
  FitnessBenchmark,
  FitnessBenchmarkCategory,
  useAdminStandardFitnessBenchmarksQuery,
} from '../../graphql/generated_types'

export default function FitnessBenchmarks() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: '',
  })

  const { loading, error, data } = useAdminStandardFitnessBenchmarksQuery()

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
    return <LoadingDots />
  } else {
    const categories = data.adminStandardFitnessBenchmarks.reduce(
      (acum, next) => {
        if (acum.some((cat) => cat.id === next.FitnessBenchmarkCategory.id)) {
          return acum
        } else {
          acum.push(next.FitnessBenchmarkCategory)
          return acum
        }
      },
      [],
    )
    return (
      <div>
        <Padding>
          <FlexBox direction="row" justify="space-between">
            <FlexBox direction="row">
              <Breadcrumbs pageTitle="Fitness Benchmarks" />
            </FlexBox>
            <CreateButton onClick={handleAddNewClick} />
          </FlexBox>
        </Padding>

        {categories.map((c) => (
          <FitnessBenchmarkCategoryDisplay
            key={c.id}
            category={c}
            benchmarks={data.adminStandardFitnessBenchmarks.filter(
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
    <Title>{category.name}</Title>
    <FlexBox direction="row" wrap="wrap">
      {benchmarks.map((b) => (
        <Padding key={b.id}>
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
    boxShadow="0 3px 16px 0px rgb(0 0 0 / 2%), 0 5px 8px -4px rgb(0 0 0 / 10%)"
    padding="8px 16px"
    cursorHover={true}
    align="start"
    borderRadius="6px"
    onClick={() => handleBenchmarkClick(benchmark)}
  >
    <MainText>{benchmark.name}</MainText>
    <TinyText>{benchmark.type.toString()}</TinyText>
    <TinyText>
      Scores Submitted: {benchmark.FitnessBenchmarkScores.length}
    </TinyText>
  </FlexBox>
)
