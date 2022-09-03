export const validateField = (field, value) => {
  return !!value || `Informe ${field}`;
};
