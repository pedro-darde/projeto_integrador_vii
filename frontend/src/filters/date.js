import moment from 'moment'

export default function date(date, format = 'DD/MM/YYYY') {
    return moment(date).format(format)
}