export interface Genre {
    _id: string;
    name: string;
}

export interface Painting {
    _id: string;
    title: string;
    year: number;
    description: string;
    artist: string;
    genre: Genre;
    url: string;
}

export interface User {
    _id: string;
    login: string;
    password: string;
}
