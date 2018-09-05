"use strict";
const React = require("react");
const ReactHelmet = require("react-helmet");

const Helmet = ReactHelmet.Helmet;

class AboutPage extends React.Component {
    render() {
        return (
            <section className="section-about container">
                <Helmet>
                    <title>About us</title>
                </Helmet>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">About us</h1>
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = AboutPage;
