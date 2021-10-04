# Instalando React - Webpack 

### Tener [Node JS](https://nodejs.org/es/) Instalado Previamente

## NPM
Npm (Node Package Module ) es el gestor de paquetes de node se utiliza para agregar nuevas funcionalidades a los proyectos que desarrollemos, utilizan de fuente la web https://www.npmjs.com/ en cual es el repositorio en donde las personas pueden subir y buscar nuevos paquetes.

## Instalar paquetes
- [webpack](#webpack)
- [webpack-cli](#webpack)
- [webpack-dev-server](#webpack-server)
- [babel](#babel)
- [Instalando React](#react)
- [Plugins de Webpack](#web-plug)
- [Configurando CSS](#conf-css)
- [Configurando Img](#conf-img)

#### <a name="webpack"></a> **WEBPACK y WEBPACK CLI**
Para instalar webpack y webpack-cli se debe ejecutar el comando desde consola:
```
    npm i webpack webpack-cli
```

#### <a name="webpack-server"></a> **WEBPACK-DEV-SERVER**
Webpack dev server nos permitirá desarrollar más rápido gracias a el modulo de autorecarga del código cuando este sufra un cambio, para instalarlo desde la terminal:
```
    npm i webpack-dev-server
```
creamos en la raíz del sitio un archivo llamado **webpack.config.js** en donde vamos a especificar la configuración de webpack
```javascript
module.exports = {
    mode: "development",
    entry : "./src/app.js",
    output:{
        path: path.join(__dirname,"dist"),
        filename: "bundle.js"
    },
}
```

### <a name="babel"></a> **BABEL**
Este paquete nos ayudará a convertir nuestro código a que sea compatible con todos los navegadores, para instalar en nuestra terminal:
```
    npm i @babel/core @babel/cli @babel/preset-env babel-loader @babel/preset-react
```

y crear el archivo de configuración de babel en la raíz de tu directorio
```
    .babelrc
```
y cargamos el en la configuración el presets que instalamos con babel esto nos ayudara a interpretar código moderno de js y react a todos los navegadores.
```json
{
    "presets": [
        "@babel/preset-env"
        "@babel/preset-react"
    ]
}
```
Configuramos nuestro loader con webpack agregamos reglas a archivo de configuración de nuestro webpack para que inspeccione los archivos javascript en busca de código de react y los convierta.
```javascript
 module : {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    }
```
dentro del mismo webpack config especificamos una propieda para cuando importemos dentro de nuestro proyecto otros archivos de js/jsx no tengamos que colocar la extensión
```javascript
    // Para no hacer esto
    import MiModulo from "carpeta/Mimodulo.js"

    // y que quede de esta manera
    import MiModulo from "carpeta/Mimodulo"
``` 
agregamos en el webpack config el resolve para que autodetecte las extensiones.
```javascript
resolve: {
    extensions: [".js",".jsx"]
},
```

### Adicional Propiedades de clase
```javascript
 class MiComponente extends Components{
     
     state = {
         //...
     }

     //.... el resto del código
 }
```

```
    npm i  @babelplugin-proposal-class-properties
```
```json
{
    "presets": [
        "@babel/preset-env"
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```

### <a name="react"></a> **INSTALANDO REACT**
Para instalar la libreria de react desde la terminal:
``` 
    npm i react react-dom
```
### <a name="conf-css"></a> **CONFIGURANDO EL CSS**
Instalamos los loader para que webpack sepa como tratar esos archivos.
```  
    npm i style-loader css-loader
``` 

y en nuestro **webpack.config.js** una nueva regla a nuestro module 
```javascript
module.exports = {
     module : {
        rules: [ 
            ...
                {
                    test :/\.(css)$/,
                    use : ["style-loader", "css-loader"]
                }
        ]
}
``` 
para extraer el css del js necesitaremos un plugin 
### <a name="conf-css"></a> **CONFIGURANDO LA IMAGENES**
para configurar las imagenes necesitamos instalar un loader para webpack pueda entender que debe hacer con esos archivos. 
```
    npm i file-loader
```
y agregar una nueva regla a nuestro webpack.config.js
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
```
con esto ya podremos importar imagenes en nuestros .js/.jsx 

### <a name="web-plug"></a> **PLUGIN DE WEBPACK**
1. **HtmlWebpackPlugin** :
```  
    npm i html-webpack-plugin
``` 
2. **Extraer  el CSS**
```
    npm install mini-css-extract-plugin
```