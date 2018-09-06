//成绩以及排名
//LSY
//2018-9-6

import React from 'react';
import ResultDataTable from '../../../../component/ResultDataTable';
import styles from './index.css';

export default props => {
    return (
        <div>
            <div style={{ textAlign: 'center' }} >
                <h2>公开团体赛 排位赛第1轮</h2>
            </div>
            <div>
                <div>
                    <ResultDataTable />
                </div>
            </div>
        </div>
    )
}