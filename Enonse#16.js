

function uncrypt(arg) {
    arg = arg.toUpperCase();
    alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase()
    arg = arg.split(' ');
    let caption = '';
    let indexElement;
    for (i of arg) {
        for (el of i) {
            if (i[0] == '<')
                indexElement = alph.indexOf(i[2]) - parseInt(i[1])
            else
                indexElement = alph.indexOf(i[2]) + parseInt(i[1])
        }
        caption += alph[indexElement]
    }
    return caption
}

console.log(uncrypt(">5K <0Y <3W <3K <6U <3Q"))
