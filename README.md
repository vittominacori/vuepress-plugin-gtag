# Google Tag plugin for VuePress

> [!WARNING]
> DO NOT USE IN PRODUCTION.
> This is not a published package. 
> This plugin uses localStorage to check previous stored consent and set the default values for Google Tag on Vuepress v1.x. 
> If you want to use it in production please test within your environment.

## Install

```bash
"dependencies": {
  ...
  "vuepress-plugin-gtag": "vittominacori/vuepress-plugin-gtag",
  ...
},
```

## Usage

```bash
module.exports = {
  plugins: [
    'vuepress-plugin-gtag': { 
        gtagId: '123456789',
    },

    // other plugins
    // ...
  ],
}
```

## License

Code released under the [MIT License](https://github.com/vittominacori/vuepress-plugin-gtag/blob/master/LICENSE).
