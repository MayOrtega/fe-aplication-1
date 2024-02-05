import { Tasks } from "./Tasks";

export interface Goals {
    id: number;
    name: string;
    tasks: Tasks[];
}