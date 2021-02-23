import { FileInfo, Widget } from '@uploadcare/react-widget'

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
  uploadedFileId?: string // For display
}

// https://uploadcare.com/docs/uploads/file-uploader-options/
const FileUploader = ({
  onUploadComplete,
  allowedFileTypes,
  onError,
}: FileUploaderProps) => {
  return (
    <Widget
      publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
      onChange={onUploadComplete}
      tabs="file url dropbox gdrive"
      validators={
        allowedFileTypes ? [fileTypeCheck(allowedFileTypes, onError)] : []
      }
    />
  )
}

export default FileUploader
