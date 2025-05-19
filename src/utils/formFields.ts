import { type DynamicFormItemProps } from '../components/FormItemComponent';

//clientes
export const formFieldsClient: DynamicFormItemProps['field'][] = [
  {
    label: 'Nombres',
    name: 'names',
    type: 'input',
    placeholder: 'Nombre',
    rules: [{ required: true, message: 'Por favor ingresa el nombre' }],
  },
  {
    label: 'Apellidos',
    name: 'surnames',
    type: 'input',
    placeholder: 'Apellido',
    rules: [{ required: true, message: 'Por favor ingresa el apellido' }],
  },
  {
    label: 'Municipio',
    name: 'municipality',
    type: 'select',
    placeholder: 'Municipio',
    rules: [{ required: true, message: 'Por favor selecciona el municipio' }],
    options: [
      { label: 'Municipio 1', value: '1' },
      { label: 'Municipio 2', value: '2' },
      { label: 'Municipio 3', value: '3' },
    ],
  },
  {
    label: 'Dirección',
    name: 'address',
    type: 'input',
    placeholder: 'Dirección',
    rules: [{ required: true, message: 'Por favor ingresa la dirección' }],
  },
  {
    label: 'Cedula',
    name: 'idCard',
    type: 'input',
    placeholder: 'Cedula',
    rules: [{ required: true, message: 'Por favor ingresa la cedula' }],
  },
  {
    label: 'Geolocalización',
    name: 'geolocation',
    type: 'input',
    placeholder: 'Longitud, Latitud (######,-######)',
    rules: [
      {
        required: true,
        message: 'Por favor ingresa la geolocalización',
      },
      {
        pattern: /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/,
        message: 'Formato inválido. Debe ser ######,-######',
      },
    ],
  },
  {
    label: 'Email',
    name: 'email',
    type: 'input',
    placeholder: 'Email',
    rules: [
      {
        required: true,
        message: 'Por favor ingresa el email',
      },
      {
        type: 'email',
        message: 'El formato del email es inválido',
      },
    ],
  },
  {
    label: 'Genero',
    name: 'genero',
    type: 'select',
    placeholder: 'Genero',
    rules: [{ required: true, message: 'Por favor selecciona el genero' }],
    options: [
      { label: 'Masculino', value: '1' },
      { label: 'Femenino', value: '2' },
    ],
  },
  {
    label: 'Celular',
    name: 'cellphone',
    type: 'input',
    placeholder: 'Celular',
    rules: [
      {
        required: true,
        message: 'Por favor ingresa el celular',
      },
    ],
  },
  {
    label: 'Operadora',
    name: 'operadora',
    type: 'select',
    placeholder: 'Operadora',
    rules: [{ required: true, message: 'Por favor selecciona la operadora' }],
    options: [
      { label: 'Claro', value: '1' },
      { label: 'Movistar', value: '2' },
      { label: 'Tigo', value: '3' },
    ],
  },
  {
    label: 'Subir archivo cedula',
    name: 'file',
    type: 'upload',
    accept: '.pdf',
    placeholder: 'Subir cedula en PDF',
    // rules: [{ required: true, message: 'Por favor sube un archivo' }],
  },
  {
    label: 'Subir archivo beneficario',
    name: 'fileBeneficiary',
    type: 'upload',
    accept: '.pdf',
    placeholder: 'Subir cedula en PDF',
    // rules: [{ required: true, message: 'Por favor sube un archivo' }],
  },
];

