import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import CreateEditMove from '../../components/contentCRUD/createEditMove'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import {
  FlexBox,
  theme,
  Title,
} from '../../components/styled-components/styled'
import Modal from '../../components/layout/modal'
import { STANDARD_MOVES_QUERY } from '../../graphql/move'
import { CreateButton } from '../../components/styled-components/buttons'
import { BodyArea, BodyAreaMoveScore, Move } from '../../types/models/move'
import { Equipment } from '../../types/models/equipment'

const ScoreTotal = styled.div`
  padding: 3px;
  margin: 3px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Moves() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Move',
  })

  const { loading, error, data } = useQuery(STANDARD_MOVES_QUERY)

  const [activeMoveData, setActiveMoveData] = useState(null)

  function handleRowClick(data: Move) {
    setActiveMoveData(data)
    setModalState({ isOpen: true, title: 'Edit Move' })
  }

  function handleAddNewClick() {
    setActiveMoveData(null)
    setModalState({ isOpen: true, title: 'Create New Move' })
  }

  function buildScoreTotal(bams: Array<BodyAreaMoveScore>) {
    const total: number = bams.map((b) => b.score).reduce((a, b) => a + b, 0)
    const { highlight, destructive } = theme.colors
    return (
      <ScoreTotal>
        <span style={{ color: total === 100 ? highlight : destructive }}>
          ({total}%)
        </span>
      </ScoreTotal>
    )
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox>
        <FlexBox direction="row" justify="center">
          <CreateButton onClick={handleAddNewClick} />
        </FlexBox>
        <InteractiveTable
          handleRowClick={(data) => handleRowClick(data)}
          columnMapping={[
            {
              Header: 'Name',
              accessor: 'name', // accessor is the "key" in the data
            },
            {
              Header: 'Description',
              accessor: 'description',
              disableSortBy: true,
            },
            {
              Header: 'Search Terms',
              accessor: 'searchTerms',
              disableSortBy: true,
            },
            {
              id: 'moveType',
              Header: 'Type',
              accessor: ({ moveType }) => moveType.name,
            },
            {
              id: 'validRepTypes', // accessor is the "key" in the data
              Header: 'Rep Types',
              accessor: ({ validRepTypes }) => validRepTypes.join(', '),
              disableSortBy: true,
            },
            {
              id: 'demoVideoUrl', // accessor is the "key" in the data
              Header: 'Video?',
              accessor: ({ demoVideoUrl }) => (demoVideoUrl ? 'YES' : 'NO'),
            },
            {
              id: 'requiredEquipments', // accessor is the "key" in the data
              Header: 'Required',
              accessor: ({ requiredEquipments }) =>
                requiredEquipments.map((e: Equipment) => e.name).join(', '),
              disableSortBy: true,
            },
            {
              id: 'selectableEquipments', // accessor is the "key" in the data
              Header: 'Selectable',
              accessor: ({ selectableEquipments }) =>
                selectableEquipments.map((e: Equipment) => e.name).join(', '),
              disableSortBy: true,
            },
            {
              id: 'bodyAreaMoveScores', // accessor is the "key" in the data
              Header: 'Body Areas',
              accessor: ({ bodyAreaMoveScores }) => (
                <FlexBox direction="row" wrap="wrap" align="center">
                  <div>
                    {bodyAreaMoveScores
                      .map(
                        (bams: BodyAreaMoveScore) =>
                          `${bams.bodyArea.name}: ${bams.score}%`,
                      )
                      .join(', ')}
                  </div>
                  {buildScoreTotal(bodyAreaMoveScores)}
                </FlexBox>
              ),

              disableSortBy: true,
            },
          ]}
          data={data.standardMoves}
        />
        <Modal
          isOpen={isOpen}
          handleClose={() =>
            setModalState({ isOpen: false, title: 'Equipment' })
          }
          disableClickOutsideClose={true}
          width="90vw"
        >
          <div>
            <Title>{title}</Title>
            <CreateEditMove
              move={activeMoveData}
              onComplete={() => setModalState({ isOpen: false, title: '' })}
            />
          </div>
        </Modal>
      </FlexBox>
    )
  }
}
