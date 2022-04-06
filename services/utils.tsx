import { useEffect } from 'react'

// https://usehooks.com/useOnClickOutside/
export const useOnClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    // Do nothing if clicking ref's element or descendent elements
    if (!ref.current || ref.current.contains(e.target)) {
      return
    }
    callback(e)
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
