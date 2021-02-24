//// Display Elements - shows already selected body area move scores in a simple UI with a button to open the editor selector ////

import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { BODY_AREAS_QUERY } from '../../graphql/move'
import { BodyArea, BodyAreaMoveScore } from '../../types/models/move'
import NumberInput from '../forms/inputs/numberInput'
import { EditIcon } from '../images'
import Modal from '../layout/modal'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import { DarkButton, HighlightButton } from '../styled-components/buttons'
import { HighlightedBox } from '../styled-components/cards'
import {
  FlexBox,
  MainText,
  Padding,
  Spacer,
  TinyText,
  Title,
} from '../styled-components/styled'

//// Usually what the user will see first - before they open the selector if they need to make edits ////
interface SelectedBodyAreaMoveScoresProps {
  bodyAreaMoveScores: BodyAreaMoveScore[]
  updateBodyAreaMoveScores: (updated: BodyAreaMoveScore[]) => void
}

export const SelectedBodyAreaMoveScores = ({
  bodyAreaMoveScores,
  updateBodyAreaMoveScores,
}: SelectedBodyAreaMoveScoresProps) => {
  const [openEditor, setOpeneditor] = useState(false)

  const { loading, error, data } = useQuery(BODY_AREAS_QUERY)

  function handleUpdateBodyAreaMoveScores(
    updatedBodyAreaMoveScores: BodyAreaMoveScore[],
  ) {
    updateBodyAreaMoveScores(updatedBodyAreaMoveScores)
    setOpeneditor(false)
  }

  const assignedBodyAreaScore = bodyAreaMoveScores
    .map((bam) => bam.score)
    .reduce<number>((a, b) => a + b, 0)

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <div>
        <FlexBox direction="row" align="center">
          <DarkButton onClick={() => setOpeneditor(true)}>
            <EditIcon width={12} />
            <Spacer right="2px" />
            <MainText>Edit</MainText>
          </DarkButton>
          <Spacer right="10px" />
          {bodyAreaMoveScores.length ? (
            <MainText
              colorType={
                assignedBodyAreaScore === 100 ? 'success' : 'destructive'
              }
              bold
            >
              {assignedBodyAreaScore}% assigned
            </MainText>
          ) : (
            <MainText bold colorType="destructive">
              0% Assigned
            </MainText>
          )}
        </FlexBox>

        <Spacer bottom="6px" />
        <FlexBox direction="row" wrap="wrap">
          {bodyAreaMoveScores.length ? (
            bodyAreaMoveScores.map((bam) => (
              <SelectedBodyAreaMoveScoreItem
                key={bam.bodyArea.name}
                bodyAreaMoveScore={bam}
              />
            ))
          ) : (
            <Padding>
              <MainText colorType="grey">None selected</MainText>
            </Padding>
          )}
        </FlexBox>
        <Modal
          isOpen={openEditor}
          handleClose={() => setOpeneditor(false)}
          disableClickOutsideClose={true}
          width="90vw"
        >
          <BodyAreaScoresEditor
            allBodyAreas={data.bodyAreas}
            bodyAreaMoveScores={bodyAreaMoveScores}
            updateBodyAreaMoveScores={handleUpdateBodyAreaMoveScores}
          />
        </Modal>
      </div>
    )
  }
}

const SelectedBodyAreaMoveScoreItem = ({
  bodyAreaMoveScore,
}: {
  bodyAreaMoveScore: BodyAreaMoveScore
}) => (
  <HighlightedBox>
    <MainText colorType="primaryLight">{`${bodyAreaMoveScore.bodyArea.name}: ${bodyAreaMoveScore.score}%`}</MainText>
  </HighlightedBox>
)

//////////////////
//// The selector that opens in a modal - allowing equipment selection to be toggled on / off ////
//////////////////
interface BodyAreaScoresEditorProps {
  allBodyAreas: BodyArea[]
  bodyAreaMoveScores: BodyAreaMoveScore[]
  updateBodyAreaMoveScores: (updated: BodyAreaMoveScore[]) => void
}

const BodyAreaScoreEditorWrapper = styled(FlexBox)`
  padding: 40px;
  flex-direction: row;
  flex-wrap: wrap;
`

const BodyAreaGroupWrapper = styled(FlexBox)`
  padding: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  justify-content: space-between;
  align-items: flex-start;
`

