import dayjs from "dayjs";

export function fetchMonth(month = dayjs().month()) {
    //Math.floor rounds down the number to its next low integer or rounds to integer equal to the number;
    month = Math.floor(month); // Just a hack for changing the context by changing month index in the Header rest button

    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}