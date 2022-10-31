export function getAllPokemon(
    url: string
): Promise<any> {
    return new Promise((resolve, reject) => { // resolve関数の引数にすることで成功を表す
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
}

export const getPokemon = (url: string) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            resolve(data);
        });
    });
};