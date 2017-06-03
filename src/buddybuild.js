// @flow

const Promise = require('bluebird');
const fs = require('fs');
const r = require('request');
const rp = require('request-promise-any');
const _ = require('lodash');

module.exports.client = (token: string) => {
    const send = (endpoint: string, query: ?Object, method: ?string, form: ?Object) => {
        return rp(`https://api.buddybuild.com/v1/${endpoint}`, {
            'auth': { 'bearer': token },
            'qs': query || {},
            'method': method || 'GET',
            'form': form || {}
        })
        .then(response => {
            if (_.trim(response).length === 0) {
                return Promise.resolve();
            }

            return JSON.parse(response)
        });
    };

    return {
        apps: () => {
            return send("apps");
        },

        latestBuild: (appId: string) => {
            return send(`apps/${appId}/build/latest`);
        },

        branches: (appId: string, includeDeleted: ?boolean) => {
            return send(`apps/${appId}/branches`, { includeDeleted: includeDeleted });
        },

        builds: (appId: string, branch: ?string, scheme: ?string, status: ?string, limit: number = 5) => {
            return send(`apps/${appId}/builds`, {
                branch: branch,
                scheme: scheme,
                status: status,
                limit: limit
            });
        },

        build: (buildId: string) => {
            return send(`builds/${buildId}`);
        },

        testsResults: (buildId: string, showFailed: ?boolean, showPassing: ?boolean) => {
            return send(`builds/${buildId}/tests`, {
                showFailed: showFailed,
                showPassing: showPassing
            });
        },

        codeCoverage: (buildId: string, showFileCoverage: ?boolean, showFunctionCoverage: ?boolean) => {
            send(`builds/${buildId}/coverage`, {
                showFileCoverage: showFileCoverage,
                showFunctionCoverage: showFunctionCoverage
            });
        },

        triggerBuild: (appId: string, branch: ?string) => {
            return send(`apps/${appId}/build`, {branch: branch}, "POST");
        },

        cancelBuild: (buildId: string) => {
            return send(`builds/${buildId}/cancel`, null, "POST");
        },

        deploymentGroups: (appId: string) => {
            return send(`apps/${appId}/deployment-groups`);
        },

        addTesters: (appId: string, deploymentGroupId: string, testers: Array<string>) => {
            return send(`apps/${appId}/deployment-group/${deploymentGroupId}/testers`, null, "PUT", {
                testers: _.join(testers, ",")
            });
        },

        removeTesters: (appId: string, deploymentGroupId: string, testers: Array<string>) => {
            return send(`apps/${appId}/deployment-group/${deploymentGroupId}/testers`, null, "DELETE", {
                testers: _.join(testers, ",")
            });
        },

        ipRanges: () => {
            return send("ip-ranges");
        }
    };
};
