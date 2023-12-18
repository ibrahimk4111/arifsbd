# ERROR 
```
node:internal/modules/cjs/loader:1134
  const err = new Error(message);
              ^

Error: Cannot find module '@rollup/rollup-linux-x64-gnu'
Require stack:
- /home/runner/work/arifsbd/arifsbd/node_modules/rollup/dist/native.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
    at Module._load (node:internal/modules/cjs/loader:975:27)
    at Module.require (node:internal/modules/cjs/loader:1225:19)
    at require (node:internal/modules/helpers:177:18)
    at Object.<anonymous> (/home/runner/work/arifsbd/arifsbd/node_modules/rollup/dist/native.js:60:48)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:202:29) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/runner/work/arifsbd/arifsbd/node_modules/rollup/dist/native.js'
  ]
}

Node.js v18.19.0
Error: Process completed with exit code 1.
```
# React + Vite
```
# Simple workflow for deploying static content to GitHub Pages
name: deploy

on:
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2

```

<!-- gallery data from drive -->
```
[
  {
    "name": "International Agricultural Event 2023",
    "imgs": [
      "https://drive.google.com/thumbnail?id=1etSBlQX4k9D_HCRScTwL3ewKJ_Jh6i8c",
      "https://drive.google.com/thumbnail?id=1ZyU0oQo0xGr-KqNT8wVH-LmLMOAFsSdY",
      "https://drive.google.com/thumbnail?id=1KUzgWOOtWbJaalZF1sKM-vh3dPtjwUYg",
      "https://drive.google.com/thumbnail?id=1L7pu10S-LJZfPjlJggRRzqmkZMUuwMcl",
      "https://drive.google.com/thumbnail?id=1VfX97uqXsS0vjzI044cup0TivSv6dqF6",
      "https://drive.google.com/thumbnail?id=1SDIZ4PA5z8uDJ4Jy0DF17uws_2Ljifrq",
      "https://drive.google.com/thumbnail?id=1MQTP5RMPk-Q2q-bssHRUTsqyxVlPKyPT",
      "https://drive.google.com/thumbnail?id=13hpSfZ7rwJsYOCcSBKdkhomMAmQeT-zE",
      "https://drive.google.com/thumbnail?id=12SNWUZ6Z8_65Q1ODHlapY6sCv1YV2cmy",
      "https://drive.google.com/thumbnail?id=12dWjaHwi2UOL9nJwJ5VoQwEGeiYDtmCy",
      "https://drive.google.com/thumbnail?id=1wdbXV707WZTAffvmpAZiDQb2oTKgr0Ez",
      "https://drive.google.com/thumbnail?id=1cerDuGxABxHmahSGmnioHE9fH_FGMc2H",
      "https://drive.google.com/thumbnail?id=1N9hC062hkwDJ2bn7DVH4ZPxjcJJQte75",
      "https://drive.google.com/thumbnail?id=1POlBelczRErwq_TIrY8unxIAd-JCKDw6",
      "https://drive.google.com/thumbnail?id=1Ua0OTYjS3fqMj1EB9eQe8BMQ7kJGesFf",
      "https://drive.google.com/thumbnail?id=1N5PAs0H7Ac8-Zvzq5BYxFYh4DENZ5ClW"
    ]
  },
  {
    "name": "Convensional Agricultural Event 2024",
    "imgs": [
      "https://drive.google.com/thumbnail?id=1q3fygJXGXijZVpUiC_A5QKV8mKS_lMsX",
      "https://drive.google.com/thumbnail?id=1miUcUB9fy900wN5sGssL2fXVzdHdSqlr",
      "https://drive.google.com/thumbnail?id=1nqYlR9y2dPoIqdXI_ufYIFsh_1toBgbR",
      "https://drive.google.com/thumbnail?id=109BbyBHUgWvukJl3YSFscd3kLQCegUY3",
      "https://drive.google.com/thumbnail?id=1eXt_SC5K4sGKFeTZeGTsICRjWw-MNZA9",
      "https://drive.google.com/thumbnail?id=1Ad7A65wnGoAjTDYdFt8qZsu3rySdkPLV",
      "https://drive.google.com/thumbnail?id=1Ciu0YPPkgt0H8qgnFDpnblYwLwXm3q4K",
      "https://drive.google.com/thumbnail?id=1I_sFmNgeQObxHUdNEzQfLjzfosof964J",
      "https://drive.google.com/thumbnail?id=1NNwWygaJcPadu4y7nDqabistnA3hMit9",
      "https://drive.google.com/thumbnail?id=1BDm3lshjIcZIfFPFrqxQzY6wp4ILZCzs",
      "https://drive.google.com/thumbnail?id=1x6MDD5OsjOOUnVMsh7hhrapho53JTf5n"
    ]
  }
]

```

