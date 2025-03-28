import Input from "../../components/input/input";
import Header from "../../components/Header/header";
import { useState, FormEvent, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

const Networks = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");


useEffect(()=>{
function loadLinks(){
const docRef = doc(db, "social", "link")
getDoc(docRef)
.then((snapshot)=>{
if(snapshot.data() !== undefined){
  setFacebook(snapshot.data()?.facebook)
  setInstagram(snapshot.data()?.instagram)
  setLinkedin(snapshot.data()?.linkedin)
  setGithub(snapshot.data()?.github)
}
})
}

loadLinks()
}, [])


  function handleRegister(e: FormEvent) {
    e.preventDefault();
    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
      github: github,
    })
    .then(() => {
      console.log('cadastrados com sucesso')
    })
    .catch((error) =>{
      console.log('erro ao cadastrar', error)
    })

  
  }

  return (
    //centraliza o conteúdo
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 ">
      <Header />

      <h1 className="text-white text-2xl font-bold mt-8 mb-4">
        minhas redes sociais
      </h1>
      <form
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
        onSubmit={handleRegister}
      >
        <label className="text-white font-medium mt-2 mb-2">
          Link do Facebook
        </label>
        <Input
          placeholder="digite a url do facebook..."
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          placeholder="digite a url do instagram..."
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do Linkedin
        </label>
        <Input
          placeholder="digite a url do linkedin..."
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do GitHub
        </label>
        <Input
          placeholder="digite a url do github..."
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-600 rounded-md h-9 items-center justify-center flex w-full max-w-xl mb-7 font-medium"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
};

export default Networks;
