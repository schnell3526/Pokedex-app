export const getAllPokemon = (url: string) => {
    return new Promise((resolve, reject) => { // resolve関数の引数にすることで成功を表す
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
}