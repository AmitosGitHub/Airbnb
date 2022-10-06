import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
import { store } from '../store/store'
import { getActionSetWatchedUser } from '../store/review.actions'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from '../services/event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    changeScore
}

window.userService = userService


// login({username: 'puki'})


function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    store.dispatch(getActionSetWatchedUser(user))
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}
function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.fullname === userCred.fullname)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000;
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


    // ;(async ()=>{ 
    //     await userService.signup({_id: 'u101', fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
    //     await userService.signup({_id: 'u102', fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
    //     await userService.signup({_id: 'u103', fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
    // })()
    // ;(async ()=>{
    //     await userService.signup({_id: 'u101', fullname: "Puki", username: "puki",password: "1234",imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg", isAdmin: true})
    //     await userService.signup({_id: 'u102', fullname: "Edgar", username: "75091963",password: "Edgar",imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg", isAdmin: false})
    //     await userService.signup({_id: 'u103', fullname: "Leo", username: "75091962",password: "Leo",imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg", isAdmin: false})
    //     await userService.signup({_id: 'u104', fullname: "Margaux", username: "75091961",password: "Margaux",imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg", isAdmin: false})
    //     await userService.signup({_id: 'u109', fullname: "Roti", username: "75091968",password: "1234",imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg", isAdmin: false})
    //     await userService.signup({_id: 'u110', fullname: "Francine", username: "75091969",password: "Francine",imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg", isAdmin: false})
       
    // })()

   
	

