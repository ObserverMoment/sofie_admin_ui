const UPLOADCARE_BASE_ENDPOINT = 'https://api.uploadcare.com'
const UPLOADCARE_PROCESSING_ENDPOINT = `${UPLOADCARE_BASE_ENDPOINT}/convert/video/`

interface VideoProcessingResult {
  original_source: string
  token: number
  thumbnails_group_uuid: string
  uuid: string
}

interface VideoProcessingRequestResponse {
  problems: {
    // key is the uuid of the problem causing file, string is the error message.
    [key: string]: string
  }
  result: VideoProcessingResult[]
}

// Currently only for processing one file at a time
// and to return a single processed id.
export async function defaultVideoEncoding(
  originalFileId: string,
): Promise<string> {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.uploadcare-v0.6+json',
      Authorization: `Uploadcare.Simple ${process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}:${process.env.NEXT_PUBLIC_UPLOADCARE_PRIVATE_KEY}`,
    },
    body: JSON.stringify({ paths: [`${originalFileId}/video/`] }),
  }
  const response = await fetch(UPLOADCARE_PROCESSING_ENDPOINT, requestOptions)
  const data: VideoProcessingRequestResponse = await response.json()
  if (Object.keys(data.problems).length > 0) {
    console.log('The file was not processed correctly:')
    console.log(JSON.stringify(data.problems))
    return null
  } else {
    return data.result[0].uuid
  }
}
