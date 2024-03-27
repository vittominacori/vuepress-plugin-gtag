# Google Tag plugin for VuePress

## Install

```bash
"dependencies": {
  ...
  "vuepress-plugin-gtag": "vittominacori/vuepress-plugin-gtag",
  ...
},
```

## Usage 

> Private repo tu use google tag with consent on Vuepress v1.x

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
