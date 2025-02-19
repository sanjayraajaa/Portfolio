import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';

const SocialIcons = () => {
    return (
        <div className="social_icons flex gap-4 mt-4">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
            <a href="mailto:your@email.com">
                <img src={mail} alt="Email" className="w-8 h-8 hover:opacity-80 transition-all" />
            </a>
        </div>
    );
};

export default SocialIcons;
