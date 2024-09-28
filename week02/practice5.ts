type IsStringType<T> = T extends string ? string[] : number[];

type T1 = IsStringType<string>; // type T1 = string[]
type T2 = IsStringType<number>; // type T1 = number[]

const a: T1 = ['EFUB', '프론트엔드', '최고!'];
const b: T2 = [1, 2, 3];