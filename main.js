function Produto(descricao, unidade, ncm){
    this.descricao = descricao;
    this.unidade = unidade;
    this.ncm = ncm;
}

function Fornecedor(descricao, unidade, ncm, razaoSocial, cnpj, custo){
    Produto.call(this, descricao, unidade, ncm)
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
    this.custo = custo;
}

function ImpostosEntrada(descricao, unidade, ncm, razaoSocial, cnpj, custo, cfop, ipi, cst, piscofins){
    Fornecedor.call(this, descricao, unidade, ncm, razaoSocial, cnpj, custo)
    this.cfop = cfop; 
    this.ipi = ipi;
    this.cst = cst;
    this.piscofins = piscofins;
}

const produto1 = new ImpostosEntrada("Café Mogiana em Grãos 250g", "PCT", "0901.21.00","MESTRE CAFEEIRO", "91.827.364/0001-55", "99,99", "6101", "01", "000", "06");
const produto2 = new ImpostosEntrada("Latinhazinha Multiusos", "LT", "7310.21.90","LATIS DO SULIS", "19.728.463/0001-55", "0,99", "5101", "00", "051", "01");
const produto3 = new ImpostosEntrada("Cócónuts Melequento", "UN", "1905.31.00","CAMARADINHA DIST", "56.473.289/0001-11", "9,99", "5102", "01", "060", "01");

console.log(produto1);
console.log(produto2);
console.log(produto3);
