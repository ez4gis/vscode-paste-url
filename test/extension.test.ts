//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

import * as assert from 'assert';

import * as vscode from 'vscode';
import * as PU from '../src/extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    test("Get title from undefined", () => {
        var paster = new PU.Paster()
        var URL = "https://google.com"
        var title = paster.processTitle(undefined, URL)
        assert.equal(title, URL)
    })

    test("Get title normally", () => {
        var paster = new PU.Paster()
        var URL = "https://google.com"
        var title = "Google"
        var titleProcessed = paster.processTitle(title, URL)
        assert.equal(title, titleProcessed)
    })


    test("Get title with HTML named characters", () => {
        var paster = new PU.Paster()
        var URL = "https://github.com/kukushi/PasteURL/issues/21"
        var title = `PasteURL get unexpected result if webpage title contains " ' " · Issue #21 · kukushi/PasteURL`
        var titleProcessed = paster.processTitle(title, URL)
        assert.equal(title, titleProcessed)
    })

    test("Get title with HTML char codes", () => {
        var paster = new PU.Paster()
        var URL = "https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
        var title = `Conway's Game of Life - Wikipedia`
        var titleProcessed = paster.processTitle(title, URL)
        assert.equal(title, titleProcessed)
    })
});