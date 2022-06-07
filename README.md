# backend_plantilla

Creación de un esqueleto del backend version 1.0.0.

Utilizando NodeJS, Express, Postman y Mongodb.

# Instalar node en backend

Entorno en tiempo de ejecución multiplataforma.

>npm init.

# Instalar express en el backend

Entorno de trabajo para aplicaciones web.

>npm install express --save.

# Conectar con postman

Es una plataforma de API para que los desarrolladores diseñen, construyan, prueben e iteren las API.
Desde la web oficial (https://www.postman.com/) instalamos la plataforma.

Realizamos las siguientes funciones:

- Crear colección.
- Hacer nueva request.
- Configurar nombre colección y request.
- Seleccionar metodo HTTP (get en este caso).
- Escribir URL del recurso al que quieres acceder con Postman.


# instalar cors

Para permitir o restringir los recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP.

>npm install cors --save

# Instalar nodemon.

Esta función nos permitira actualizar node cada vez que guardemos los cambios. Antes de empezar hay que activar permisos en windows.

Abrir powershell como administrador. Posterior mente escribir y aceptar el siguiente comando:

>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Una vez tenemos los permisos. Trabajamos en el terminal de Visual Studio. Instalando y ejecutando nodemon con los siguientes comandos:

>npm install nodemon -g

>nodemon