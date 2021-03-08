import axios from 'axios'

export const getMenu = () => {
    return axios.get(`https://5000-amethyst-turkey-5zmqp59h.ws-us03.gitpod.io/api/menu`).then(response => {
        return response.data.sort((a, b) => {
            if (a.iceCream.name < b.iceCream.name) {
                return -1
            }
            if (a.iceCream.name > b.iceCream.name) {
                return 1
            }
            return 0
        })
    })
}
