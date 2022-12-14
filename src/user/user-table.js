import React from "react";
import Table from "../commons/tables/table";


const columns = [
    {
        Header: 'IdUser',
        accessor: 'idUser',
    },
    {
        Header: 'IdDevice',
        accessor: 'idDevice',
    },
    {
        Header: 'Address',
        accessor: 'address',
    },
 

];

const filters = [
    {
        accessor: 'IdUsers',
    }
];

class UserTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData
        };
    }

    render() {
        return (
            <Table
                data={this.state.tableData}
                columns={columns}
                search={filters}
                pageSize={5}
            />
        )
    }
}

export default UserTable;