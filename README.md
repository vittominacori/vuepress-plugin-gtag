# Google Tag plugin for VuePress

> NOTE: Private repo to use google tag with consent on Vuepress v1.x

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
