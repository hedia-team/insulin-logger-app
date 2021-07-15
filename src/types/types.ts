export type Token = string | null;

export interface ILogbook {
	timestamp: string;
	insulinDose: number;
	bloodGlucose: number;
}
