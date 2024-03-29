import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import {
  faUserCircle,
  faBullseye,
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
  faEdit,
  faTag,
  faTimes,
  faNewspaper,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { ColorTypes, theme } from './styled-components/styled'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

export const Logo = ({ size = 40, invert = false }) => (
  <img
    src="/logo.svg"
    alt="logo"
    width={size}
    height={size}
    style={invert ? { filter: 'invert(100%)' } : null}
  />
)
//// Icons ////
interface ChenvronIconProps {
  size?: SizeProp
  colorType?: ColorTypes
  direction?: ChevronType
}

type ChevronType = 'left' | 'up' | 'right' | 'down'

const chevronTypeIcons = {
  left: faChevronLeft,
  up: faChevronUp,
  right: faChevronRight,
  down: faChevronDown,
}

export const ChevronIcon = ({
  size,
  colorType = 'primaryDark',
  direction = 'right',
}: ChenvronIconProps) => (
  <FontAwesomeIcon
    icon={chevronTypeIcons[direction]}
    size={size}
    color={theme.colors[colorType]}
  />
)

interface IconProps {
  size?: SizeProp
  colorType?: ColorTypes
}

export const ContentIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon
    icon={faClipboardList}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const CloseWindowIcon = ({
  size,
  colorType = 'primaryDark',
}: IconProps) => (
  <FontAwesomeIcon
    icon={faWindowClose}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const CloseCircleIcon = ({
  size,
  colorType = 'primaryDark',
}: IconProps) => (
  <FontAwesomeIcon
    icon={faTimesCircle}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const DataIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon
    icon={faDatabase}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const DeleteIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon icon={faTimes} size={size} color={theme.colors[colorType]} />
)

export const EditIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon icon={faEdit} size={size} color={theme.colors[colorType]} />
)

export const ErrorIcon = ({ size = 'lg' }: IconProps) => (
  <FontAwesomeIcon
    icon={faExclamationCircle}
    size={size}
    color={theme.colors.destructive}
  />
)

export const HomeIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon
    icon={faChartBar}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const InfoIcon = ({ size = 'lg' }: IconProps) => (
  <FontAwesomeIcon icon={faInfoCircle} size={size} color={theme.colors.info} />
)

export const NewsFeedIcon = ({
  size,
  colorType = 'primaryDark',
}: IconProps) => (
  <FontAwesomeIcon
    icon={faNewspaper}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const PlusIcon = ({ size = 'lg' }: IconProps) => (
  <FontAwesomeIcon icon={faPlus} size={size} />
)

export const SignOutIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon
    icon={faSignOutAlt}
    size={size}
    color={theme.colors[colorType]}
  />
)

type SortType = 'Sort' | 'Up' | 'Down'
const sortIcons = {
  Sort: faSort,
  Up: faSortUp,
  Down: faSortDown,
}

export const SortIcon = ({
  size,
  type = 'Sort',
}: {
  size?: SizeProp
  type?: SortType
}) => <FontAwesomeIcon icon={sortIcons[type]} size={size} />

export const SuccessIcon = ({ size = 'lg' }: IconProps) => (
  <FontAwesomeIcon
    icon={faCheckCircle}
    size={size}
    color={theme.colors.success}
  />
)

export const TagIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon icon={faTag} size={size} color={theme.colors[colorType]} />
)

export const TargetIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon
    icon={faBullseye}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const UserAvatarIcon = ({
  size,
  colorType = 'primaryDark',
}: IconProps) => (
  <FontAwesomeIcon
    icon={faUserCircle}
    size={size}
    color={theme.colors[colorType]}
  />
)

export const UsersIcon = ({ size, colorType = 'primaryDark' }: IconProps) => (
  <FontAwesomeIcon icon={faUsers} size={size} color={theme.colors[colorType]} />
)
