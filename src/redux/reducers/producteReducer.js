/** @format */

import {
  CREATE_PRODUCTE,
  DELETE_PRODUCTE,
  EDIT_PRODUCTE,
  GET_ALL_PRODUCTE,
  GET_ERROR,
  GET_Limit_PRODUCTE,
  GET_PRODUCTE_DETALIS,
  GET_PRODUCTES_BY_CATEGORY,
  GET_SIMILAR_PRODUCTES,
} from "./type";

const inatioal = {
  editProducte: [],
  producte: [],
  producteLimit: [],
  OneProducte: [],
  deleteProducte: [],
  SimilarProductes: [],
  allProduct: [],
  productsByCategory: [],
  lodaing: true,
};

const producteReducer = (state = inatioal, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTE:
      return {
        ...state,
        allProduct: action.paylode,
        lodaing: false,
      };
    case GET_Limit_PRODUCTE:
      return {
        ...state,
        producteLimit: action.paylode,
        lodaing: false,
      };
    case GET_SIMILAR_PRODUCTES:
      return {
        ...state,
        SimilarProductes: action.paylode,
        lodaing: false,
      };
    case GET_PRODUCTE_DETALIS:
      return {
        ...state,
        OneProducte: action.paylode,
        lodaing: false,
      };
    case CREATE_PRODUCTE:
      return {
        producte: action.paylode,
        lodaing: false,
      };
    case EDIT_PRODUCTE:
      return {
        ...state,
        editProducte: action.payload,
        lodaing: false,
      };
    case DELETE_PRODUCTE:
      return {
        deleteProducte: action.paylode,
        lodaing: false,
      };
    case GET_PRODUCTES_BY_CATEGORY:
      return {
        productsByCategory: action.paylode,
        lodaing: false,
      };
    case GET_ERROR:
      return {
        producte: action.paylode,
        lodaing: true,
      };
    default:
      return state;
  }
};

export default producteReducer;
