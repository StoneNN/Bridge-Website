import React from 'react';
import { Table } from 'antd';

const ResultDataTable = () => {

    const columns = [{
        title: "对阵结果",
        children: [{
            title: "桌",
            dataIndex: "table",
        }, {
            title: "完成",
            dataIndex: "complete"
        }, {
            title: "主队",
            dataIndex: "host",
        }, {
            title: "客队",
            dataIndex: "guest",
        }, {
            title: "IMPS",
            children: [{
                title: "主队",
                dataIndex: "hostimps",
            }, {
                title: "客队",
                dataIndex: "guestimps",
            }]
        }, {
            title: "VPs",
            children: [{
                title: "主队",
                dataIndex: "hostvps",
            }, {
                title: "客队",
                dataIndex: "guestvps",
            }]
        }]
    }]

    return (
        <Table
            columns={columns}
            dataSource={[]}
            bordered
        />
    )
}

export default ResultDataTable;