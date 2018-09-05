"use strict";
const Confidence = require("confidence");
const Dotenv = require("dotenv");

Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};

const config = {
    $meta: "This file configures the plot device.",
    projectName: "zibawu",
    port: {
        web: {
            $filter: "env",
            test: 9000,
            production: process.env.PORT,
            $default: process.env.LOC_PORT
        }
    },
    baseUrl: {
        $filter: "env",
        $meta: 'values should not end in "/"',
        production: process.env.PRODBASE_URI,
        $default: process.env.LOC_PORT
    },
    authAttempts: {
        forIp: 50,
        forIpAndUser: 7
    },
    cookieSecret: {
        $filter: "env",
        production: process.env.COOKIE_SECRET,
        $default: process.env.DEFAULT_COOKIE
    },
    hapiMongoModels: {
        $filter: "env",
        production: {
            mongodb: {
                url: process.env.MONGOLAB_URI
            },
            autoIndex: false
        },
        test: {
            mongodb: {
                url: "{{mongodbUrl}}-test"
            },
            autoIndex: true
        },
        $default: {
            mongodb: {
                url: "{{mongodbUrl}}"
            },
            autoIndex: true
        }
    },
    nodemailer: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "tatendamarufu05@gmail.com",
            pass: process.env.SMTP_PASSWORD
        }
    },
    system: {
        fromAddress: {
            name: "Zibawu",
            address: "tatendamarufu05@gmail.com"
        },
        toAddress: {
            name: "Zibawu",
            address: "tatendamarufu05@gmail.com"
        }
    }
};

const store = new Confidence.Store(config);

exports.get = function(key) {
    return store.get(key, criteria);
};

exports.meta = function(key) {
    return store.meta(key, criteria);
};
