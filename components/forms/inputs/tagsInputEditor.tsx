import React, { useState } from 'react'
import styled from 'styled-components'
import { DeleteIcon } from '../../icons'
import {
  FlexBox,
  MainText,
  Spacer,
  theme,
} from '../../styled-components/styled'
import TextInput from './textInput'

interface TagsInputEditorProps {
  tags: string[]
  updateTags: (tags: string[]) => void
}

export const TagsInputEditor: React.FC<TagsInputEditorProps> = ({
  tags,
  updateTags,
}) => {
  const [activeTagInput, setActiveTagInput] = useState('')

  const handleDelete = (tag: string) => {
    updateTags(tags.filter((t) => t !== tag))
  }

  const handleAddition = (tag: string) => {
    updateTags([...tags, tag])
  }

  /// TODO: when needed...
  // const handleDrag = (tag: string, currPos: number, newPos: number) => {
  //   const newTags = tags.slice()

  //   newTags.splice(currPos, 1)
  //   newTags.splice(newPos, 0, tag)

  //   // re-render
  //   updateTags(newTags)
  // }

  return (
    <FlexBox>
      <FlexBox wrap="wrap" direction="row" padding="0 0 5px 0">
        {tags.map((t) => (
          <TagInputEditorSelectedTag
            key={t}
            tag={t}
            handleDelete={handleDelete}
          />
        ))}
      </FlexBox>
      <TextInput
        name="Add Tag"
        value={activeTagInput}
        setValue={(v) => {
          if (/^[A-Za-z0-9]+$/.test(v)) {
            setActiveTagInput(v)
          }
        }}
        placeholder="Add a tag then press enter"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // Add tag and reset.
            handleAddition(activeTagInput)
            setActiveTagInput('')
          }
        }}
      />
    </FlexBox>
  )
}

const StyledTagInputEditorSelectedTag = styled.div`
  padding: 4px 10px;
  margin: 0 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${theme.colors.primaryDark};
  border-radius: 6px;
  :hover {
    cursor: pointer;
  }
  * {
    color: ${theme.colors.pureWhite};
  }
`

interface TagInputEditorSelectedTagProps {
  tag: string
  handleDelete: (tag: string) => void
}

const TagInputEditorSelectedTag: React.FC<TagInputEditorSelectedTagProps> = ({
  tag,
  handleDelete,
}) => (
  <StyledTagInputEditorSelectedTag onClick={() => handleDelete(tag)}>
    <MainText>{tag}</MainText>
    <Spacer right="8px" />
    <DeleteIcon size="sm" />
  </StyledTagInputEditorSelectedTag>
)
