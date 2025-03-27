import Social from "../../components/Social/social";
import { FaFacebook, FaInstagram, FaDiscord, FaYoutube, FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className=" md:text-4xl text-3xl font-bold text-white mt-20">
        José Levy
      </h1>
      <span className="text-gray-50 mb-5 mt-3 ">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12  max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a href="">
            <p className="text-base md:text-lg">
              Instagram
            </p>
          </a>
        </section>

      <footer className="flex justify-center gap-3 my-4"> 
<Social url='https://www.facebook.com/joselevy.rodrigues/'>
  <FaFacebook size={35} color="white"/>
</Social>
<Social url='https://www.youtube.com/@joselevy204'>
  <FaYoutube size={35} color="white"/>
</Social>
<Social url='https://www.facebook.com/joselevy.rodrigues/'>
  <FaDiscord size={35} color="white"/>
</Social>
<Social url='https://www.instagram.com/rodrigues_jlevy/'>
  <FaInstagram size={35} color="white"/>
</Social>
<Social url='https://www.linkedin.com/in/jos%C3%A9-levy-rodrigues-da-silva-47015a301?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BH9V9vuvmTXe5CPyyG%2FNEJQ%3D%3D'>
  <FaLinkedin size={35} color="white"/>
</Social>
      </footer>

      </main>
    </div>
  );
};

export default Home;