<!-- parterns db data -->
```
[
  {
    
    "id":"1",
    "name": "BREMER PHARMA GMBH, GERMANY",
    "img": "https://drive.google.com/thumbnail?id=1u2VBcJ2jZMOmJJ-FtwyIEp3Jt4n1W7nI"
  },
  {
    "id":"2",
    "name": "AGPACK, LLC, USA",
    "img": "https://drive.google.com/thumbnail?id=1vuhkE5aEUCwTCpIUa3IWXHHGEx0yDfuC"
  },
  {
    "id":"3",
    "name": "FRANK WRIGHT LTD. ENGLAND, UK",
    "img": "https://drive.google.com/thumbnail?id=1s1ruRcY0oc7_bWPF7V1tmxeFIFZv4mez"
  },
  {
    "id":"4",
    "name": "PERSTORP WASPIK B.V",
    "img": "https://drive.google.com/thumbnail?id=1O92m4DEDaOqZrnH1nlX35T0WtSoGJMas"
  },
  {
    "id":"5",
    "name": "BALCHEM CORPORATION, ITALY",
    "img": "https://drive.google.com/thumbnail?id=1RDCfeVsL-RLj9FCL4Ure3BMmhXdQgbm4"
  },
  {
    "id":"6",
    "name": "SICHUAN LOMON CORPORATION",
    "img": "https://drive.google.com/thumbnail?id=16IEPKOtDiMEeINJHaAQuFygIzcw6iZ7H"
  },
  {
    "id":"7",
    "name": "DELACON BIOTECHNIK GMBH, AUSTRIA",
    "img": "https://drive.google.com/thumbnail?id=1Ak9kzSWGDBl-hggUiZtAw0gBJyYeCzRu"
  },
  {
    "id":"8",
    "name": "ZOETIS LLC, USA",
    "img": "https://drive.google.com/thumbnail?id=1GIfkFlDqniU93f0zeEpnaFSWRxYDJyko"
  },
  {
    "id":"9",
    "name": "INDIAN IMMUNOLOGICALS LTD",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"10",
    "name": "CJ CORPORATION",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"11",
    "name": "SOCOREX SWITZERLAND",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"12",
    "name": "KERRY FOOD INGREDIENTS, IRELAND",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"13",
    "name": "MERVUE LABORATORIES, IRELAND",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"14",
    "name": "Company Names",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"15",
    "name": "Company Names",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"16",
    "name": "Company Names",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  },
  {
    "id":"17",
    "name": "Company Names",
    "img": "https://drive.google.com/thumbnail?id=1YzadM9fO_KdGmToZlTf9YjNY8jVU2iWQ"
  }
]

```

