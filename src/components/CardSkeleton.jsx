import React from 'react'
import { withStyles, Elevation, Skeleton } from '@evg-b/evg-ui'

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
    control: {
        padding: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}

const CardSkeleton = ({ classes }) => {

    return (
        <div className={classes.body}>
            <Skeleton width={'100%'} height={140} />
            <div className={classes.control}>
                <Skeleton width={'40%'} type={'text,h1'} />
            </div>
        </div>
    )
}

export default withStyles(styles)(CardSkeleton)