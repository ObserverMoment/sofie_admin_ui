import { useCallback, useEffect, useMemo, useState } from 'react'

export interface FieldDef<T> {
  key: string
  initialValue: T
  isDirty?: boolean
  validation?: (value: T) => boolean
}

interface FormStateObj {
  [key: string]: {
    value: any
    setValue: React.Dispatch<React.SetStateAction<any>>
  }
}

interface FormStateResult<T> {
  state: FormStateObj
  getFormData: () => T
}

export function useFormState<T>(
  fieldDefs: Array<FieldDef<any>>,
  dirtyController: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = null,
): FormStateResult<T> {
  console.log('useFormState')
  const [state, setState] = useState({})

  useMemo(() => {
    setState(
      fieldDefs.reduce((acum, next) => {
        console.log('reducing')
        acum[next.key] = useFormField<typeof next>(
          next.initialValue,
          dirtyController,
        )
        return acum
      }, {}),
    )
  }, [])

  function getFormData() {
    return Object.values(state).reduce((acum, { key, value }) => {
      acum[key] = value[0]
      return acum
    }, {}) as T
  }

  console.log(state)
  return {
    state,
    getFormData,
  }
}

export function useFormField<T>(
  initialValue: T,
  dirtyController: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = null,
): { value: T; setValue: (v: T) => void } {
  const [value, setValue] = useState<T>(initialValue)
  const onChange = useCallback((value: T) => {
    if (dirtyController) {
      if (!dirtyController[0]) {
        dirtyController[1](true)
      }
    }
    setValue(value)
  }, [])

  return {
    value,
    setValue: onChange,
  }
}
