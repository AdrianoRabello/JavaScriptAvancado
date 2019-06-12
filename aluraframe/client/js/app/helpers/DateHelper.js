
class DateHelper{


    constructor () 
    {
        throw new Error("Essa classe não pode instanciada ");
    }

    static textoParaData(texto)
    {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }

    static dataParaTexto(data){
        
       return  data.getDate()+  "/" +( data.getMonth() + 1) + "/" + data.getFullYear();

       // Esse template string não funciona no browser
       //return '${data.getDate()}/${data.getMonth()+1/${data.getFullYear()}'; 
    }
}