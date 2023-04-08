import Gym from "./types/gym"
import Map from "./types/map"
import Machine, { MachineType, MachineStatus } from "./types/machine"

export const TestMap: Map = {
    id: "abc123",
    items: [
        {
            id: "machine_16",
            name: "Lat Pulldown",
            x_pos: 495,
            y_pos: 760,
            height: 30,
            width: 80,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_0",
            name: "Deadlift Platform",
            x_pos: 10,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,

            type: MachineType.FreeWeight,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_1",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 70,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_2",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 130,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_3",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 190,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_4",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 250,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_5",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 310,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_6",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 370,
            y_pos: 10,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_10",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 10,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_11",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 70,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_12",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 130,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_13",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 190,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_14",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 250,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_15",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 310,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 370,
            y_pos: 100,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_10",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 10,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_11",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 70,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_12",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 130,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_13",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 190,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_14",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 250,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,

            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_15",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 310,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,

            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Power Rack",
            type: MachineType.FreeWeight,

            x_pos: 370,
            y_pos: 160,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,

            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Smith Machine",
            x_pos: 10,
            y_pos: 250,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Chest Press",
            x_pos: 10,
            y_pos: 303,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Chest Press",
            x_pos: 10,
            y_pos: 356,
            height: 50,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Extension",
            x_pos: 70,
            y_pos: 270,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_16",
            name: "Shoulder Press",
            x_pos: 70,
            y_pos: 316,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_16",
            name: "Chest Press",
            x_pos: 70,
            y_pos: 365,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Curl",
            x_pos: 130,
            y_pos: 250,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Lat Pulldown",
            x_pos: 130,
            y_pos: 308,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Shoulder Press",
            x_pos: 130,
            y_pos: 365,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Calf Raise",
            x_pos: 190,
            y_pos: 250,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.PlateLoaded,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Tri Ext",
            x_pos: 190,
            y_pos: 365,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Bicep Curl",
            x_pos: 250,
            y_pos: 365,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_16",
            name: "Leg Press",
            x_pos: 210,
            y_pos: 315,
            height: 40,
            width: 70,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_16",
            name: "Upright Row",
            x_pos: 250,
            y_pos: 250,
            height: 60,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Press",
            x_pos: 310,
            y_pos: 250,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Chest Press",
            x_pos: 300,
            y_pos: 315,
            height: 40,
            width: 60,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Shrug",
            x_pos: 370,
            y_pos: 315,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Hack Press",
            x_pos: 370,
            y_pos: 250,
            height: 60,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.PlateLoaded,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Hack Squat",
            x_pos: 460,
            y_pos: 250,
            height: 60,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Press",
            x_pos: 520,
            y_pos: 250,
            height: 60,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Delt Raise",
            x_pos: 430,
            y_pos: 315,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Rows",
            x_pos: 430,
            y_pos: 365,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Lat Pulldown",
            x_pos: 370,
            y_pos: 365,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Chest Press",
            x_pos: 10,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Chest Fly",
            x_pos: 70,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Shoulder Press",
            x_pos: 130,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Delt Raises",
            x_pos: 190,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Preacher Curl",
            x_pos: 265,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Tri Ext",
            x_pos: 325,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Back Ext",
            x_pos: 385,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Ab Curl",
            x_pos: 445,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Ab Curl",
            x_pos: 505,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Calf Raises",
            x_pos: 10,
            y_pos: 495,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Hip Abduction",
            x_pos: 70,
            y_pos: 495,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Hip Abduction",
            x_pos: 110,
            y_pos: 495,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Hip Adduction",
            x_pos: 150,
            y_pos: 495,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Hip Adduction",
            x_pos: 190,
            y_pos: 495,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Ext",
            x_pos: 230,
            y_pos: 490,
            height: 40,
            width: 40,
            rotation: -15,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Ext",
            x_pos: 285,
            y_pos: 490,
            height: 40,
            width: 40,
            rotation: 15,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Curl",
            x_pos: 335,
            y_pos: 495,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Curl",
            x_pos: 395,
            y_pos: 495,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Pres",
            x_pos: 455,
            y_pos: 495,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Leg Press",
            x_pos: 515,
            y_pos: 495,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Assisted Dip",
            x_pos: 625,
            y_pos: 495,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Assisted Dip",
            x_pos: 625,
            y_pos: 445,
            height: 40,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Bike Elliptical",
            x_pos: 10,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 10,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 41,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 72,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 103,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 134,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 165,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 196,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 227,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 258,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 289,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 320,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 351,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 382,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 413,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 444,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Bike",
            x_pos: 444,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Bike",
            x_pos: 413,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Bike",
            x_pos: 382,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Bike",
            x_pos: 351,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Sitting Bike",
            x_pos: 320,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Sitting Bike",
            x_pos: 289,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Sitting Bike",
            x_pos: 258,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Sitting Bike",
            x_pos: 227,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Stair Master",
            x_pos: 196,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Row",
            x_pos: 165,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Row",
            x_pos: 134,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 103,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 72,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 41,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 475,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Stair Master",
            x_pos: 475,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 506,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Stair Master",
            x_pos: 537,
            y_pos: 590,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },
        {
            id: "machine_16",
            name: "Elliptical",
            x_pos: 537,
            y_pos: 635,
            height: 40,
            width: 28,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 10,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 45,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 80,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 115,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 150,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 185,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Arm Spin",
            x_pos: 220,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 255,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 290,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 325,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 360,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 395,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Treadmill",
            x_pos: 430,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cardio,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Tricep Pulldown",
            x_pos: 500,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Lat Pulldown",
            x_pos: 495,
            y_pos: 760,
            height: 30,
            width: 80,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Cable",
            x_pos: 540,
            y_pos: 720,
            height: 40,
            width: 30,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Cable",
            x_pos: 625,
            y_pos: 585,
            height: 25,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Cable",
            x_pos: 625,
            y_pos: 615,
            height: 25,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Cable",
            x_pos: 625,
            y_pos: 645,
            height: 25,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

        {
            id: "machine_16",
            name: "Cable",
            x_pos: 625,
            y_pos: 675,
            height: 25,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },


        {
            id: "machine_16",
            name: "Cable",
            x_pos: 625,
            y_pos: 740,
            height: 25,
            width: 50,
            rotation: 0,
            status: MachineStatus.Open,
            type: MachineType.Cable,
            gym_id: "abc123",
            model_number: "xyz456"
        },

    ]

}

export const Gyms: Gym[] = [
    {
        id: "abc123",
        name: "1234 Market Street Gym",
        lat: 0,
        lng: 0,
        openTime: 9,
        closeTime: 10.75,
        machineUse: .1
    },
    {
        id: "xyz456",
        name: "Retro Fitness: Spring Garden",
        lat: 0,
        lng: 0,
        openTime: 6,
        closeTime: 20.5,
        machineUse: .4
    },
    {
        id: "123abc",
        name: "City Fitness: Market East",
        lat: 0,
        lng: 0,
        openTime: 9,
        closeTime: 22,
        machineUse: .8
    },
    {
        id: "123abc",
        name: "Planet Fitness: Market East",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .8
    },
    {
        id: "septa",
        name: "Ellsworth-Federal Gym",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .1
    },
    {
        id: "septa",
        name: "Frankford Fitness Club",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .1
    },
    {
        id: "septa",
        name: "Norristown Community Gym",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .1
    },
    {
        id: "septa",
        name: "Race-Vine Gym",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .1
    },
    {
        id: "septa",
        name: "Walnut-Locust Gym",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .1
    },
    {
        id: "septa",
        name: "30th Street Gym",
        lat: 0,
        lng: 0,
        openTime: 0,
        closeTime: 0,
        machineUse: .1
    }
]