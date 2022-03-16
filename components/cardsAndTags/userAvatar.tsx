import styled from 'styled-components'
import UploadcareImage from '@uploadcare/nextjs-loader'

interface UserAvatarProps {
  src: string
  size: number
}

export const UserAvatar = ({ src, size }: UserAvatarProps) =>
  src ? (
    <StyledUserAvatar
      src={src}
      alt="user avatar"
      width={`${size}px`}
      height={`${size}px`}
    />
  ) : (
    <StyledAvatarPlaceholder
      src="/user_placeholder.svg"
      alt="user avatar"
      width={`${size}px`}
      height={`${size}px`}
    />
  )

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
