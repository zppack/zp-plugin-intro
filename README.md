# @zppack/zp-plugin-intro

A plugin for zp to personalize introduction text.

## Start

Config introduction text in `.zprc` or `.user.zprc` file as following:

```toml
[[init.plugins]]
  name = 'ZpIntroPlugin'
  hook = 'after-create'
  pkgName = '@zppack/zp-plugin-intro'
  pkgVersion = 'latest'

  [init.plugins.config]

    # interpolation
    # prefix = '{'
    # suffix = '}'

    [[init.plugins.config.list]]
      text = ' Now you can do following: '
      chalk = ['yellow', 'underline', 'bgBlue']
    [[init.plugins.config.list]]
      text = ' '
    [[init.plugins.config.list]]
      [[init.plugins.config.list.texts]]
        text = '{zp-tab}'
      [[init.plugins.config.list.texts]]
        text = 'cd {projectName}'
        chalk = ['blueBright']
    [[init.plugins.config.list]]
      text = ' '
    [[init.plugins.config.list]]
      [[init.plugins.config.list.texts]]
        text = '{zp-tab}'
      [[init.plugins.config.list.texts]]
        text = 'npm start'
        chalk = ['blueBright']
      [[init.plugins.config.list.texts]]
        text = '{zp-tab}(open browser at "localhost:3000")'
        chalk = ['gray']
    [[init.plugins.config.list]]
      text = '{zp-newline}'
```

### Variables replacement

As you see above, variable template in `text` field will be replaced with context options data.
In addition to options data, `zp-tab`, `zp-newline`, `zp-space` are added to data, inferring to '\t', '\n', ' '.
If the default interpolation (prefix `{` and suffix `}`) bothers you, you can change it by setting `prefix` and `suffix` of config.

## Contributing

[How to contribute to this?](CONTRIBUTING.md)

## Recently changes

See the [change log](CHANGELOG.md).

## License

[MIT](LICENSE)
