# vsts-task-bundle-exec
A build extension for Visual Studio Online that runs bundle exec

This extension runs "bundle exec" along with the specified arguments. For example:
```
bundle exec brakeman -A -o reports/brakeman.html -z
```
To use this extension checkout to your local machine and then follow the instructions from [tfx-cli build](https://github.com/Microsoft/tfs-cli/blob/master/docs/buildtasks.md) in order to upload to VSTS
