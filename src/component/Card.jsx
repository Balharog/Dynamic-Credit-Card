import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
    state={
        creditNumberInput:'',
        creditNumber:'',
        expirationDate:'',
        name:'',

    }   
    handleGetName=(e)=>{
        const nameRegEx= /^[a-z ]{0,20}$/i
        let nameValue=e.target.value
        this.setState({name: nameRegEx.test(e.target.value)? nameValue: this.state.name})


    }
    handleGetCreditNumber=(e)=>{
        const creditNumberRegEx=/^[0-9]{0,16}$/i
        let numberCredit=''
        for (let i=0; i<e.target.value.length;i+=4){
            numberCredit+=e.target.value.substr(i,4)+' '
        }
        this.setState({creditNumber: creditNumberRegEx.test(e.target.value)? numberCredit.trim():this.state.creditNumber})

    }
    handleGetExpiration=(e)=>{
        const expirationRegEx= /^(0[1-9]|1[0-2])|((0[1-9]|1[0-2])(19|2[0-9]))$/i
        let dateExpiration=''
        if(e.target.value.length>0){
            dateExpiration=e.target.value.substr(0,2)+'/'+e.target.value.substr(2,2)
        }
        else
        dateExpiration=''
        this.setState({expirationDate: expirationRegEx.test(e.target.value)? dateExpiration.trim():this.state.expirationDate})
    }

    render() {
        return (
            <div className="credit-card-parent">
                <div className="credit-card">
                    <div className="credit-card-first-section">
                        <div className="credit-card-chip">
                            <div className="chip"></div>
                        </div>
        <h1 className="company-name">GoMyCode</h1>

                    </div>
                    <div className="credit-card-second-section">
                    <div className="credit-card-dynamic-section">
                            <h2 className="dynamics credit-card-number">{this.state.creditNumber}</h2>
                            <h2 className="dynamics credit-card-expiration">{this.state.expirationDate}</h2>
                            <h2 className="dynamics credit-card-name">{this.state.name}</h2>
                        </div>
                        <div className="credit-card-logo-section">
                            <img className="master-card-logo" src="https://i.pinimg.com/originals/24/35/e1/2435e102440e8236210313507e351be4.jpg" alt="MasterCard Logo"></img>
                        </div>
                    </div>
                    

                </div>
                <form className="form-section">
                    <label>Credit card number:</label>
                    <input className="input-field" type="text" onChange={this.handleGetCreditNumber}/>
                    <label>Expiry date:</label>
                    <input className="input-field" type="text" onChange={this.handleGetExpiration}/>
                    <label>Name:</label>
                    <input className="input-field" type="text" onChange={this.handleGetName}/>
                </form>
            </div>
        )
    }
}

