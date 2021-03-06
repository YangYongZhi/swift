// Code generated by protoc-gen-grpc-js-client
// source: tiller.proto
// DO NOT EDIT!

/*
This is a RSVP based Ajax client for gRPC gateway JSON APIs.
*/

var xhr = require('grpc-xhr');

function releaseServiceSummarizeReleases(p, conf) {
    path = '/tiller/v2/releases/json'
    return xhr(path, 'GET', conf, p);
}

function releaseServiceGetReleaseStatus(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/status/json'
    delete p['name']
    return xhr(path, 'GET', conf, p);
}

function releaseServiceGetReleaseContent(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/content/json'
    delete p['name']
    return xhr(path, 'GET', conf, p);
}

function releaseServiceUpdateRelease(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/json'
    delete p['name']
    return xhr(path, 'PUT', conf, null, p);
}

function releaseServiceInstallRelease(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/json'
    delete p['name']
    return xhr(path, 'POST', conf, null, p);
}

function releaseServiceUninstallRelease(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/json'
    delete p['name']
    return xhr(path, 'DELETE', conf, p);
}

function releaseServiceGetVersion(p, conf) {
    path = '/tiller/v2/version/json'
    return xhr(path, 'GET', conf, p);
}

function releaseServiceRollbackRelease(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/rollback/json'
    delete p['name']
    return xhr(path, 'GET', conf, p);
}

function releaseServiceGetHistory(p, conf) {
    path = '/tiller/v2/releases/' + p['name'] + '/json'
    delete p['name']
    return xhr(path, 'GET', conf, p);
}

var services = {
    releaseService: {
        summarizeReleases: releaseServiceSummarizeReleases,
        getReleaseStatus: releaseServiceGetReleaseStatus,
        getReleaseContent: releaseServiceGetReleaseContent,
        updateRelease: releaseServiceUpdateRelease,
        installRelease: releaseServiceInstallRelease,
        uninstallRelease: releaseServiceUninstallRelease,
        getVersion: releaseServiceGetVersion,
        rollbackRelease: releaseServiceRollbackRelease,
        getHistory: releaseServiceGetHistory
    }
};

module.exports = {appscode: {swift: {v2: services}}};
