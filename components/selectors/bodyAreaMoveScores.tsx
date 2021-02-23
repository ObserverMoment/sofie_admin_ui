//// Display Elements - shows already selected body area move scores in a simple UI with a button to open the editor selector ////

import React, { useState } from 'react'
import styled from 'styled-components'
import { BodyAreaMoveScore } from '../../types/models/move'
import { EditIcon } from '../images'
import Modal from '../layout/modal'
import { DarkButton } from '../styled-components/buttons'
import {
  FlexBox,
  MainText,
  Padding,
  Spacer,
  TinyText,
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

  return (
    <div>
      <FlexBox direction="row" align="center">
        <DarkButton onClick={() => setOpeneditor(true)}>
          <EditIcon width={12} />
          <Spacer right="2px" />
          <MainText>Edit</MainText>
        </DarkButton>
        <Spacer right="10px" />
        {bodyAreaMoveScores.length && (
          <TinyText bold>
            Total assigned:
            {bodyAreaMoveScores
              .map((bam) => bam.score)
              .reduce<number>((a, b) => a + b, 0)}
            %
          </TinyText>
        )}
      </FlexBox>

      <Spacer bottom="6px" />
      <FlexBox direction="row" wrap="wrap">
        {bodyAreaMoveScores.length ? (
          bodyAreaMoveScores.map((bam) => (
            <SelectedBodyAreaMoveScoreItem
              key={bam.id}
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
        closeOnDone
      >
        <BodyAreaMoveScoreEditor
          bodyAreaMoveScores={bodyAreaMoveScores}
          updateBodyAreaMoveScores={updateBodyAreaMoveScores}
        />
      </Modal>
    </div>
  )
}

//// Single Selected Equipment Display UI ////
const StyledBodyAreaMoveScoreItem = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  direction: row;
  padding: 8px 12px;
  border: 1px solid ${(p) => p.theme.colors.highlight};
  border-radius: 3px;
  margin: 0 4px 4px 0;
`

const SelectedBodyAreaMoveScoreItem = ({
  bodyAreaMoveScore,
}: {
  bodyAreaMoveScore: BodyAreaMoveScore
}) => (
  <StyledBodyAreaMoveScoreItem>
    <MainText>{`${bodyAreaMoveScore.bodyArea.name}: ${bodyAreaMoveScore.score}`}</MainText>
  </StyledBodyAreaMoveScoreItem>
)

//////////////////
//// The selector that opens in a modal - allowing equipment selection to be toggled on / off ////
//////////////////
interface BodyAreaMoveScoreEditorProps {
  bodyAreaMoveScores: BodyAreaMoveScore[]
  updateBodyAreaMoveScores: (updated: BodyAreaMoveScore[]) => void
}

export const BodyAreaMoveScoreEditor = ({
  bodyAreaMoveScores,
  updateBodyAreaMoveScores,
}: BodyAreaMoveScoreEditorProps) => {
  return <div>BodyAreaMoveScore Editor</div>
}
