const produtos = [
  {
    id: 1,
    nome: "Camisa Masculina Renner",
    descricao: "Camisa slim fit em algodão, confortável e estilosa.",
    preco: "R$ 99,90",
    imagem: "https://images.unsplash.com/photo-1602810316636-d163e1266fd0",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1593032465174-3a9cda004ef5",
      "https://images.unsplash.com/photo-1584270354949-1f6e5565cdb3",
    ],
  },
  {
    id: 2,
    nome: "Calça Jeans Skinny",
    descricao: "Calça jeans skinny moderna e versátil, perfeita para qualquer ocasião.",
    preco: "R$ 199,90",
    imagem: "",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1582201940491-31c9f9e9f9f5",
      "https://images.unsplash.com/photo-1602810320163-7096cf9f94aa",
    ],
  },
  {
    id: 3,
    nome: "Roupão Masculino",
    descricao: "Roupão confortável em microfibra, ideal para o dia a dia.",
    preco: "R$ 149,90",
    imagem: "https://images.unsplash.com/photo-1611861162404-6e0ffb1a0d89",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1611861162594-dcbaef735e57",
      "https://images.unsplash.com/photo-1611861162600-32d9df80a3bd",
    ],
  },
];

const produtosSection = document.getElementById("produtos");
const modal = document.getElementById("modal");
const modalImagens = document.getElementById("modal-imagens");
const fecharModal = document.getElementById("fechar-modal");

// Renderiza os produtos
produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "produto";
  card.innerHTML = `
    <img src="${produto.imagem}?w=300&h=300&fit=crop" alt="${produto.nome}" />
    <h3>${produto.nome}</h3>
    <p>${produto.descricao}</p>
    <strong>${produto.preco}</strong><br/><br/>
    <button onclick="abrirModal(${produto.id})">Ver Imagens</button>
  `;
  produtosSection.appendChild(card);
});

// Abrir modal com imagens detalhadas
function abrirModal(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  modalImagens.innerHTML = "";

  produto.imagensDetalhes.forEach(imgUrl => {
    const img = document.createElement("img");
    img.src = `${imgUrl}?w=400&fit=crop`;
    modalImagens.appendChild(img);
  });

  modal.classList.remove("hidden");
}

fecharModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Scroll suave para os links
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Botões
document.getElementById("btn-produtos").onclick = () =>
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });

document.getElementById("btn-hero").onclick = () =>
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });

document.getElementById("btn-whatsapp").onclick = () => {
  alert("Você será redirecionado para o WhatsApp!");
  window.open("https://wa.me/5511999999999", "_blank");
};
