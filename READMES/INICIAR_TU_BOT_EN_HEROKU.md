# **Hola Mi Compañeros Aqui Os Vengo A Enseñar Como Subir Tu Bot A Heroku :D**

**Descargue e instale la [CLI de Heroku](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md)**
**Si aún no lo ha hecho, inicie sesión en su cuenta de Heroku y siga las instrucciones para crear una nueva clave pública SSH.**
```powershell
$ heroku login
```
**Clonar el repositorio**
**Use Git para clonar el código fuente de <TuProyecto> en su máquina local.**

```powershell
$ heroku git:clone -a Ejemplo
$ cd Ejemplo
```
**Implementa tus cambios**
**Realice algunos cambios en el código que acaba de clonar e impleméntelos en Heroku usando Git.**

```powershell
$ git add .
$ git commit -am "hacerlo mejor"
$ git push heroku master
```
