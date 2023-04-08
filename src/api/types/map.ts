type Map = {
    id: string,
    items: MapItem[]
}

type MapItem = {
    id: string,
    width: number,
    height: number,
    x_pos: number,
    y_pos: number,
    rotation: number,
    name: string
}

export {MapItem};
export default Map;