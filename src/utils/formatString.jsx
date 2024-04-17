export function formatString(str) {
    const firstLetter = str.charAt(0)
    const lastLetter = str.charAt(str.length - 1)

    if (lastLetter !== ".") {
        return `${str.replace(firstLetter, firstLetter.toUpperCase())}.`
    } else {
        return str.replace(firstLetter, firstLetter.toUpperCase())
    }

}

