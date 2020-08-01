<<<<<<< HEAD
# Meat - Angular App Starter

## 1. Passos para começar

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start`

## 2. Iniciando o Backend

### Instalando o json-server

`npm install -g json-server`

### Iniciando o serviço (raiz da aplicação)

`json-server db.json`

## Goodies

Expressões regulares usadas na validação de formulários

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

## Upgrade para Angular 10

Dependências dos pacotes que devem ficar em package.json:

```
{
  "name": "meat-app-starter",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build:dev": "ng build",
    "build:prod": "ng build --prod --base-href /meat/",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "nodemon": "nodemon --watch backend backend/dist/server.js",
    "tsnode": "nodemon --watch backend --exec 'ts-node' backend/server.ts"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~10.0.4",
    "@angular/common": "~10.0.4",
    "@angular/compiler": "~10.0.4",
    "@angular/core": "~10.0.4",
    "@angular/forms": "~10.0.4",
    "@angular/platform-browser": "~10.0.4",
    "@angular/platform-browser-dynamic": "~10.0.4",
    "@angular/router": "~10.0.4",
    "@types/json-server": "^0.14.2",
    "admin-lte": "2.3.11",
    "classlist.js": "^1.1.20150312",
    "core-js": "3.6.5",
    "font-awesome": "4.7.0",
    "jquery": "3.5.1",
    "rxjs": "~6.5.5",
    "tslib": "^2.0.0",
    "web-animations-js": "^2.3.2",
    "zone.js": "~0.10.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1000.0",
    "@angular/cli": "~10.0.3",
    "@angular/compiler-cli": "~10.0.4",
    "@types/express": "4.11.1",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "@types/jsonwebtoken": "7.2.7",
    "@types/node": "^12.12.53",
    "codelyzer": "^6.0.0-next.1",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~5.0.0",
    "json-server": "0.16.1",
    "jsonwebtoken": "~8.5.1",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~3.0.2",
    "karma-jasmine": "~3.3.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.9.5"
  }
}
```
## Créditos

Todas as imagens usadas na aplicação são pertencentes a freepik.com
=======
# Angular6-Curso-Udemy-Cod3r
Curso de Angular 6 pela Cod3r na Udemy
>>>>>>> 7607bc959b4a5f807ba97caa706579d1155e15a7
