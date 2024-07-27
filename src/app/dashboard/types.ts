export type FoodListType = {
    readonly data?:    Data;
    readonly message?: string;
    readonly rc?:      string;
}

export type Data = {
    readonly food?: Food[];
}

export type Food = {
    readonly foodCal?:  number;
    readonly foodCat?:  string[];
    readonly foodID?:   number;
    readonly foodName?: string;
}
