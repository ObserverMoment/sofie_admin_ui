import styled from 'styled-components'

export const ElevatedRoundedImage = styled.img`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ElevatedRoundedVideo = styled.video`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ElevatedRoundedAudio = styled.audio`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.primaryLight};
`
