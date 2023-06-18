let produtos = [];
if(!localStorage.getItem("produtos")){
    localStorage.setItem("produtos",JSON.stringify(produtos));
}
else{
    produtos = JSON.parse(localStorage.getItem("produtos"));
}
export class Funcoes{
    adicionar(produto){
        produtos.push(produto);
        localStorage.setItem("produtos",JSON.stringify(produtos));
    }
    remover(produto){
        let index = produtos.indexOf(produto);
        if(index > -1){
            produtos.splice(index,1);
        }
        localStorage.setItem("produtos",JSON.stringify(produtos));
    }
    marcar(produto){
        let index = produtos.indexOf(produto);
        if(index > -1){
            produtos[index].comprado = true;
        }
        localStorage.setItem("produtos",JSON.stringify(produtos));
    }
    desmarcar(produto){
        let index = produtos.indexOf(produto);
        if(index > -1){
            produtos[index].comprado = false;
        }
        localStorage.setItem("produtos",JSON.stringify(produtos));
    }
    listar(){
        return produtos;
    }
}