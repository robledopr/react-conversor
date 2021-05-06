import React from 'react';
import './Conversor.css'
export default class Conversor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0
        }
        this.converter = this.converter.bind(this)
    }
    
    converter(){
        let de = `${this.props.moedaA}_${this.props.moedaB}`
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de}&compact=y`
        fetch(url)
            .then(res => {
                return res.json()
            }).then(json => {
                let cotacao = json[de];;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor)*cotacao).toFixed(2)
                this.setState({moedaB_valor})
            })
    }
    render(){
        return(
            <div className="conversor">

                <h2>{this.props.moedaA} para {this.props.moedaB} </h2>

                <input type="text" onChange={(e) => {this.setState({moedaA_valor: e.target.value})}} />

                
                <button type="button" onClick={this.converter}>Converter</button>

              <h2>Valor convertido: {this.state.moedaB_valor}</h2>


            </div>
        )
    }
}