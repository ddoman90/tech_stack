export const selectLibrary = (libraryId) => {
    // this action will dispatched automatically
    return {
        type: 'select_library',
        payload: libraryId
    }
}
