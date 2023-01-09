import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
    return (
        <div
            className="row-span-1 flex justify-center content-center bg-yellow-400"
        >
            <div
                className="mt-auto mb-auto flex justify-center content-center gap-2"
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
            
        </div>
    );
}

export default Footer;