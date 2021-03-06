var React = require('react');
var ReactDOM = require('react-dom');
var AriaModal = require('../../');

var DemoOne = React.createClass({
  getInitialState: function() {
    return {
      modalActive: false,
    };
  },

  activateModal: function() {
    this.setState({ modalActive: true });
  },

  deactivateModal: function() {
    this.setState({ modalActive: false });
  },

  getApplicationNode: function() {
    return document.getElementById('application');
  },

  render: function() {
    var modal = (this.state.modalActive) ? (
      <AriaModal
        titleText='demo one'
        onExit={this.deactivateModal}
        initialFocus='#demo-one-deactivate'
        getApplicationNode={this.getApplicationNode}
        underlayStyle={{ paddingTop: '2em' }}
      >
        <div id='demo-one-modal' className='modal'>
          <div className='modal-body'>
            <p>
              Here is a modal <a href='#'>with</a> <a href='#'>some</a> <a href='#'>focusable</a> parts.
            </p>
          </div>
          <footer className='modal-footer'>
            <button id='demo-one-deactivate' onClick={this.deactivateModal}>
              deactivate modal
            </button>
          </footer>
        </div>
      </AriaModal>
    ) : false;

    return (
      <div>
        <button onClick={this.activateModal}>
          activate modal
        </button>
        {modal}
      </div>
    )
  },
});

ReactDOM.render(<DemoOne />, document.getElementById('demo-one'));
