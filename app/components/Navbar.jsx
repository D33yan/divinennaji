import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function NavBar() {
    return (
        <div className="navbar bg-base-200 flex flex-col sm:flex-row justify-between items-center sm:items-stretch">
            <a className="text-3xl font-extrabold font-serif bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-violet-800 to-pink-800">
                DivineRealm
            </a>
            <div className="space-x-3 mt-3 sm:mt-0 flex sm:inline-flex">
                <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">About</a>
                <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">Projects</a>
                <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">Contact Me</a>
            </div>
            <div className="flex space-x-4 mt-3 sm:mt-0">
                <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </div>
    )
}
