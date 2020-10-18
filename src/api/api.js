import * as axios from "axios";

export const catApi = {
    getPic () {
        return axios.get('https://aws.random.cat/meow').then(response => response.data)
    },
    getFact () {
        return axios.get('https://cat-fact.herokuapp.com/facts/random').then(response => response.data)
    }
}
