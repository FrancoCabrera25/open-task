
import { formatDistanceToNow } from "date-fns";
import {  es } from 'date-fns/locale';


export const getFormatDistanceToNow = (date: number): string => {
  const formNow = formatDistanceToNow(date, {locale: es });


  return `Hace ${formNow}`;
};


