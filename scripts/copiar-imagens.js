// Copia as fotos de CATEGORIAS/* para public/images/produtos/<categoria>/<slug>-01.<ext>
// Faz o match pelo número de prefixo do nome de arquivo original (origemArquivo).
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..", "CATEGORIAS");
const OUT = path.resolve(__dirname, "..", "public", "images", "produtos");

const pastaPorCategoria = {
  bolsas: "bolsas",
  necessaire: "necesserie",
  neoprene: "Neoprene",
  porcelanas: "porcelanas",
  "porta-cartao": "porta cartão",
  "porta-documentos": "porta doc excutivos",
  relogio: "relogio",
  squeeze: "Squeeze",
  termicos: "termicos",
  toalha: "Toalha",
  variados: "variados",
  vidro: "vidro",
};

// Carrega produtos.ts e extrai os campos via regex simples (evita depender de ts-node)
const produtosSrc = fs.readFileSync(
  path.resolve(__dirname, "..", "lib", "produtos.ts"),
  "utf-8"
);
const linhaRegex = /\{\s*id:\s*'([^']+)',\s*categoria:\s*'([^']+)',[^}]*?slug:\s*'([^']+)',[^}]*?origemArquivo:\s*'([^']+)'/g;
const produtos = [];
let m;
while ((m = linhaRegex.exec(produtosSrc))) {
  produtos.push({ id: m[1], categoria: m[2], slug: m[3], origemArquivo: m[4] });
}

console.log(`Encontrados ${produtos.length} produtos em produtos.ts`);

const resultado = {}; // slug -> [caminhos relativos]
const naoEncontrados = [];

for (const p of produtos) {
  const pasta = pastaPorCategoria[p.categoria];
  if (!pasta) {
    naoEncontrados.push(p.slug + " (categoria sem pasta: " + p.categoria + ")");
    continue;
  }
  const dirOrigem = path.join(ROOT, pasta);
  if (!fs.existsSync(dirOrigem)) {
    naoEncontrados.push(p.slug + " (pasta não existe: " + dirOrigem + ")");
    continue;
  }
  const arquivos = fs.readdirSync(dirOrigem);

  const numMatch = p.origemArquivo.match(/^(\d+)/);
  const num = numMatch ? numMatch[1] : null;
  const suffixMatch = p.origemArquivo.match(/\((\d)\)/);
  const suffix = suffixMatch ? `(${suffixMatch[1]})` : null;

  let candidatos = arquivos.filter((f) => {
    const semExt = f;
    if (!num) return false;
    const startsWithNum = new RegExp(`^${num}[\\s._-]`).test(semExt);
    if (!startsWithNum) return false;
    if (suffix) return semExt.includes(suffix);
    return true;
  });

  if (candidatos.length === 0) {
    naoEncontrados.push(p.slug + " (origemArquivo: " + p.origemArquivo + ")");
    continue;
  }

  const escolhido = candidatos[0];
  const ext = path.extname(escolhido).toLowerCase();
  const destDir = path.join(OUT, p.categoria);
  fs.mkdirSync(destDir, { recursive: true });
  const destFile = path.join(destDir, `${p.slug}-01${ext}`);
  fs.copyFileSync(path.join(dirOrigem, escolhido), destFile);
  resultado[p.slug] = `/images/produtos/${p.categoria}/${p.slug}-01${ext}`;
}

fs.writeFileSync(
  path.resolve(__dirname, "imagens-mapeadas.json"),
  JSON.stringify(resultado, null, 2)
);

console.log(`Copiadas ${Object.keys(resultado).length} imagens.`);
if (naoEncontrados.length) {
  console.log("NÃO encontrados:");
  naoEncontrados.forEach((s) => console.log("  - " + s));
}
