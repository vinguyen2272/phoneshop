import {About, Contact, Home,Journal,Shop, Detail, Payment, GetAway} from './index'
 interface RouteType {
    path: string;
    component: React.FC;
 }

const routes:RouteType[] = [
    {
        path: "/",
        component: () => <Home />,
    },
    {
        path: "/about",
        component: () => <About />,
    },
    {
        path: "/contact",
        component: () => <Contact />,
    },

    {
        path: "/journal",
        component: () => <Journal />,
    },
    {
        path: "/shop",
        component: () => <Shop />,
    },
    {
        path: "/shop/:id",
        component: () => <Detail/>,
    },
    {
        path: "/cart",
        component: () => <Payment/>,
    },
    {
        path: "/getaway",
        component: () => <GetAway/>,
    },
];

export default routes;

