import Input from "../../components/input/input";
import Header from "../../components/Header/header";
import { useState, FormEvent } from "react";
import { FiTrash } from "react-icons/fi";
import {db} from '../../services/firebaseConnection'

import {
  addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc,
} from 'firebase/firestore'

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");


function handleRegister(e: FormEvent){
e.preventDefault();

if(nameInput === '' || urlInput === '' ){
alert('preencha todo os campos')
return;
}

addDoc(collection(db, "links"), {
  name: nameInput,
  url: urlInput,
  bg: backgroundColorInput,
  color: textColorInput,
  created: new Date()
})
.then(()=>{
console.log('cadastrado com sucesso')
setNameInput('')
setUrlInput('')
})
.catch((error)=>{
  console.log("erro ao cadastrar no banco" + error)
})

}

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 " >
      <Header />
      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">Nome do Link</label>
        <Input
          placeholder="digite o nome do link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">Url do Link</label>
        <Input
          type="url"
          placeholder="digite a url..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              Cor do Link
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              Fundo do Link
            </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border-1 rounded-md">
            <label className="text-white font-medium mt-2 mb-3">
              Veja como está ficando:
            </label>
            <article
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button
          type="submit"
          className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>


    <h2 className="font-bold text-white mb-4 text-2xl">
      Meus Links
    </h2>
 
    <article 
    style={{backgroundColor: '#2363eb', color: "#fff"}}
    className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none">
      <p>Canal do Youtube</p>
      <div>
        <button
        className="border border-dashed p-1 rounded bg-black"
        >
<FiTrash size={18} color="#fff"/>
        </button>
      </div>
    </article>

    </div>
  );
};

export default Admin;
