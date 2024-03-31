import {$host} from "./index";



export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}


export const fetchDevices = async (typeId, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId,limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}