import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationProp = ({ totalPages, onPageUpdate }) => {
    return (
        <div style={{ margin: "2rem auto", textAlign: "center"}}>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                siblingRange={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                totalPages={totalPages}
                onPageChange={(event, data) => onPageUpdate(data.activePage)}
            />
        </div>
    );
};

export default PaginationProp;
