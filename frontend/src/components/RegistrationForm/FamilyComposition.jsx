import { FAMILY_MEMBER_FIELDS } from '../../constants/registration'
import Field from './Field'

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

/**
 * @typedef {Object} FamilyCompositionProps
 * @property {Record<string, string>[]} familyMembers
 * @property {number} familyIncome
 * @property {string} perCapitaIncome
 * @property {(index: number, fieldId: string, value: string) => void} onMemberChange
 * @property {() => void} onAddMember
 * @property {(index: number) => void} onRemoveMember
 * @property {(event: import('react').ChangeEvent<HTMLInputElement>) => void} onPerCapitaIncomeChange
 */

/** @param {FamilyCompositionProps} props */
function FamilyComposition({
  familyMembers,
  familyIncome,
  perCapitaIncome,
  onMemberChange,
  onAddMember,
  onRemoveMember,
  onPerCapitaIncomeChange,
}) {
  return (
    <fieldset className="form-section">
      <legend>2. Composição Familiar</legend>
      <p className="form-section-description">
        Adicione os membros da família e as informações de cada um.
      </p>

      {familyMembers.map((member, index) => (
        <div className="family-member" key={index}>
          <div className="family-member-header">
            <span>Membro {index + 1}</span>
            {familyMembers.length > 1 && (
              <button
                type="button"
                className="link-button"
                onClick={() => onRemoveMember(index)}
              >
                Remover
              </button>
            )}
          </div>
          <div className="form-questions">
            {FAMILY_MEMBER_FIELDS.map((field) => (
              <Field
                key={field.id}
                {...field}
                id={`familyMember-${index}-${field.id}`}
                value={member[field.id]}
                onChange={(event) => onMemberChange(index, field.id, event.target.value)}
              />
            ))}
          </div>
        </div>
      ))}

      <button type="button" className="button button-secondary" onClick={onAddMember}>
        + Adicionar membro da família
      </button>

      <div className="family-summary">
        <div className="form-question">
          <span className="form-question-label">Renda familiar (soma automática)</span>
          <input type="text" value={formatCurrency(familyIncome)} readOnly disabled />
        </div>
        <Field
          id="perCapitaIncome"
          label="Renda per capita"
          type="number"
          placeholder="0,00"
          value={perCapitaIncome}
          onChange={onPerCapitaIncomeChange}
        />
      </div>
    </fieldset>
  )
}

export default FamilyComposition
