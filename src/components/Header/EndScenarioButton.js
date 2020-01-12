import React from 'react';
import Modal from 'react-modal';

import './EndScenarioButton.css';

export class EndScenarioButton extends React.Component {
    constructor(props) {
        super(props);

        // taken from https://github.com/reactjs/react-modal/tree/v3.1.11#examples
        this.customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        this.state = {
            showWarning: false
        };
    }

    render() {
        const { className, endScenarioReady, endScenario } = this.props;
        return (
            <React.Fragment>
                <button
                    className={className}
                    onClick={() => {
                        if (!endScenarioReady) {
                            this.setState({ showWarning: true });
                            return;
                        }
                        endScenario();
                    }}
                >
                    <div>
                        <div>结束剧本</div>
                    </div>
                </button>
                <Modal
                    isOpen={this.state.showWarning}
                    contentLabel="End Scenario"
                    style={this.customStyles}
                >
                    <div>Are you sure you want to end this scenario?</div>
                    <div className="EndScenarioButton--Modal--Button">
                        <button
                            onClick={() =>
                                this.setState({ showWarning: false })
                            }
                        >
                            No
                        </button>
                        <button
                            onClick={() => {
                                this.setState({ showWarning: false });
                                endScenario();
                            }}
                        >
                            Yes
                        </button>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}
