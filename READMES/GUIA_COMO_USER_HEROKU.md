# 😀 Guia De Como Hostear Tu Bot En Heroku

# 🧪 The Heroku CLI

### 😎 Tabla de contenido

* **[Descargar e instalar](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#descargar-e-instalar)**
* **[Otros métodos de instalación](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#otros-métodos-de-instalación)**
* **[Verificando su instalación](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#verificando-su-instalación)**
* **[Empezando](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#-empezando-usar-heroku-para-tu-bot)**
* **[Mantenerse al día](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#mantenerse-al-día)**
* **[Complementos útiles de CLI](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#complementos-útiles-de-cli)**
* **[Arquitectura CLI](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#arquitectura-cli)**
* **[Solución de problemas](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#solución-de-problemas)**
* **[Desinstalación de la CLI de Heroku](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/GUIA_COMO_USER_HEROKU.md#desinstalación-de-la-cli-de-heroku)**

### **La interfaz de línea de comandos de Heroku (CLI) facilita la creación y administración de sus aplicaciones de Heroku directamente desde el terminal. Es una parte esencial del uso de Heroku.**

# **Descargar e instalar**
**⚠ La CLI de Heroku requiere Git, el popular sistema de control de versiones. Si aún no tiene Git instalado, complete lo siguiente antes de instalar la CLI:**
* **[Git installation](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/blob/main/READMES/1.5-Getting-Started%20-%20Installing-Git.md)**
* **[First-time Git setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)**

☢ **Actualmente, los instaladores de Windows pueden mostrar una advertencia titulada "Windows protegió su PC". Para ejecutar la instalación cuando se muestra esta advertencia, haga clic en "Más información", verifique el editor como "salesforce.com, inc", luego haga clic en el botón "Ejecutar de todos modos".**

# **🍎 macOS**

```powershell
$ brew tap heroku/brew && brew install heroku
```

# **💣 Windows**

**Descargue el instalador apropiado para su instalación de Windows:**

## **<a href="https://cli-assets.heroku.com/heroku-x64.exe" class="btn btn-primary">64-bit installer</a>**

## **<a href="https://cli-assets.heroku.com/heroku-x86.exe" class="btn btn-primary">32-bit installer</a>**


# **⚔ Ubuntu 16+**

**Ejecute lo siguiente desde su terminal:**

```powershell
$ sudo snap install --classic heroku
```

<a href="https://snapcraft.io/">Snap también está disponible en otros sistemas operativos Linux.</a>

# **Otros métodos de instalación**

## **Instalación autónoma**
**La instalación independiente es un simple tarball con un binario. Contiene su propio binario node.js y se actualizará automáticamente como los métodos de instalación anteriores.**

**Para configurar rápidamente en <code>/usr/local/lib/heroku</code> y <code>/usr/local/bin/heroku</code>, ejecute este script (el script requiere sudo y no es compatible con Windows):**

<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span> curl https://cli-assets.heroku.com/install.sh | sh  
    </span>
  </code>
</pre>

**De lo contrario, descargue uno de los archivos comprimidos a continuación y extráigalo usted mismo.**

## **Tarballs**
**Están disponibles en compresión <code>gz</code> o <code>xz</code>. <code>xz</code> es mucho más pequeño pero <code>gz</code> es más compatible.**

* **[macOS](https://cli-assets.heroku.com/heroku-darwin-x64.tar.gz)**
* **[Linux (x64)](https://cli-assets.heroku.com/heroku-linux-x64.tar.gz)**
* **[Linux (arm)](https://cli-assets.heroku.com/heroku-linux-arm.tar.gz)**
* **[Windows (x64)](https://cli-assets.heroku.com/heroku-win32-x64.tar.gz)**
* **[Windows (x86)](https://cli-assets.heroku.com/heroku-win32-x86.tar.gz)**

## **Ubuntu / Debian apt-get**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span> curl https://cli-assets.heroku.com/install-ubuntu.sh | sh </span>
  </code>
</pre>
**Esta versión no se actualiza automáticamente y debe actualizarse manualmente a través de <code>apt-get</code>. Usa el [snap](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/tree/main/READMES/GUIA_COMO_USER_HEROKU.md#descargar-e-instalar) o [instalación independiente](https://github.com/AahhsSjsj/Bot-Tutoriales-V13/tree/main/READMES/GUIA_COMO_USER_HEROKU.md#instalacion-autonoma) para una versión de actualización automática de la CLI.**

## **Arch Linux**
**[Este packages](https://aur.archlinux.org/packages/heroku-cli) es mantenido por la comunidad y no por Heroku.**

<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span> yay -S heroku-cli  
    </span>
  </code>
</pre>

## **npm**
**La CLI está construida con Node.js y se puede instalar a través de <code>npm.</code> Este es un método de instalación manual que se puede usar en entornos donde la actualización automática no es ideal o donde Heroku no ofrece un binario Node.js prediseñado.**

# **Nota De Advertencia ⚠**
**Se recomienda encarecidamente utilizar uno de los otros métodos de instalación si es posible.**

**Este método de instalación no se actualiza automáticamente y requiere que use la versión de Node.js de su sistema, que puede ser anterior a la versión para la que Heroku desarrolla la CLI. Heroku utiliza versiones muy actuales de Node.js y no admite versiones anteriores. Si utiliza cualquiera de los otros métodos de instalación, la versión adecuada de Node.js ya está incluida y no entra en conflicto con ninguna otra versión de su sistema.**

**Además, este método no usará el archivo de bloqueo de yarn para dependencias como lo hacen los demás (incluso si lo instala con yarn). Esto puede causar problemas si las dependencias de la CLI se vuelven incompatibles en versiones menores o de parches.**

**Este método es útil si desea un control detallado sobre las actualizaciones de CLI, como en un script probado.**

**Este método de instalación es necesario para los usuarios de ARM y BSD. Debe tener <code>node</code> y <code>npm</code> ya instalados.**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span> npm install -g heroku
    </span>
  </code>
</pre>

## **Verificando su instalación**
**Para verificar la instalación de su CLI, use el comando <code>heroku --version</code>:**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>heroku --version
heroku/7.0.0 (darwin-x64) node-v8.0.0
    </span>
  </code>
</pre>

**Debería ver <code>heroku/x.y.z</code> en la salida. Si no es así, pero ha instalado la CLI de Heroku, es posible que tenga una antigua gema <code>heroku</code> en su sistema. Desinstale con estas [instrucciones]().**

# **🎵 Empezando Usar Heroku Para Tu Bot**
**Después de instalar la CLI, ejecute el comando <code>heroku login</code>. Se le pedirá que ingrese cualquier clave para ir a su navegador web y completar el inicio de sesión. La CLI lo iniciará automáticamente.**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com
    </span>
  </code>
</pre>
**Si prefiere permanecer en la CLI para ingresar sus credenciales, puede ejecutar <code>heroku login -i</code>**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>heroku login -i
heroku: Enter your login credentials
Email: me@example.com
Password: ***************
Two-factor code: ********
Logged in as me@heroku.com
    </span>
  </code>
</pre>
**La CLI guarda su dirección de correo electrónico y un token de API en ~ / .netrc para uso futuro. Para obtener más información, consulte [Autenticación CLI de Heroku.](https://devcenter.heroku.com/articles/authentication)**

**Ahora está listo para crear su primera aplicación Heroku:**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>cd ~/myapp
heroku create
Creating app... done, ⬢ sleepy-meadow-81798
https://sleepy-meadow-81798.herokuapp.com/ | https://git.heroku.com/sleepy-meadow-81798.git
    </span>
  </code>
</pre>
**Consulte la guía de introducción de su idioma preferido para obtener una [introducción completa a la implementación de su primera aplicación](https://devcenter.heroku.com/start).**

## **Mantenerse al día**
**La CLI de Heroku se mantiene a sí misma y a sus complementos (excepto los complementos vinculados) actualizados automáticamente, a menos que haya instalado el paquete Debian/Ubuntu o haya utilizado <code>npm install.</code>**

**Cuando ejecuta un comando <code>heroku</code>, un proceso en segundo plano busca la última versión disponible de la CLI. Si se encuentra una nueva versión, se descarga y se almacena en <code>~/.local/share/heroku/client</code>. Esta verificación de antecedentes se realiza como máximo una vez cada 4 horas.**

**El binario <code>heroku</code> busca un cliente actualizado en <code>~/.local/share/heroku/client</code> antes de usar el cliente instalado originalmente.**

## **SHA de la última versión**
### **Darwin**
* **[x64](https://cli-assets.heroku.com/darwin-x64)**
### **Linux**
* [arm](https://cli-assets.heroku.com/linux-arm)
* [x64](https://cli-assets.heroku.com/linux-x64)
### **Windows**
* **[x64](https://cli-assets.heroku.com/win32-x64)**
* **[x86](https://cli-assets.heroku.com/win32-x86)**

# **Complementos útiles de CLI**
**Los complementos de CLI le permiten ampliar su instalación de CLI. Instale un complemento CLI con complementos <code>heroku</code>**
**<code>plugins:install someplugin</code>. Consulte Uso de [complementos de CLI](https://devcenter.heroku.com/articles/using-cli-plugins) para obtener más información sobre la administración de complementos.**

**Aquí hay algunos complementos útiles que puede querer probar:**

* **[heroku-builds]() — Ver compilaciones, purgar la caché de compilación y crear compilaciones a partir de tarballs**
* **[heroku-repo]() — Comandos para manipular el repositorio de Heroku git de una aplicación**
* **[api]() — Realizar solicitudes de API ad-hoc (como <code>heroku api GET /account</code>)**
* **[heroku-pg-extras]() — Agregue extra <code>heroku pg:*</code> comandos**
* **[heroku-slugs]() — Descarga slugs de aplicaciones**
* **[heroku-kafka]() — Administrar Heroku Kafka**
* **[heroku-papertrail]() — Visualización, seguimiento y búsqueda de registros con Papertrail**

# **Arquitectura CLI**
**La CLI de Heroku está construida con Open CLI Framework([oclif](https://oclif.io/)) , desarrollado dentro de Heroku / Salesforce. oclif está disponible como marco para que cualquier desarrollador cree una CLI grande o pequeña. El marco incluye un generador de CLI, creación de documentación automatizada e infraestructura de prueba.**

**El código para la CLI de Heroku también es [open source](https://github.com/heroku/cli) *No* requiere Node.js ni ninguna otra dependencia para ejecutarse. A menos que instale el paquete Debian/Ubuntu o use <code>npm install</code>, la CLI contiene su propio binario Node.js que no entra en conflicto con otras aplicaciones.**

# **Solución de problemas**
**Si tiene problemas con la CLI, primero asegúrese de estar usando la [última versión](http://cli-assets.heroku.com/version). Si no es así, intente actualizar con <code>heroku update</code>.**

**🏆 No todos los métodos de instalación admiten la <code>actualización de heroku.</code>**
* **Si instaló la CLI con <code>apt</code>, debe usar <code>sudo apt-get update && sudo apt-get upgrade heroku</code> en su lugar.**
* **Si instaló la CLI con <code>npm</code> o <code>yarn</code>, debe usar <code>npm upgrade -g heroku</code> o <code>yarn global upgrade heroku en su lugar</code>.**

**Si la CLI no se actualiza, intente desinstalarla con el [instrucciones a continuación](https://devcenter.heroku.com/articles/heroku-cli#uninstalling-the-heroku-cli),luego reinstalarlo. Asegúrese de no tener instalado el cinturón de herramientas Heroku o la gema Heroku Ruby heredados utilizando <code>which heroku</code> o <code>where heroku</code> (en Windows) para confirmar a qué apunta el comando heroku. Es posible que deba modificar su <code>PATH</code> para incluir <code>/usr/local/bin/heroku</code> (para la mayoría de las instalaciones).**

**Si aún tiene un problema, puede configurar las siguientes variables de entorno de depuración para ayudar a diagnosticarlo:**

**Environment Variable | Description**

**`HEROKU_DEBUG=1` = Muestra información de depuración relacionada principalmente con las interacciones de la API de Heroku**

**`HEROKU_DEBUG_HEADERS=1` = Junto a `HEROKU_DEBUG=1`, muestra encabezados HTTP**

**`DEBUG=*` = Muestra información de depuración muy detallada**

**También puede consultar el archivo de registro de errores de la CLI, que se almacena en una de las siguientes ubicaciones según su sistema operativo:**

**OS              |           Location**

**macOS = <code>~/Library/Caches/heroku/error.log</code>**

**Windows = <code>%LOCALAPPDATA%\heroku\error.log</code>**

**Linux/Other	= <code>~/.cache/heroku/error.log</code> (o <code>XDG_CACHE_HOME</code> si está configurado)**


**Si continúa teniendo problemas y la CLI está actualizada, o si la actualización falla por otros motivos, puede restablecer la CLI eliminando sus directorios de usuario. Estos directorios se reemplazan automáticamente y no se cerrará la sesión, pero perderá todos los complementos instalados.**

**Primero, ejecute <code>heroku plugins</code> para enumerar los complementos instalados para que pueda asegurarse de reinstalarlos.**
**Luego, elimine los siguientes directorios:**

### **Windows:**

* **<code>%LOCALAPPDATA%\heroku</code>**

### **macOS/Linux/Other:**

* **<code>~/.local/share/heroku</code> (o <code>XDG_DATA_HOME</code> si está configurado)**
* **Ya sea <code>~/Library/Caches/heroku</code> en macOS, o <code>~/.cache/heroku</code> en Linux / Other (o <code>XDG_CACHE_HOME</code> si está configurado)**

## **Problemas para entrar**

**Si tiene problemas para iniciar sesión, intente mover su archivo .netrc. Aquí es donde la CLI almacena las credenciales:**

<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>mv ~/.netrc ~/.netrc.backup
 $ heroku login
    </span>
  </code>
</pre>
**En Windows, el archivo se llama <code>_netrc</code>.**

## **Problemas específicos de Homebrew**

**Si recibe advertencias heredadas a pesar de que instaló la última versión homebrew de <code>heroku</code>, esto sucede porque el comando binario heroku en su variable de entorno <code>PATH</code> no apunta a la versión que brew instaló.**

**Primer intenta <code>which heroku</code> para ver a qué apunta <code>heroku</code> binario. Si no es <code>/usr/local/bin/heroku</code>, debe eliminar el binario al que apunta, o hacer <code>/usr/local/bin/</code> más arriba en su variable de entorno PATH modificando su archivo <code>~/.bashrc</code> o equivalente.**


**A continuación, ejecute <code>brew link --overwrite heroku</code> para asegurarse de que <code>/usr/local/bin/heroku</code> apunte a la nueva CLI. Si continúa teniendo problemas, ejecute <code>brew doctor</code>, que debería señalar cualquier problema con su sistema.**

## **Desinstalación de la CLI de Heroku**

### **Nota De Advertencia**
**`Tenga en cuenta que esto también elimina todos los complementos de CLI.`**

### **macOS**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>rm -rf /usr/local/heroku /usr/local/lib/heroku /usr/local/bin/heroku ~/.local/share/heroku ~/Library/Caches/heroku
    </span>
  </code>
</pre>
### **Homebrew**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>brew uninstall heroku
 $ rm -rf ~/.local/share/heroku ~/Library/Caches/heroku
    </span>
  </code>
</pre>
### **Linux**
#### **Instalaciones independientes**

**Para instalaciones independientes, puede desinstalar la CLI escribiendo:**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>rm /usr/local/bin/heroku
 $ rm -rf /usr/local/lib/heroku /usr/local/heroku
 $ rm -rf ~/.local/share/heroku ~/.cache/heroku
    </span>
  </code>
</pre>
#### **Instalaciones de Debian y Ubuntu**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>sudo apt-get remove heroku heroku-toolbelt
 $ sudo rm /etc/apt/sources.list.d/heroku.list
    </span>
  </code>
</pre>

**Si tiene <code>$XDG_DATA_HOME</code> y / o <code>$XDG_CACHE_HOME</code>, usará esas variables en lugar de <code>~/.local/share</code> y <code>~/.cache.</code>**

**Puede eliminar la clave de lanzamiento ejecutando estos comandos:**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>sudo apt-key list
 $ sudo apt-key del KEYFROMABOVE
    </span>
  </code>
</pre>

### **Windows**

**En Windows, para desinstalar la CLI de Heroku:**

**1. Haga clic en <code>Start > Control Panel > Programs > Programs and Features.</code>**

**2. Seleccione <code>Heroku CLI</code> y luego haga clic en <code>Uninstall</code>. (Tenga en cuenta que el desinstalador no está firmado)**

#### **Nota**
**El desinstalador de Windows no se actualiza automáticamente junto con la CLI. Si ha pasado un tiempo desde que instaló la CLI por primera vez y está intentando desinstalarla para solucionar un problema, es posible que primero deba instalar manualmente la última versión de la CLI para obtener un desinstalador actualizado.**


**Si esto no tiene éxito, elimine manualmente <code>%LOCALAPPDATA%\heroku</code> junto con el directorio en Archivos de programa.**

## **Desinstalación de la gema heroku heredada**

**Para saber dónde se encuentra el ejecutable, ejecute <code>which</code>**

<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>which heroku
 /usr/local/heroku/bin/heroku
    </span>
  </code>
</pre>
**La ruta al comando <code>heroku</code> no debe ser un directorio de gemas de Ruby.**

**Si es así, desinstálelo y cualquier otra gema <code>heroku</code>:**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span>gem uninstall heroku --all
    </span>
  </code>
</pre>