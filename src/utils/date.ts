import { format, parseISO } from 'date-fns'

const formatDate = (date: string): string => {
	return format(parseISO(date), 'd MMM yyyy')
}

export { formatDate }
