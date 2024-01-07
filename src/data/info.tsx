interface Contact{
    address: string,
    email: string,
    call: [
        {
            name: string,
            phoneNum: string
        },
        {
            name: string,
            phoneNum: string
        }
    ]
}
export const contact: Contact = {
    address: '23, Nehru Park Road, Vallabh Nagar Indore, Madhya Pradesh, (452003) India',
    email: 'contact@ecellsgsits.com',
    call: [
        {
           name: 'Amrita',
            phoneNum: '+91 62325 86634' 
        },
        {
            name: 'Aahana',
            phoneNum: '+91 62633 94124'
        }
    ]
}