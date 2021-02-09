import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FlexBox } from './styled'

export const SpotMeLogo = ({ width = 64, height = 64 }) => (
  <FlexBox align="center">
    <Image src="/spotme_logo.svg" alt="logo" width={width} height={height} />
  </FlexBox>
)

export const AdminAvatar = (props) => <FontAwesomeIcon icon={faUser} />
