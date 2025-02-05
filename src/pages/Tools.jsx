import { Helmet } from 'react-helmet';
import '../css-style/tools.css';

import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import lux_github_tools from '../0-ressources/lux-illustration/lux-github-tools.png';
import lux_import_tools from '../0-ressources/lux-illustration/lux-tools-import.png';


function Tools() {
  return (
    <>
      <Helmet>
        <title>Tools Page</title>
      </Helmet>
      <Navbar />

      <div className="tools-container">
        <div className="text-tools">
          <h3>
            Bienvenue dans la page sur les Outils de Lux
          </h3>
          <p>Retrouvez ici l'explication d'installation d'outils.</p>
        </div>

        <div className="text-tools">
          <p>
            Pour intégrer un outil que vous voulez il suffit de télécharger le/les fichier(s) 
            ZIP d'outils que vous souhaitez utiliser.
            <a href="https://github.com/nixiz0/Lux-Tools" target="_blank">
              <b style={{color: 'cyan'}}> Retrouvez-ici tous les outils</b>
            </a>
          </p>
          <br/>
          <img src={lux_github_tools} alt="Lux Import Tools Image" />
          <p>
          <i>Illustration de la page des outils sur GitHub</i>
          </p>
        </div>

        <div className="text-tools">
          <p>
            Ensuite allez dans la page <b>configuration</b> de l'interface de votre assistant
            et allez en bas puis cochez <i>Importer Outils</i>, ici vous importez vos dossiers ZIP un par un.
          </p>
          <br/>
          <img src={lux_import_tools} alt="Lux Import Tools Image" />
          <p>
            <i>Illustration de la page configuration de Lux Interface</i>
          </p>
          <br/>
          <p>
            Ensuite, une fois que vous avez mis tous vos fichiers ZIP, vous cliquez sur le bouton 
            "Ajouter vos outils importés" (il se peut que vous deviez redémarrer votre
            assistant pour que les imports fonctionnent).
          </p>
        </div>

        <div className="text-tools">
          <p>
            Voilà, maintenant vous savez comment importer des outils dans votre <b>Assistant</b>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Tools