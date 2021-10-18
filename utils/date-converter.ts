interface Time { 
    _seconds: number
    _nanoseconds: number 
}

export function convertDate(time: Time): string {
    const date = new Date(time._seconds * 1000 + time._nanoseconds / 1000)

    return `${date.getFullYear()}.${date.getMonth().toLocaleString('ko-KR', { minimumIntegerDigits: 2 })}.${date.getDay().toLocaleString('ko-KR', { minimumIntegerDigits: 2 })}`
}