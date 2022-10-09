export const lowerCase = (str = '') => String(str).toLocaleLowerCase()

export const isZeroContain = (a = '', b = '') => lowerCase(a).search(lowerCase(b)) === 0