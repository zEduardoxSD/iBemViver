/**
 * @typedef {Object} FieldProps
 * @property {string} id
 * @property {string} label
 * @property {string} [placeholder]
 * @property {'text'|'date'|'tel'|'number'|'select'|'textarea'} [type]
 * @property {string[]} [options]
 * @property {string} value
 * @property {(event: import('react').ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void} onChange
 * @property {string} [className]
 */

/** @param {FieldProps} props */
function Field({ id, label, placeholder, type = 'text', options, value, onChange, className = '' }) {
  return (
    <div className={`form-question ${className}`.trim()}>
      <label className="form-question-label" htmlFor={id}>
        {label}
      </label>
      {type === 'select' ? (
        <select id={id} value={value} onChange={onChange}>
          <option value="">Selecione</option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea id={id} placeholder={placeholder} value={value} onChange={onChange} rows={4} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </div>
  )
}

export default Field
