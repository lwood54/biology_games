// shuffle items in any array
export function shuffleArray<T>(array: T[]): T[] {
  // copy array to manipulate
  let arrayCopy = [...array];
  let mixedArray = [];
  // loop through copy until no elements left
  while (arrayCopy.length > 0) {
    let randNum = Math.floor(Math.random() * arrayCopy.length);
    // add removed elements to mixedArray as looping occurs
    mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
  }
  return mixedArray;
};

// check if element has certain class
export const hasClass = (el: HTMLElement, clss: string) => {
  return el.classList.contains(clss);
};

export const getRandomNum = (arrayLength: number): number => {
	return Math.floor(Math.random() * arrayLength)
}

export const transcription = (dnaTemplate: string): string => {
	let codon: string;
	if (dnaTemplate.length === 3) {
		let [b1, b2, b3] = dnaTemplate.split("");
		b1 = baseConversion(b1);
		b2 = baseConversion(b2);
		b3 = baseConversion(b3);
		codon = [b1, b2, b3].join('');
	}
	return codon;
}

export const baseConversion = (b: string): string => {
	switch (b) {
		case "a":
			return "u";
		case "t":
			return "a";
		case "c":
			return "g";
		case "g":
			return "c";
		default:
			return "z";
	}
}

export const translation = (codon: string): string => {
	switch (codon) {
		case "uuu":
		case "uuc":
			return "phe";
		case "uua":
		case "uug":
		case "cuu":
		case "cuc":
		case "cua":
		case "cug":
			return "leu";
		case "auu":
		case "auc":
		case "aua":
			return "ile";
		case "aug":
			return "met";
		case "guu":
		case "guc":
		case "gua":
		case "gug":
			return "val";
		case "ucu":
		case "ucc":
		case "uca":
		case "ucg":
		case "agu":
		case "agc":
			return "ser";
		case "ccu":
		case "ccc":
		case "cca":
		case "ccg":
			return "pro";
		case "acu":
		case "acc":
		case "aca":
		case "acg":
			return "thr";
		case "gcu":
		case "gcc":
		case "gca":
		case "gcg":
			return "ala";
		case "uau":
		case "uac":
			return "tyr";
		case "uaa":
		case "uag":
		case "uga":
			return "stop";
		case "cau":
		case "cac":
			return "his";
		case "caa":
		case "cag":
			return "gln";
		case "aau":
		case "aac":
			return "asn"
		case "aaa":
		case "aag":
			return "lys";
		case "gau":
		case "gac":
			return "asp";
		case "gaa":
		case "gag":
			return "glu";
		case "ugu":
		case "ugc":
			return "cys";
		case "ugg":
			return "trp";
		case "cgu":
		case "cgc":
		case "cga":
		case "cgg":
		case "aga":
		case "agg":
			return "arg";
		case "ggu":
		case "ggc":
		case "gga":
		case "ggg":
			return "gly";
		default:
			return "";
	}
}

export const makeDNAArray = (): string[] => {
	let dnaArray = [];
	let letters = ["a", "t", "c", "g"];
	let newTriplet: string;
	for (let i = 0; i < 4; i++) {
		for (let k = 0; k < 4; k++) {
			for (let j = 0; j < 4; j++) {
				newTriplet = letters[i] + letters[k] + letters[j];
				dnaArray.push(newTriplet);
			}
		}
	}
	return dnaArray;
}