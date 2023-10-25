import React from 'react';

function App() {
  return (
    <div>
      <head>
        <title>warzone 2 sucks</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="warzone,daniflow,kk" />
        <meta name="description" content="le tiramos kk a warzone" />
        <meta name="author" content="yomero" />
        <meta name="robot" content="noindex" />
        <link rel="icon" href="imagns de la web/kirbi-comer.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" rel="stylesheet" />
      </head>

      <body>
        <header>
          <nav>
            <ul>
              <li><a href="index.html">Inicio</a></li>
            </ul>
          </nav>
        </header>

        <article>
          <section>
            <div className="perro">
              <h1 className="perro__h1-b"><b>INICIO</b></h1>
              <h2 className="perro__h2">esta pagina es de warzone</h2>
              <a className="perro__a" href="#comparativa">ir a tabla comparativa</a>
              <p className="perro__p">
                warzone 2 es una cagada de perro arriba warzone 1, que chingue a su madre el 2 con nada de respeto.
              </p>
            </div>
            <form>
              <input type="email" required value="minionman" />
              <input type="submit" />
            </form>
            <img src="imagns de la web/descargar.jpeg" alt="warzone" title="juego feo" />
            <table>
              <tr>
                <td><b>juego</b></td>
                <td><b>jugadores</b></td>
                <td><b>diversion</b></td>
              </tr>
              <tr>
                <td>warzone 1</td>
                <td>2.000.000</td>
                <td><b>si</b></td>
              </tr>
              <tr>
                <td>warzone 2</td>
                <td>60,000</td>
                <td>no</td>
              </tr>
            </table>
          </section>
        </article>

        <aside>
          <h1>CONTENIDO EXTRA (ASIDE)</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </aside>

        <footer>
          <p>seguinos en nuestras redes</p>
          <a href="https://www.youtube.com/@minionman666">Youtube</a>
          <a href="https://www.youtube.com/@minionman666">Facebook</a>
          <a href="https://www.youtube.com/@minionman666">instragram</a>
        </footer>
      </body>
    </div>
  );
}

export default App;