# is-valid-json action

This action returns true if a given file is a valid JSON file, otherwise it fails

## Inputs

## `path-to-file`

**Required** The path to the JSON file in your repo to evaluate.

## Outputs

## `is-valid-json`

Whether the provided repo path holds a valid JSON file

## Example usage
```yaml
on:
  pull_request:
    branches:
      - main
jobs:
  test_is-valid-json-action:
    runs-on: ubuntu-latest
    name: A job to test whether the is-valid-json is working properly
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: check-validity
        uses: johnstonmatt/is-valid-json-action@v.1.0.1
        id: check-validity
        with:
          path-to-file: './test-data/valid.json'
      - name: print-validity
        run: echo "The valid file was valid JSON"
```

## Notes:

Unlike other environments it is expected that `node_modules` are checked in to `git` when building a GitHub action