
function ProductCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-[#B89A55]/60 hover:shadow-[0_0_10px_rgba(184,154,85,0.12) hover:-translate-y-1 hover:shadow-md">
      <img
        src={imagem}
        alt={nome}
        className="h-64 w-full bg-gray-50 object-contain p-4"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {nome}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {descricao}
        </p>

        <p className="mt-4 text-xl font-bold text-gray-900">
          R$ {preco}
        </p>

        <button
        type="button"
        className="mt-4 w-full rounded-lg bg-[#B89A55] px-4 py-3 font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#9E8141] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B89A55] focus:ring-offset-2 active:translate-y-0"
        >
            Ver produto
        </button>
      </div>
    </article>
  )
}

export default ProductCard
