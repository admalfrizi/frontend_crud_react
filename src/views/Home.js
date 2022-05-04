import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import './Home.css'
import { numberFormat } from '../component/numberFormat';

const ListProduk = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduk();
    }, []);

    const getProduk = async () => {
       const request = await axios.get("http://localhost:5000/products/");
       setProducts(request.data.products);
    }

    const deleteProduk = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProduk();
    }
    return (
        <div class="container mt-4">
            <Helmet>
                <title>
                    Produk List
                </title>
            </Helmet>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nama Produk</th>
                                        <th>Harga</th>
                                        <th>Rating</th>
                                        <th>Deskripsi</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((result, index) => (
                                        <tr key={index}>
                                            <td>{result.id}</td>
                                            <td>{result.nama}</td>
                                            <td>{numberFormat(result.harga)}</td>
                                            <td>{result.rating}</td>
                                            <td>{result.description}</td>
                                            <td>
                                                <Link to={`/edit/${result.id}`}>
                                                    <div className='btn btn-primary'>Edit</div>
                                                </Link>
                                                <button type='button' className='btn btn-danger mx-2' onClick={() => deleteProduk(products.id)}>Hapus</button>
                                                <Link to={`/products/${result.id}`} >
                                                    <div className='btn detail'>
                                                        Detail Produk
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export class Home extends Component {
    render() {
        return (
            <ListProduk />
        )
    }
}

export default Home