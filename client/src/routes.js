import App from './components/App'
import Home from './pages/Home'
import Cyclists from './pages/Cyclists'
import Races from './pages/Races'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cyclists',
                element: <Cyclists />
            },
            {
                path: '/races',
                element: <Races />
            }

        ]
    }
]

export default routes