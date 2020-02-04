export default function avaterFone() {

    const RGB = [];

    for (let i=0; i<3; i++) {

        let colorPart = Math.random() * (254 - 1) + 1;
        RGB.push(parseInt(colorPart));

    }

    return RGB.join(', ');
}
