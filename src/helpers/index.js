export const idGenerator = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date
}

export const dateFormater = (id) => {
    const date = new Date(id);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return date.toLocaleDateString('en-EN', options);
}

export const formatCurrenty = (ammount) => {
    return ammount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
}