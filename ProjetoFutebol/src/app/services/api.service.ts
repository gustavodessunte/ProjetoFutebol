import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

const urlApi = 'https://api.api-futebol.com.br/v1/';
const apiKeyTest = 'test_c9e052575e211e42cdf400a7b3312c'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  async getCampeonatos() {
    const axiosInstance = axios.create({
      baseURL: "https://api.api-futebol.com.br/v1/",
      headers: {
        Authorization: `Bearer ${apiKeyTest}`,
      },
    });

    const campeonatos = await axiosInstance.get("/campeonatos");

    return campeonatos;
  }

  async getCampeonato(id: number) {
    const axiosInstance = axios.create({
      baseURL: "https://api.api-futebol.com.br/v1/",
      headers: {
        Authorization: `Bearer ${apiKeyTest}`,
      },
    });

    const campeonato = await axiosInstance.get(`/campeonatos/${id}`);

    return campeonato;
  }
  
}
