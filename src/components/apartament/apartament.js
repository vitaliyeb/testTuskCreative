import React from 'react'
import './apartament.css'

class Apartament extends React.Component {
    constructor(){
        super();
        this.state = {
            like: false,
            id: Math.floor(Math.random()*1000) //ПОИДЕЕ ID ДОЛЖЕН ПРИХОДИТЬ ОТ СЕРВЕРА И БЫТЬ В dataItem но для теста пойдет и так
        }
    }
    componentDidMount(){
        let {like} = this.props.dataItem;
        this.setState({like});
    }

    updateLike = (id) => {
        this.setState((state)=>({...state, like: !state.like}))
        this.props.sendLikesInServer({id, like: this.state.like})
    }
    
    render(){
        let {title, image, like} = this.props.dataItem;

        let imgWrapperClass = this.state.like ? 'apartament__img-wrapper_like' : '';

        return(
            <div className='apartament'>
                <p className='apartament__title'>{title}</p>
                <div onClick={()=>this.updateLike(this.state.id)} className={`apartament__img-wrapper ${imgWrapperClass}`}>
                    <img className='apartament__img' src={image} />
                </div>
            </div>
        )
    }
}

export default Apartament;