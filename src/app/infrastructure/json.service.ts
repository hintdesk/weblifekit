export class JsonService {
    stringify(obj:any) : string {
        var keys = [];
        if (obj){
            for (var key in obj){
                keys.push(key);
            }
        }

        keys.sort();
        var result = {};       
        for (var index in keys)
        {
            key = keys[index];
            result[key] = obj[key];
        }
        return JSON.stringify(result,undefined,4);
    }
}