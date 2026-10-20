import ProductCard from "../components/ProductCard"


const produtos = [
  {
    id: 1,
    nome: "Figura Colecionável 1",
    preco: "199,90",
    descricao: "Figura para colecionadores.",
    imagem: "../src/assets/produto-1.jpg"
  },
  {
    id: 2,
    nome: "Figura Colecionável 2",
    preco: "249,90",
    descricao: "Detalhes para sua coleção.",
    imagem: ".../src/assets/produto-2.jpg"
  },
  {
    id: 3,
    nome: "Figura Colecionável 3",
    preco: "159,90",
    descricao: "Uma opção para presentear.",
    imagem: "../src/assets/produto-3.jpg"
  },
  {
    id: 4,
    nome: "Figura Colecionável 4",
    preco: "299,90",
    descricao: "Destaque para sua coleção.",
    imagem: "../src/assets/produto-4.jpg"
  }
]

const Home = () => {
  return (
    <main>
      <section>
        <img
          src="../src/assets/banner-loja.jpg"
          alt="Apresentação da loja de brinquedos"
        />
      </section>

      <section>
        <h2>Produtos em destaque</h2>

        <div>
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home