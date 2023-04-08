enum  MachineType {
    Cable,
    FreeWeight,
    PlateLoaded,
    Cardio
}

enum  MachineStatus {
    Open,
    Taken,
    Maintenance
}

type Machine = {
    id: string,
    width: number,
    height: number,
    x_pos: number,
    y_pos: number,
    rotation: number,
    name: string,
    gym_id:  string,
    type: MachineType,
    model_number: string,
    status: MachineStatus
}

export {MachineType, MachineStatus};
export default Machine;