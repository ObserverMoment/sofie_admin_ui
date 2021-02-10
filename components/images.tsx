import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faHome,
  faDatabase,
  faClipboardList,
  faUsersCog,
  faSignOutAlt,
  faExclamationCircle,
  faWindowClose,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FlexBox, theme } from './styled'

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
  <FontAwesomeIcon icon={faSignOutAlt} width={width} />
)
export const CloseWindowIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faWindowClose} width={width} />
)
export const PlusIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faPlus} width={width} />
)
export const ErrorIcon = ({ width = 30 }) => (
  <FontAwesomeIcon
    icon={faExclamationCircle}
    width={width}
    color={theme.colors.destructive}
  />
)
