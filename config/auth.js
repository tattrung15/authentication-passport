require('dotenv').config();

module.exports = {

    'googleAuth': {
        'clientID': process.env.ClientID,
        'clientSecret': process.env.ClientSecret,
        'callbackURL': 'http://localhost:3000/auth/google/callback'
    }

};