/*
This file goes as an asset without any of compilation even after build process.
Thus, it can be replaced in a runtime by different file in another environment.

Example for Docker:
  docker run -v ./local_cfg_dir:cfg image:tag
*/

(function(window) {
    window.__env = window.__env || {};

    window.__env.app = {
        "title": "FBN MTO Portal",
        "description": "FBN MTO Portal",
        "publicPath": "/",
        "instagramUrl": "#",
        "twitterUrl": "#",
        "facebookUrl": "#",
        "linkedinUrl": "#",
        "primaryColor": "#6d0606"
    };
    window.__env.api = {
        // "baseUrl": "https://192.168.253.127/fbnmtocore/dev/v1/",
        "baseUrl": "https://4paek6rxxc.execute-api.us-east-1.amazonaws.com/test/v1/",
        // "baseUrl": "https://4paek6rxxc.execute-api.us-east-1.amazonaws.com/test/v1/",
        "timeout": 80000
    };
    window.__env.captcha = {
        "enabled": true,
        "key": "Mee1ieth1IeR8aezeiwi0cai8quahy"
    };
    window.__env.rollbar = {
        "enabled": true,
        "token": "zieriu1Saip5Soiquie6zoo7shae0o"
    };
    window.__env.debug = false;
})(this);