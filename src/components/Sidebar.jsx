import Avatar from '../img/eu.png'
import '../styles/components/Sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

function Sidebar() {
    return (
      <aside id="sidebar">
        <img src={Avatar} alt="Ricardo Barbosa" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="" className="btn">Download</a>
      </aside>
    );
  };

export default Sidebar