/* eslint-disable react/prop-types */
import React, { Children, cloneElement, isValidElement } from 'react'

const Ancestor = ({ children, ...props }) => {
    function passProps(child) {
        /// Passes props down to all descendants
        if (Object.hasOwnProperty.call(child.props, 'children')) {
            const newChildren = Children.map(child.props.children, (_child) => {
                if (isValidElement(_child)) {
                    return passProps(_child)
                }
                return _child
            })

            return cloneElement(child, {
                ...props,
                ...child.props,
                children: newChildren,
            })
        }

        return cloneElement(child, { ...props, ...child.props })
    }

    const descendants = Children.map(children, (child) => passProps(child))

    return <>{descendants}</>
}

export default Ancestor
