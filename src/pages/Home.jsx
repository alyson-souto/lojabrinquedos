import ProductCard from "../components/ProductCard"


const produtos = [
  {
    id: 1,
    nome: "Figura Colecionável 1",
    preco: "199,90",
    descricao: "Figura para colecionadores.",
    imagem: "/images/produto-1.jpg"
  },
  {
    id: 2,
    nome: "Figura Colecionável 2",
    preco: "249,90",
    descricao: "Detalhes para sua coleção.",
    imagem: "/images/produto-2.jpg"
  },
  {
    id: 3,
    nome: "Figura Colecionável 3",
    preco: "159,90",
    descricao: "Uma opção para presentear.",
    imagem: "/images/produto-3.jpg"
  },
  {
    id: 4,
    nome: "Figura Colecionável 4",
    preco: "299,90",
    descricao: "Destaque para sua coleção.",
    imagem: "/images/produto-4.jpg"
  }
]

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section>
        <img
          src="/images/banner-loja.jpg"
          alt="Apresentação da loja de brinquedos"
          className="h-[280px] w-full rounded-xl object-cover sm:h-[400px] lg:h-[520px]"
        />
      </section>

      <section className="mt-8 rounded-2xl bg-[#F5F5F3] px-4 py-10 sm:px-6 lg:px-8">
  <div className="mb-6">
    <p className="text-sm font-semibold uppercase tracking-widest text-[#A48742]">
      Seleção especial
    </p>

    <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
      Produtos em destaque
    </h2>

    <p className="mt-2 text-gray-600">
      Descubra os destaques da nossa coleção.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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