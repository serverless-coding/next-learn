import { ReactNode } from 'react';
import classes from './logistics-item.module.css';

function LogisticsItem(props: { children: JSX.Element, icon?: JSX.Element }) {
    return (
        <li className={classes.item}>
            <span className={classes.icon}>
                {props.icon}
            </span>
            <span className={classes.content}>{props.children}</span>
        </li>
    );
}

export default LogisticsItem;