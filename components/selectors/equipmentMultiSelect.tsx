import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { EQUIPMENT_QUERY } from '../../graphql/equipment'
import { CloseCircleIcon, PlusIcon } from '../images'
import { LoadingSpinner } from '../loadingIndicators'
import { showToast } from '../notifications'
import {
  FlexBox,
  MainText,
  Padding,
  Spacer,
  TinyText,
} from '../styled-components/styled'
import equal from 'deep-equal'
import { DarkButton } from '../styled-components/buttons'
import Modal from '../layout/modal'
import { Equipment } from '../../types/models/equipment'

//// Display Elements - shows already selected items in a simple UI with a button to open the selector ////
//// Usually what the user will see first - before they open the selector if they need to make edits ////
interface SelectedEquipmentDisplayProps {
  selectedEquipments: Equipment[]
  updateSelectedEquipments: (updatedEquipments: Equipment[]) => void
}

export const SelectedEquipmentDisplay = ({
  selectedEquipments,
  updateSelectedEquipments,
}: SelectedEquipmentDisplayProps) => {
  const [openSelector, setOpenSelector] = useState(false)

  function isSelected(v: Equipment) {
    return selectedEquipments.some((s) => equal(s, v))
  }

  function handleToggleSelected(v: Equipment) {
    if (isSelected(v)) {
      // Remove it
      updateSelectedEquipments(selectedEquipments.filter((s) => !equal(s, v)))
    } else {
      // Add it
      updateSelectedEquipments([v, ...selectedEquipments])
    }
  }

  function handleRemoveSelected(v: Equipment) {
    updateSelectedEquipments(selectedEquipments.filter((s) => !equal(s, v)))
  }

  return (
    <div>
      <DarkButton onClick={() => setOpenSelector(true)}>
        <PlusIcon width={12} />
        <Spacer right="2px" />
        <MainText>Add</MainText>
      </DarkButton>
      <Spacer bottom="6px" />
      <FlexBox direction="row" wrap="wrap">
        {selectedEquipments.length ? (
          selectedEquipments.map((e) => (
            <SelectedEquipmentDisplayItem
              key={e.id}
              equipment={e}
              removeEquipment={handleRemoveSelected}
            />
          ))
        ) : (
          <Padding>
            <MainText colorType="grey">None selected</MainText>
          </Padding>
        )}
      </FlexBox>
      <Modal
        isOpen={openSelector}
        handleClose={() => setOpenSelector(false)}
        disableClickOutsideClose={true}
        width="90vw"
        closeOnDone
      >
        <EquipmentMultiSelect
          selected={selectedEquipments}
          toggleSelected={handleToggleSelected}
        />
      </Modal>
    </div>
  )
}

//// Single Selected Equipment Display UI ////
const StyledSelectedEquipmentDisplayItem = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  direction: row;
  padding: 8px 12px;
  border: 1px solid ${(p) => p.theme.colors.highlight};
  border-radius: 3px;
  margin: 0 4px 4px 0;
  :hover {
    cursor: pointer;
  }
`

interface SelectedEquipmentDisplayItemProps {
  equipment: Equipment
  removeEquipment: (equipment: Equipment) => void
}

const SelectedEquipmentDisplayItem = ({
  equipment,
  removeEquipment,
}: SelectedEquipmentDisplayItemProps) => (
  <StyledSelectedEquipmentDisplayItem
    onClick={() => removeEquipment(equipment)}
  >
    <TinyText bold>{equipment.name}</TinyText>
    <Spacer right="3px" />
    <CloseCircleIcon width={11} />
  </StyledSelectedEquipmentDisplayItem>
)

//////////////////
//// The selector that opens in a modal - allowing equipment selection to be toggled on / off ////
//////////////////
interface EquipmentMultiSelectProps {
  selected: Array<Equipment>
  toggleSelected: (selected: Equipment) => void
}

interface EquipmentItemProps {
  isSelected: boolean
}

const StyledEquipmentItem = styled.div<EquipmentItemProps>`
  padding: 6px 12px;
  background-color: ${(p) =>
    p.isSelected ? p.theme.colors.highlight : 'none'};
  color: ${(p) =>
    p.isSelected ? p.theme.colors.primaryLight : p.theme.colors.primaryDark};
  border: 1px solid ${(p) => p.theme.colors.highlight};
  border-radius: 3px;
  margin: 6px;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
  }
`

export const EquipmentMultiSelect = ({
  selected,
  toggleSelected,
}: EquipmentMultiSelectProps) => {
  const { loading, error, data } = useQuery(EQUIPMENT_QUERY)

  function isSelected(v: Equipment) {
    return selected.some((s) => equal(s, v))
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox
        direction="row"
        wrap="wrap"
        justify="center"
        height="100%"
        padding="40px"
      >
        {data.equipments.map((e: Equipment) => (
          <StyledEquipmentItem
            key={e.id}
            isSelected={isSelected(e)}
            onClick={() => toggleSelected(e)}
          >
            {e.name}
          </StyledEquipmentItem>
        ))}
      </FlexBox>
    )
  }
}
