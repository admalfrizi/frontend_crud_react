import axios from 'axios';
import React, { Component, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

export class Create extends Component {
  render() {
    return (
      <div>
        <CreateMenu />
      </div>
    )
  }
}

const CreateMenu = () => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDesc] = useState('');
  const history = useNavigate();


  const makeProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products', {
      nama: nama,
      harga: harga,
      rating: rating,
      description: description
    });
    history("/")
  }

  return (
    <div className='mt-3 mx-4'>
      <form onSubmit={makeProduct}>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Nama Produk</label>
          <input type="text" className="form-control" value={nama} placeholder="Samsung" onChange={(e) => setNama(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Harga</label>
          <input type="text" className="form-control" value={harga} placeholder="3.000.000" onChange={(e) => setHarga(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Rating</label>
          <input type="text" className="form-control" value={rating} placeholder="Isi Penilaiannya" onChange={(e) => setRating(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Deskripsi</label>
          <textarea className="form-control" value={description} placeholder="Isi Penjelasan Produk" onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className='d-grid gap-2'>
          <button className="btn btn-primary p-2" type="submit">Create Data</button>
        </div>
      </form>
    </div>
  )
}

export default Create