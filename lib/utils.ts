// lib/utils.ts

export function addCommas(x: any) {
    if (x === undefined) return;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function firstLetterUppercase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}