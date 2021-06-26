
import { ref } from "@vue/reactivity";

export default function (url) {

    const collection = ref([]);

    //CRUD
    //R = Read

    const fetchCollection = async () =>{
        const resp = await fetch(url);
        collection.value = await resp.json();
    }
    
    fetchCollection();

    return{
        collection,
        fetchCollection
    };
}

