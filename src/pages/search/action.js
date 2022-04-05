function searchQuery(query) {
    return {
        type: 'querySearch',
        search: query
    }
}

export default searchQuery