export interface IDocument {
	document: string,
	_id: string;
}

export interface IEmployee {
	_id: string;
	name: string;
	documents: IDocument[];
}

