export default function phoneMask(value) {
  const valueClean = value.replace(/\D/g, '');
  if (valueClean.length < 11) {
    return valueClean
      .replace(/(\d{2})/, '($1)')
      .replace(/(\(\d{2}\))(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
  return valueClean
    .replace(/(\d{2})/, '($1)')
    .replace(/(\(\d{2}\))(\d)/, '$1 $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}
