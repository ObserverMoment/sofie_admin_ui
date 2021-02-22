import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faDatabase,
  faClipboardList,
  faUsers,
  faSignOutAlt,
  faExclamationCircle,
  faWindowClose,
  faPlus,
  faSort,
  faSortUp,
  faSortDown,
  faCheckCircle,
  faInfoCircle,
  faChartBar,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { theme } from './styled-components/styled'

export const SpotMeLogo = ({ width = 40, height = 40 }) => (
  <img src="/spotme_logo.svg" alt="logo" width={width} height={height} />
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
  <FontAwesomeIcon icon={faChartBar} width={width + 8} />
)
export const DataIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faDatabase} width={width} />
)
export const ContentIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faClipboardList} width={width} />
)
export const UsersIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faUsers} width={width + 12} />
)
export const SignOutIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faSignOutAlt} width={width} />
)
export const CloseWindowIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faWindowClose} width={width} />
)
export const CloseCircleIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faTimesCircle} width={width} />
)

type SortType = 'Sort' | 'Up' | 'Down'
const sortIcons = {
  Sort: faSort,
  Up: faSortUp,
  Down: faSortDown,
}

export const SortIcon = ({
  width = 30,
  type = 'Sort',
}: {
  width?: number
  type?: SortType
}) => <FontAwesomeIcon icon={sortIcons[type]} width={width} />

export const PlusIcon = ({ width = 30 }) => (
  <FontAwesomeIcon icon={faPlus} width={width} />
)

export const SuccessIcon = ({ width = 30 }) => (
  <FontAwesomeIcon
    icon={faCheckCircle}
    width={width}
    color={theme.colors.success}
  />
)

export const InfoIcon = ({ width = 30 }) => (
  <FontAwesomeIcon
    icon={faInfoCircle}
    width={width}
    color={theme.colors.info}
  />
)

export const ErrorIcon = ({ width = 30 }) => (
  <FontAwesomeIcon
    icon={faExclamationCircle}
    width={width}
    color={theme.colors.destructive}
  />
)
