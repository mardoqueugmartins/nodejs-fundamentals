const loadProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ocorreu um erro")
        }, 3000);
    })
};

const loadCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{id: "1", name: "Notebooks"}])
        }, 3000);
    })
};

const loadUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{id: "1", name: "Mardoqueu Martins", age: "30"}])
        }, 3000);
    })
};

const init = async () => {
    // const products = await loadProducts();
    // const categories = await loadCategories();
    // const users = await loadUsers();
   try {
    //Promise.all() - Se uma de erro, todo resultado será de erro.
    // const [products, categories, users] = await Promise.all([loadProducts(), loadCategories(), loadUsers()]);

    //Promise.all() - Se uma de erro, ele acusa o erro, mas continua.
    const results = await Promise.allSettled([loadProducts(), loadCategories(), loadUsers()]);

    console.log(results);
   } catch(error) {
        console.log(error);
   }
};

init();