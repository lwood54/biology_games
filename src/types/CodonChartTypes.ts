export interface Score {
	numAttempts: number;
	numCorrect: number;
}

export interface CodonMatch {
	codon: string;
	amino_acid: string;
}