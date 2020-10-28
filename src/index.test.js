/* eslint-disable react/prop-types */
import React from 'react'
import { render } from '@testing-library/react'
import Ancestor from './index'

describe('Ancestor', () => {
    const ancestorProp = 'Passed from ancestor'
    const descendantProp = 'Passed from descendant'

    const GenericComponent = (props) => {
        return (
            <div className={props.className}>
                {props.passed}
                {props.children}
            </div>
        )
    }

    test('Passes props to all descendants', async () => {
        const ui = (
            <Ancestor passed={ancestorProp}>
                <GenericComponent className='child'>
                    <GenericComponent className='granchild' />
                </GenericComponent>
            </Ancestor>
        )
        const { findAllByText } = render(ui)
        expect(await (await findAllByText(ancestorProp)).length).toBe(2)
    })

    test('Props passed from ancestor can be overriden', () => {
        const ui = (
            <Ancestor passed={ancestorProp}>
                <GenericComponent passed={descendantProp} />
            </Ancestor>
        )

        const { queryByText } = render(ui)
        expect(queryByText(ancestorProp)).toBeFalsy()
    })

    test('Explicitly declared descendant props arent overriden', () => {
        const Child = (props) => {
            return <div className='child'>{props.alt}</div>
        }
        const ui = (
            <Ancestor passed={ancestorProp}>
                <Child alt={descendantProp} />
            </Ancestor>
        )

        const { queryByText } = render(ui)
        expect(queryByText(ancestorProp)).toBeFalsy()
        expect(queryByText(descendantProp)).toBeTruthy()
    })
})
