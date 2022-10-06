
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
// import { getActionRemoveOrder, getActionAddOrder, getActionUpdateOrder } from '../store/order.actions.js'
// import {store} from '../store/store'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'order'
const orderChannel = new BroadcastChannel('orderChannel')


// ;(()=>{
//     orderChannel.addEventListener('message', (ev)=>{
//         store.dispatch(ev.data)
//     })
// })()

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
}
window.cs = orderService


function query(filterBy) {
    return storageService.query(STORAGE_KEY)
}
function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
    // return axios.get(`/api/order/${orderId}`)
}
async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
    // orderChannel.postMessage(getActionRemoveOrder(orderId))
}
async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)
        // orderChannel.postMessage(getActionUpdateOrder(savedOrder))
        
    } else {
        // Later, owner is set by the backend
        // order.owner = userService.getLoggedinUser()
        savedOrder = await storageService.post(STORAGE_KEY, order)
        // orderChannel.postMessage(getActionAddOrder(savedOrder))
    }
    return savedOrder
}

function getEmptyOrder() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