export const formFieldsBeneficiary1: DynamicFormItemProps['field'][] = [
  {
    label: 'Nombres',
    name: 'names',
    type: 'input',
    placeholder: 'Nombre',
    rules: [{ required: true, message: 'Por favor ingresa el nombre' }],
  },
  {
    label: 'Apellidos',
    name: 'surnames',
    type: 'input',
    placeholder: 'Apellido',
    rules: [{ required: true, message: 'Por favor ingresa el apellido' }],
  },
  {
    label: 'Dirección',
    name: 'address',
    type: 'input',
    placeholder: 'Dirección',
    rules: [{ required: true, message: 'Por favor ingresa la dirección' }],
  },
  { label: 'Cedula', name: 'idCard', type: 'input', placeholder: 'Cedula' },
  { label: 'Email', name: 'email', type: 'input', placeholder: 'Email' },
  {
    label: 'Genero',
    name: 'genero',
    type: 'select',
    placeholder: 'Genero',
    options: [
      { label: 'Masculino', value: '1' },
      { label: 'Femenino', value: '2' },
    ],
  },
  { label: 'Celular', name: 'cellphone', type: 'input', placeholder: 'Celular' },
  {
    label: 'Operadora',
    name: 'operadora',
    type: 'select',
    placeholder: 'Operadora',
    options: [
      { label: 'Claro', value: '1' },
      { label: 'Movistar', value: '2' },
      { label: 'Tigo', value: '3' },
    ],
  },
  {
    label: 'Parentesco',
    name: 'parentesco',
    type: 'select',
    placeholder: 'Parentesco',
    rules: [{ required: true, message: 'Por favor selecciona el parentesco' }],

    options: [
      { label: 'Abuelo/a', value: 'Abuelo/a' },
      { label: 'Esposo/a', value: 'Esposo/a' },
      { label: 'Hijo/a', value: 'Hijo/a' },
      { label: 'Hermano/a', value: 'Hermano/a' },
      { label: 'Madre', value: 'Madre' },
      { label: 'Padre', value: 'Padre' },
      { label: 'Pareja', value: 'Pareja' },
      { label: 'Primo/a', value: 'Primo/a' },
      { label: 'Tio/a', value: 'Tio/a' },
      { label: 'Otro', value: 'Otro' },
    ],
  },
  { label: 'Subir archivo cedula', name: 'file', type: 'upload', accept: '.pdf' },
];

export const formFieldsBeneficiary2: DynamicFormItemProps['field'][] = [
  {
    label: 'Nombres',
    name: 'names',
    type: 'input',
    placeholder: 'Nombre',
    rules: [{ required: true, message: 'Por favor ingresa el nombre' }],
  },
  {
    label: 'Apellidos',
    name: 'surnames',
    type: 'input',
    placeholder: 'Apellido',
    rules: [{ required: true, message: 'Por favor ingresa el apellido' }],
  },
  {
    label: 'Dirección',
    name: 'address',
    type: 'input',
    placeholder: 'Dirección',
    rules: [{ required: true, message: 'Por favor ingresa la dirección' }],
  },
  { label: 'Cedula', name: 'idCard', type: 'input', placeholder: 'Cedula' },
  { label: 'Email', name: 'email', type: 'input', placeholder: 'Email' },
  {
    label: 'Genero',
    name: 'genero',
    type: 'select',
    placeholder: 'Genero',
    options: [
      { label: 'Masculino', value: '1' },
      { label: 'Femenino', value: '2' },
    ],
  },
  { label: 'Celular', name: 'cellphone', type: 'input', placeholder: 'Celular' },
  {
    label: 'Operadora',
    name: 'operadora',
    type: 'select',
    placeholder: 'Operadora',
    options: [
      { label: 'Claro', value: '1' },
      { label: 'Movistar', value: '2' },
      { label: 'Tigo', value: '3' },
    ],
  },
  {
    label: 'Parentesco',
    name: 'parentesco',
    type: 'select',
    placeholder: 'Parentesco',
    rules: [{ required: true, message: 'Por favor selecciona el parentesco' }],
    options: [
      { label: 'Abuelo/a', value: 'Abuelo/a' },
      { label: 'Esposo/a', value: 'Esposo/a' },
      { label: 'Hijo/a', value: 'Hijo/a' },
      { label: 'Hermano/a', value: 'Hermano/a' },
      { label: 'Madre', value: 'Madre' },
      { label: 'Padre', value: 'Padre' },
      { label: 'Pareja', value: 'Pareja' },
      { label: 'Primo/a', value: 'Primo/a' },
      { label: 'Tio/a', value: 'Tio/a' },
      { label: 'Otro', value: 'Otro' },
    ],
  },
  { label: 'Subir archivo cedula', name: 'file', type: 'upload', accept: '.pdf' },
];
