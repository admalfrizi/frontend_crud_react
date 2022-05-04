/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export class Edit extends Component {
  render() {
    return (
      <div>
        <EditMenu />
      </div>
    )
  }
}

const EditMenu = () => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDesc] = useState('');
  const history = useNavigate();

  const {id} = useParams();

  const updateProduk = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/products/${id}`, {
      nama: nama,
      harga: harga,
      rating: rating,
      description: description
    });
    history("/");
  }

  useEffect(() => {
    getIDProduct();
  }, [id]);

  const getIDProduct = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setNama(response.data.products.nama);
    setHarga(response.data.products.harga);
    setRating(response.data.products.rating);
    setDesc(response.data.products.description);
  }

  return(
    <div className='mt-3 mx-4'>
      <form onSubmit={updateProduk}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Nama Produk</label>
          <input type="text" class="form-control" value={nama} placeholder="Samsung" onChange={(e) => setNama(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Harga</label>
          <input type="text" class="form-control" value={harga} placeholder="3.000.000" onChange={(e) => setHarga(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Rating</label>
          <input type="text" class="form-control" value={rating} placeholder="Isi Penilaiannya" onChange={(e) => setRating(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Deskripsi</label>
          <textarea class="form-control" value={description} placeholder="Isi Penjelasan Produk" onChange={(e) => setDesc(e.target.value)}/>
        </div>
        <div className='d-grid gap-2'>
          <button class="btn btn-primary p-2" type="submit">Update Data</button>
        </div>
      </form>
    </div>
  )
}

export default Edit