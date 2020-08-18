import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Card } from "./Card";

import './FutureModal.css';

import sees from "./sees2.wav";
import knows from "./knows2.wav";

class FutureModalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "90px",
                left: "150px",
                right: "150px",
                bottom: "200px",
                padding: "10px 20px",
                overflowY: "hidden",
                // width: "1400px"
            }
        };

        let seqs = {};
        for (let i = 0; i < props.peekingCards.length; i++) {
            seqs[i] = i + 1;
        }

        var audio = null;

        this.state = {
            windowHeight: document.documentElement.clientHeight,
            seq: seqs,
            textChoice: Math.random() >= 0.5
        };
    }

    setSEQ(seq, i) {
        if ((this.props.mode !== -1 && seq < 1) || seq > this.props.peekingCards.length) {
            return;
        }
        let seqs = this.state.seq;
        seqs[i] = seq;
        this.setState({
            seq: seqs
        });
    }

    _updateDimensions = () => {
        this.setState({ windowHeight: document.documentElement.clientHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this._updateDimensions);
        this.audio = new Audio(this.state.textChoice ?  sees : knows);
        console.log(this.audio, this.props.mode);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._updateDimensions);
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
                    <div className="Deck--PlayedCards">
                        {this.props.peekingCards.map((card, i) => {
                            return (
                                <div key={i} className="Future--ListModal--MonsterSelectorContainer">
                                    <Card key={i} name={this.props.peekingDeckName} card={card} />
                                    <div className="PlayerTracker--SEQ--Buttons">
                                        <button
                                            className="PlayerTracker--SEQ--Button"
                                            disabled={this.state.seq[i] === this.props.mode}
                                            onClick={() =>
                                                this.setSEQ(this.state.seq[i] - 1, i)
                                            }
                                        >
                                            -
                                        </button>
                                        <div className="PlayerTracker--SEQ">{this.state.seq[i]}</div>
                                        <button
                                            className="PlayerTracker--SEQ--Button"
                                            disabled={this.state.seq[i] === this.props.peekingCards.length}
                                            onClick={event => {
                                                this.setSEQ(this.state.seq[i] + 1, i);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className="Future--ListModal--Button"
                        onClick={() => 
                            {
                                this.audio.play();
                                let that = this;
                                setTimeout(function(){
                                    that.props.submitAction(that.state.seq, that.props.mode);
                                    that.props.onClose();
                                }, this.state.textChoice ? 4000 : 3000);
                            }
                        }
                    >
                        {this.state.textChoice ? "观今夜天象，知天下大事!" : "知天易，逆天难!"}
                    </button>
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
