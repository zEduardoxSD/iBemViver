export const INSTITUTE_NAME = 'Instituto Bem viver'

export const INSTITUTE_ICON = {
  src: 'https://a.favicon.im/institutobemviver.org.br',
  alt: 'institutobemviver.org.br favicon',
}

export const LOCAL_STORAGE_KEY = 'ibemviver.registration'

export const MARITAL_STATUS_OPTIONS = [
  'Solteiro(a)',
  'Casado(a)',
  'União estável',
  'Divorciado(a)',
  'Viúvo(a)',
]

export const GENDER_OPTIONS = ['Feminino', 'Masculino', 'Outro', 'Prefiro não informar']

export const EDUCATION_LEVEL_OPTIONS = [
  'Não alfabetizado(a)',
  'Fundamental incompleto',
  'Fundamental completo',
  'Médio incompleto',
  'Médio completo',
  'Superior incompleto',
  'Superior completo',
  'Pós-graduação',
]

export const USER_IDENTIFICATION_FIELDS = [
  { id: 'registrationNumber', label: 'Número de cadastro', placeholder: 'Digite o número de cadastro' },
  { id: 'birthDate', label: 'Data de nascimento', type: 'date' },
  { id: 'maritalStatus', label: 'Estado civil', type: 'select', options: MARITAL_STATUS_OPTIONS },
  { id: 'rg', label: 'RG', placeholder: 'Digite o RG' },
  { id: 'cpf', label: 'CPF', placeholder: 'Digite o CPF' },
  { id: 'gender', label: 'Sexo', type: 'select', options: GENDER_OPTIONS },
  { id: 'address', label: 'Endereço', placeholder: 'Digite o endereço' },
  { id: 'municipality', label: 'Município', placeholder: 'Digite o município' },
  { id: 'referencePoint', label: 'Ponto de referência', placeholder: 'Digite o ponto de referência' },
  { id: 'profession', label: 'Profissão', placeholder: 'Digite a profissão' },
  { id: 'workplace', label: 'Local de trabalho', placeholder: 'Digite o local de trabalho' },
  { id: 'phone', label: 'Telefone', type: 'tel', placeholder: 'Digite o telefone' },
  { id: 'income', label: 'Renda', type: 'number', placeholder: '0,00' },
]

export const FAMILY_MEMBER_FIELDS = [
  { id: 'name', label: 'Nome', placeholder: 'Digite o nome' },
  { id: 'relationship', label: 'Parentesco', placeholder: 'Ex: Filho(a), Cônjuge' },
  { id: 'gender', label: 'Sexo', type: 'select', options: GENDER_OPTIONS },
  { id: 'educationLevel', label: 'Escolaridade', type: 'select', options: EDUCATION_LEVEL_OPTIONS },
  { id: 'profession', label: 'Profissão/Ocupação', placeholder: 'Digite a profissão ou ocupação' },
  { id: 'income', label: 'Renda', type: 'number', placeholder: '0,00' },
]

export const EMPTY_FAMILY_MEMBER = Object.fromEntries(
  FAMILY_MEMBER_FIELDS.map(({ id }) => [id, '']),
)

export const HEALTH_FIELDS = [
  { id: 'illness', label: 'Doença ou condição de saúde', placeholder: 'Descreva a doença ou condição' },
  { id: 'treatmentStartDate', label: 'Data de início do tratamento', type: 'date' },
]

export const CASE_EVOLUTION_FIELD = {
  id: 'caseEvolution',
  label: 'Evolução do caso',
  type: 'textarea',
  placeholder: 'Descreva a evolução do caso',
}

export const HOUSING_FIELD = {
  id: 'housingSituation',
  label: 'Descreva a situação de moradia',
  type: 'textarea',
  placeholder: 'Descreva a situação de moradia',
}

export const REFERRALS_FIELD = {
  id: 'referrals',
  label: 'Encaminhamentos, recomendações e orientações',
  type: 'textarea',
  placeholder: 'Descreva os encaminhamentos, recomendações e orientações',
}

export const SIGNATURE_DATE_FIELD = { id: 'signatureDate', label: 'Data', type: 'date' }

export const AGREEMENT_FIELD = {
  id: 'agreementConfirmed',
  label: 'Confirmo que as informações prestadas são verdadeiras e estou de acordo com os termos deste cadastro.',
}

const SIMPLE_FIELDS = [
  ...USER_IDENTIFICATION_FIELDS,
  ...HEALTH_FIELDS,
  CASE_EVOLUTION_FIELD,
  HOUSING_FIELD,
  REFERRALS_FIELD,
  SIGNATURE_DATE_FIELD,
]

export const EMPTY_REGISTRATION = {
  ...Object.fromEntries(SIMPLE_FIELDS.map(({ id }) => [id, ''])),
  perCapitaIncome: '',
  agreementConfirmed: false,
}

export const EMPTY_FAMILY_MEMBERS = [EMPTY_FAMILY_MEMBER]