<!-- products db data -->
```
[
  {
    "name": "product1",
    "img": "images/20.jpg"
  },
  {
    "name": "product2",
    "img": "images/20.jpg"
  },
  {
    "name": "product3",
    "img": "images/20.jpg"
  },
  {
    "name": "product4",
    "img": "images/26.jpg"
  },
  {
    "name": "product5",
    "img": "images/20.jpg"
  },
  {
    "name": "product6",
    "img": "images/20.jpg"
  },
  {
    "name": "product7",
    "img": "images/20.jpg"
  },
  {
    "name": "product7",
    "img": "images/20.jpg"
  },
  {
    "name": "product7",
    "img": "images/20.jpg"
  }
]
```
<!-- 2nd formate -->
```
[
  {
    "name": "product1",
    "img": "https://drive.google.com/thumbnail?id=1asJVyh0t-67hB3othHFSB60ngJAUvOR7"
  },
  {
    "name": "product2",
    "img": "https://drive.google.com/thumbnail?id=18AmbTNfZ8pi9KsoZFtx9tdzzjxN69JEh"
  },
  {
    "name": "product3",
    "img": "https://drive.google.com/thumbnail?id=1san2uKDwhfMn8Ll9Smm7vf5vfXkCqdgv"
  },
  {
    "name": "product4",
    "img": "https://drive.google.com/thumbnail?id=1MCyVCCtve8Y0AS_tqv5T8ZlaFh9BkoeY"
  },
  {
    "name": "product5",
    "img": "https://drive.google.com/thumbnail?id=1A4iSnFKMv0nMz3SARZjqyeg6SpSS9AcL"
  },
  {
    "name": "product6",
    "img": "https://drive.google.com/thumbnail?id=1bh9k6w4tqfz7YZ8CyfeE-B05CzrwiD9O"
  },
  {
    "name": "product7",
    "img": "https://drive.google.com/thumbnail?id=1tMW6z0QdZHWyTM_7ABAR_fhzR0hSTLkr"
  },
  {
    "name": "product8",
    "img": "https://drive.google.com/thumbnail?id=1CubNMGrJS7sp31_cMGNH_femYLFV1i7m"
  },
  {
    "name": "product9",
    "img": "https://drive.google.com/thumbnail?id=1NG66D0XJtaK_U9ZmNsFHeqWx2_Ytgup2"
  },
  {
    "name": "product10",
    "img": "https://drive.google.com/thumbnail?id=1b0Mq2ceFh_8QmEjnhLNqUaROgun6bTdH"
  },
  {
    "name": "product11",
    "img": "https://drive.google.com/thumbnail?id=1kPtUPjh4fP6-2Sbg1VSFL9T5gwrJaqJv"
  },
  {
    "name": "product12",
    "img": "https://drive.google.com/thumbnail?id=1m6BOUnvlAwDa3aNB1WlDQeXmHpH-ozb7"
  },
  {
    "name": "product13",
    "img": "https://drive.google.com/thumbnail?id=1eYt9udl_q48E0XZ_BBv4T9D4TynCkkuO"
  },
  {
    "name": "product14",
    "img": "https://drive.google.com/thumbnail?id=1bOY-CbuSb-Fn3e3UHs4dN1e97oarEyoF"
  },
  {
    "name": "product15",
    "img": "https://drive.google.com/thumbnail?id=1Jr7U4JxOGGEwd_3x1npq-nwVGqytBWJN"
  },
  {
    "name": "product16",
    "img": "https://drive.google.com/thumbnail?id=1pHPW7OH2VvL1MXLZNubZxy8aKQYA01ka"
  },
  {
    "name": "product17",
    "img": "https://drive.google.com/thumbnail?id=1iI12FS8gYyYfuTzefBFbCBcjcSVZqJ-f"
  },
  {
    "name": "product18",
    "img": "https://drive.google.com/thumbnail?id=1J0uZ983GrkvSfL7HdqMvd6MRY4UE-l6D"
  },
  {
    "name": "product19",
    "img": "https://drive.google.com/thumbnail?id=1T2YwTWdI_GpQ0JbR8-lLjSvOQ72051wm"
  },
  {
    "name": "product20",
    "img": "https://drive.google.com/thumbnail?id=1qjcUCnYqsGqLIlqsD04p1YfuS9WJufQu"
  },
  {
    "name": "product21",
    "img": "https://drive.google.com/thumbnail?id=1iD7gkP8a0Ba4jd_iALUe4VuW-cxkjCgu"
  },
  {
    "name": "product22",
    "img": "https://drive.google.com/thumbnail?id=1eNCw_Q3KjHlArbFh4H7CVHDVVWceLZIs"
  },
  {
    "name": "product23",
    "img": "https://drive.google.com/thumbnail?id=1HX8UB2D94BUC6GJT90n4LwQMcanrKBpz"
  },
  {
    "name": "product24",
    "img": "https://drive.google.com/thumbnail?id=1VHdm5excVggUBwXKTWx__tZiPCeDW0vq"
  },
  {
    "name": "product25",
    "img": "https://drive.google.com/thumbnail?id=1B1Q8ingG97O8CwwWZBd5G9qCE5A6nsG0"
  },
  {
    "name": "product26",
    "img": "https://drive.google.com/thumbnail?id=1ET1l_1hP89l82Thjne9cfxC4ULWnyVJf"
  },
  {
    "name": "product27",
    "img": "https://drive.google.com/thumbnail?id=1EKuz9Ht-v2dWTp1ivHA35B01wTjgkbPb"
  },
  {
    "name": "product28",
    "img": "https://drive.google.com/thumbnail?id=1hYM_0zk9Bc-40qeYwuxxpEA-fSrL3HsN"
  },
  {
    "name": "product29",
    "img": "https://drive.google.com/thumbnail?id=1MAaoJouH3Z5Xv59s_04Y0oHWD3EvcMlU"
  },
  {
    "name": "product30",
    "img": "https://drive.google.com/thumbnail?id=1btPRm5kw139gjz4IQnag0AlEQGzN5pJy"
  }
]

```