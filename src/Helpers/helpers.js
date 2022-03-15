export function handleErrorMessage(message) {
    return message.substring(message.indexOf(':') + 2).split(', ');
}