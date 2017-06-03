// @flow

module.exports.latestBuild = {
    "_id": "58b899061baced0100616172",
    "app_id": "58b897fb1baced010061616e",
    "repo_url": "git@github.com:myorg/2048.git",
    "build_status": "failed",
    "finished": true,
    "commit_info": {
        "tags": [],
        "branch": "master",
        "commit_sha": "54a9faeccc0979aaa16f3226562a24fb3330e9f0",
        "author": "David Pie",
        "message": "Add new crash type",
        "html_url": "https://github.com/myorg/2048/commit/54a9faeccc0979aaa16f3226562a24fb3330e9f0"
    },
    "build_number": 2,
    "created_at": "2017-03-02T22:13:26.728Z",
    "started_at": "2017-03-02T22:15:11.381Z",
    "finished_at": "2017-03-02T22:20:06.432Z",
    "test_summary": {
        "tests_count": 10,
        "tests_passed": 9,
        "code_coverage_percentage": 0.6878079796534735
    },
    "links": {
        "download": [
            {
                "name": "m2048 - Release",
                "url": "https://dashboard.buddybuild.com/api/download/download-ipa?buildID=58b899061baced0100616172"
            }
        ],
        "install": [
            {
                "name": "m2048 - Release",
                "url": "https://dashboard.buddybuild.com/download/ios?buildID=58b899061baced0100616172"
            }
        ]
    }
};

module.exports.apps = [
    {
        "_id": "58a4e07838704cb2eacd7ce4",
        "app_name": "2048 iOS App",
        "platform": "ios"
    },
    {
        "_id": "58a4e07838704cb2eacd7ce6",
        "app_name": "2048 Android App",
        "platform": "android"
    }
];

module.exports.branches = [
    {
        "name": "master"
    },
    {
        "name": "release"
    }
];

module.exports.builds = [{
    "_id": "58b899061baced0100616172",
    "app_id": "58b897fb1baced010061616e",
    "repo_url": "git@github.com:myorg/2048.git",
    "build_status": "failed",
    "finished": true,
    "commit_info": {
        "tags": [],
        "branch": "master",
        "commit_sha": "54a9faeccc0979aaa16f3226562a24fb3330e9f0",
        "author": "David Pie",
        "message": "Add new crash type",
        "html_url": "https://github.com/myorg/2048/commit/54a9faeccc0979aaa16f3226562a24fb3330e9f0"
    },
    "build_number": 2,
    "created_at": "2017-03-02T22:13:26.728Z",
    "started_at": "2017-03-02T22:15:11.381Z",
    "finished_at": "2017-03-02T22:20:06.432Z",
    "test_summary": {
        "tests_count": 10,
        "tests_passed": 9,
        "code_coverage_percentage": 0.6878079796534735
    },
    "links": {
        "download": [
            {
                "name": "m2048 - Release",
                "url": "https://dashboard.buddybuild.com/api/download/download-ipa?buildID=58b899061baced0100616172"
            }
        ],
        "install": [
            {
                "name": "m2048 - Release",
                "url": "https://dashboard.buddybuild.com/download/ios?buildID=58b899061baced0100616172"
            }
        ]
    }
}];

module.exports.build = {
    "_id": "58b899061baced0100616172",
    "app_id": "58b897fb1baced010061616e",
    "repo_url": "git@github.com:myorg/2048.git",
    "build_status": "failed",
    "finished": true,
    "commit_info": {
        "tags": [],
        "branch": "master",
        "commit_sha": "54a9faeccc0979aaa16f3226562a24fb3330e9f0",
        "author": "David Pie",
        "message": "Add new crash type",
        "html_url": "https://github.com/myorg/2048/commit/54a9faeccc0979aaa16f3226562a24fb3330e9f0"
    },
    "build_number": 2,
    "created_at": "2017-03-02T22:13:26.728Z",
    "started_at": "2017-03-02T22:15:11.381Z",
    "finished_at": "2017-03-02T22:20:06.432Z",
    "test_summary": {
        "tests_count": 10,
        "tests_passed": 9,
        "code_coverage_percentage": 0.6878079796534735
    },
    "links": {
        "download": [
            {
                "name": "m2048 - Release",
                "url": "https://dashboard.buddybuild.com/api/download/download-ipa?buildID=58b899061baced0100616172"
            }
        ],
        "install": [
            {
                "name": "m2048 - Release",
                "url": "https://dashboard.buddybuild.com/download/ios?buildID=58b899061baced0100616172"
            }
        ]
    }
};

module.exports.testResults = {
    "build_id": "58b899061baced0100616172",
    "tests": [
        {
            "run": "iPhone 6s",
            "target": "MyAppTests",
            "suite": "AuthTests",
            "name": "testLogin()",
            "status": "failed"
        },
        {
            "run": "iPhone 7",
            "target": "MyAppTests",
            "suite": "AuthTests",
            "name": "testSignUp()",
            "status": "failed"
        }
    ]
};

module.exports.codeCoverage = {
    "coverage": 0.75,
    "build_id": "58b899061baced0100616172",
    "targets": [
        {
            "name": "MyApp.app",
            "coverage": 0.70
        },
        {
            "name": "Networking.framework",
            "coverage": 0.80
        }
    ]
};

module.exports.triggerBuild = {
    "build_id": "571a68649d3b8171c5ef489f"
}

module.exports.deploymentGroups = [
    {
        "_id": "274a0fc14333e39be0aea9db",
        "name": "The Team",
        "branch": "master",
        "testers": [
            "peter@buddybuild.com"
        ]
    }
];

module.exports.ipRanges = [
    "111.111.111.111/32",
    "222.222.222.222/30",
];
