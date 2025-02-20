import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';
import '../style/Home.css';

const SocialIcons = () => {
    return (
        <div className='soc_containder'>
            <a href="https://instagram.com/sanjayraajaa" target="_blank" rel="noopener noreferrer" className='soc_link'>
                <img src={instagram} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
            <a href="https://github.com/sanjayraajaa" target="_blank" rel="noopener noreferrer" className='soc_link'>
                <img src={github} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
            <a href="https://linkedin.com/in/sanjayraajaa" target="_blank" rel="noopener noreferrer" className='soc_link'>
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
            <a href="mailto:thesanjayraja@gmail.com" className='soc_link'>
                <img src={mail} alt="Email" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
        </div>
    );
};

export default SocialIcons;
