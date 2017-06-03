// @flow

const Promise = require('bluebird');
const fs = require('fs');
const r = require('request');
const rp = require('request-promise-any');
const _ = require('lodash');

const fetch = (endpoint: string, token: string) => {
    return rp.get(`https://api.buddybuild.com/v1/${endpoint}`, {
        'auth': { 'bearer': token },
    })
    .then(response => JSON.parse(response));
};

module.exports.client = (token: string) => {
    return {
        apps: () => {
            return fetch("apps", token);
        },

        latestBuild: (appId: string) => {
            return fetch(`apps/${appId}/build/latest`, token);
        },

        branches: (appId: string, includeDeleted: ?boolean) => {

        },

        builds: (appId: string, branch: ?string, scheme: ?string, status: ?string, limit: integer = 5) => {

        },

        buildId: (buildId: string) => {},

        testsResults(buildId: string, showFailed: ?boolean, showPassing: ?boolean) => {},

        codeCoverage(buildId: string, showFileCoverage: ?boolean, showFunctionCoverage: ?boolean) => {},

        triggerBuild(appId: string, branch: ?string) => {},

        cancelBuild(buildId: string) => {},

        deploymentGroups(appId: string) => {},

        addTesters(appId: string, deploymentGroupId: string, testers: Array<string>) => {},

        removeTesters(appId: string, deploymentGroupId: string, testers: Array<string>) => {},

        ipRanges() => {}
    };
};
