import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const Social = () => {
  return (
        <div className="flex mt-5 justify-center gap-8">
        <span>
            <a
              href="https://www.linkedin.com/in/shakil-hossian-757817263/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-7 h-7 text-blue-500"></FaLinkedin>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/Shakil57375"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-7 h-7 text-black"></FaGithub>
            </a>
          </span>
          
          <span>
            <a
              href="https://web.facebook.com/profile.php?id=100056182026221"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="w-7 h-7 text-blue-500"></FaFacebook>
            </a>
          </span>
          
       
        </div>
  )
}

export default Social