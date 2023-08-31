import moment from "moment";

export function formateDate(parsedDate) {

    const formatedDate = moment(parsedDate).format('L').replaceAll('/', '.');
    return formatedDate
}

