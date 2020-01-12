import React from 'react';
import * as classNames from 'classnames';

import './HPTracker.css';

export function HPTrackerFunction({ monsterData }) {
    let monster = monsterData;
    const maxHP = monster.maxHP;
    const currentHP = monster.currentHP;
    return (
        <div className={classNames('HPTracker--Container')}>
            {maxHP > 0 && (
                <div className="HPTracker--Bars">
                    {new Array(maxHP).fill().map((_, i) => {
                        const hp = i + 1;
                        return (
                            <div
                                key={hp}
                                className={classNames({
                                    'HPTracker--HP': true,
                                    'HPTracker--HP--Active': hp <= currentHP,
                                    'HPTracker--HP--White': false
                                })}
                            >
                                {hp}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
