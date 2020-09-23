import React from "react";
import { Link } from "react-router-dom";
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import Tag from 'react-bulma-components/lib/components/tag';

const ListItem = (props) => {
    const item = props.item

    const getColor = status => {
        let color = 'primary'
        switch (status) {
            case 'confirmed':
                color = 'warning'
                break;
            case 'open':
                color = 'success'
                break;
            default:
                break;
        }
        return color
    }

    const getTag = status => {
        let tag = status
        switch (status) {
            case 'open':
                tag = 'available'
                break;
            default:
                break;
        }
        return tag.toUpperCase()
    }
    return (
        <>
            { item &&
                (<Media className="gig-item">
                    <Media.Item renderAs="div" position="left">
                        <Link className="has-link" title={item.user.displayname} to={`/gigs/${item.id}`}>
                            <Image src={item.user.avatar} size={48} />
                        </Link>
                    </Media.Item>
                    <Media.Item>
                        <Content>
                            <Columns>
                                <Columns.Column size={9}>
                                    <Link className="has-link" title={item.tags.name} rel={item.tags.name} to={`/gigs/${item.id}`}>
                                        <div className="has-text-weight-bold has-underline">
                                            #{item.id} - {item.tags[0].name}
                                        </div>
                                    </Link>
                                    <div className="p-name has-text-grey-light is-size-7">
                                        Created by {item.user.displayname}
                                    </div>
                                    <div className="p-name has-text-grey-light is-size-7 has-ellipsis">
                                        Deliver for {item.description}
                                    </div>
                                    <p className="has-text-grey-dark is-size-7">
                                        Available from {item.startDate.date} {item.startDate.time} to {item.endDate.date} {item.endDate.time}
                                    </p>
                                </Columns.Column>
                                <Columns.Column size={3} className="has-text-right">
                                    <Tag color={getColor(item.status)}>{getTag(item.status)}</Tag>
                                </Columns.Column>
                            </Columns>
                        </Content>
                    </Media.Item>
                </Media>)
            }
        </>
    )
}

export default ListItem