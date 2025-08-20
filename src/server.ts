import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: '*'
});

const teams = [
    {
        id: 1,
        name: 'McLaren',
        base: 'United Kingdon'
    },
    {
        id: 2,
        name: 'Mercedes',
        base: 'United Kingdon'
    },
    {
        id: 3,
        name: 'Red Bull Racing',
        base: 'United Kingdon'
    }
];

const drivers = [
    {
        id: 1,
        name: 'Max Verstappen',
        teamId: 3
    },
    {
        id: 2,
        name: 'Rubens Barrichello',
        teamId: 2
    },
    {
        id: 3,
        name: 'Lewis Hamilton',
        teamId: 1
    },
    {
        id: 4,
        name: 'Lando Norris',
        teamId: 3
    }
];

server.get('/teams', async (req, res) => {
    res.type('application/json').code(200)

    return teams;
});

server.get('/drivers', async (req, res) => {
    res.type('application/json').code(200);

    return drivers;
});

interface RouteParams {
    id: string
}

server.get<{Params: RouteParams}>('/drivers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const driver = drivers.find(d => d.id === id)

    if (!driver) {
        res.type('application/json').code(404);

        return { message: 'Driver not found!' };
    } else {
        res.type('application/json').code(200);

        return driver;
    }    
});

server.listen({ port: 3333 }, () => {
    console.log('Server iniciando...');
});
