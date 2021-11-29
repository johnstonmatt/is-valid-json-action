# is-valid-json action

This action returns true if a given file is a valid JSON file, otherwise it fails

## Inputs

## `path-to-file`

**Required** The path to the JSON file in your repo to evaluate.

## Outputs

## `is-valid-json`

Whether the provided repo path holds a valid JSON file

## Example usage

uses: actions/path-to-file-action@v1.1
with:
  path-to-file: 'docs/assets/my-file.json'

## Notes:

Unlike other environments it is expected that `node_modules` are checked in to `git` when building a GitHub action