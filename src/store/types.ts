export type Attribute = {key: string, value: string};

export type AttributeChanges = {key?: string, value?: string};

export type Attributes = Array<Attribute>;

export type Person = {
    id: string,
    attributes: Attributes
};

export interface StorageState {
    persons: Array<Person>,
    current: Person | null
}