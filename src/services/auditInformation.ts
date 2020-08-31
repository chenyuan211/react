import { get } from '../utils/request'
export function ListApi(user: any) {
    return get('pInspect/queryPInspectList', user)

}