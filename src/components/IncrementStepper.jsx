import React from 'react'
import { Button, withStyles, Color } from '@evg-b/evg-ui'
import { useDispatch } from 'react-redux'
import { addItemToBasket, removeItemToBasket } from '../redux/actions'

import { Add, Remove } from '@evg-b/evg-icons'

const styles = {
    base: {
        display: 'flex',
        alignItems: 'center',
    },
    miniBtn: {
        minWidth: 30,
        padding: 0,
    },
    counte: {
        color: Color('secondary').Base(),
        fontSize: 20,
        width: 25,
        textAlign: 'center',
    }
}

const IncrementStepper = ({ classes, nameItem, count }) => {
    const dispatch = useDispatch()

    const handleAdd = () => dispatch(addItemToBasket(nameItem))
    const handleRemove = () => dispatch(removeItemToBasket(nameItem))
    const hideRemoveFragment = (
        <>
            <Button
                size='small'
                color='primary'
                onClick={handleRemove}
                className={classes.miniBtn}
            >
                <Remove />
            </Button>
            <div className={classes.counte}>{count}</div>
        </>
    )
    return (
        <div className={classes.base}>
            {count !== 0 && hideRemoveFragment}
            <Button
                size='small'
                color='primary'
                onClick={handleAdd}
                className={classes.miniBtn}
            >
                <Add />
            </Button>
        </div>
    )
}

export default withStyles(styles)(IncrementStepper)