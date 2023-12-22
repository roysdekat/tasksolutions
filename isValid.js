function isValid(s) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (const char of s) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else {
            const lastOpeningBracket = stack.pop();
            const expectedClosingBracket = closingBrackets[openingBrackets.indexOf(lastOpeningBracket)];

            if (char !== expectedClosingBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


// Примеры использования
console.log(isValid("()"));       // true
console.log(isValid("{[()]}"));   // true
console.log(isValid("{[(])}"));   // false
console.log(isValid("(()"));      // false
