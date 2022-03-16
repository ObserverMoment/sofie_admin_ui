import styled from 'styled-components'
import UploadcareImage from '@uploadcare/nextjs-loader'
import {
  UploadcareApiStatus,
  useGetUploadcareUrl,
} from '../../lib/uploadcareComponents'
import { ErrorIcon } from '../icons'

interface UserAvatarProps {
  src?: string
  size: number
}

export const UserAvatar = ({ src, size }: UserAvatarProps) => {
  return src ? (
    <StyledUserAvatar
      src={src}
      alt="user avatar"
      width={`${size}px`}
      height={`${size}px`}
    />
  ) : (
    <StyledAvatarPlaceholder
      src="/logo.svg"
      alt="user avatar"
      width={`${size}px`}
      height={`${size}px`}
    />
  )
}

interface UserAvatarContainerProps {
  uuid: string
  size: number
}

/// Use this if you need to get the url before rendering the [UserAvatar]
export const UserAvatarContainer: React.FC<UserAvatarContainerProps> = ({
  uuid,
  size,
}) => {
  const { status, url } = useGetUploadcareUrl(uuid)

  if (status === UploadcareApiStatus.Error) {
    return <ErrorIcon colorType="destructive" size="sm" />
  } else if (status === UploadcareApiStatus.Loading) {
    return <UserAvatar size={size} />
  } else {
    return <UserAvatar src={url} size={size} />
  }
}

//// Styled Components ////
interface StyledUserAvatarProps {
  width?: string
  height?: string
}

const StyledUserAvatar = styled(UploadcareImage)<StyledUserAvatarProps>`
  border-radius: 50%;
  width: ${(p) => p.width || '100%'};
  height: ${(p) => p.height || '100%'};
  margin: auto;
  display: block;
  object-fit: cover;
  object-position: center;
`

const StyledAvatarPlaceholder = styled.img<StyledUserAvatarProps>`
  border-radius: 100%;
  width: ${(p) => p.width || '100%'};
  height: ${(p) => p.height || '100%'};
`
