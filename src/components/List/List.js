import React from "react";
import Content from 'react-bulma-components/lib/components/content';
import ListItem from "./ListItem"

const List = (props) => {
    const items = props.items
    return (
        <>
            {items &&
                <Content className="has-mb-24">
                    {
                        items.map((item, index) => {
                            return (
                                <ListItem item={item} key={index}></ListItem>
                            )
                        })
                    }
                </Content>
            }
        </>
    )
}

export default List