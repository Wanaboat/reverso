import React from 'react'
import Reverso3d from '../Reverso3d'
import Wrapper from '../Wrapper'

const Iframe3d = ( props ) => {
    return(
        <Wrapper>
            <Reverso3d
                url={ props.data.iframe_url ? props.data.iframe_url  : null }
            />
        </Wrapper>
    )
}

export default Iframe3d