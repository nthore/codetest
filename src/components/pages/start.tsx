import React, {useEffect} from "react";
import {Col, Container, Row, Card, CardImg, CardTitle, CardSubtitle, CardBody} from "reactstrap";
import {connect, ConnectedProps} from "react-redux";
import "./pages.scss";
import {localization} from "../../api/localizationServices";
import {fetchJobs} from "../../actions";

const mapState = (state: any) => ({
  jobs: state.state.jobs,
  query: state.state.query,
});

const mapDispatch = {
  getData: (url) => fetchJobs(url),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

type AppProps = Props;

const Start: React.FC<AppProps> = ({jobs, getData, query}) => {
  // Fetch Data only if jobs array is empty
  useEffect(() => {
    if (jobs.length === 0) getData("feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json");
  }, []);

  // If Location country is empty use location text
  const jobLocation = (job) => {
    if (job.locations.length > 0) {
      return job.locations.map((locations) => {
        const {location} = locations;
        if (location.country) return <span key={Math.random()}>{location.country}</span>;
        else return <span key={Math.random()}>{location.text}</span>;
      });
    }
  };

  // Render List with jobs
  const renderJobList = () => {
    if (jobs.length > 0 && query.length === 0) {
      return jobs.map((job) => {
        return (
          <Col sm={12} md={4} lg={3} key={job.id}>
            <Card className="mx-auto my-2">
              <span className="date fw-bold">{job.from_date}</span>
              <CardImg top width="100%" src={job.company.logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>
                  <h5>{job.function}</h5>
                </CardTitle>
                <CardSubtitle>{job.company.name}</CardSubtitle>
                <CardSubtitle>
                  {jobLocation(job)} - {job.employment_type}
                </CardSubtitle>
                <Row>
                  <Col md={6}>
                    <a href={job.urls.ad} target="_blank" className="btn btn-info jobylon mt-2" role="button" style={{width: "100%"}}>
                      {localization.commonButtons.readMore}
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href={job.urls.apply} target="_blank" className="btn btn-success secondary mt-2" role="button" style={{width: "100%"}}>
                      {localization.commonButtons.apply}
                    </a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        );
      });
    } else {
      return query.map((job) => {
        return (
          <Col sm={12} md={4} lg={3} key={job.id}>
            <Card className="mx-auto my-2">
              <span className="date fw-bold">{job.from_date}</span>
              <CardImg top width="100%" src={job.company.logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>
                  <h5>{job.function}</h5>
                </CardTitle>
                <CardSubtitle>{job.company.name}</CardSubtitle>
                <CardSubtitle>
                  {jobLocation(job)} - {job.employment_type}
                </CardSubtitle>
                <Row>
                  <Col md={6}>
                    <a href={job.urls.ad} target="_blank" className="btn btn-info jobylon mt-2" role="button" style={{width: "100%"}}>
                      {localization.commonButtons.readMore}
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href={job.urls.apply} target="_blank" className="btn btn-success secondary mt-2" role="button" style={{width: "100%"}}>
                      {localization.commonButtons.apply}
                    </a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        );
      });
    }
  };

  return (
    <Container fluid="lg">
      <Row>{jobs.length > 0 && renderJobList()}</Row>;
    </Container>
  );
};

export default connector(Start);
