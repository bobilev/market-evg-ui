import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MarketPage from './pages/Market'
import BasketPage from './pages/Basket'
import { fetchGetItems } from './redux/actions'

import { AppBar, Badge, IconButton, withStyles, Color } from '@evg-b/evg-ui'
import { ArrowBack, ShoppingBag } from '@evg-b/evg-icons'

const styles = {
    content: {
        paddingTop: 56,
        fontFamily: 'Roboto',
        width: '100%',
        maxWidth: 900,
        margin: '0 auto',
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        color: Color('secondary').Base(),
    },
    appBar: {
        color: 'rgba(0, 0, 0, 0.75)',
        fontFamily: 'Roboto'
    }
}

const App = ({ classes, dealers = '' }) => {
    const locationRout = useLocation()
    const dispatch = useDispatch()
    const [appBarConfig, setAppBarConfig] = useState({ title: 'Маркет' })
    const count = useSelector((state) => state.basket.count)

    useEffect(() => {
        switch (locationRout.pathname) {
            case '/':
                setAppBarConfig({ title: 'Маркет' })
                break;
            case '/basket':
                setAppBarConfig({
                    title: 'Корзина',
                    left: (
                        <IconButton color='primary' component={Link} to='/'>
                            <ArrowBack />
                        </IconButton>
                    )
                })
                break;
            default:
                setAppBarConfig({ title: 'Маркет' })
                break;
        }
    }, [locationRout])
    useEffect(() => {
        dispatch(fetchGetItems(dealers))
    }, [])

    return (
        <>
            <AppBar
                className={classes.appBar}
                {...appBarConfig}
                right={
                    <Badge count={count} circle color='red700'>
                        <IconButton color='primary' component={Link} to='/basket'>
                            <ShoppingBag />
                        </IconButton>
                    </Badge>
                }
            />
            <div className={classes.content}>
                <Switch>
                    <Route component={MarketPage} path='/' exact />
                    <Route component={BasketPage} path='/basket' />
                </Switch>
            </div>
        </>
    )
}

export default withStyles(styles)(App)