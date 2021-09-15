# **👋 Guia De Como Usar Git:**

## **1.6 Introducción: configuración de Git por primera vez**

### **Configuración de Git por primera vez**

**Ahora que tiene Git en su sistema, querrá hacer algunas cosas para personalizar su entorno de Git. Debería tener que hacer estas cosas solo una vez en una computadora determinada; se quedarán entre las actualizaciones. También puede cambiarlos en cualquier momento volviendo a ejecutar los comandos.**
**Git viene con una herramienta llamada `git config` que le permite obtener y establecer variables de configuración que controlan todos los aspectos de cómo se ve y funciona Git. Estas variables se pueden almacenar en tres lugares diferentes:**

**1. `[path]/etc/gitconfig` file: Contiene los valores aplicados a cada usuario en el sistema y todos sus repositorios. Si pasa la opción --system a git config, lee y escribe desde este archivo específicamente. Dado que se trata de un archivo de configuración del sistema, necesitará privilegios de administrador o superusuario para realizar cambios en él.**

**2. `~/.gitconfig` o `~/.config/git/config` archivo: Valores específicos para usted personalmente, el usuario. Puede hacer que Git lea y escriba en este archivo específicamente pasando el `--global` opción, y esto afecta a todos los repositorios con los que trabaja en su sistema.**

**3. `config` archivo en el directorio de Git (es decir,`.git/config`) de cualquier repositorio que esté utilizando actualmente: específico para ese único repositorio. Puede forzar a Git a leer y escribir en este archivo con la `--local` opción, pero de hecho es la predeterminada. Como era de esperar, debe estar ubicado en algún lugar de un repositorio de Git para que esta opción funcione correctamente.**

**Cada nivel anula los valores del nivel anterior, por lo que los valores en `.git/config` superan a los de `[path]/etc/gitconfig`**

**En los sistemas Windows, Git busca el archivo `.gitconfig` en el directorio `$HOME` (`C:\Users\$USER` para la mayoría de las personas). También sigue buscando `[path]/etc/gitconfig`, aunque es relativo a la raíz de MSys, que es donde decide instalar Git en su sistema Windows cuando ejecuta el instalador. Si está utilizando la versión 2.x o posterior de Git para Windows, También hay un archivo de configuración a nivel del sistema en `C:\Documents and Settings\All Users\Application Data\Git\config` en Windows XP, y en `C:\ProgramData\Git\config` en Windows Vista y versiones posteriores. Este archivo de configuración solo se puede cambiar mediante `git config -f <file>` como administrador.**

**Puede ver todas sus configuraciones y de dónde provienen usando:**
```powershell
$ git config --list --show-origin
```
## **Tu identidad**

**Lo primero que debe hacer al instalar Git es configurar su nombre de usuario y dirección de correo electrónico. Esto es importante porque cada confirmación de Git usa esta información, y se integra de manera inmutable en las confirmaciones que comienzas a crear:**
```powershell
$ git config --global user.name "Git-Guia-AahhsSjsj"
```
```powershell
$ git config --global user.email Git-Guia-AahhsSjsj@ejemplo.com
```

**Nuevamente, debe hacer esto solo una vez si pasa la opción `--global`, porque entonces Git siempre usará esa información para cualquier cosa que haga en ese sistema. Si desea anular esto con un nombre o dirección de correo electrónico diferente para proyectos específicos, puede ejecutar el comando sin la opción `--global` cuando esté en ese proyecto, Muchas de las herramientas de la GUI le ayudarán a hacer esto cuando las ejecute por primera vez.**

## **Tu editor**
**Ahora que su identidad está configurada, puede configurar el editor de texto predeterminado que se usará cuando Git necesite que escriba un mensaje. Si no está configurado, Git usa el editor predeterminado de su sistema.**

**Si desea utilizar un editor de texto diferente, como Emacs, puede hacer lo siguiente:**
```powershell
$ git config --global core.editor emacs
```
**En un sistema Windows, si desea utilizar un editor de texto diferente, debe especificar la ruta completa a su archivo ejecutable. Esto puede ser diferente dependiendo de cómo esté empaquetado su editor.**

**En el caso de Notepad++, un editor de programación popular, es probable que desee utilizar la versión de 32 bits, ya que en el momento de escribir la versión de 64 bits, La versión bit no es compatible con todos los complementos. Si está en un sistema Windows de 32 bits o tiene un editor de 64 bits en un sistema de 64 bits, escriba algo como esto:**
```powershell
$ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```
```MarkDown
╔══╦═════════════╦══╦══╦══╦══╦══╦══╦═════════════════════════════════════════════════════════════════════════════════════
║  ║             ║  ║  Vim, Emacs y Notepad ++ son editores de texto populares que los desarrolladores utilizan a menudo en Unix-
║  ║             ║  ║  sistemas basados en Linux y macOS o un sistema Windows. Si está usando otro
║  ║ Nota        ║  ║  editor, o una versión de 32 bits, encuentre instrucciones específicas sobre cómo configurar su               ║  ║             ║  ║  editor favorito  con Git en los comandos [git config core.editor]()
╠══╬═════════════╬══╬══╬══╬══╬══╬══╬═════════════════════════════════════════════════════════════════════════════════════
║  ║ Advertencia ║  ║  Es posible que, si no configura su editor de esta manera,se meta en un estado realmente confuso
║  ║             ║  ║  cuando Git intenta iniciarlo. Un ejemplo en un sistema Windows puede incluir en 
║  ║             ║  ║  La operación de Git terminó prematuramente durante una edición iniciada por Git.
╠══╬═════════════╬══╬══╬══╬══╬══╬══╬═════════════════════════════════════════════════════════════════════════════════════
```

## **Su nombre de branch predeterminado**

**Por defecto, Git creará una rama llamada master cuando crees un nuevo repositorio con `git init`. A partir de la versión 2.28 de Git en adelante, puede establecer un nombre diferente para la rama inicial.**

**Para establecer main como el nombre de rama predeterminado, haga lo siguiente:**

```powershell
$ git config --global init.defaultBranch main
```

## **Comprobación de su configuración**

**Si desea verificar sus ajustes de configuración, puede usar el comando `git config --list` para enumerar todos los ajustes que Git puede encontrar en ese punto:**

```powershell
$ git config --list
user.name=Git-Guia-AahhsSjsj
user.email=Git-Guia-AahhsSjsj@ejemplo.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
```
**Es posible que vea las claves más de una vez, porque Git lee la misma clave de diferentes archivos `([path]/etc/gitconfig` y `~/.gitconfig`, por ejemplo). En este caso, Git usa el último valor para cada clave única que ve.**

**También puede verificar lo que Git cree que es el valor de una clave específica escribiendo `git config <key>`:**

```powershell
$ git config user.name
Git-Guia-AahhsSjsj
```

```MarkDown
 Nota: Dado que Git puede leer el mismo valor de variable de configuración de más de un archivo, es posible que tenga un valor inesperado para uno de estos valores y no sepa por qué. En casos como ese, puede consultar a  Git sobre el origen de ese valor, y le dirá qué archivo de configuración tuvo la última palabra en la configuración de ese valor:
```
```powershell
$ git config --show-origin rerere.autoUpdate file:/home/johndoe/.gitconfig	false
```
**GRAX POR VER ESTA MINI GUIA LO PUEDES VER MAS EN SU PAGINA OFFICIAL [CLICK AQUI](https://git-scm.com)**
**O SU DOCUMENTACION: [https://git-scm.com/doc]**