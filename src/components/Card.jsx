import React from 'react'
import { Image, withStyles, Color, Elevation } from '@evg-b/evg-ui'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import IncrementStepper from './IncrementStepper'

const styles = {
    body: {
        ...Elevation(4),
        overflow: 'hidden',
        width: 240,
        height: 200,
        margin: 30,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    img: {
        position: 'relative',
        width: '100%',
        height: '140px',
        '& img': {
            width: '100%',
            height: '100%',
            transform: 'scale(0.8)',
            objectFit: 'contain',
        }
    },
    control: {
        padding: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        position: 'absolute',
        bottom: 0,
        right: 15,
        borderRadius: 25,
        padding: 6,
        transform: 'scale(1)',
        transition: 'transform 100ms ease-in-out',
    },
    priceActive: {
        transform: 'scale(1.05)',
        backgroundColor: Color('primary').Base(),
        color: Color('primary').Contrast(),
    }
}

const Card = ({ classes, item }) => {
    const countItems = useSelector((state) => state.basket.items[item.name])

    return (
        <div className={classes.body}>
            <div className={classes.img}>
                <Image src={`https://murmuring-tor-81614.herokuapp.com/${item.image}`} />
                <div className={classnames(classes.price, { [classes.priceActive]: countItems })}>{`${item.price}$`}</div>
            </div>
            <div className={classes.control}>
                <span>{item.name}</span>
                <IncrementStepper nameItem={item.name} count={countItems ? countItems : 0} />
            </div>
        </div>
    )
}

export default withStyles(styles)(Card)