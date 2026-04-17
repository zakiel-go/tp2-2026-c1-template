const mockUsers = [
    { id: "1", name: "Ana Perez", email: "ana.perez@mail.com", age: 22, city: "Córdoba" },
    { id: "2", name: "Luis Gomez", email: "luis.gomez@mail.com", age: 25, city: "Rosario" },
    { id: "3", name: "Mica Suarez", email: "mica.suarez@mail.com", age: 21, city: "Mendoza" },
    { id: "4", name: "Tomas Rios", email: "tomas.rios@mail.com", age: 24, city: "La Plata" }
];

export function findAllUsers() {
    return mockUsers;
}