import { get } from '../utils/request'
export function LoginApi(user: any) {
    return get('user/login/anon', user)

}