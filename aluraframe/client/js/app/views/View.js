


   class View{
    
        constructor(elemento)
        {
            this._elemento = elemento;
        }
        
    
        update(model) {
    
            this._elemento.innerHTML = this.template(model);
        }
    
         template(model){
             throw new Error(" o metodo template deve ser implementado ");
         }
    
    }
