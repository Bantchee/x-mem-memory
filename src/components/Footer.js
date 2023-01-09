import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
    return (
        <div
            className="flex justify-center content-center bg-yellow-400 gap-2 pt-6 pb-6"
        >
            <h1
                className=" text-4xl font-bold ">
                Made By J. Steven Jarrett
            </h1>
            <a 
                href="https://github.com/Bantchee"
                rel="noreferrer"
                target="_blank"
                className="flex content-center"
            >
                <FontAwesomeIcon 
                    icon={faGithub}
                    className="w-12 h-12"
                />
            </a>
        </div>
    );
}

export default Footer;