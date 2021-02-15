import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import {
  CreateButton,
  FlexBox,
  theme,
} from '../../components/styled-components/styled'
import { BodyAreaMoveScore, Move } from '../../types/modelTypes'

export const STANDARD_MOVES_QUERY = gql`
  query standardMoves {
    standardMoves {
      id
      name
      description
      searchTerms
      type
      validRepTypes
      demoVideoUrl
      requiredEquipments {
        id
        name
      }
      selectableEquipments {
        id
        name
      }
      bodyAreaMoveScores {
        bodyArea {
          id
          name
        }
        score
      }
    }
  }
`

export const CREATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation updateOfficialMove($data: CreateMoveInput!) {
    updateOfficialMove(data: $data) {
      id
    }
  }
`

export const UPDATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation createOfficialMove($data: DeepUpdateMoveInput!) {
    createOfficialMove(data: $data) {
      id
    }
  }
`

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

  const [createMove] = useMutation(CREATE_OFFICIAL_MOVE_MUTATION, {
    onCompleted: () => {
      showToast('New Move Added', 'Success')
      setModalState({ isOpen: false, title: '' })
    },
  })

  const [updateMove] = useMutation(UPDATE_OFFICIAL_MOVE_MUTATION, {
    onCompleted: () => {
      showToast('Move Updated', 'Success')
      setModalState({ isOpen: false, title: '' })
    },
  })

  const [activeMoveData, setActiveMoveData] = useState(null)

  function handleRowClick(data: Move) {
    setActiveMoveData(data)
    setModalState({ isOpen: true, title: 'Edit Move' })
  }

  function handleAddNewClick() {
    setActiveMoveData(null)
    setModalState({ isOpen: true, title: 'Add Move' })
  }

  function handleCreateMove(data: Move) {
    createMove({ variables: { data } })
  }

  function handleUpdateMove(data: Move) {
    updateMove({ variables: { data } })
  }

  function buildScoreTotal(bams: Array<BodyAreaMoveScore>) {
    const total: number = bams.map((b) => b.score).reduce((a, b) => a + b, 0)
    const { highlight, destructive } = theme.colors
    return (
      <ScoreTotal>
        <span style={{ color: total === 100 ? highlight : destructive }}>
          {total}%
        </span>
      </ScoreTotal>
    )
  }

  console.log(data)

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox>
        <FlexBox direction="row" justify="center">
          <CreateButton onClick={() => console.log('create new move')} />
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
              accessor: 'searchterms',
              disableSortBy: true,
            },
            {
              Header: 'Type',
              accessor: 'type', // accessor is the "key" in the data
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
                requiredEquipments.map((e) => e.name).join(', '),
              disableSortBy: true,
            },
            {
              id: 'selectableEquipments', // accessor is the "key" in the data
              Header: 'Selectable',
              accessor: ({ selectableEquipments }) =>
                selectableEquipments.map((e) => e.name).join(', '),
              disableSortBy: true,
            },
            {
              id: 'bodyAreaMoveScores', // accessor is the "key" in the data
              Header: 'Body Areas',
              accessor: ({ bodyAreaMoveScores }) => (
                <FlexBox direction="row" wrap="wrap" align="center">
                  <div>
                    {bodyAreaMoveScores
                      .map((bams) => `${bams.bodyArea.name}: ${bams.score}%`)
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
      </FlexBox>
    )
  }
}
