import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { Elevation, withStyles, Image, Button, List, ListItem, ListItemText, ListItemAvatar } from '@evg-b/evg-ui'
import IncrementStepper from '../components/IncrementStepper'

import { declOfNum } from '../utils/utils'
import { Clear, Delete, ShoppingBag } from '@evg-b/evg-icons'
import { deleteAllItemToBasket, deleteItemToBasket } from '../redux/actions'

const styles = {
    base: {
        width: 600,
        '@media (min-width: 1024px)': {
            width: '100%'
        }
    },
    labelName: {
        paddingLeft: 6
    },
    img: {
        width: '100px',
        height: '100px',
        '& img': {
            width: '100%',
            height: '100%',
            transform: 'scale(.8)',
            objectFit: 'contain',
        }
    },
    itemBasket: {
        margin: 10,
        backgroundColor: '#ededed'
    },
    panel: {
        ...Elevation(1),
        color: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '25px 0',
        padding: 16,
        '& span': {
            fontSize: 20
        }
    },
    miniBtn: {
        minWidth: 30,
        padding: 0,
    },
    emptyBasket: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(0, 0, 0, 0.54)',
        height: 400
    },
}

const Basket = ({ classes }) => {
    const store = useStore().getState()
    const dispatch = useDispatch()

    const handleDelete = (name) => dispatch(deleteItemToBasket(name))
    const handleDeleteAll = () => dispatch(deleteAllItemToBasket())

    const sumPrice = Object.keys(store.basket.items).reduce((now, next) => now + store.basket.items[next] * store.items[next].price, 0).toFixed(2)

    const Item = (name, index) => {
        const handleDeleteName = handleDelete.bind(null, name)
        return (
            <ListItem key={index} button={false} className={classes.itemBasket}>
                <ListItemAvatar className={classes.img}>
                    <Image src={`https://murmuring-tor-81614.herokuapp.com/${store.items[name].image}`} />
                </ListItemAvatar>
                <ListItemText
                    secondaryText={<IncrementStepper nameItem={name} count={store.basket.items[name]} />}
                    meta={<Button color='primary' onClick={handleDeleteName} className={classes.miniBtn}><Clear /></Button>}
                    secondaryMeta={`${store.items[name].price} $`}
                >
                    <span className={classes.labelName}>{name}</span>
                </ListItemText>
            </ListItem>
        )
    }
    const EmptyBasket = (
        <div className={classes.emptyBasket}>
            <ShoppingBag color='gray500' size={80} />
            Вы еще ничего не выбрали.
        </div >
    )
    return (
        <div className={classes.base}>
            <div className={classes.panel}>
                <div>
                    <span>{store.basket.count}</span>
                    {` ${declOfNum(store.basket.count, ['товар', 'товара', 'товаров'])} на `}
                    <span>{`${sumPrice} $`}</span>
                </div>
                <Button color='primary' onClick={handleDeleteAll} className={classes.miniBtn}><Delete /></Button>
            </div>

            <List style={{ ...Elevation(1) }}>
                {
                    store.basket.count != 0 ? Object.keys(store.basket.items).map((name, index) => Item(name, index)) : EmptyBasket
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(Basket)