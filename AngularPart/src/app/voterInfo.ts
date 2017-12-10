import {Election} from './election';

export class VoterInfo{
    contest: Contest[];
    election: Election[];
    kind:string;
    ocdDivisionId: string; 
}
export class Contest{
    id: number;
    electionDay:string;
    ocdDivisionId: string; 
}