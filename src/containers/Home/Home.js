import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bulma-components/lib/components/container';
import { Field, Control, Label, Input, Select } from 'react-bulma-components/lib/components/form';
import Icon from 'react-bulma-components/lib/components/icon';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import SearchIcon from '@material-ui/icons/Search';

import List from '../../components/List/List'
import Paginator from '../../components/Paginator/Paginator'
import { gigsListRequest } from '../../store/actions/Gigs'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchVal: '',
            industryVal: -1,
            currentPage: 1,
            delta: 5,
        }

        this.onChangeSearch = this.onChangeSearch.bind(this)
        this.onChangeIndustry = this.onChangeIndustry.bind(this)
        this.onChangePage = this.onChangePage.bind(this)
    }

    componentDidMount() {
        const { dispatch, gigsItems } = this.props
        // Call gigs list from api
        dispatch(gigsListRequest({}))
    }

    // Handle Job Type Select change
    onChangeSearch(event) {
        this.setState({ searchVal: event.target.value })
    }

    // Handle Industy Select change
    onChangeIndustry(event) {
        this.setState({ industryVal: event.target.value })
    }

    // Handle Paginator
    onChangePage(value) {
        this.props.dispatch(gigsListRequest({ page: value }))
        this.setState({ currentPage: value })
    }

    render() {
        return (
            <Container>
                <Columns.Column className="is-10 is-offset-1 has-mb-18">
                    <Field className="has-mb-24 has-mt-24">
                        <div className="has-p-12">
                            <Heading className="is-spaced">Open Gigs</Heading>

                            {/* Search Form, later we can implement it */}
                            <form name="searchForm">
                                <Columns className="is-mobile">
                                    <Columns.Column className="is-hidden-mobile">
                                        <Control iconLeft iconRight>
                                            <Input type="text" placeholder="Search by gig description" value={this.state.searchVal} onChange={this.onChangeSearch} />
                                            <Icon align="left" icon="bars">
                                                <SearchIcon />
                                            </Icon>
                                        </Control>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Field kind="group">
                                            <Control className="is-flex center-horizontal is-hidden-mobile">
                                                <Label>or</Label>
                                            </Control>
                                            <Control className="is-expanded">
                                                <Select className="is-fullwidth" onChange={this.onChangeIndustry} value={this.state.industryVal}>
                                                    <option>Select a Industry</option>
                                                    <option>With options</option>
                                                </Select>
                                            </Control>
                                            <Control className="is-expanded">
                                                <Select className="is-fullwidth" disabled={true}>
                                                    <option>Select a job type</option>
                                                    <option>With options</option>
                                                </Select>
                                            </Control>
                                            <Control className="is-pulled-right">
                                                <Button type="submit" className="is-link">Search</Button>
                                            </Control>
                                        </Field>
                                    </Columns.Column>
                                </Columns>
                            </form>
                            <hr />
                            {/* Gigs items list */}
                            <List items={this.props.gigsItems.items} />

                            <hr />
                            {/* Paginator */}
                            <Paginator
                                items={this.props.gigsItems.items}
                                onChange={this.onChangePage}
                                current={this.state.currentPage}
                                delta={this.state.delta}
                                total={this.props.gigsItems.numberOfPages}
                            />
                        </div>
                    </Field>
                </Columns.Column>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gigsItems: state.gigs
    }
}

export default connect(mapStateToProps, null)(Home);