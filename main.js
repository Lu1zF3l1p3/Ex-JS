import {Funcoes} from "./lista.js"
window.addEventListener("load",()=>{
    let funcoes = new Funcoes;
    function carregar(){
        let tabela = document.querySelector("#tabela");
        let linhas = document.querySelectorAll("tr > td:first-child");
        linhas.forEach(l => {
            tabela.removeChild(l.parentNode);
        })
        let produtos = funcoes.listar();
        produtos.forEach(p =>{
            let linha = document.createElement("tr");
            let nome = document.createElement("td");
            nome.textContent = p.nome;
            let preco = document.createElement("td");
            preco.textContent = p.preco;
            let comp = document.createElement("input");
            comp.type = "checkbox";
            comp.checked = p.comprado;
            let comp_d = document.createElement("td");
            comp_d.appendChild(comp);
            let remover = document.createElement("button");
            remover.textContent = "Remover";
            let remover_d = document.createElement("td");
            remover_d.appendChild(remover);

            linha.appendChild(nome);
            linha.appendChild(preco);
            linha.appendChild(comp_d);
            linha.appendChild(remover_d);

            tabela.appendChild(linha);

            comp.addEventListener("click",()=>{
                if(!comp.checked){
                    funcoes.desmarcar(p);
                }
                else{
                    funcoes.marcar(p);
                }
            })
            remover.addEventListener("click",()=>{
                funcoes.remover(p);
                carregar();
            })
        })
    }
    carregar();

    document.querySelector("#btn").addEventListener("click",()=>{
        let nome = document.querySelector("#nome").value;
        let preco = document.querySelector("#preco").value;
        let produto = {
            nome,
            preco,
            comprado:false,
        }
        funcoes.adicionar(produto);
        carregar();
    })
})