// helper functions to format database response
function rowsOrEmptyList(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

function msgUpdatedOrError(rows) {
    if (!rows) {
        return "Error in updating employee";
    }
    return "Employee updated successfully";
}

module.exports = {
    rowsOrEmptyList,
    msgUpdatedOrError
}