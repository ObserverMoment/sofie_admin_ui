import { FlexBox, Padding } from '../../styles/layout'
import { Title } from '../../styles/text'

export default function Overview() {
  return (
    <Padding padding="50px">
      <FlexBox align="center">
        <Title colorType="grey">Announcements and Articles</Title>
      </FlexBox>
    </Padding>
  )
}
