const _ = require('lodash');
const passport = require('passport');

const User = require('../models/User');

const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(({ id }, done) => done(null, id));

passport.deserializeUser((id, done) =>
  User.findById(id).then(user => done(null, user))
);

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const existingUser = await User.findByEmail(username);
//       if (!existingUser) {
//         return done(null, false);
//       }

//       const passwordIsCorrect = await existingUser.verifyPassword(password);
//       if (passwordIsCorrect) {
//         return done(
//           null,
//           _.pick(existingUser, [
//             'id',
//             'name',
//             'username',
//             'email',
//             'picture',
//             'type'
//           ])
//         );
//       } else {
//         return done(null, false);
//       }
//     } catch (e) {
//       console.log('ERROR', e);
//       return done(e, false);
//     }
//   })
// );

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // GoogleID attempt
        let existingUser = await User.findByGoogleId(profile.id);
        if (existingUser) {
          console.log(
            `User with id ${profile.id} found: ${existingUser.getName()}`
          );

          // existingUser.googleAccessToken = accessToken;
          // existingUser.googleRefreshToken = refreshToken;
          // await existingUser.save();

          return done(null, existingUser);
        }

        // Check email
        existingUser = await User.findByEmail(profile.emails[0].value);
        if (existingUser) {
          console.log(
            `User with email ${
              profile.emails[0].value
            } found: ${existingUser.getName()}`
          );
          console.log(
            `Adding googleID to ${existingUser.getName()}'s profile...`
          );

          existingUser.googleId = profile.id;
          // existingUser.googleAccessToken = accessToken;
          // existingUser.googleRefreshToken = refreshToken;
          await existingUser.save();

          return done(null, existingUser);
        }

        console.log(`User with id ${profile.id} not found`);
        const user = await new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          picture: profile.photos[0].value
          // googleAccessToken: accessToken,
          // googleRefreshToken: refreshToken
        }).save();

        done(null, user);
      } catch (error) {
        console.error(error);
        return done(error, false);
      }
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: '/auth/google/callback'
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       console.log(profile);
//     }
//   )
// );