// Container for multiple bodyAreaMoveScores and display showing remaining points to assign
export const BodyAreaScoresEditor = ({
  allBodyAreas,
  bodyAreaMoveScores,
  updateBodyAreaMoveScores,
}: BodyAreaScoresEditorProps) => {
  const [partsByArea] = useState(
    allBodyAreas.reduce(
      (acum, next) => {
        acum[next.frontBack].push(next)
        return acum
      },
      {
        FRONT: [],
        BACK: [],
        BOTH: [],
      },
    ),
  )
  // Make a temp bodyarea move score for each body area, including those not set / set at zero.
  const [activeBodyAreaScores, updateActiveBodyAreaScores] = useState<
    BodyAreaMoveScore[]
  >(
    allBodyAreas.map(
      (ba) =>
        bodyAreaMoveScores.find((bam) => bam.bodyArea.name === ba.name) || {
          bodyArea: ba,
          score: 0,
        },
    ),
  )

  // Save to internal state, not to parent.
  function saveUpdatesInternally(bodyArea: BodyArea, score: number) {
    updateActiveBodyAreaScores(
      activeBodyAreaScores.map((bam) =>
        bam.bodyArea.name === bodyArea.name ? { ...bam, score: score } : bam,
      ),
    )
  }

  // Pass the updated objects to parent for saving.
  function saveUpdatesToParent() {
    updateBodyAreaMoveScores(activeBodyAreaScores.filter((bam) => bam.score))
  }

  function getScore(bodyArea: BodyArea) {
    return activeBodyAreaScores.find(
      (bam) => bam.bodyArea.name === bodyArea.name,
    ).score
  }

  const assigned: number = activeBodyAreaScores
    .map((bam) => bam.score)
    .reduce<number>((a, b) => a + b, 0)

  return (
    <FlexBox justify="center" align="center">
      <FlexBox direction="row" align="center">
        <MainText
          colorType={assigned === 100 ? 'highlight' : 'destructive'}
          bold
        >
          {assigned}% Assigned
        </MainText>
        <Spacer right="10px" />
        {assigned === 100 ? (
          <HighlightButton onClick={saveUpdatesToParent}>
            <MainText bold>Save Assignments</MainText>
          </HighlightButton>
        ) : (
          <Padding padding="9px">
            <MainText colorType="grey" bold>
              Exactly 100 points must be asigned
            </MainText>
          </Padding>
        )}
      </FlexBox>

      <BodyAreaScoreEditorWrapper>
        <FlexBox direction="row" justify="space-around">
          <FlexBox direction="column" align="center">
            <Title>FRONT</Title>
            <BodyAreaGroupWrapper>
              {partsByArea.FRONT.map((ba: BodyArea) => (
                <BodyAreaScoreEditor
                  key={ba.name}
                  bodyArea={ba}
                  score={getScore(ba)}
                  updateBodyAreaScore={saveUpdatesInternally}
                />
              ))}
            </BodyAreaGroupWrapper>
          </FlexBox>
          <FlexBox direction="column" align="center">
            <Title>BOTH</Title>
            <BodyAreaGroupWrapper>
              {partsByArea.BOTH.map((ba: BodyArea) => (
                <BodyAreaScoreEditor
                  key={ba.name}
                  bodyArea={ba}
                  score={getScore(ba)}
                  updateBodyAreaScore={saveUpdatesInternally}
                />
              ))}
            </BodyAreaGroupWrapper>
          </FlexBox>
          <FlexBox direction="column" align="center">
            <Title>BACK</Title>
            <BodyAreaGroupWrapper>
              {partsByArea.BACK.map((ba: BodyArea) => (
                <BodyAreaScoreEditor
                  key={ba.name}
                  bodyArea={ba}
                  score={getScore(ba)}
                  updateBodyAreaScore={saveUpdatesInternally}
                />
              ))}
            </BodyAreaGroupWrapper>
          </FlexBox>
        </FlexBox>
      </BodyAreaScoreEditorWrapper>
    </FlexBox>
  )
}

interface BodyAreaScoreEditorProps {
  bodyArea: BodyArea
  score: number
  updateBodyAreaScore: (bodyArea: BodyArea, score: number) => void
}

interface StyledScoreEditorProps {
  isActive: boolean
}

const StyledBodyAreaScoreEditor = styled.div<StyledScoreEditorProps>`
  border-style: solid;
  border-width: 1px;
  border-color: ${(p) =>
    p.isActive ? p.theme.colors.primaryDark : p.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 10px;
`

// Single bodyAreaMoveScore editor
const BodyAreaScoreEditor = ({
  bodyArea,
  score,
  updateBodyAreaScore,
}: BodyAreaScoreEditorProps) => (
  <StyledBodyAreaScoreEditor isActive={score !== 0}>
    <Spacer left="4px" />
    <MainText bold>{bodyArea.name}</MainText>
    <Spacer right="4px" />
    <NumberInput
      name={bodyArea.name}
      value={score.toString()}
      setValue={(value: string) => {
        console.log(value)
        updateBodyAreaScore(bodyArea, parseInt(value))
      }}
      max={100}
    />
  </StyledBodyAreaScoreEditor>
)
