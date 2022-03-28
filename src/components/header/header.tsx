import React from "react";
import {Container, Form, FormGroup, Input, InputGroup, Label} from "reactstrap";
import {connect, ConnectedProps} from "react-redux";
import logo from "../../images/site-logo.svg";
import "./header.scss";
import {search} from "../../actions";

interface Props {}

/**
 * Map from State
 * @constructor
 * @param {object} state - State from Redux
 */

const mapState = (state: any) => ({jobs: state.state.jobs});

const mapDispatch = {
  searchQuery: (url) => search(url),
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type AppProps = Props & PropsFromRedux;

/**
 * Header Component
 * @constructor
 * @param {any} data - Data / Actions
 */
const Header: React.FC<AppProps> = ({searchQuery, jobs}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const setActiveQuery = (query) => {
    const t = jobs.filter((e) => e.company.name.toLowerCase().includes(query.toLowerCase()) || e.function.toLowerCase().includes(query.toLowerCase()));
    if (t.length > 0) searchQuery(t);
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <Container>
        <a className="navbar-brand" href="#">
          <img src={logo} className="d-inline-block align-top" alt="" />
        </a>
        <Form className="search" onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <InputGroup>
              <Input type="search" placeholder="Filter by company & work" aria-label="Search" onChange={(e) => setActiveQuery(e.target.value.toLowerCase())} />
            </InputGroup>
          </FormGroup>
        </Form>
      </Container>
    </nav>
  );
};

export default connector(Header);
