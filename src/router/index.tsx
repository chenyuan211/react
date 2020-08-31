
import Home from '../pages/home/index'
import OpenDoor from '../pages/openDoor/openDoor'
import Add from '../pages/openDoor/add'
import Login from '../pages/login'
import PageNotFound from '../pages/PageNotFound';
import Property from '../pages/property/property';
import AuditInformation from '../pages/auditInformation/auditInformation';
import Notice from '../pages/notice/notice';

export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: PageNotFound
    }
]

export const adminRoutes = [
    {
        path: '/admin',
        component: Home
    },
    {
        path: '/admin/openDoor/openDoor',
        component: OpenDoor
    },
    {
        path: '/admin/openDoor/add',
        component: Add
    },
    {
        path: '/admin/property',
        component: Property
    },
    {
        path: '/admin/notice',
        component: Notice
    },
    {
        path: '/admin/auditInformation',
        component: AuditInformation
    }
]
