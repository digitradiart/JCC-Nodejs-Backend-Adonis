import Bootcamp from './lib/bootcamp';

const jcc = new Bootcamp('jabarcodingcamp');

jcc.createClass('Laravel', 'beginner', 'abduh');

jcc.createClass('React', 'beginner', 'abdul');

console.log(jcc.classes);
