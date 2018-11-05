// import * as passport from 'passport';
// import * as passportLocal from 'passport-local';

// import { Manager } from './models';

// passport.use(new passportLocal.Strategy({
//   usernameField: 'email',
//   passwordField: 'password',
// }, function(email, password, cb) {
//   return Manager.findOne<any>({
//     where: { email: email, password: password },
//   }).then((manager) => {
//     if (!manager) {
//       return cb(null, false, { message: 'Incorrect email or password.' });
//     }
//     return cb(null, manager, { message: 'Logged In Successfully' });
//   }).catch(err => cb(err));
// }));
