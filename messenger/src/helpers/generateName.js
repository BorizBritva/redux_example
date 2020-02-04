export default function generateName(fullName) {

    const NAME = fullName.match(/[A-Z]/g).join('');
    return NAME;
}
