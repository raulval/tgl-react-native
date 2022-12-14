# TGL React Native

This project was created for [LabLuby's](https://luby.com.br/labluby/) React Native module

## ๐งช Technologies

The project was developed using the following technologies:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Redux](https://redux.js.org/)
- [Styled-Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)

## ๐ Getting started

Clone the project and access the folder:

```bash
$ git clone https://github.com/raulval/tgl-react-native.git && cd tgl-react-native
```

Follow the steps below:
```bash
# Open API folder and install dependencies
$ cd LAB_TGL_API
$ yarn

# Open your DB (MySQL) according to .env file

# Create migrations
$ node ace migration:run

# Seed DB
$ node ace db:seed

# Start API
node ace serve --watch
```

```bash

# Open front-end folder and install dependencies
$ cd front-end
$ yarn

# Initialize the front-end
$ yarn start

```

## ๐ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
