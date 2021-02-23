import { useState } from 'react'

export interface FieldDef {
  key: string
  value?: any
  isDirty?: boolean
  validator?: (value: any) => boolean | string
}

type FormState<FieldTypes> = {
  [Property in keyof FieldTypes]: FormField<FieldTypes[Property]>
}

interface FormField<Property> {
  key: string
  value: Property
  isDirty?: boolean
  validator?: (value: Property) => boolean | string
  setValue: (value: Property) => void
}

type FormErrors<FieldTypes> = {
  [Property in keyof FieldTypes]: boolean | string
}

interface FormStateResult<FieldTypes> {
  formState: FormState<FieldTypes>
  getFormData: () => FieldTypes
  formDirty: () => boolean
  checkErrors: () => FormErrors<FieldTypes>
}

export function useFormState<FieldTypes>(
  fieldDefs: Array<FieldDef>,
): FormStateResult<FieldTypes> {
  const [formState, setFormState] = useState<FormState<FieldTypes>>(
    fieldDefs.reduce<FormState<FieldTypes>>((acum, next) => {
      acum[next.key] = {
        key: next.key,
        value: next.value,
        isDirty: next.isDirty || false,
        validator: next.validator,
        setValue: (newValue: any) =>
          setFormState((prev) => ({
            ...prev,
            [next.key]: {
              ...prev[next.key],
              value: newValue,
              isDirty: true,
            },
          })),
      }
      return acum
    }, {} as FormState<FieldTypes>),
  )

  // Returns just key value pairs that an api would want.
  function getFormData(): FieldTypes {
    return Object.keys(formState).reduce((acum, key) => {
      acum[key] = formState[key].value
      return acum
    }, {} as FieldTypes)
  }

  function formDirty(): boolean {
    return Object.keys(formState).some((key) => formState[key].isDirty)
  }

  function checkErrors(): FormErrors<FieldTypes> {
    return Object.keys(formState).reduce((acum, key) => {
      const validator = formState[key].validator
      const value = formState[key].value
      acum[key] = validator ? validator(value) : true
      return acum
    }, {} as FormErrors<FieldTypes>)
  }

  return {
    formState,
    getFormData,
    formDirty,
    checkErrors,
  }
}
