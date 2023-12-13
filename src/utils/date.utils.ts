

export const dateToISO = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
}

// Mongodd createAt date to regular date
export const mongoDateToISO = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
}