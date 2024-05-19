export const tableHeader = [
  { key: 'companySigDate', title: 'Дата регистрации компании' },
  {
    key: 'companySignatureName',
    title: 'Название подписи компании',
  },
  { key: 'documentName', title: 'Название документа' },
  { key: 'documentStatus', title: 'Статус документа' },
  { key: 'documentType', title: 'Тип документа' },
  { key: 'employeeNumber', title: 'Номер сотрудника' },
  { key: 'employeeSigDate', title: 'Дата регистрации сотрудника' },
  { key: 'employeeSignatureName', title: 'Название подписи сотрудника' },
  { key: 'icons', title: ' ' },
]
export const tableHeaderCreateItem = [
  { key: 'companySigDate', type: 'date' },
  { key: 'companySignatureName' },
  { key: 'documentName' },
  { key: 'documentStatus' },
  { key: 'documentType' },
  { key: 'employeeNumber', type: 'number' },
  { key: 'employeeSigDate', type: 'date' },
  { key: 'employeeSignatureName' },
] as const
