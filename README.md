# React + Vite
```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 20

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

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