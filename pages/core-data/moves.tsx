import React, { useState } from 'react'
import styled from 'styled-components'
import CreateEditMove from '../../components/contentCRUD/createEditMove'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import {
  FlexBox,
  Padding,
  theme,
  Title,
} from '../../components/styled-components/styled'
import Modal from '../../components/layout/modal'
import { CreateButton } from '../../components/styled-components/buttons'
import {
  BodyAreaMoveScore,
  Equipment,
  Move,
  useCoreDataQuery,
} from '../../graphql/generated_types'

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
    title: '',
  })

  const { loading, error, data } = useCoreDataQuery()

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
        <Padding>
          <FlexBox direction="row" justify="center">
            <CreateButton onClick={handleAddNewClick} />
          </FlexBox>
        </Padding>

        <InteractiveTable
          handleRowClick={(data) => handleRowClick(data)}
          columnMapping={[
            {
              Header: 'Name',
              accessor: 'name', // accessor is the "key" in the data
            },
            {
              id: 'description',
              Header: 'Description',
              disableSortBy: true,
              accessor: ({ description }) =>
                description
                  ? `${description.substring(0, 150)}${
                      description.length > 150 ? '...' : ''
                    }`
                  : '',
            },
            {
              Header: 'Search Terms',
              accessor: 'searchTerms',
              disableSortBy: true,
            },
            {
              id: 'moveType',
              Header: 'Type',
              accessor: ({ MoveType }) => MoveType.name,
            },
            {
              id: 'validRepTypes', // accessor is the "key" in the data
              Header: 'Rep Types',
              accessor: ({ validRepTypes }) => validRepTypes.join(', '),
              disableSortBy: true,
            },
            {
              id: 'demoVideoUri', // accessor is the "key" in the data
              Header: 'Video?',
              accessor: ({ demoVideoUri }) => (demoVideoUri ? 'YES' : 'NO'),
            },
            {
              id: 'RequiredEquipments', // accessor is the "key" in the data
              Header: 'Required',
              accessor: ({ RequiredEquipments }) =>
                RequiredEquipments.map((e: Equipment) => e.name).join(', '),
              disableSortBy: true,
            },
            {
              id: 'SelectableEquipments', // accessor is the "key" in the data
              Header: 'Selectable',
              accessor: ({ SelectableEquipments }) =>
                SelectableEquipments.map((e: Equipment) => e.name).join(', '),
              disableSortBy: true,
            },
            {
              id: 'BodyAreaMoveScores', // accessor is the "key" in the data
              Header: 'Body Areas',
              accessor: ({ BodyAreaMoveScores }) => (
                <FlexBox direction="row" wrap="wrap" align="center">
                  <div>
                    {BodyAreaMoveScores.map(
                      (bams: BodyAreaMoveScore) =>
                        `${bams.BodyArea.name}: ${bams.score}%`,
                    ).join(', ')}
                  </div>
                  {buildScoreTotal(BodyAreaMoveScores)}
                </FlexBox>
              ),

              disableSortBy: true,
            },
          ]}
          data={data.coreData.standardMoves}
        />
        <Modal
          isOpen={isOpen}
          disableCloseButton={true}
          disableClickOutsideClose={true}
          width="90vw"
        >
          <div>
            <FlexBox direction="row" align="space-between">
              <Title>{title}</Title>
            </FlexBox>
            <CreateEditMove
              move={activeMoveData}
              onComplete={() => setModalState({ isOpen: false, title: '' })}
              handleClose={() => setModalState({ isOpen: false, title: '' })}
            />
          </div>
        </Modal>
      </FlexBox>
    )
  }
}
