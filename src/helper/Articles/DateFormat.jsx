import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'

export default function DateFormat({ children }) {
    dayjs.extend(advancedFormat)
    return dayjs(Number(children)).format("Do MMM, YYYY")
}
