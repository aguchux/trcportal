import { format } from 'date-fns';


export const dateToISO = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
}

// Mongodd createAt date to regular date
export const mongoDateToISO = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
}

export const ToDate = (date: any) => {
    return format(date, 'dd-MM-yyyy');
}