import { Link } from "react-router"


const Error = () => {
  return (
    <div className="flex items-center flex-col min-h-screen justify-center w-full text-white"> 
        <h1 className="font-bold text-4xl mb-4 flex justify-center text-center">404 Error <br />Página não encontrada</h1>
        <p className="italic text-1xl mb-4">Você caiu em uma página que não existe</p>

<Link  className=" bg-gray-50/20 py-1 px-4 rounded-md "to="/">Voltar para a página inicial</Link>

    </div>
  )
}

export default Error