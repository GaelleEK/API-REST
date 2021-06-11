import { database } from './database';

interface IProject {
    id: number;
    title: string;
};

const collection = database.projects;

export const add = (project: IProject): IProject[] => {
    return [...collection, project]
};
export const getAll = (): IProject[] => {
    return collection;
};
export const getById = (id: number): IProject[] => {
    return collection.filter(project => project.id === id)
};