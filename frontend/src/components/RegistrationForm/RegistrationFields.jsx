import Field from './Field'

/**
 * @typedef {Object} RegistrationFieldsProps
 * @property {import('./Field').FieldProps[]} fields
 * @property {Record<string, string>} values
 * @property {(event: import('react').ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void} onFieldChange
 */

/** @param {RegistrationFieldsProps} props */
function RegistrationFields({ fields, values, onFieldChange }) {
  return (
    <div className="form-questions">
      {fields.map((field) => (
        <Field
          key={field.id}
          {...field}
          value={values[field.id]}
          onChange={onFieldChange}
          className={field.type === 'textarea' ? 'form-question--full' : ''}
        />
      ))}
    </div>
  )
}

export default RegistrationFields
