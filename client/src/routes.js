import App from components/App

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