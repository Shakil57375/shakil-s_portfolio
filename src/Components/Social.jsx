import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
const Social = () => {
  return (
    <div className="flex flex-col mt-5 justify-center gap-3 z-50">
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
      <span>
        <a
          href="https://twitter.com/ShakilHoss25740"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="w-7 h-7 text-blue-500"></FaTwitter>
        </a>
      </span>
      <span>
        <a
          href="https://www.instagram.com/shakil57375/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="w-7 h-7 text-red-500"></FaInstagram>
        </a>
      </span>

      <span>
        <a
          href="https://discord.com/channels/@me/1113122411886424176"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord className="w-7 h-7 text-white"></FaDiscord>
        </a>
      </span>
      
    </div>
  );
};

export default Social;
