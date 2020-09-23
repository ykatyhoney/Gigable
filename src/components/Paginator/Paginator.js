import React from "react";
import Content from 'react-bulma-components/lib/components/content';
import Pagination from 'react-bulma-components/lib/components/pagination';

const Paginator = (props) => {
    const { items, total, current, delta, onChange } = props
    return (
        <>
            {items &&
                <Pagination 
                    onChange={onChange}
                    current={current}
                    total={total}
                    delta={delta}
                    next="Next page"
                    previous="Previous" />
            }
        </>
    )
}

export default Paginator