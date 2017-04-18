// -----------------------------------------------------------------------------
// Spell Right extension for Visual Studio Code (VSCode)
// Copyright (c) 2017 Bartosz Antosik. Licensed under the MIT License.
// -----------------------------------------------------------------------------

'use strict';

global.DEBUG_OUTPUT = false;

var spellright = require('./spellright');
var vscode = require('vscode');

function activate(context) {

    if (DEBUG_OUTPUT) {
        console.log('SpellRight activated.');

        var config = vscode.workspace.getConfiguration('');
        console.log(config);

        // I would love if there would be a chance to get access to
        // languageId to LanguageName conversion. Similarly would be great to
        // have access to languages syntax elements like line/block comments,
        // string delimiters or quoting character etc.
        //
        // vscode.languages.getLanguages().then((languages) => {
        //     console.log('Known languages: ' + languages);
        // });
    }

    var SpellRight = new spellright.default();

    SpellRight.activate(context);
}
exports.activate = activate;

function deactivate() {

    if (DEBUG_OUTPUT)
        console.log('SpellRight deactivated.');
}
exports.deactivate = deactivate;