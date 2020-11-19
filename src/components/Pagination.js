import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationProp = () => {
    return (
        <div style={{ margin: "2rem"}}>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={3}
            />
        </div>
    );
};

export default PaginationProp;
