// @flow

const assert = require('assert');
const expect = require('expect');

const { describe, it } = require('mocha');
const buddybuild = require('../src/buddybuild');
const nock = require('nock');
const bbmocks = require('./mocks/buddybuild-api.js');

nock('https://api.buddybuild.com')
// Apps for authenticated client
.get('/v1/apps')
.reply(200, bbmocks.apps)
// Latest build for an app id
.get('/v1/apps/58a4e07838704cb2eacd7ce6/build/latest')
.reply(200, bbmocks.latestBuild);

describe("Buddybuild", () => {
    it("fetches apps", (done) => {
        buddybuild.client("my-token").apps()
        .then(apps => {
            expect(apps.length).toEqual(2);
            expect(apps[0].app_name).toEqual("2048 iOS App");
            expect(apps[1].app_name).toEqual("2048 Android App");
            done();
        })
        .catch(err => { done(); throw err; });
    });

    it('fetches branches', (done) => {

    });

    it('fetches builds', (done) => {

    });

    it("fetches the latest build", (done) => {
        buddybuild.client("my-token").latestBuild("58a4e07838704cb2eacd7ce6")
        .then(build => {
            expect(build._id).toEqual("58b899061baced0100616172");
            done();
        })
        .catch(err => { done(); throw err; });
    });

    it('fetches a build');

    it('fetches test results for a build');

    it('fetches the code coverage for a build');

    it('triggers a build');

    it('cancels a build');

    it('fetches deployment groups');

    it('adds testers to a deployment group');

    it('removes tests from a deployment group');

    it('lists buddybuild IP address ranges');

});
