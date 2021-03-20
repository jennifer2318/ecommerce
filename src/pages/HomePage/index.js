import React, { Component } from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { playTransition } from "../../timelines";
import { withRouter } from "react-router";

class HomePage extends Component {
  render() {
    const { pathname, key } = this.props.location;

    return (
      <TransitionGroup component={null}>
        <Transition
          key={key}
          appear={true}
          onEnter={(node, appears) => playTransition(pathname, node, appears)}
          timeout={{ enter: 750, exit: 150 }}
        >
          <section className="section">
            <h1>Home</h1>
          </section>
        </Transition>
      </TransitionGroup>
    );
  }
}

export default withRouter(HomePage);
