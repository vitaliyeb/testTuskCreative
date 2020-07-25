import React from 'react'
import Services from '../../services/services'
import Loader from '../loader/loader'
import Apartament from '../apartament/apartament'
import './apartaments.css'




class Apartaments extends React.Component{

    constructor(){
        super();
        this.services = new Services();
        this.state = {
            apartaments: undefined,
            loading: true
        }
    }

    componentDidMount(){
        this.services.getApartments()
            .then((apartaments) => {
                this.setState({
                    loading: false,
                    apartaments
                })
            })
    }


    render(){
        let { apartaments, loading } = this.state;

        if(loading) return <Loader />

        let Apartaments = apartaments.map((item, key)=>{
            return < Apartament key={key} sendLikesInServer={this.services.sendLikes}  dataItem={item} />
        })
        return (
            <div className='apartaments'>
                { Apartaments }
            </div>
        )

    }
}


export default Apartaments;