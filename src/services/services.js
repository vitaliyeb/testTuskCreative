let apartmentsArray = new Array(15).fill({
    title: '2-ух комнатная квартира',
    image: 'https://i.pinimg.com/originals/4d/f9/cf/4df9cf6e81948c51c75992051bd29846.jpg',
    like: false
});
let apartmentsJSON = JSON.stringify(apartmentsArray);



class Services {

    getApartments = async () => {
        let apartments = await new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(apartmentsJSON), 1000)
        })
        return await JSON.parse(apartments);
    }
    sendLikes = async ({id, like}) => {
        console.log('send', id, like);
    }
}

export default Services;