import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { baseDato } from "../../Firebase/firebaseConfig";
  import { typesProducts } from "../types/types";

    // ===========> add <=============
  
  export const addAsync = (product) => {
    return (dispatch) => {
      addDoc(collection(baseDato, "productosAmazonas"), product)
        .then(resp => {
          dispatch(addSync(product));
        })
        .catch(error => {
          console.warn(error);
        });
    };
  };
  
  export const addSync = (product) => {
    return {
      type: typesProducts.add,
      payload: product,
    };
  };

  // ===========> List <=============
  
  export const listAsync = () => {
    return async (dispatch) => {
      const getCollections = await getDocs(collection(baseDato, "productosAmazonas"));
      const products = [];
      getCollections.forEach((doc) => {
        products.push({
          ...doc.data(),
        });
      });
      dispatch(listSync(products));
    };
  };
  
  export const listSync = (products) => {
    return {
      type: typesProducts.list,
      payload: products,
    };
  };
  
 
  // ===========> Edit <=============
  
  export const editAsync = (codigo, product) => {
    console.log(codigo, product);
    return async (dispatch) => {
      const getCollection = collection(baseDato, "productosAmazonas");
      const q = query(getCollection, where("id", "==", codigo));
      const getDataQuery = await getDocs(q);
      let id;
      getDataQuery.forEach( async(doc) => {
        id = doc.id;
      });
      console.log(getDataQuery);
      console.log(id);
      const documentRef = doc(baseDato, "productosAmazonas", id);
      await updateDoc(documentRef, product)
        .then(resp => {
          dispatch(editSync(product));
          dispatch(listAsync());
          console.log(resp);
        })
        .catch(error => {
          console.log(error);
        });
    };
  };
  
  export const editSync = (product) => {
    return {
      type: typesProducts.editSync,
      payload: product,
    };
  };
  
  // ===========> Delete <=============
  
  export const deleteAsync = (codigo) => {
    return async (dispatch) => {
      const getCollections = collection(baseDato, "productosAmazonas");
      const q = query(getCollections, where("id", "==", codigo));
      const getDataQuery = await getDocs(q);
      console.log(getDataQuery);
      getDataQuery.forEach((docu => {
        deleteDoc(doc(baseDato, "productosAmazonas", docu.id));
      }));
      dispatch(deleteSync(codigo));
      dispatch(listAsync());
    };
  };
  
  export const deleteSync = (codigo) => {
    return {
      type: typesProducts.delete,
      payload: codigo,
    };
  };
  
  