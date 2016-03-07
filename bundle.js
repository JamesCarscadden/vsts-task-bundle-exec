var path = require('path');
var tl = require('vso-task-lib');

var bundle = new tl.ToolRunner(tl.which('bundle', true));
var bundleArg = tl.getInput('arg', true);

bundle.arg('exec');
bundle.arg(bundleArg);

bundle.exec({ failOnStdErr: false})
.then(function(code) {
    tl.exit(code);
})
.fail(function(err) {
    console.error(err.message);
    tl.debug('taskRunner fail');
    tl.exit(1);
})
