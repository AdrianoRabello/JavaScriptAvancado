class NegociacaoController {
    
    constructor() 
    {        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView  = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
      
    }
    
    adiciona(event) 
    {
        
        event.preventDefault();    
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociacao adicionada com sucesso';

        console.log(this._mensagem.texto);
        this._mensagemView.update(this._mensagem);  

        this._limpaFormulario();  
        console.log(this._listaNegociacoes.negociacoes);
    }


    _criaNegociacao()
    {
        let data = DateHelper.textoParaData(this._inputData.value);  
        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value  
        ); 
    }



    _limpaFormulario()
    {
       let form = document.querySelector("#form");
       form.reset();
       this._inputData.focus();
    }

    
}