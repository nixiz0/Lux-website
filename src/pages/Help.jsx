import { Helmet } from 'react-helmet';
import '../css-style/help.css';

import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import python_install from '../0-ressources/help/python_install.png';
import cuda_install from '../0-ressources/help/cuda_install.png';
import vscommunity_install from '../0-ressources/help/vscommunity_install.png';
import env_file from '../0-ressources/help/env_file.png';


function Help() {
  return (
    <>
      <Helmet>
        <title>Help Page</title>
      </Helmet>
      <Navbar />

      <div className="table-of-contents">
        <h2>Sommaire</h2>
        <ul>
          <li><a href="#installation-help">Problèmes d'installations</a></li>
          <li><a href="#restart-install-help">Relancer l'installation (conseil)</a></li>
          <li><a href="#narrator-help">Voix du Narrateurs Windows</a></li>
        </ul>
      </div>

      <div className="help-text" id="installation-help">
        <h2>Problèmes d'installations</h2>
        <p>
          Si vous avez des problèmes lors de l'installation, veuillez
          lire attentivement les conseils et astuces ci-dessous.
        </p>

        <div>
          <h4>Les applications essentiells à installer pour utiliser Lux</h4>
          <ul>
            <li><a href="https://ollama.com/download/windows" target="_blank">Ollama</a></li>
            <li><a href="https://www.python.org/downloads/release/python-3117/" target="_blank">Python 3.11</a></li>
            <li><a href="https://developer.nvidia.com/cuda-11-8-0-download-archive" target="_blank">CUDA 11.8</a></li>
            <li><a href="https://visualstudio.microsoft.com/fr/visual-cpp-build-tools/" target="_blank">VS Community</a></li>
          </ul>
          <br/>
          <p>
            <i style={{color: 'red', fontSize: "1.15em"}}>Attention à bien vérifier</i>
          </p>
          <p>
            Lors de l'installation de Python vous avez bien ajouté votre Python 3.11 dans 
            vos variables d'environnements Windows & que vous n'avez qu'un seul Python d'installé
            (pour éviter tout risque de compatibilité).
          </p>
          <img src={python_install} alt="Python Installation" />

          <br></br>
          <br></br>
          <p>
            Lors de l'installation de CUDA, vérifiez bien que votre carte graphique est 
            compatible avec CUDA de NVIDIA.
          </p>
          <img src={cuda_install} alt="CUDA Installation" />

          <br></br>
          <br></br>
          <p>
            Lors de l'installation de VS Community, veuillez télcharger le package
            <b> Desktop development with C++</b>.
          </p>
          <img src={vscommunity_install} alt="VS Community Installation" />
        </div>

        <br></br>
        <br></br>

        <div>
          <h4>Installations supplémentaires (si nécessaire)</h4>
          <p>
            Normalement lors du lancement du .exe de l'assistant scoop et ffmpeg s'installent
            automatiquement. Si cela n'est pas le cas il faut les installer manuellement comme ceci :
          </p>
          <p>
            Scoop <i>(ouvrir powersheel et taper)</i> : 
            <br></br><br></br>
            <span style={{color : 'orange'}}><code>powershell -Command "Set-ExecutionPolicy RemoteSigned -scope CurrentUser"</code></span>
            <br></br><br></br>
            <span style={{color : 'orange'}}><code>powershell -Command "iex (new-object net.webclient).downloadstring('https://get.scoop.sh')"</code></span>
          </p>
          <br></br>
          <p>
            ffmpeg <i>(ouvrir powersheel et taper)</i> : 
            <br></br><br></br>
            <span style={{color : 'orange'}}><code>scoop install ffmpeg</code></span>
          </p>
        </div>
      </div>

      <div className="help-text" id="restart-install-help">
        <h2>Relancer l'installation (conseil)</h2>
        <p>
          <b style={{color: 'red'}}>Attention</b> si vous avez lancé le .exe de l'assistant et que vous avez eu une 
          erreur, il faut pensr à aller dans le dossier de l'assistant et supprimer le <b>.env</b>
        </p>
        <img src={env_file} alt="Env File" />
        <p>
          Si par exemple vous avez oublié d'installer Ollama ou une autre applications essentielles et que lorsque vous 
          lancez l'assistant vous avez eu une erreur, vous devez alors maintenant que vous avez corrigé le problème, supprimer 
          le dossier .env et seulement ensuite relancer le .exe de l'assistant, car sinon l'installation des librairies aura 
          été perturbé et donc vous aurez des soucis de librairies non reconnu.
        </p>
      </div>

      <div className="help-text" id="narrator-help">
        <h2>🎙️ Installer Plus de Voix du Narrateurs Windows</h2>
        <p>Si vous avez installé des voix du narrateur sur Windows mais qu'ils n'apparaissent pas lors de la sélection dans votre interface dans la page configuration, il faut faire cette manipulation.</p>

        <h2>🎙️ Voix du Narrateur Windows</h2>
        <p>Pour utiliser les Voix du Narrateur Windows au lieu des voix clonées, vous pouvez télécharger plus de voix synthétiques à partir des paramètres du narrateur.</p>
        <p>Si les voix que vous avez installées ne sont pas reconnues, suivez ces étapes :</p>

        <ul>
          <li><strong>1. Ouvrez l'Éditeur du Registre</strong> :
            <ul>
              <li style={{color : 'orange'}}>Appuyez simultanément sur les touches “Windows” et “R”, tapez “regedit”, et appuyez sur Entrée.</li>
            </ul>
          </li>
          <li><strong>2. Naviguez vers la Clé de Registre</strong> :
            <ul>
              <li style={{color : 'orange'}}><code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech_OneCore\Voices\Tokens</code></li>
            </ul>
          </li>
          <li><strong>3. Exportez la Clé vers un Fichier REG</strong> :
            <ul>
              <li style={{color : 'orange'}}>Faites un clic droit sur la clé et sélectionnez "Exporter".</li>
            </ul>
          </li>
          <li><strong>4. Éditez le Fichier REG</strong> :
            <ul>
              <li style={{color : 'orange'}}>Ouvrez le fichier REG avec un éditeur de texte.</li>
              <li style={{color : 'orange'}}>Remplacez toutes les occurrences de <code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech_OneCore\Voices\Tokens</code> par <code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SPEECH\Voices\Tokens</code>.</li>
            </ul>
          </li>
          <li><strong>5. Importez le Fichier REG Modifié</strong> :
            <ul>
              <li style={{color : 'orange'}}>Enregistrez le fichier modifié et double-cliquez dessus pour importer les modifications dans le registre.</li>
            </ul>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default Help