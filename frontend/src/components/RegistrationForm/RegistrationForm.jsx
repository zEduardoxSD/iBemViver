import {
  AGREEMENT_FIELD,
  CASE_EVOLUTION_FIELD,
  HEALTH_FIELDS,
  HOUSING_FIELD,
  REFERRALS_FIELD,
  SIGNATURE_DATE_FIELD,
  USER_IDENTIFICATION_FIELDS,
} from '../../constants/registration'
import { useRegistrationForm } from '../../hooks/useRegistrationForm'
import '../../styles/registration.css'
import FamilyComposition from './FamilyComposition'
import Field from './Field'
import RegistrationFields from './RegistrationFields'

function RegistrationForm() {
  const {
    values,
    familyMembers,
    familyIncome,
    handleFieldChange,
    handleCheckboxChange,
    handleFamilyMemberChange,
    addFamilyMember,
    removeFamilyMember,
    saveRegistration,
    clearRegistration,
  } = useRegistrationForm()

  return (
    <main className="form-page">
      <div className="form-panel">
        <div className="form-intro">
          <h2>Formulário de Cadastro</h2>
          <p>Preencha as informações abaixo para concluir o cadastro.</p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            saveRegistration()
          }}
        >
          <fieldset className="form-section">
            <legend>1. Identificação do Usuário</legend>
            <RegistrationFields
              fields={USER_IDENTIFICATION_FIELDS}
              values={values}
              onFieldChange={handleFieldChange}
            />
          </fieldset>

          <FamilyComposition
            familyMembers={familyMembers}
            familyIncome={familyIncome}
            perCapitaIncome={values.perCapitaIncome}
            onMemberChange={handleFamilyMemberChange}
            onAddMember={addFamilyMember}
            onRemoveMember={removeFamilyMember}
            onPerCapitaIncomeChange={handleFieldChange}
          />

          <fieldset className="form-section">
            <legend>3. Informações de Saúde</legend>
            <RegistrationFields fields={HEALTH_FIELDS} values={values} onFieldChange={handleFieldChange} />
            <div className="form-questions">
              <Field
                {...CASE_EVOLUTION_FIELD}
                value={values[CASE_EVOLUTION_FIELD.id]}
                onChange={handleFieldChange}
                className="form-question--full"
              />
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend>4. Situação de Moradia</legend>
            <div className="form-questions">
              <Field
                {...HOUSING_FIELD}
                value={values[HOUSING_FIELD.id]}
                onChange={handleFieldChange}
                className="form-question--full"
              />
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend>5. Encaminhamentos e Orientações</legend>
            <div className="form-questions">
              <Field
                {...REFERRALS_FIELD}
                value={values[REFERRALS_FIELD.id]}
                onChange={handleFieldChange}
                className="form-question--full"
              />
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend>6. Data e Assinatura</legend>
            <div className="form-questions">
              <Field
                {...SIGNATURE_DATE_FIELD}
                value={values[SIGNATURE_DATE_FIELD.id]}
                onChange={handleFieldChange}
              />
            </div>
            <label className="form-checkbox">
              <input
                id={AGREEMENT_FIELD.id}
                type="checkbox"
                checked={values[AGREEMENT_FIELD.id]}
                onChange={handleCheckboxChange}
              />
              <span>{AGREEMENT_FIELD.label}</span>
            </label>
          </fieldset>

          <div className="form-actions">
            <button className="button button-secondary" type="button" onClick={clearRegistration}>
              Cancelar
            </button>
            <button className="button button-primary" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default RegistrationForm
