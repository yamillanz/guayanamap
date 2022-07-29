# GuayanaMap
Aplicación que busca lugares de interés de la ciudad de Guayana en Venezuela. Funciona seleccionando del listado una de las opciones guardadas y te lleva a esa parte del mapa. Si quieres agregar algún sitio tipealo en la caja que está debajo y pulsa el botón “+Add”.
Fue desarrollado con Angular 13 y necesitas tener instalado previamente:
- nodejs +14
- npm +6
- angular +13 cli (npm i -g @angular/cli)

Para instalar la aplicación a través de git solo usa el comando:
```sh
git clone https://github.com/yamillanz/guayanamap.git
```
luego para instalar las dependencias:
```sh
cd guayanamap
npm i 
```
una vez que se complete la instalación de las dependencias solo ejecuta el comando:
```sh
ng serve
```

#### Si tienes problemas con el checkeo de dependencias por parte de angular prueba:
```sh
npm config set legacy-peer-deps true
```
o tambien puedes instalar:
```sh
npm install --save --legacy-peer-deps
```

