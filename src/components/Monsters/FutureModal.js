import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import './FutureModal.css';

class FutureModalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: '60px',
                left: '500px',
                right: 'auto',
                bottom: '60px',
                padding: '10px 20px',
                overflowY: 'hidden',
                width: '600px'
            }
        };

        this.state = {
            windowHeight: document.documentElement.clientHeight
        };
    }

    _updateDimensions = () => {
        this.setState({ windowHeight: document.documentElement.clientHeight });
    };

    componentDidMount() {
        window.addEventListener('resize', this._updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._updateDimensions);
    }

    render() {
        return (
            <Modal
                isOpen
                onRequestClose={() => this.props.onClose()}
                contentLabel="Future"
                style={this.customStyles}
            >
                <div className="Future--ListModal">
                    <div className="Future--ListModal--MonsterSelectorContainer">
                        <button className="Future--ListModal--Button"
                            onClick={() => 
                                {
                                    let test = Math.random();
                                    this.props.submitAction(test)
                                    console.log('FutureModal', test)
                                    this.props.onClose()
                                }
                            }
                        >
                            {Math.random() >= 0.5 ? "观今夜天象，知天下大事!" : "知天易，逆天难!"}
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export const FutureModal = connect(
    state => {
        return {
        };
    },
    (dispatch, ownProps) => {
        return {
        };
    }
)(FutureModalComponent);
