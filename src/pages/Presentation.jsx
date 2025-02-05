import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../css-style/presentation.css';

import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import lux_logo from '../0-ressources/logo-lux.png';
import lux_installer_exe from '../0-lux-installer/Lux-Interface-Installer.exe';


function Presentation() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Lux Assistant</title>
      </Helmet>
      <Navbar />

      <div className="presentation-container">
        <div className="lux-logo">
            <img src={lux_logo} alt="Lux Assistant Interface" />
        </div>

        <div className="intro-text-section">
            <h2>Découvrez Lux, votre Jarvis personnalisable.</h2>
            <p>Modulable, flexible, adaptable, installer Lux et construisez votre assistant comme bon vous semble !</p>
            <p><b style={{color: 'yellow'}}>Dans un monde ou la Data est d'or, l'utilisation en local est son coffre fort.</b></p>
        </div>

        <div className="download_lux">
          <h2><b>Télécharger Lux</b></h2>
            <a href={lux_installer_exe} download="Lux_Installer.exe" style={{color: 'cyan'}}>
              cliquez-ici
            </a>
        </div>

        <div className="faq-container">
          <h3>Questions fréquemment posées</h3>
          <div className="faq-item" onClick={() => toggleAnswer(0)}>
            <h5>Dois-je avoir un bon PC pour utiliser l'assistant ?</h5>
            <div className={`faq-answer ${openIndex === 0 ? 'open' : ''}`}>
              <p>
                Vous n'avez pas besoin d'une machine de guerre non plus mais un bon ordinateur est fortement 
                conseillé. Au minimum une RTX avec 8go voir 16go de RAM est recommandé. Après vous pouvez toujours 
                essayer l'assistant sur votre ordinateur actuel pour voir si les performances sont bonnes ou pas.
              </p>
            </div>
          </div>
          <div className="faq-item" onClick={() => toggleAnswer(1)}>
            <h5>Sur quels systèmes d'exploitation Lux est compatible, Windows ? Mac ? Linux ?</h5>
            <div className={`faq-answer ${openIndex === 1 ? 'open' : ''}`}>
              <p>
                L'assistant Lux est seulement compatible sur Windows.
              </p>
            </div>
          </div>
          <div className="faq-item" onClick={() => toggleAnswer(2)}>
            <h5>Puis-je utiliser l'assistant sans connexion internet ? </h5>
            <div className={`faq-answer ${openIndex === 2 ? 'open' : ''}`}>
              <p>
                Oui, le but de l'utilisation en local du système c'est de principalement pouvoir 
                utiliser l'assistant sans avoir besoin d'être connecté à Internet (hormis lors de l'installation).
              </p>
            </div>
          </div>
          <div className="faq-item" onClick={() => toggleAnswer(3)}>
            <h5>Je n'arrive pas à installer l'assistant, j'ai des erreurs et ou des bugs qui m'empêche d'utiliser Lux, que faire ?</h5>
            <div className={`faq-answer ${openIndex === 3 ? 'open' : ''}`}>
              <p>
                Allez dans la page <Link smooth to="/help"><b style={{color: 'cyan'}}>page d'aide </b></Link>
                où vous retrouverez les erreurs les plus courantes et les solutions appropriés ainsi que des conseils.
              </p>
            </div>
          </div>
          <div className="faq-item" onClick={() => toggleAnswer(4)}>
            <h5>Est-ce qu'avoir son assistant Lux et l'utiliser c'est payant ?</h5>
            <div className={`faq-answer ${openIndex === 4 ? 'open' : ''}`}>
              <p>
                Non, tout est gratuit et Open-Source.
              </p>
            </div>
          </div>
          <div className="faq-item" onClick={() => toggleAnswer(5)}>
            <h5>Lors de l'exécution de l'exécutable mon antivirus me dit que ce n'est pas sécurisé, est-ce dangereux ?</h5>
            <div className={`faq-answer ${openIndex === 5 ? 'open' : ''}`}>
              <p>
                Non, çe problème est du au fait que Lux ne possède pas de certificat d'identification, 
                donc les antivirus ne le reconnaissent pas et pour protéger l'utilisateur il le 
                bloque directement. Ca ne veut pas dire qu'il contient des virus et si vous avez un 
                doute le code est Open-Source, donc libre à tout le monde de voir ce que contient 
                l'assistant de A à Z.
                <a href="https://github.com/nixiz0/Lux" target="_blank" style={{color: 'cyan'}}> Vous pouvez le retrouver ici</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Presentation