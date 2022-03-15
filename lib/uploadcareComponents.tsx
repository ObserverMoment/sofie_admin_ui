import { useEffect, useState } from 'react'
import { ErrorIcon } from '../components/icons'
import { LoadingDots } from '../components/loadingIndicators'
import {
  ElevatedRoundedAudio,
  ElevatedRoundedImage,
  ElevatedRoundedVideo,
} from '../components/styled-components/media'
import {
  FlexBox,
  Padding,
  Spacer,
  TinyText,
} from '../components/styled-components/styled'
import { getFileUrlFromUuid } from './uploadcare'

interface UploadcareImageWrapperProps {
  uuid: string
  alt?: string
}

export const UploadcareImageWrapper: React.FC<UploadcareImageWrapperProps> = ({
  uuid,
  alt,
}) => {
  const { status, url } = useGetUploadcareUrl(uuid)

  if (status === UploadcareApiStatus.Loading) {
    return <LoadingDots size={20} />
  } else if (status === UploadcareApiStatus.Error) {
    return (
      <FlexBox
        padding="8px"
        align="center"
        justify="center"
        height="100%"
        width="100%"
      >
        <ErrorIcon />
        <Spacer bottom="8px" />
        <TinyText>Couldn't load file</TinyText>
      </FlexBox>
    )
  } else {
    return (
      <ElevatedRoundedImage
        alt={alt || url}
        src={url}
        width="100%"
        height="100%"
      />
    )
  }
}

interface UploadcareVideoPlayerWrapperProps {
  uuid: string
  width?: string
  height?: string
}

export const UploadcareVideoPlayerWrapper: React.FC<
  UploadcareVideoPlayerWrapperProps
> = ({ uuid, width, height }) => {
  const { status, url } = useGetUploadcareUrl(uuid)

  if (status === UploadcareApiStatus.Loading) {
    return <LoadingDots size={20} />
  } else if (status === UploadcareApiStatus.Error) {
    return (
      <FlexBox
        padding="8px"
        align="center"
        justify="center"
        height="100%"
        width="100%"
      >
        <ErrorIcon />
        <TinyText>Couldn't load file</TinyText>
      </FlexBox>
    )
  } else {
    return (
      <Padding>
        <ElevatedRoundedVideo
          src={url}
          width={width || ''}
          height={height || ''}
          controls
        />
      </Padding>
    )
  }
}

interface UploadcareAudioPlayerWrapperProps {
  uuid: string
}

export const UploadcareAudioPlayerWrapper: React.FC<
  UploadcareAudioPlayerWrapperProps
> = ({ uuid }) => {
  const { status, url } = useGetUploadcareUrl(uuid)

  if (status === UploadcareApiStatus.Loading) {
    return <LoadingDots size={20} />
  } else if (status === UploadcareApiStatus.Error) {
    return (
      <FlexBox
        padding="8px"
        align="center"
        justify="center"
        height="100%"
        width="100%"
      >
        <ErrorIcon />
        <TinyText>Couldn't load file</TinyText>
      </FlexBox>
    )
  } else {
    return (
      <Padding>
        <ElevatedRoundedAudio src={url} controls />
      </Padding>
    )
  }
}

//// Hooks ////
enum UploadcareApiStatus {
  Loading,
  Error,
  Success,
}

const useGetUploadcareUrl = (uuid: string) => {
  const [status, setStatus] = useState(UploadcareApiStatus.Loading)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (!uuid) return
    const fetchData = async () => {
      try {
        const url = await getFileUrlFromUuid(uuid)
        setUrl(url)
        setStatus(UploadcareApiStatus.Success)
      } catch (e) {
        setStatus(UploadcareApiStatus.Error)
      }
    }

    fetchData()
  }, [uuid])

  return { status, url }
}
