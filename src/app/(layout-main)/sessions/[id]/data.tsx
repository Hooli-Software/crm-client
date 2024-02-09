function getWorkload(work: number, rest: number): number {
    const value = Math.round(work/(work+rest)*100)

    if (isNaN(value)) { return 100 }

    return value
}


export const data = [
    {
        "name": "12:00",
        "uv": getWorkload(0, 0),
        "pv": 0,
        "amt": 2400
    },
    {
        "name": "12:30",
        "uv": getWorkload(30, 0),
        "pv": 0,
        "amt": 2210
    },
    {
        "name": "13:00",
        "uv": getWorkload(50, 10),
        "pv": 0,
        "amt": 2290
    },
    {
        "name": "13:30",
        "uv": getWorkload(70, 20),
        "pv": 0,
        "amt": 2000
    },
    {
        "name": "14:00",
        "uv": getWorkload(90, 30),
        "pv": 0,
        "amt": 2181
    },
    {
        "name": "14:30",
        "uv": getWorkload(110, 40),
        "pv": 0,
        "amt": 2500
    },
    {
        "name": "15:00",
        "uv": getWorkload(130, 50),
        "pv": 0,
        "amt": 2100
    }
]