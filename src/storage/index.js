const STORAGE_KEY = 'mall';

/**
 * 封装sessionStorage
 */
export default {
    setItem(key, value, module) {

        if (module) {
            let data = this.getItem(module);
            data[key] = value;
            console.log(data);
            this.setItem(module, data);
        } else {
            let data = this.getAll();
            data[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }


    },
    getItem(key, module) {
        let data = this.getAll();

        if (module) {
            let data = this.getItem(module);
            if (data) return data[key];
        }
        return data[key];
    },
    getAll() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
    },
    del(key, module) {
        let data = this.getAll();
        if (module) {
            data[module][key] && delete data[module][key]
        } else {
            data[key] && delete data[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
}