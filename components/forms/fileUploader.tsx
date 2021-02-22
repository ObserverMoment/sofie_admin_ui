import { FileInfo, Widget } from '@uploadcare/react-widget'
import crypto from 'crypto'

// https://uploadcare.com/docs/security/secure-uploads/
function generateSignature(expire: number) {
  const hmac = crypto.createHmac(
    'sha256',
    process.env.NEXT_PUBLIC_UPLOADCARE_PRIVATE_KEY,
  )
  hmac.update(expire.toString())
  return hmac.digest('hex')
}

const fileTypeCheck = (
  allowedFileTypes: string,
  onError?: (message: string) => void,
) => {
  const types = allowedFileTypes.split(' ')

  return function (fileInfo: FileInfo) {
    if (fileInfo.name === null) {
      return
    }
    const extension = fileInfo.name.split('.').pop()

    if (extension && !types.includes(extension)) {
      const message = `Wrong file type provided - must be ${allowedFileTypes}`
      console.error(message)
      onError && onError(message)
      throw new Error(message)
    }
  }
}

interface FileUploaderProps {
  onUploadComplete: (fileInfo: FileInfo) => void
  allowedFileTypes?: string
  onError?: (message: string) => void
}

// https://uploadcare.com/docs/uploads/file-uploader-options/
const FileUploader = ({
  onUploadComplete,
  allowedFileTypes,
  onError,
}: FileUploaderProps) => {
  // Valid for 240 seconds
  const expire = Math.round(Date.now() / 1000) + 120
  return (
    <Widget
      publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
      onChange={onUploadComplete}
      tabs="file url dropbox gdrive"
      validators={
        allowedFileTypes ? [fileTypeCheck(allowedFileTypes, onError)] : []
      }
      secureSignature={generateSignature(expire)}
      secureExpire={expire}
    />
  )
}

export default FileUploader
