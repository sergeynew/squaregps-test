
export const MarkersStorage = {
    getMarkers,
    saveMarkers,
    deleteMarker
}

function getMarkers () {
    return JSON.parse(localStorage.getItem('map_markers')) ?? []
}

function saveMarkers (markers) {
    localStorage.setItem('map_markers', JSON.stringify(markers))
}

function deleteMarker (id) {
    let markers = getMarkers()
    markers.splice(id, 1)
    saveMarkers(markers);
}