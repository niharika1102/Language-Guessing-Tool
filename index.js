import {franc, francAll} from 'franc'
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];

const code = franc(input);

try {
    if (code === 'und') {
        console.log(colors.brightRed("Sorry, couldn't figure it out. please try again!"));
      } else {
        const language = langs.where("3", code);
        console.log(colors.brightGreen(`Our best guess is: ${language.name}`));
      }
}
catch (e) {
    console.log(colors.brightRed("Ran into a problem!!"));
}