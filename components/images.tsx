import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faHome,
  faDatabase,
  faClipboardList,
  faUsersCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FlexBox } from './styled'

export const SpotMeLogo = ({ width = 40, height = 40 }) => (
  <FlexBox align="center">
    <img src="/spotme_logo.svg" alt="logo" width={width} height={height} />
  </FlexBox>
)

export const UserAvatar = ({ width = 30 }) => (
  <FontAwesomeIcon
    icon={faUserCircle}
    width={width}
    display="block"
    color="white"
  />
)

/// Icons
export const HomeIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faHome} width={width} display="inline-block" />
)
export const DataIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faDatabase} width={width} />
)
export const ContentIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faClipboardList} width={width} />
)
export const UsersIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faUsersCog} width={width} />
)
export const SignOutIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faSignOutAlt} width={width} rotation={90} />
)
